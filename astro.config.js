import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import { data } from "./src/data";

export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  integrations: [
    mdx(),
    icon({
      "simple-icons": Object.keys(data.social),
    }),
    react(),
  ],
  site: "https://www.paralelnapoliskosice.sk/",
  trailingSlash: "never",
  build: {
    format: "file",
  },
});
