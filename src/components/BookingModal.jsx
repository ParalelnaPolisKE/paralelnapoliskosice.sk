import { useState, useMemo } from "react";
import { calculatePrice } from "../lib/pricing.js";
import pricing from "../data/pricing.json";

function formatTime(date) {
  return date.toLocaleTimeString("sk-SK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatDate(date) {
  return date.toLocaleDateString("sk-SK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BookingModal({
  start,
  end,
  onClose,
  onComplete,
  calendarApiUrl,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    hostEmail: "",
    hostNostrPubkey: "",
    isRemote: false,
    meetingUrl: "",
    extraPersons: 0,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const durationHours = (end - start) / (1000 * 60 * 60);
  const dayRates = pricing.rates[String(start.getDay())];
  const isWholeDay =
    start.getHours() === pricing.availableHours.start &&
    end.getHours() === pricing.availableHours.end;

  const priceResult = useMemo(
    () => calculatePrice(start, end, form.extraPersons, isWholeDay),
    [start, end, form.extraPersons, isWholeDay]
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // 1. Create event in CF Worker
      const eventRes = await fetch(`${calendarApiUrl}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          start: start.toISOString(),
          end: end.toISOString(),
          host_email: form.hostEmail,
          host_nostr_pubkey: form.hostNostrPubkey || null,
          is_remote: form.isRemote,
          meeting_url: form.isRemote ? form.meetingUrl : null,
          extra_persons: form.extraPersons,
          is_whole_day: isWholeDay,
          amount: priceResult.total,
        }),
      });

      if (!eventRes.ok) {
        const errData = await eventRes.json().catch(() => ({}));
        throw new Error(errData.error || `Chyba pri vytvarani rezervacie (${eventRes.status})`);
      }

      const event = await eventRes.json();

      // 2. Create BTCPay invoice
      const invoiceRes = await fetch("/api/create-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: event.id,
          amount: priceResult.total,
          title: form.title,
          start: start.toISOString(),
          end: end.toISOString(),
          hostEmail: form.hostEmail,
        }),
      });

      if (!invoiceRes.ok) {
        throw new Error("Chyba pri vytvarani faktury.");
      }

      const invoice = await invoiceRes.json();

      // 3. Update event with invoice ID
      await fetch(`${calendarApiUrl}/events/${event.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ btcpay_invoice_id: invoice.invoiceId }),
      });

      // 4. Redirect to BTCPay checkout
      window.location.href = invoice.checkoutLink;
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Nova rezervacia</h2>
        <div className="modal-time">
          {formatDate(start)}
          <br />
          {formatTime(start)} – {formatTime(end)} ({durationHours}h)
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Nazov akcie *</label>
          <input
            id="title"
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            placeholder="napr. Bitcoin meetup"
          />

          <label htmlFor="description">Popis</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Kratky popis vasej akcie..."
          />

          <label htmlFor="hostEmail">Email organizatora *</label>
          <input
            id="hostEmail"
            name="hostEmail"
            type="email"
            required
            value={form.hostEmail}
            onChange={handleChange}
            placeholder="vas@email.sk"
          />

          <label htmlFor="hostNostrPubkey">Nostr pubkey</label>
          <input
            id="hostNostrPubkey"
            name="hostNostrPubkey"
            value={form.hostNostrPubkey}
            onChange={handleChange}
            placeholder="npub..."
          />

          <div className="modal-toggle">
            <input
              id="isRemote"
              name="isRemote"
              type="checkbox"
              checked={form.isRemote}
              onChange={handleChange}
            />
            <label htmlFor="isRemote" style={{ margin: 0 }}>
              Online akcia (s meeting URL)
            </label>
          </div>

          {form.isRemote && (
            <>
              <label htmlFor="meetingUrl">Meeting URL</label>
              <input
                id="meetingUrl"
                name="meetingUrl"
                type="url"
                value={form.meetingUrl}
                onChange={handleChange}
                placeholder="https://meet.jit.si/..."
              />
            </>
          )}

          <label htmlFor="extraPersons">Pocet neclenskych osob (priplatky)</label>
          <input
            id="extraPersons"
            name="extraPersons"
            type="number"
            min="0"
            value={form.extraPersons}
            onChange={handleChange}
          />
          {form.extraPersons > 0 && (
            <div style={{ fontSize: "var(--step--1)", color: "#6b7280" }}>
              +{pricing.nonMemberSurcharge} EUR/hod za osobu
            </div>
          )}

          {/* Price breakdown */}
          <div className="price-breakdown">
            <table>
              <tbody>
                {priceResult.breakdown.map((item, i) => (
                  <tr key={i}>
                    <td>{item.label}</td>
                    <td>
                      {item.rate != null ? `${item.rate} EUR` : `${item.hourTotal || item.rate} EUR`}
                      {item.surcharge > 0 && (
                        <span style={{ color: "#6b7280" }}>
                          {" "}
                          + {item.surcharge} EUR
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="price-total">
                  <td>Spolu</td>
                  <td>{priceResult.total} EUR</td>
                </tr>
              </tbody>
            </table>
          </div>

          {priceResult.errors.length > 0 && (
            <div className="error-message">
              {priceResult.errors.join(" ")}
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Zrusit
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                submitting ||
                priceResult.errors.length > 0 ||
                priceResult.total === 0
              }
            >
              {submitting
                ? "Spracovavam..."
                : `Rezervuj za ${priceResult.total} EUR`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
