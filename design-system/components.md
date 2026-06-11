# Violet · Component Library (spec)

Behavioural + visual spec for shared components. These are tokens-only (no hard
hex/px). Each entry: **anatomy → variants → states → notes**. ✅ = used by, S = Site, B = B2B app.

Global rules:
- Every interactive element: `:focus-visible` shows `shadow-focus`; disabled =
  50% opacity + `cursor: not-allowed`, not removed from the a11y tree.
- All spacing/padding from the scale; all color from semantic tokens.
- RTL: use logical properties; mirror directional affordances only.

---

## Foundational

### Button  (S B)
**Anatomy:** `[leading icon?] label [trailing icon?]`, radius `md`, font `medium`.
**Sizes:** `sm` (h 32, `text-sm`, px `space-3`) · `md` (h 40, `text-sm`, px `space-4`) ·
`lg` (h 48, `text-base`, px `space-6`, the site CTA size).
**Variants:**
| Variant | Rest | Hover | Use |
|---|---|---|---|
| Primary | `bg-primary` / `on-primary` | `bg-primary-hover` | the one main action per view |
| Secondary | `surface` + `border-strong` | `surface-sunken` | secondary actions |
| Ghost | transparent / `text` | `overlay-hover` bg | low-emphasis, toolbars |
| Accent | `bg-gold-400` / `on-accent` | `gold-500` | rare premium CTA (e.g. Download Catalog) |
| Danger | `bg-danger` / white | `red-700` | destructive (admin delete) |
**States:** rest · hover (+`translateY(-1px)`) · active (`primary-active`, no lift) ·
focus · disabled · **loading** (spinner replaces leading icon, label stays, width locked).
**RTL/a11y:** icon sits on the inline-start; trailing "→" mirrors. Min 44px touch on mobile.

### Icon Button  (S B) — square, radius `md`, icon 20–24, `aria-label` required. Ghost by default.

### Link  (S B) — `text-link`, underline on hover; visited not differentiated. External links get an icon + `rel="noopener"`.

### Input / TextField  (S B)
Label (persistent, above) → field (`input-bg`, `border-input`, radius `sm`, h 40/44) →
hint / error. **States:** rest · focus (`border-primary` + `shadow-focus`) · filled ·
error (`border-danger` + message + `aria-invalid`) · disabled · read-only.
RTL: `text-align: start`; leading affix on inline-start.

### Select / Dropdown  (S B) — trigger like Input + caret (mirrors in RTL); menu uses `shadow-popover`, `z-dropdown`; keyboard navigable; selected row `primary-subtle`.

### Checkbox / Radio / Switch  (S B) — checked = `bg-primary`; 18px box radius `sm` (checkbox), `full` (radio); label clickable; group has legend.

### Quantity Stepper  (B) — `[−] [number input] [+]`, used on B2B PDP + cart. Enforces **MOQ** (min order qty): below MOQ disables submit and shows "Minimum N". Buttons clamp at min/max; respects RTL ordering.

### Search field  (S B) — Input + leading search icon + clear button; debounced; drives AJAX results. Site: global model search. App: catalog search.

---

## Product & catalog

### Badge  (S)
Pill, `text-xs` `medium`. **NEW** = `bg-primary`/white. **LIMITED** = `bg-gold-500`/ink.
Status semantics paired with text (never color-only). Positioned top-inline-start on cards.

### Product Card  (S B)
**Anatomy:** square image (reserved `aspect-ratio`) · badge overlay · model name
(`text-base`/`medium`) · model code (`text-xs` mono `muted`) · [B2B: wholesale price + MOQ].
**States:** rest (`shadow-card`) · **hover** → second image + lift + `shadow-card-hover` ·
focus · loading (skeleton) · unavailable (B2B: dimmed + "Out of stock" chip).
Entire card is one link to PDP; secondary actions (B2B "Add") are nested buttons.
RTL: text aligns to start; badge flips to inline-start corner.

### Filter Panel / Filter Chip  (S B)
Desktop: left rail (`surface-sunken`), grouped accordions (Gender, Strap, Case/Dial
color, Movement Quartz/Automatic, Water resistance, Size, Style, New-only).
Mobile: bottom **drawer** (`z-drawer`). Active filters render as removable chips above
the grid; "Clear all" present. Filters apply via **AJAX, no full refresh**; grid shows
result count in a live region. RTL: rail moves to the inline-start, accordion carets mirror.

### Sort control  (S B) — Select: Newest · A–Z · (Popular later). Persists in URL query.

### Pagination / Load More  (S B)
Two interchangeable patterns (final choice in trade-offs log). Pagination: numbered,
current = `primary`; prev/next chevrons mirror in RTL. Load More: button + appended
results + skeletons during fetch. Always expose total count for orientation.

### Breadcrumb  (S) — `Home › Products › {Model}`. Separator `›` mirrors to `‹` in RTL. Last crumb is current (`aria-current`), not a link.

### Spec Table  (S B) — zebra rows (`surface` / `surface-sunken`), label column `muted`,
value column `text`. Fully translatable, right-aligned in RTL. Used on PDP (full specs)
and dashboards.

### Image Gallery (PDP)  (S B)
Main image + thumbnail strip (below on mobile, beside on desktop). **Zoom** (hover-lens
desktop / pinch mobile), **swipe** on mobile, thumbnail click/hover swaps main. Color
variant chips swap the whole gallery. Reserves space; lazy-loads non-active frames.
RTL: thumbnail order + swipe direction follow inline axis.

---

## Navigation & shell

### Header / Top Nav  (S B)
**Site:** logo · main menu (Home, New Models, Products, About, Contact) · **language
selector (EN/RU/AR)** · search. **Sticky**, shrinks `header-height`→`scrolled` on scroll,
`z-sticky`, `shadow-sm` once scrolled. **App:** logo · primary nav (Dashboard, Products,
My Orders, Invoices, Cart, Support) · user menu. Mobile: hamburger → drawer.
RTL: nav order + drawer slide-in flip to the inline-start.

### Language Selector  (S) — dropdown EN/RU/AR with flags+name; switching sets `<html lang/dir>`, swaps font, keeps the user on the same page; reachable on **every** screen.

### Footer  (S) — page links · languages · contact · social · copyright. Multi-column desktop → stacked mobile.

### Tabs  (S B) — underline indicator in `primary`; `role=tablist`; arrow-key nav; indicator animates `duration-base`. Used for New Models / catalog views, app sub-sections.

### Cart / Request List  (B) — line items (image, name, qty stepper, line note), running subtotal (volume discount hook present but **off** for now), "Create Order" CTA.

---

## Feedback & status

### Order Status Pill + Timeline  (B)
Pipeline: **Submitted → Reviewing → Approved → Shipped → Completed** (+ Rejected).
Pill: status-specific bg/fg tokens (`status-*`) + matching icon + label. **Timeline**
(vertical): done steps `primary`/`success` filled, current step ringed + pulsing dot,
future steps `muted` hollow; each event timestamped. Connector line mirrors direction
in RTL (top-down, but node alignment follows inline-start).

### Toast  (S B) — `z-toast`, top-inline-end (flips in RTL), `shadow-popover`, auto-dismiss + manual close, variants success/info/warning/danger with icon. Announced via live region.

### Modal / Dialog  (S B) — scrim (`color-scrim`), centered `surface` card radius `xl`,
`shadow-2xl`, focus-trapped, ESC + scrim-close, restores focus. Used for quick-view, confirmations.

### Drawer  (S B) — slides from inline-end (filters/cart) or inline-start (mobile nav), `z-drawer`, mirrors in RTL.

### Empty / Error / Loading states (per screen)
- **Skeleton** for grids/cards/tables (no spinners) — shimmer over `color-skeleton`.
- **Empty:** illustration + one-line reason + a primary recovery action ("No results — clear filters").
- **Error:** non-blaming message + retry; never a raw stack trace. Inline for fields, banner for sections, full-page only for route-level failures.
- **Offline / slow:** keep cached content visible; show a subtle banner.

### Dashboard Stat Card  (B) — label (`muted` `text-xs`), value (`text-2xl` `semibold`), optional delta (success/danger). Links to its detail view.

---

## Admin (B, content & order management)
Reuse the above plus: data **Table** (sortable headers, row actions, bulk select,
pagination, sticky header), form layouts (product add/edit, image upload/reorder,
category & menu management, banner management, status change), and CSV/Excel export
affordance. Same tokens — denser spacing, `text-sm` defaults. "No technical knowledge
required" → plain labels, inline help, forgiving validation.

---

## Documentation backlog (next deliverables)

Per-screen docs to produce after this system is approved:

**User flows**
- Site: Home → New Models → PDP → Contact/find-dealer
- Site: Home → Products (filter/sort) → PDP → similar products
- App: Login → Dashboard → Products → Cart → Create Order → My Orders (track)
- App admin: approve user → manage product/price/MOQ → review order → change status → export

**Per screen: edge cases · failure states · empty states**
Home · New Models · Catalog · PDP · About/Brand · Contact · Login · Forgot-password ·
Dashboard · Catalog(B2B) · PDP(B2B) · Cart · Create-Order · My-Orders · Order-detail ·
Invoices · Profile · Support/Messages · Admin panels.

**Trade-off logs** (decision + why + revisit trigger)
- Pagination vs. infinite scroll for 1000+ models
- Rendering: SSR/SSG (SEO, hreflang) vs. CSR for the site; CSR/SPA for the app
- i18n: per-language routes & content model; translation workflow (no machine MT)
- Image pipeline: build-time vs. on-the-fly transforms; CDN strategy for 4000+ frames
- Filtering: client-side vs. server-side at this catalog size
- State/data: shared product-data contract between the two non-coupled systems
- Analytics: GA4 + Hotjar event taxonomy (session recording, heatmaps, funnels, custom events)

**Failure-state matrix** (one table): per network/permission/validation/empty/conflict
failure × per screen → message, recovery, owner (user vs. system).
