# Handoff: Violet Design System → production code

## Overview
This bundle is the complete **Violet design system** — the shared visual language for an
international luxury watch brand with two digital products:

- **A — Reference Site**: an editorial brand vitrine (English · Russian · Arabic, LTR + RTL).
- **B — B2B Order App**: a Persian (Farsi), fully RTL wholesale ordering app for dealers.

The goal of this handoff is for a developer using **Claude Code** to recreate these designs in a
real codebase, driven by the system's tokens and component contracts.

## About the design files
Everything in this bundle is a **design reference created in HTML** — prototypes that show the
intended look, layout, copy, and behavior. **They are not production code to copy verbatim.**
The task is to **recreate these designs in the target codebase's environment** (React, Vue,
Next, SwiftUI, native, etc.) using that codebase's established patterns and component library.
If no codebase exists yet, pick the most appropriate framework (React + CSS variables maps
cleanly to this system) and implement there.

The single source of truth is the **CSS custom properties in `tokens/`** — never hard-code a
hex, size, or radius that has a token. Map each `--vt-*` token to the target system's
equivalent (theme object, Tailwind config, SCSS map, etc.).

## Fidelity
**High-fidelity.** These are pixel-level mockups with final colors, typography, spacing,
radii, shadows, motion, and interactions. Recreate the UI faithfully, but using the target
codebase's libraries and conventions.

---

## How the system is organized (read in this order)

1. **`readme.md`** — the full brand guide: product context, content **voice & copywriting
   rules**, visual foundations (palette ratios, type, backgrounds, elevation, corners,
   borders, motion, hover/press, transparency, cards, layout), iconography, and the open
   "please confirm" substitutions (fonts, imagery, logo). Read this first — it defines the
   *why* behind every value.
2. **`SKILL.md`** — quick map of where things live + a one-breath brand summary + prototyping
   rules.
3. **`tokens/`** — the source of truth (see Design Tokens below).
4. **`components/`** — 33 typed React primitives. Each component folder has:
   - `<Name>.jsx` — the reference implementation.
   - `<Name>.d.ts` — **the prop contract** (TypeScript types + JSDoc). This is what to honor
     when reimplementing.
   - `<Name>.prompt.md` — usage notes and do/don'ts.
5. **`templates/`** — the 11 screens to build (see Screens below). Each is a self-contained
   page that composes the components.

### Loading the reference designs to view them
Open any `templates/<slug>/<Name>.dc.html` in a browser, or open **`demo.html`** at the
project root — a gallery linking to every screen. (Open from the project tree, not the zip, so
fonts and the compiled bundle resolve.)

---

## Design Tokens (source of truth → `tokens/`)

All tokens are CSS custom properties prefixed `--vt-`. Use the **semantic** roles
(`--vt-color-primary`, `--vt-color-surface`) rather than raw ramps wherever one exists.

- **Colors** — `tokens/colors.css`. Violet-tinted neutrals ("ink") + brand violet
  (`--vt-color-primary` = violet-600 `#7C3AED`) + champagne gold accent (`--vt-gold-400`
  `#C9A86A`). Includes a full **dark theme** under `[data-theme="dark"]` and status colors.
  Ratio discipline: neutrals ~60%, ink type/structure ~30%, violet ~10%, gold a fraction of
  that. Never put violet-400/500 text on white (fails AA) — use violet-700+.
- **Typography** — `tokens/typography.css` + `tokens/fonts.css`. Cormorant Garamond (display,
  Latin brand moments only — never in the B2B app), Inter (UI EN/RU), Vazirmatn (Persian),
  Cairo (Arabic), JetBrains Mono (SKUs / order numbers). Eyebrows: 12px, `.26em` tracking,
  uppercase, gold (skip tracking/uppercase for Arabic & Persian).
- **Spacing / radius / sizing / borders / elevation / motion** — `tokens/spacing.css`.
  - Spacing: 4px base scale (`--vt-space-1` … `--vt-space-32`).
  - Radius: inputs/chips `--vt-radius-sm` 6px · buttons `--vt-radius-md` 10px · cards
    `--vt-radius-lg` 14px · hero/feature `--vt-radius-xl/2xl` 20/28px · pills/avatars full.
  - Control heights: sm 32 · md 40 · lg 48px.
  - Containers: app `--vt-container-xl` 1280px · site `--vt-container-2xl` 1440px.
  - Borders: hairline 1px · thin 1.5px · thick 2px.
  - Elevation: 6 **violet-tinted** shadow steps; cards rest at md, hover lifts to lg/xl + a
    `translateY`.
  - Motion: 120ms hovers · 200ms dropdowns/cards · 320ms drawers/modals · 600ms hero/gallery;
    easing `cubic-bezier(.2,0,0,1)`. Collapse all motion under `prefers-reduced-motion`.

---

## Components (`components/`) — honor the `.d.ts` contracts

33 primitives across these groups. Reimplement each against its `.d.ts`; read its `.prompt.md`.

- **brand/** — `BrandMark` (floral V monogram + Cinzel wordmark; `tone="onDark"` → gold).
- **forms/** — `Button` (primary/secondary/ghost/accent + success/danger-outline, sm/md/lg),
  `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `QuantityStepper`,
  `ImageUploader`.
- **display/** — `Badge` (new/limited/neutral/soldout), `ProductCard`, `SpecTable`, `Chip`,
  `Avatar`, `StatTile`, `Divider`.
- **feedback/** — `OrderStatusPill`, `Spinner`, `Skeleton`, `Tooltip`, `Toast` (+
  `ToastViewport`), `Modal`.
- **navigation/** — `Breadcrumb`, `Tabs`, `Pagination`, `SortDropdown` (directional icons
  mirror in RTL).
- **commerce/** — `OrderTimeline`, `CartLineItem`, `InvoiceRow`.
- **marketing/** — `Hero`, `Marquee`.

Icons: **Lucide** line icons, 1.5px stroke, `currentColor` (never bake a hex). The gold ✦
sparkle and → arrow are the only ornaments. **No emoji.**

---

## Screens to build (`templates/`)

### Reference Site (EN/RU/AR — luxury vitrine)
1. **Home** (`reference-site-home`) — celestial dark hero (aurora + spinning rings + floating
   product), marquee, "New Models" & "Featured" product grids, "Explore the lines" cards,
   brand-story split, stat row, dark CTA band, footer.
2. **Catalog** (`reference-site-catalog`) — sticky frosted nav, breadcrumb, **filter rail**
   (line / movement / case-size chips / availability), toolbar with result count +
   `SortDropdown`, **active-filter chips**, responsive product grid (3/4-col tweak),
   `Pagination`, **skeleton loading state**, and a no-results empty state.
3. **Product Detail / PDP** (`reference-site-product`) — sticky gallery with thumbnail
   switching + gold inner frame, buy column (price, key-spec tiles, CTAs, trust row), spec
   **Tabs** (Specifications via `SpecTable` / Features / Care), related-models grid.
4. **Collection Line** (`reference-site-line`) — 21/9 campaign banner, switchable line
   selector (Classic/Sport/Smart/Heritage) that swaps banner + story + stats + grid.
5. **RTL (Arabic)** (`reference-site-rtl`) — `dir="rtl" lang="ar"`, Cairo type; mirrored nav,
   breadcrumb chevron, grid, and RTL-aligned `SpecTable`. Proof the system is RTL-first.
6. **Dark Mode** (`reference-site-dark`) — full storefront under `[data-theme="dark"]` with a
   live light/dark toggle; every component flips via tokens; `BrandMark` → gold on dark.

### B2B Order App (Persian · RTL — wholesale)
7. **Full Order App** (`b2b-app`) — multi-screen flow: login → catalog → cart → checkout →
   my-orders → order detail (with `OrderTimeline`) → invoices. Persian, IRANYekanX.
8. **Dashboard** (`b2b-dashboard`) — sidebar shell, stat cards, recent-orders table
   (`OrderStatusPill`), wholesale catalog with add-to-cart.
9. **Cart & Proforma** (`b2b-cart`) — `CartLineItem` rows (MOQ-clamped `QuantityStepper`,
   remove → `Toast`), order summary, **proforma invoice** built from `InvoiceRow`
   (header/line/total), confirm `Modal`.
10. **Admin · Sales Panel** (`b2b-admin`) — approve dealers, manage products (`Switch`
    publish, `Select` filters), change order status, `Modal` forms, analytics.

### Component playground
11. **Component Showcase** (`component-showcase`) — live `Hero`, `Radio` groups, `Tooltip`
    (4 sides), `Spinner` sizes, `Skeleton`, and `Toast`/`Modal` triggers.

---

## Interactions & behavior (recurring patterns)
- **Nav**: transparent over the dark hero, then frosted `blur(18px) saturate(1.4)` panel once
  scrolled; shrinks on scroll.
- **Cards**: hover lifts (`translateY(-2…-10px)`) + deepens shadow; product image scales
  ~1.05–1.08 inside a clipped frame. Whole card is one link; nested actions are buttons.
- **Links**: gold underline grows from the inline-start on hover; → arrows slide
  `translateX(5px)`.
- **Loading**: skeletons that shimmer over ink-100 — **never spinners** for content; reserve
  `Spinner` for inline/button busy states.
- **RTL**: set `dir`/`lang` on the root, use logical CSS properties (`inset-inline-*`,
  `margin-inline-*`), wrap Latin runs (SKUs, order numbers) in `<bdi>`, mirror directional
  icons only. Persian/Arabic use native digits.
- **Reduced motion / static**: all motion collapses under `prefers-reduced-motion`.

## State management (per screen, from the prototypes)
- Catalog: `{ filters (line/movement/size/stock), sort, page }` → derive filtered+sorted+paged
  list; reset page on filter/sort change.
- PDP: `{ activeImage, activeTab }`.
- Collection Line: `{ activeLine }` → swaps all line-scoped content.
- Dark Mode: `{ theme }` → toggles `[data-theme]`.
- B2B Cart: `{ cart[], confirmOpen, toasts[] }` → line totals, subtotal, MOQ clamp,
  transient toasts.
- B2B Admin / App: route/tab state, search + filter strings, modal/form state, status changes.

## Assets
- **Imagery**: placeholders use external **Unsplash** watch photography (see each template's
  logic for the photo IDs). **Replace with licensed Violet product/lifestyle frames** before
  production — flagged in `readme.md` → Substitutions.
- **Logo**: floral V monogram + Cinzel wordmark — supplied as SVG in `assets/brand/` and wired
  into `BrandMark`.
- **Icons**: Lucide (CDN in prototypes; install the `lucide` package in production).
- **Fonts**: Google Fonts (Cormorant Garamond, Inter, Vazirmatn, Cairo, JetBrains Mono) +
  self-hosted **IRANYekanX** for the Persian B2B UI — confirm licensing.

## Files in this bundle
- `readme.md`, `SKILL.md` — brand guide + system map (read first).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (+ `styles.css` entry).
- `components/` — 33 components, each with `.jsx` + `.d.ts` + `.prompt.md`.
- `templates/` — the 11 screens listed above (each a `.dc.html`).
- `demo.html` — gallery linking to every screen.

## Suggested Claude Code workflow
1. Point Claude Code at this folder. Have it read `readme.md` then `SKILL.md`.
2. Port `tokens/` into the target theme system first (this unlocks everything else).
3. Build the components bottom-up against their `.d.ts` contracts (forms → display → feedback
   → navigation → commerce → marketing). Verify each against its `.prompt.md`.
4. Assemble the screens from `templates/`, one at a time, matching the prototype.
5. Wire RTL + dark-mode last as cross-cutting passes (the tokens already support both).
