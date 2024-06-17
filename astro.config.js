import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import { data } from "./src/data";

export default defineConfig({
  integrations: [
    mdx(),
    icon({
      'simple-icons': Object.keys(data.social),
    }),
  ],
  redirects: {
    '/akcie': '/#news'
  },
  site: "https://www.paralelnapoliskosice.sk/",
});
