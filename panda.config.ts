import { defineConfig, defineTokens } from "@pandacss/dev";

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Color = Record<(typeof shades)[number], { value: string }>;

const colorBuilder = (hue: number, saturation?: number) => {
  const colorObj: Color = {} as Color;
  shades.forEach((shade) => {
    colorObj[shade] = {
      value: `hsl(${hue}, ${saturation ?? 50}%, ${100 - shade / 10}%)`,
    };
  });
  return colorObj;
};

const colors = defineTokens.colors({
  primary: colorBuilder(0),
  secondary: colorBuilder(200),
  disabled: colorBuilder(0, 0),
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ["@pandacss/dev/presets"],
  jsxFramework: "react",
  include: ["./src/**/*.{astro,tsx}", "./pages/**/*.{astro,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: { ...colors },
      },
    },
  },
  outdir: "styled-system",
});
