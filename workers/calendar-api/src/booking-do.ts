interface Env {
  ALLOWED_ORIGIN: string;
  BTCPAY_WEBHOOK_SECRET: string;
}

const PENDING_EXPIRY_MS = 35 * 60 * 1000; // 35 minutes

export class BookingDO implements DurableObject {
  private state: DurableObjectState;
  private sql: SqlStorage;

  constructor(state: DurableObjectState, _env: Env) {
    this.state = state;
    this.sql = state.storage.sql;

    this.state.blockConcurrencyWhile(async () => {
      this.sql.exec(`
        CREATE TABLE IF NOT EXISTS events (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT DEFAULT '',
          start TEXT NOT NULL,
          end TEXT NOT NULL,
          host_email TEXT NOT NULL,
          host_nostr_pubkey TEXT,
          is_remote INTEGER DEFAULT 0,
          meeting_url TEXT,
          extra_persons INTEGER DEFAULT 0,
          is_whole_day INTEGER DEFAULT 0,
          amount REAL NOT NULL,
          status TEXT DEFAULT 'pending_payment',
          btcpay_invoice_id TEXT,
          created_at TEXT DEFAULT (datetime('now')),
          updated_at TEXT DEFAULT (datetime('now'))
        )
      `);
    });
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    try {
      if (method === "GET" && path === "/events") {
        return this.listEvents(url);
      }
      if (method === "POST" && path === "/events") {
        return this.createEvent(request);
      }
      if (method === "PATCH" && path.startsWith("/events/")) {
        const id = path.split("/events/")[1];
        return this.updateEvent(id, request);
      }
      if (method === "POST" && path === "/webhook/btcpay") {
        return this.handleWebhook(request);
      }

      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || "Internal error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }

  private listEvents(url: URL): Response {
    const start = url.searchParams.get("start");
    const end = url.searchParams.get("end");

    let rows;
    if (start && end) {
      rows = this.sql
        .exec(
          `SELECT * FROM events
           WHERE end > ? AND start < ?
           AND status IN ('confirmed', 'processing', 'pending_payment')
           ORDER BY start ASC`,
          start,
          end
        )
        .toArray();
    } else {
      rows = this.sql
        .exec(
          `SELECT * FROM events
           WHERE status IN ('confirmed', 'processing', 'pending_payment')
           ORDER BY start ASC
           LIMIT 200`
        )
        .toArray();
    }

    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" },
    });
  }

  private async createEvent(request: Request): Promise<Response> {
    const body = await request.json() as any;

    const {
      title,
      description,
      start,
      end,
      host_email,
      host_nostr_pubkey,
      is_remote,
      meeting_url,
      extra_persons,
      is_whole_day,
      amount,
    } = body;

    if (!title || !start || !end || !host_email || amount == null) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Atomic double-booking check (single DO = serialized)
    const overlapping = this.sql
      .exec(
        `SELECT id FROM events
         WHERE end > ? AND start < ?
         AND status IN ('confirmed', 'processing', 'pending_payment')
         LIMIT 1`,
        start,
        end
      )
      .toArray();

    if (overlapping.length > 0) {
      return new Response(
        JSON.stringify({
          error: "Tento cas je uz rezervovany.",
          conflicting: overlapping[0].id,
        }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    const id = crypto.randomUUID();

    this.sql.exec(
      `INSERT INTO events
       (id, title, description, start, end, host_email, host_nostr_pubkey,
        is_remote, meeting_url, extra_persons, is_whole_day, amount, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending_payment')`,
      id,
      title,
      description || "",
      start,
      end,
      host_email,
      host_nostr_pubkey || null,
      is_remote ? 1 : 0,
      meeting_url || null,
      extra_persons || 0,
      is_whole_day ? 1 : 0,
      amount
    );

    // Set alarm for auto-expiry
    await this.state.storage.setAlarm(Date.now() + PENDING_EXPIRY_MS);

    return new Response(JSON.stringify({ id, status: "pending_payment" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }

  private async updateEvent(
    id: string,
    request: Request
  ): Promise<Response> {
    const body = await request.json() as any;

    const existing = this.sql
      .exec(`SELECT id FROM events WHERE id = ?`, id)
      .toArray();

    if (existing.length === 0) {
      return new Response(
        JSON.stringify({ error: "Event not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const updates: string[] = [];
    const values: any[] = [];

    if (body.status) {
      updates.push("status = ?");
      values.push(body.status);
    }
    if (body.btcpay_invoice_id) {
      updates.push("btcpay_invoice_id = ?");
      values.push(body.btcpay_invoice_id);
    }

    if (updates.length === 0) {
      return new Response(
        JSON.stringify({ error: "No fields to update" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    updates.push("updated_at = datetime('now')");
    values.push(id);

    this.sql.exec(
      `UPDATE events SET ${updates.join(", ")} WHERE id = ?`,
      ...values
    );

    return new Response(JSON.stringify({ id, updated: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  private async handleWebhook(request: Request): Promise<Response> {
    const body = await request.json() as any;
    const type = body.type;
    const invoiceId = body.invoiceId;

    if (!invoiceId) {
      return new Response(
        JSON.stringify({ error: "Missing invoiceId" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let newStatus: string | null = null;

    switch (type) {
      case "InvoiceProcessing":
        newStatus = "processing";
        break;
      case "InvoiceSettled":
        newStatus = "confirmed";
        break;
      case "InvoiceExpired":
      case "InvoiceInvalid":
        newStatus = "expired";
        break;
      default:
        return new Response(JSON.stringify({ ignored: true }), {
          headers: { "Content-Type": "application/json" },
        });
    }

    this.sql.exec(
      `UPDATE events
       SET status = ?, updated_at = datetime('now')
       WHERE btcpay_invoice_id = ?`,
      newStatus,
      invoiceId
    );

    return new Response(JSON.stringify({ status: newStatus }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  async alarm(): Promise<void> {
    // Expire pending_payment events older than PENDING_EXPIRY_MS
    const cutoff = new Date(Date.now() - PENDING_EXPIRY_MS).toISOString();

    this.sql.exec(
      `UPDATE events
       SET status = 'expired', updated_at = datetime('now')
       WHERE status = 'pending_payment'
       AND created_at < ?`,
      cutoff
    );

    // If there are still pending events, schedule another alarm
    const pending = this.sql
      .exec(
        `SELECT created_at FROM events
         WHERE status = 'pending_payment'
         ORDER BY created_at ASC LIMIT 1`
      )
      .toArray();

    if (pending.length > 0) {
      const createdAt = new Date(pending[0].created_at as string).getTime();
      const nextAlarm = createdAt + PENDING_EXPIRY_MS;
      await this.state.storage.setAlarm(
        Math.max(nextAlarm, Date.now() + 60_000)
      );
    }
  }
}
