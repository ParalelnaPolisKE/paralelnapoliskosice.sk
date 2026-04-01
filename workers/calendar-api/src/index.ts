export { BookingDO } from "./booking-do";

interface Env {
  BOOKING: DurableObjectNamespace;
  ALLOWED_ORIGIN: string;
  BTCPAY_WEBHOOK_SECRET: string;
}

const ALLOWED_ORIGINS = [
  "https://www.paralelnapoliskosice.sk",
  "http://localhost:4321",
  "http://localhost:3000",
];

function getCorsOrigin(request: Request, env: Env): string {
  const origin = request.headers.get("Origin") || "";
  const allowed = [env.ALLOWED_ORIGIN, ...ALLOWED_ORIGINS];
  if (allowed.includes(origin)) return origin;
  return env.ALLOWED_ORIGIN;
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

async function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  const computed =
    "sha256=" +
    Array.from(new Uint8Array(sig))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  return computed === signature;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const cors = corsHeaders(getCorsOrigin(request, env));

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    // Route to the single Durable Object instance
    const id = env.BOOKING.idFromName("singleton");
    const stub = env.BOOKING.get(id);

    const path = url.pathname;

    // Webhook — verify signature before forwarding
    if (path === "/webhook/btcpay" && request.method === "POST") {
      const body = await request.text();
      const signature = request.headers.get("BTCPay-Sig") || "";

      if (!env.BTCPAY_WEBHOOK_SECRET) {
        return new Response(
          JSON.stringify({ error: "Webhook secret not configured" }),
          { status: 500, headers: { ...cors, "Content-Type": "application/json" } }
        );
      }

      const valid = await verifyWebhookSignature(
        body,
        signature,
        env.BTCPAY_WEBHOOK_SECRET
      );
      if (!valid) {
        return new Response(
          JSON.stringify({ error: "Invalid signature" }),
          { status: 401, headers: { ...cors, "Content-Type": "application/json" } }
        );
      }

      // Forward to DO with the raw body
      const doReq = new Request(request.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const doRes = await stub.fetch(doReq);
      return new Response(doRes.body, {
        status: doRes.status,
        headers: { ...Object.fromEntries(doRes.headers), ...cors },
      });
    }

    // All other routes — proxy to DO
    const doRes = await stub.fetch(request);
    return new Response(doRes.body, {
      status: doRes.status,
      headers: { ...Object.fromEntries(doRes.headers), ...cors },
    });
  },
};
