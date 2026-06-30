# CLAUDE.md — Violet Design System build instructions

You are implementing the **Violet design system** in this repository. Violet is an
international luxury watch brand with two products: a reference site (EN/RU/AR, LTR+RTL) and a
Persian/RTL B2B wholesale order app.

## Start here (read in order)
1. `design_handoff_violet/README.md` — the full handoff brief (this is your spec).
2. `readme.md` — brand guide: voice, visual foundations, iconography, substitutions.
3. `SKILL.md` — system map + one-breath brand summary.

## Ground rules
- **Tokens are the source of truth.** Everything visual comes from `tokens/` CSS custom
  properties (`--vt-*`). Port them into this repo's theme system FIRST. Never hard-code a hex,
  size, radius, or shadow that has a token. Use semantic roles (`--vt-color-primary`,
  `--vt-color-surface`) over raw ramps.
- **The HTML files are design references, not code to ship.** Recreate them using THIS repo's
  framework, libraries, and conventions. If the repo is empty, use React + CSS variables.
- **Honor the component contracts.** Each `components/<Name>/<Name>.d.ts` is the prop API to
  implement; read its `.prompt.md` for usage rules. `<Name>.jsx` is the reference behavior.
- **RTL is first-class.** Use logical CSS properties, set `dir`/`lang` on the root, wrap Latin
  runs (SKUs, order numbers) in `<bdi>`, mirror directional icons only. Persian/Arabic use
  native digits and skip uppercase/letter-spacing.
- **Dark mode** ships as `[data-theme="dark"]` token overrides — support it as a cross-cutting
  pass, not per-component hacks.
- Icons: **Lucide** (install the `lucide` package), 1.5px stroke, `currentColor`. Ornaments are
  only the gold ✦ and the → arrow. **No emoji.**
- Motion collapses under `prefers-reduced-motion`.

## Build order
1. **Tokens** → port `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
2. **Components** bottom-up: forms → display → feedback → navigation → commerce → marketing.
   Verify each against its `.d.ts` + `.prompt.md`.
3. **Screens** from `templates/` (11 total — see the handoff README for each screen's layout,
   components, state, and interactions). Reference screenshots are in
   `design_handoff_violet/screenshots/`.
4. **RTL + dark-mode** verification passes across all screens.

## Before production
- Replace Unsplash placeholder imagery with licensed Violet photography.
- Confirm font licensing (Google Fonts + self-hosted IRANYekanX).
- Verify every interactive token pair meets WCAG AA; focus always visible; never color-only.

Ask me for the target framework if it isn't obvious from the repo.
