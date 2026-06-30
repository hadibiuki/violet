# Violet · Design System

The shared visual language for **Violet** — an international watch brand. One brand,
two digital products that must feel identical in identity even though they are
technically separate systems.

| | **A — Reference Site** | **B — B2B Order App** |
|---|---|---|
| Purpose | International vitrine / brand showcase | Wholesale ordering for dealers |
| Audience | Distributors, partners, public | Bulk buyers, sales team, admins |
| Languages | English · Russian · Arabic | Persian (Farsi) |
| Direction | LTR (EN/RU) + **RTL (AR)** | **RTL** |
| Tone | Editorial, premium, spacious | Efficient, dense, task-first |
| Scope | 1000+ models, 4000+ photo frames, CMS | Orders, MOQ, dashboard, admin |

**The product is luxury watches.** Visual inspiration is borrowed in *structure and
feeling* — never assets — from **Rolex** (heritage serif authority, deep contrast),
**Citizen** (clean spec clarity, airy catalog), and **Casio** (bold modular product
cards, confident grids). Champagne **gold** is the one indulgence, used sparingly
against a violet-tinted neutral system.

---

## Sources this system was built from

This design system was reverse-engineered from the client's working repository. If you
have access, explore these for deeper fidelity:

- **GitHub:** https://github.com/hadibiuki/violet — the canonical repo. Contains
  `tokens.css` (source of truth), `home.html` / `product.html` (animated prototypes),
  the `design-system/` spec (`README.md`, `foundations.md`, `components.md`), and a
  `docs/` folder of front-end documentation (user flows, failure states, i18n/RTL,
  a11y, SEO, analytics, trade-offs).
- **Codebase path:** `violet/` (mounted locally during authoring).
- **Figma (account `hadibiuki`):** file key `JswCeN8hqtID2MC7jH7PjJ` —
  https://www.figma.com/design/JswCeN8hqtID2MC7jH7PjJ/violet (Starter plan; access not
  assumed). Three pages: 🎨 Foundations · 🧩 Components · 🏠 Home.
- **Requirements:** `Violet-Requirements.pdf` (120 reqs) — not included here.

> The two products share brand identity, product-data structure, and visual language
> but are **not** technically coupled.

---

## Design principles

1. **One brand, two temperaments.** The site breathes (luxury, big imagery, serif
   display). The app is calm and quick (function over flourish). Same tokens, different
   *density* and *altitude* — never different palettes.
2. **The watch is the hero.** Chrome stays out of the way: neutral surfaces, restrained
   color, generous negative space so 1000+ models photograph well. Violet is for
   *actions and identity*, not for decorating product imagery.
3. **Premium through restraint.** A single metallic accent; clean grids; confident
   typography. If a screen looks "very purple," it's wrong.
4. **RTL is first-class, not a mirror afterthought.** Arabic and Persian are designed
   from the start with logical properties.
5. **Performance is a design constraint.** Lazy-load, skeletons, WebP, and
   `aspect-ratio` reservations are part of the visual spec.
6. **Accessible by default.** Every interactive token pair meets WCAG AA; focus is
   always visible; nothing communicates by color alone.

---

## CONTENT FUNDAMENTALS — how Violet writes

**Voice:** Editorial and quietly confident, never loud. Heritage-luxury cadence with
plain clarity underneath. The brand sounds like a watch house, not a tech startup.

- **Person & address.** Marketing copy speaks *about* the product and *to* an implied
  "you" without overusing it — "discover the latest Violet collection," "built to keep
  pace with you," "find the one that's yours." The B2B app is more direct and
  imperative — "Create Order," "Add to cart," "Minimum 10 units."
- **Casing.** Title-case or sentence-case headlines (`New Models`, `Featured Pieces`,
  `Explore the lines`). **Eyebrows / kickers are UPPERCASE** with wide tracking and
  gold color (`New Season · 2026`, `JUST ARRIVED`, `LIMITED EDITION`). Button labels are
  title-case (`View New Models`, `Download Catalogue`). Skip uppercase/tracking in
  Arabic & Persian — they don't apply to those scripts.
- **Tone by surface.** Site = evocative and spacious ("Timeless, reimagined for *now*",
  "Timekeeping, refined to its essence"). App = efficient and unambiguous, plain labels,
  inline help, forgiving validation ("No technical knowledge required").
- **Product language.** Models carry a clean name + a mono SKU (`Chronograph Classic 42`
  · `VLT-2601`). Specs are factual and unadorned (`42 mm`, `5 ATM (50 m)`,
  `Stainless Steel 316L`, `Quartz Chronograph`).
- **Numbers & status.** Stats are round and aspirational (`1000+` models, `4000+`
  frames, `3` languages). Status reads as a short label always paired with an icon/color
  — never color alone (`Submitted → Reviewing → Approved → Shipped → Completed`).
- **Punctuation flourish.** A middot `·` separates peers (`English · Русский ·
  العربية`); a gold sparkle `✦` is the brand's signature ornament; an arrow `→` trails
  forward actions and slides on hover.
- **No emoji.** The brand never uses emoji. Ornament is the `✦` sparkle and the `→`
  arrow only.
- **Error & empty copy.** Non-blaming, with a recovery action ("No results — clear
  filters"); never a raw stack trace.

**Vibe in three words:** *Timeless · refined · authentic.*

---

## VISUAL FOUNDATIONS

**Palette.** Violet-tinted neutrals ("ink") carry 60% of every screen; ink type and
borders carry 30%; brand violet carries ~10% (actions, links, identity), and gold is a
*fraction* of that 10% — eyebrows, hairlines, the NEW/LIMITED flourish, rare premium
CTAs. Brand violet is `violet-600 #7C3AED`; accent gold is `gold-400 #C9A86A`. Never put
`violet-400/500` text on white (fails AA) — use `violet-700+` for text.

**Type.** A serif/sans duality. **Cormorant Garamond** (light weight, tight tracking)
for hero titles and brand moments — Latin only, *never* in the B2B app. **Inter** for all
UI (EN/RU); **Vazirmatn** for Persian, **Cairo** for Arabic. **JetBrains Mono** for SKUs
and order numbers. Display sizes run very large (84/64/48px) with `line-height` near 1.0;
body is 16px site / 14px app. Eyebrows are 12px, `0.26em` tracking, uppercase, gold.

**Backgrounds.** Two registers. (1) **Light** — the default canvas is `ink-50 #F8F7FF`,
surfaces are pure white; airy, lots of negative space. (2) **Dark celestial** — heroes,
CTA bands, and the footer use a deep `ink-950 → ink-900` gradient with a radial violet
glow, an animated **aurora** (blurred violet/gold radial blooms drifting on an 18s
loop), and a field of faint twinkling **stars**. No flat-purple gradients as generic
fills; the dark hero is a crafted scene, not a wash.

**Imagery.** Warm, editorial watch photography — square (`1/1`) for product cards and
PDPs, `21/9` for campaign banners, `3/4` for collection "line" cards. Cool-to-neutral
tones, premium studio lighting, no heavy grain. Images sit in rounded frames; on hover
they scale ~1.05–1.08 within a clipped frame (`overflow:hidden`). Placeholders are a
soft `ink-100 → violet-50` diagonal gradient with a faint ring motif while loading;
skeletons shimmer over `ink-100`, never spinners.

**Elevation.** Shadows are **violet-tinted** (`rgba(124,58,237,…)`) at six steps so even
depth feels on-brand. Cards rest at `shadow-md`; hover lifts to `shadow-lg/xl` **plus**
`translateY(-2px → -10px)`. Popovers `shadow-xl`, modals/drawers `shadow-2xl`. In dark
mode shadows become deep black glows.

**Corners.** Inputs/chips `6px` · buttons `10px` · cards `14px` · hero/feature panels
`20–28px` · pills/avatars full. One product-card radius site-wide; mixing radii reads as
inconsistent.

**Borders.** Hairline `1px` dividers (`ink-150`), `1.5px` for emphasis/secondary-button
outlines, `2px` thick rarely. Gold hairlines appear as a thin inner frame inside hero
imagery (`inset:16px` border).

**Motion.** Purposeful, never decorative gating. Durations: 120ms hovers · 200ms
dropdowns/cards/tabs · 320ms drawers/modals · 600ms hero/gallery image transitions.
Easing is `cubic-bezier(.2,0,0,1)` ("standard") for most; `ease-out` for entrances. Hero
elements **float** and **spin** on long loops; sections **reveal** (fade + 34px rise) on
scroll via IntersectionObserver with staggered delays; numbers **count up**. All motion
collapses to 0 under `prefers-reduced-motion`, and a `?static` mode freezes everything
and reveals all sections for screenshots/print.

**Hover & press.** Hover = lift (`translateY(-1 to -3px)`) + deepened shadow + (on
links) a gold underline that grows from the inline-start; arrows slide `translateX(5px)`.
Buttons press to `primary-active` with the lift removed. Ghost buttons fill with
`primary-subtle` and adopt a violet border on hover.

**Transparency & blur.** The sticky nav is transparent over the hero, then becomes a
`blur(18px) saturate(1.4)` frosted panel (`rgba(248,247,255,.72)`) once scrolled. Slider
arrows are glassy (`blur(6px)`, translucent white). Scrims are `rgba(13,10,30,.55)` for
modals.

**Cards.** White surface, `1px` `ink-200` border, `14px` radius, `shadow-md` at rest;
square image area on top with a badge overlaid top-inline-start, then name (15–16px
medium), mono SKU (muted), and — in B2B — wholesale price + MOQ. Hover lifts and the
image scales. The whole card is one link; nested actions (B2B "Add") are buttons.

**Layout rules.** Centered containers (`1280` app / `1440` site) with logical auto
margins. Product grid: 4 cols desktop / 2–3 tablet / 1–2 mobile, `space-6` gutter, every
cell reserving `aspect-ratio:1/1`. Site section rhythm `96px`; app screen padding `24px`.
Fixed/sticky elements: the top nav (shrinks on scroll), PDP gallery (sticky beside the
spec column), filter rail.

---

## ICONOGRAPHY

- **System:** **Lucide** line icons — consistent, tree-shakeable, the set named in the
  brand foundations. Loaded here from the Lucide CDN
  (`https://unpkg.com/lucide@latest`) and rendered via `data-lucide="…"` attributes.
- **Style:** line icons, **1.5px** stroke (matches `--vt-border-thin`), 24px grid,
  rounded joins. Icons inherit `currentColor` — **never** bake in a hex.
- **No icon font or SVG sprite ships in the source repo** — the prototypes use Lucide
  from CDN, so this system does the same rather than inventing a sprite. Currency/size
  values render in **JetBrains Mono**, not as icons.
- **RTL:** directional icons (chevrons, back/next, breadcrumb `›`→`‹`, arrows) **mirror**
  in RTL; non-directional icons (search, user, cart) do **not** mirror.
- **Brand ornament:** the gold sparkle **✦** (Unicode, not an icon) is the one decorative
  glyph; the forward **→** arrow trails actions. No emoji anywhere.
- **Logo / brand mark:** the brand mark is the calligraphic floral **V** monogram with the
  engraved **VIOLET** wordmark (Cinzel), supplied as SVG in `assets/brand/`
  (`violet-monogram.svg`, `violet-wordmark.svg`) and reproduced as the `BrandMark`
  component (`components/brand/`) and the Brand specimen card. On dark surfaces the
  monogram renders in champagne gold (`tone="onDark"`). See **Substitutions** below.

---

## Substitutions & flags (please confirm)

- **Fonts** — the Latin/Arabic UI families (Cormorant Garamond, Inter, JetBrains Mono,
  Vazirmatn, Cairo) load from the **Google Fonts CDN** (`tokens/fonts.css`). The Persian
  B2B UI uses the client-supplied **IRANYekanX** family, self-hosted from
  `assets/fonts/` across the full weight range (Thin 100 → Heavy 950); a `size-adjust`
  descriptor trims its oversized glyphs to sit in line with the rest of the system.
- **Imagery** uses the same Unsplash watch photography the prototypes reference (external
  URLs). **No licensed Violet product photography was provided.** Please supply real
  product/lifestyle frames to replace placeholders.
- **Logo** — the brand mark (floral V monogram + Cinzel wordmark) is supplied as SVG in
  `assets/brand/` and wired into `BrandMark`.
- **Icons** use Lucide from CDN (the documented set); no sprite was in the repo.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import this one file). `@import`s the four token files.
- `tokens/` — `colors.css` · `typography.css` · `spacing.css` · `fonts.css`.
- `assets/` — brand specimen + reference notes (no binaries shipped; see Iconography).
- `SKILL.md` — Agent-Skill wrapper for Claude Code.

**Components** (`components/`) — 33 reusable React primitives, each with `.jsx` +
`.d.ts` + `.prompt.md` and a `@dsCard` thumbnail per group:
- `brand/` — `BrandMark`
- `forms/` — `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `QuantityStepper`, `ImageUploader`
- `display/` — `Badge`, `ProductCard`, `SpecTable`, `Chip`, `Avatar`, `StatTile`, `Divider`
- `feedback/` — `OrderStatusPill`, `Spinner`, `Skeleton`, `Tooltip`, `Toast` (+ `ToastViewport`), `Modal`
- `navigation/` — `Breadcrumb`, `Tabs`, `Pagination`, `SortDropdown`
- `commerce/` — `OrderTimeline`, `CartLineItem`, `InvoiceRow`
- `marketing/` — `Hero`, `Marquee`

> Phase-2 component set from the handbook is complete. Icons are Lucide (CDN); Navbar/
> Footer live in the UI kits as product chrome (`site/chrome.jsx`,
> `ui_kits/*/`). Load any component via `window.VioletDesignSystem_7273c4`.

**UI kits** (`ui_kits/`)
- `reference-site/` — the international vitrine (Home, Catalog, Product Detail).
- `b2b-app/` — the Persian wholesale order app (Login, Dashboard/Catalog, Order tracking).

**Foundation cards** populate the Design System tab — Type, Colors, Spacing, Brand groups.
