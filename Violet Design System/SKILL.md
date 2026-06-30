---
name: violet-design
description: Use this skill to generate well-branded interfaces and assets for Violet (an international watch brand with a luxury reference site in EN/RU/AR and a Persian/RTL B2B wholesale order app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Where things are
- `styles.css` — the single entry point; link it (or `@import` it) to get every token + webfont. It `@import`s `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css`.
- `readme.md` — full brand guide: product context, content voice, visual foundations, iconography, substitutions.
- `tokens/` — all CSS custom properties (`--vt-*`). Use semantic roles (`--vt-color-primary`, `--vt-color-surface`) not raw ramps.
- `components/` — 33 React primitives across `brand/ forms/ display/ feedback/ navigation/ commerce/ marketing/`. Each has a `.jsx`, `.d.ts`, and `.prompt.md` (read the prompt for usage). Every component is demonstrated live in at least one template.
- `templates/` — ready-to-copy starting screens (each a `.dc.html`):
  - Reference Site: `reference-site-home`, `reference-site-catalog`, `reference-site-product` (PDP), `reference-site-line` (collection), `reference-site-rtl` (Arabic), `reference-site-dark` (dark mode).
  - B2B App (Persian RTL): `b2b-app` (full flow), `b2b-dashboard`, `b2b-admin`, `b2b-cart` (cart + proforma invoice).
  - `component-showcase` — interactive playground for all primitives.
- `ui_kits/reference-site/` — the luxury vitrine kit, LTR/RTL.
- `ui_kits/b2b-app/` — the Persian RTL wholesale app kit.
- `guidelines/cards/` — foundation specimen cards (colors, type, spacing).

## Brand in one breath
Luxury watches. Violet-tinted neutrals carry the screen (60%), ink type/structure 30%,
brand violet ~10%, gold a fraction of that. Two registers: airy **light** surfaces and a
**dark celestial** hero (ink-950 gradient + aurora + stars + gold). Display serif
(Cormorant Garamond) for brand moments only — never in the B2B app. Inter (EN/RU),
Vazirmatn (FA), Cairo (AR), JetBrains Mono for SKUs. Violet-tinted shadows; cards lift on
hover; the ✦ sparkle and → arrow are the only ornaments. No emoji. RTL is first-class.

## When prototyping
- Light surfaces by default; reach for the dark celestial register for heroes / CTAs / login.
- One primary action per view; reserve the gold `accent` button for rare premium CTAs.
- Use real tokens via `var(--vt-*)`; don't invent hexes. Icons: Lucide.
- For RTL, set `<html dir="rtl" lang="fa|ar">` and use logical CSS properties; wrap Latin
  runs (SKUs) in `<bdi>`.

To load the React components in a standalone HTML file, link `styles.css`, include React +
Babel + the compiled `_ds_bundle.js`, then read components off `window` (the namespace is
printed by the design-system compiler; e.g. `const { Button } = window.VioletDesignSystem_xxxxxx`).
See any `ui_kits/*/index.html` for the exact pattern.

## Sources
Built from the client repo https://github.com/hadibiuki/violet (tokens.css, home.html,
product.html, design-system/ + docs/) and the Figma file `JswCeN8hqtID2MC7jH7PjJ`. Explore
those for deeper fidelity.
