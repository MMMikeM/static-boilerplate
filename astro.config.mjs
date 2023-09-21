import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), pandacss()],
  vite: {},
  output: "server",
  adapter: cloudflare(),
});
