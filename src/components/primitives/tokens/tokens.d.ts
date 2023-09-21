/* eslint-disable */
export type Token = "sizes.0" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.7" | "sizes.8" | "sizes.9" | "sizes.10" | "sizes.11" | "sizes.12" | "sizes.14" | "sizes.16" | "sizes.20" | "sizes.24" | "sizes.28" | "sizes.32" | "sizes.36" | "sizes.40" | "sizes.44" | "sizes.48" | "sizes.52" | "sizes.56" | "sizes.60" | "sizes.64" | "sizes.72" | "sizes.80" | "sizes.96" | "sizes.0.5" | "sizes.1.5" | "sizes.2.5" | "sizes.3.5" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.2xl" | "sizes.3xl" | "sizes.4xl" | "sizes.5xl" | "sizes.6xl" | "sizes.7xl" | "sizes.8xl" | "sizes.prose" | "sizes.full" | "sizes.min" | "sizes.max" | "sizes.fit" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.0" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.7" | "spacing.8" | "spacing.9" | "spacing.10" | "spacing.11" | "spacing.12" | "spacing.14" | "spacing.16" | "spacing.20" | "spacing.24" | "spacing.28" | "spacing.32" | "spacing.36" | "spacing.40" | "spacing.44" | "spacing.48" | "spacing.52" | "spacing.56" | "spacing.60" | "spacing.64" | "spacing.72" | "spacing.80" | "spacing.96" | "spacing.0.5" | "spacing.1.5" | "spacing.2.5" | "spacing.3.5" | "radii.xs" | "radii.sm" | "radii.md" | "radii.lg" | "radii.xl" | "radii.2xl" | "radii.3xl" | "radii.full" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-7" | "spacing.-8" | "spacing.-9" | "spacing.-10" | "spacing.-11" | "spacing.-12" | "spacing.-14" | "spacing.-16" | "spacing.-20" | "spacing.-24" | "spacing.-28" | "spacing.-32" | "spacing.-36" | "spacing.-40" | "spacing.-44" | "spacing.-48" | "spacing.-52" | "spacing.-56" | "spacing.-60" | "spacing.-64" | "spacing.-72" | "spacing.-80" | "spacing.-96" | "spacing.-0.5" | "spacing.-1.5" | "spacing.-2.5" | "spacing.-3.5"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "prose" | "full" | "min" | "max" | "fit" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5"

export type RadiusToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		sizes: SizeToken
		spacing: SpacingToken
		radii: RadiusToken
		breakpoints: BreakpointToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"