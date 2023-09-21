import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  strictTokens: false,
  preflight: true,
  presets: ["@pandacss/dev/presets"],
  jsxFramework: "react",
  include: ["./src/**/*.{astro,tsx}"],
  outdir: "styled-system",
});
