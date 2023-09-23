import { defineConfig, type Tokens } from "@pandacss/dev"
import { preset } from "@pandacss/preset-panda"

const tokens = preset.theme.tokens

const newTokens: Partial<typeof preset.theme.tokens> = {
  sizes: tokens.sizes,
  spacing: tokens.spacing,
  radii: tokens.radii,
}

export default defineConfig({
  strictTokens: false,
  preflight: false,
  // presets: ["@pandacss/dev/presets"],
  jsxFramework: "react",
  include: ["./src/**/*.{astro,tsx}"],
  outdir: "src/components/primitives",
  clean: true,
  theme: { tokens: newTokens as Tokens },
  minify: true,
})
