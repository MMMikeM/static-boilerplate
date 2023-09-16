import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import Icons from "unplugin-icons/vite";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), react()],
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  },
  output: "server",
  adapter: vercel()
});