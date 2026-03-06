/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BTCPAY_BASE_URL: string;
  readonly BTCPAY_STORE_ID: string;
  readonly BTCPAY_API_KEY: string;
  readonly PUBLIC_CALENDAR_API_URL: string;
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
