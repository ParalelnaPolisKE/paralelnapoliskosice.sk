export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { eventId, amount, title, start, end, hostEmail } = await request.json();

  const baseUrl = import.meta.env.BTCPAY_BASE_URL;
  const storeId = import.meta.env.BTCPAY_STORE_ID;
  const apiKey = import.meta.env.BTCPAY_API_KEY;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;

  if (!baseUrl || !storeId || !apiKey) {
    return new Response(
      JSON.stringify({ error: "BTCPay configuration missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const res = await fetch(`${baseUrl}/api/v1/stores/${storeId}/invoices`, {
    method: "POST",
    headers: {
      Authorization: `token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: String(amount),
      currency: "EUR",
      metadata: {
        eventId,
        title,
        start,
        end,
        hostEmail,
      },
      checkout: {
        redirectURL: `${siteUrl}/akcie?paid=${eventId}`,
        redirectAutomatically: true,
      },
      receipt: {
        enabled: true,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(
      JSON.stringify({ error: `BTCPay error: ${res.status}`, details: text }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const invoice = await res.json();

  return new Response(
    JSON.stringify({
      invoiceId: invoice.id,
      checkoutLink: invoice.checkoutLink,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
