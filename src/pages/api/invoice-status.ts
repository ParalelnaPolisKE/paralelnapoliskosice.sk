export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const invoiceId = url.searchParams.get("id");

  if (!invoiceId) {
    return new Response(
      JSON.stringify({ error: "Missing invoice id" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const baseUrl = import.meta.env.BTCPAY_BASE_URL;
  const storeId = import.meta.env.BTCPAY_STORE_ID;
  const apiKey = import.meta.env.BTCPAY_API_KEY;

  if (!baseUrl || !storeId || !apiKey) {
    return new Response(
      JSON.stringify({ error: "BTCPay configuration missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const res = await fetch(
    `${baseUrl}/api/v1/stores/${storeId}/invoices/${encodeURIComponent(invoiceId)}`,
    {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    }
  );

  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: `BTCPay error: ${res.status}` }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const invoice = await res.json();

  return new Response(
    JSON.stringify({
      status: invoice.status,
      additionalStatus: invoice.additionalStatus,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
