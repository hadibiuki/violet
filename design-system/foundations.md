# Violet · Foundations

Concrete rules for applying the tokens. Token names below are the semantic CSS
variables from `tokens/tokens.css` (and their Tailwind aliases in parentheses).

---

## Color

### Roles, not hues
Pick a token by **what it's for**, never by its hex. The same screen in dark mode
or RTL keeps working because components reference roles.

| Role | Token | Tailwind | Use for |
|---|---|---|---|
| Page background | `--vt-color-bg` | `bg-bg` | the canvas behind everything |
| Card / panel | `--vt-color-surface` | `bg-surface` | raised content blocks |
| Sunken well | `--vt-color-surface-sunken` | `bg-surface-sunken` | filter rails, inputs group bg |
| Primary text | `--vt-color-text` | `text-text` | body copy, most text |
| Muted text | `--vt-color-text-muted` | `text-muted` | captions, metadata, SKU |
| Brand action | `--vt-color-primary` | `bg-primary` | primary buttons, active states |
| Premium accent | `--vt-color-accent` | `text-accent` | NEW badge flourish, hairlines, awards |
| Hairline | `--vt-color-border` | `border-border` | dividers, card outlines |

### The 60 / 30 / 10 budget
- **60 %** neutral surfaces (`bg`, `surface`, ink greys)
- **30 %** type + structure (ink text, borders)
- **10 %** brand violet (actions, links, identity) — and gold is a *fraction* of that 10 %.

If a screen looks "very purple," it's wrong. Violet earns attention by being scarce.

### Contrast (WCAG AA, verified pairings)
| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `ink-900` text | `white` surface | 15.8:1 | ✅ AAA |
| `ink-500` muted | `white` | 4.9:1 | ✅ AA (body), ✅ AA-large |
| `white` | `violet-600` primary | 4.6:1 | ✅ AA |
| `ink-950` | `gold-400` accent | 9.1:1 | ✅ AAA |
| `violet-100` text | `ink-950` (dark hero) | 13.2:1 | ✅ AAA |

Rule: **never** put `violet-400/500` text on white (fails AA) — use `violet-700+`
for text, reserve lighter violets for fills with white/ink text on top.

### Dark mode
Only the **vitrine hero** ships dark by default. Full dark mode is opt-in via
`[data-theme="dark"]`, which re-points the semantic layer (see `tokens.css` §3).
Build components against semantic tokens and they theme for free.

---

## Typography

### Families (per script)
- **Display** — `Cormorant Garamond` (serif). Latin only. Hero titles, brand
  moments, large section openers. Conveys heritage/luxury. **Never** in the B2B app.
- **UI** — resolves by locale via `--vt-font-ui`:
  - EN/RU → `Inter` (full Latin + Cyrillic)
  - AR → `IBM Plex Sans Arabic`
  - FA (B2B) → `Vazirmatn`
- **Mono** — `JetBrains Mono` for SKU / model codes / order numbers.

> In RTL, the display serif falls back to the UI font automatically (a Latin serif
> over Arabic looks wrong). RTL "display" = UI font at display sizes + `light` weight.

### Type scale & intent
| Token (Tailwind) | Size | Weight | Use |
|---|---|---|---|
| `text-6xl` | 84 | light | full-bleed vitrine hero (site, Latin) |
| `text-5xl` | 64 | light | hero / brand title |
| `text-4xl` | 48 | semibold | page title |
| `text-3xl` | 36 | semibold | major section |
| `text-2xl` | 28 | semibold | section / card group title |
| `text-xl` | 22 | medium | sub-section, product name (PDP) |
| `text-lg` | 18 | regular | lead paragraph |
| `text-base` | 16 | regular | body (default) |
| `text-sm` | 14 | regular | dense tables, secondary, app body |
| `text-xs` | 12 | medium | captions, badges, SKU |
| `text-2xs` | 11 | medium | legal, micro-labels |

### Eyebrows / luxury caps
Small section kickers use `text-xs` + `font-medium` + `tracking-wider` (0.12em) +
`uppercase` + `text-accent`. This is the one place gold appears as text. (Skip
`uppercase`/`tracking-wider` in Arabic & Persian — they don't apply to those scripts.)

### Density: site vs. app
- **Site:** line-height `relaxed`/`normal`, larger sizes, more air.
- **App:** default to `text-sm` body, `leading-snug`, tighter spacing — more rows visible.

---

## Spacing & layout

### Scale
4px base. Use only scale steps (`space-1..32`). Component padding lives at 2–6;
section rhythm at 16–32.

- **Site section vertical rhythm:** `space-24` (96) desktop, `space-12` (48) mobile.
- **App screen padding:** `space-6` (24) desktop, `space-4` (16) mobile.
- **Card padding:** `space-5`–`space-6`. **Input padding:** `space-3` block / `space-4` inline.

### Containers
Max content width `--vt-container-2xl` (1536) for the vitrine; B2B app content
caps at `xl` (1280). Always center with inline auto-margins (logical, RTL-safe).

### The product grid (a core requirement)
Responsive columns per the brief:

| Breakpoint | Site catalog | B2B catalog | Gutter |
|---|---|---|---|
| Desktop ≥1024 | **4 cols** | 3–4 cols | `space-6` |
| Tablet 768–1023 | **2–3 cols** | 2 cols | `space-4` |
| Mobile <768 | **1–2 cols** | 1 col | `space-3` |

Every card reserves space with `aspect-ratio: 1 / 1` (product image) so the grid
never reflows as images lazy-load. With 1000+ models, use **pagination OR
infinite scroll** (decision tracked in the trade-offs log) and AJAX filters that
update the grid **without a full page refresh**.

---

## Elevation

Shadows are violet-tinted (`shadow-xs..2xl`) so even depth feels on-brand.

| Level | Token | Where |
|---|---|---|
| 0 flat | — (border only) | inputs, table rows, filter chips |
| 1 raised | `shadow-card` (md) | product cards at rest |
| 2 hover | `shadow-card-hover` (lg) | card hover/focus |
| 3 popover | `shadow-popover` (xl) | dropdowns, quick-view, menus |
| 4 modal | `shadow-2xl` | dialogs, drawers |

Hover lift = shadow change **+** `translateY(-2px)` over `duration-base ease-standard`.
In dark mode, shadows become deep black glows automatically.

## Radius
Inputs/chips `sm` (6) · buttons `md` (10) · cards `lg` (14) · hero/feature panels
`xl`–`2xl` · pills/avatars `full`. Keep one product card radius site-wide; mixing
radii reads as inconsistent.

---

## Motion

| Token | Duration | Use |
|---|---|---|
| `duration-fast` | 150ms | hovers, toggles, focus |
| `duration-base` | 240ms | dropdowns, cards, tabs |
| `duration-slow` | 400ms | drawers, modals, accordions |
| `duration-slower` | 700ms | hero / gallery image transitions |

Easing: `ease-standard` for most; `ease-spring` for playful confirmations (added-to-cart);
`ease-out` for entrances. **All durations collapse to 0** under
`prefers-reduced-motion` (already wired in `tokens.css`). Motion should clarify
state, never gate the user — content stays usable mid-animation.

**Product card hover (site):** swap to the second product image + lift. **Gallery
zoom (PDP):** scale within a clipped frame, `duration-slower`. On mobile, gallery
is swipe-driven (no hover state exists).

---

## Iconography
- Line icons, **1.5px** stroke (matches `border-thin`), 24px grid, rounded joins.
- Recommended set: **Lucide** (consistent, tree-shakeable). Currency/size in mono.
- Icons inherit `currentColor`; never bake in hex.
- **Directional icons mirror in RTL** (chevrons, back/next, breadcrumb separators).
  Non-directional icons (search, user, cart) do **not** mirror.

---

## RTL & internationalization (first-class)

The site serves Arabic; the entire B2B app is Persian. Both are RTL.

**Rules**
1. **Logical properties only.** Use `margin-inline-start`, `padding-inline-end`,
   `inset-inline-start`, `text-align: start`. In Tailwind use logical utilities
   (`ps-/pe-/ms-/me-/start-/end-`). **Never** hard-code `left/right`.
2. **Direction comes from `<html dir>`**, set per locale. Don't `transform: scaleX(-1)`
   whole layouts.
3. **Mirror** directional icons & animations (slide-in from the inline-start edge).
4. **Don't mirror** logos, the watch imagery, charts, numerals, or media controls.
5. **Numbers & dates** are locale-formatted (`Intl`). Persian app uses Persian digits
   + Jalali dates where appropriate; site uses locale digits per language.
6. **Mixed content** (a Latin SKU inside Arabic text) needs proper bidi isolation
   (`unicode-bidi: isolate` / `<bdi>`).
7. **Content is localized, not machine-translated** (per requirements) — leave room
   for ~30% text expansion (RU/AR) in buttons and labels; never fix label widths.
8. **`hreflang`** + per-language URLs on the site; language switch keeps the user on
   the same product/page.

**Layout flips to verify on every screen:** PDP two-column order, breadcrumb
direction, filter rail side, table column order, order-status timeline direction,
form label alignment, dropdown caret side.

---

## Imagery & performance (part of the visual spec)

With 1000+ models / 4000+ frames, image handling *is* design:
- **Format:** WebP (AVIF progressive enhancement), compressed; multiple sizes via
  `srcset`. Product card ~ square; PDP gallery higher-res for zoom.
- **Lazy-load** everything below the fold (`loading="lazy"` + `IntersectionObserver`).
- **Reserve space** with `aspect-ratio` to prevent layout shift (CLS).
- **Skeletons** use `--vt-color-skeleton` with a subtle shimmer (the `gradient-sheen`),
  shown until the image decodes. Never spinners for grids.
- **Color variants** swap the gallery image instantly; preload the variant thumbnails.
- Provide meaningful `alt` (model name + key attribute) for SEO + a11y.

---

## Accessibility checklist (every component)
- [ ] Visible focus ring (`shadow-focus`) on all interactive elements — keyboard reachable.
- [ ] Hit target ≥ 44×44px (mobile), ≥ 32px (dense desktop tables).
- [ ] Color is never the only signal (badges/status pair an icon or label).
- [ ] Contrast ≥ AA (4.5:1 text / 3:1 large & UI).
- [ ] Inputs have persistent labels (placeholders are not labels).
- [ ] Live regions announce async results (filter counts, "order submitted").
- [ ] Respects `prefers-reduced-motion`.
- [ ] Works at 200% zoom and `text-sm`→`text-lg` user scaling without clipping.
