/**
 * Violet Tailwind preset — maps the `--vt-*` CSS variables (tokens.css) onto
 * Tailwind's theme so utilities resolve to tokens, keeping CSS vars the single
 * source of truth and themeable at runtime (docs/trade-offs.md TD-12).
 *
 * PLACEHOLDER: the full color/spacing/radius/typography mapping ships with the
 * real tokens. Consumed by each app's tailwind.config via `presets: [require(...)]`.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // color: { ... } -> var(--vt-color-*)
      // spacing / borderRadius / fontFamily -> var(--vt-*)
    },
  },
};
