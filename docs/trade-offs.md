# Violet · Trade-off & Decision Log

Architectural/UX decisions that shape the front end, recorded so the *reasoning*
survives. Format: **Context → Options → Decision → Why → Revisit when**.
Status: 🟢 decided · 🟡 leaning · ⚪ open (needs your input).

These are recommendations grounded in the requirements; the 🟡/⚪ ones are where I'd
want your confirmation before they harden into code.

---

## TD-1 · Pagination vs. Infinite Scroll (catalog, 1000+ models) 🟢
**Context:** Catalog and New Models must handle 1000+ models; reqs allow *either*
"Pagination or Load More / Infinite Scroll".
**Options:** (a) numbered pagination, (b) infinite scroll, (c) "Load More" button.
**Decision:** **Numbered pagination on the public site; "Load More" in the B2B app.**
**Why:** Site is **SEO-critical and shareable** — paginated, crawlable URLs
(`?page=2`) index better and let users deep-link/return without losing place. Infinite
scroll hurts SEO, the footer, and "back" behavior. The B2B app isn't SEO-bound and
favors flow → "Load More" (keeps it simple, avoids infinite-scroll scroll-restore bugs).
**Revisit when:** analytics show high page-depth browsing where infinite scroll would lift
engagement, or catalog grows past where offset pagination is efficient (move to cursor).

## TD-2 · Rendering strategy (site) 🟡
**Context:** Site must be international, multilingual, SEO-strong (hreflang, metadata),
fast with heavy media; it's a vitrine (no auth, no checkout).
**Options:** (a) SSG/ISR (static + incremental), (b) SSR per request, (c) CSR SPA.
**Decision (leaning):** **SSG + ISR** (e.g., Next.js App Router or Astro) — pre-render
catalog/PDP/brand pages per language, revalidate on CMS change.
**Why:** Best SEO + TTFB for mostly-catalog content that changes via CMS, not per-user.
ISR handles 1000+ PDPs without rebuilding everything. CSR-only would tank SEO (a core goal);
full SSR is unnecessary cost for non-personalized pages.
**Revisit when:** content becomes personalized/real-time, or build times balloon (then lean
more on ISR/on-demand).
**⚪ Needs input:** preferred framework (Next.js vs. Astro vs. Remix) — affects scaffolding.

## TD-3 · Rendering strategy (B2B app) 🟢
**Decision:** **CSR SPA behind auth** (Vite + React). No SEO need; it's an app.
**Why:** Snappy interactions, simple auth/session model, no crawler concerns.
**Revisit when:** never likely; only if parts need shareable links.

## TD-4 · One repo or two? ⚪
**Context:** Two products, *not technically coupled*, but must share brand, **design
system**, and product-data shape.
**Options:** (a) monorepo (pnpm/turbo) with shared `design-system` + `types` packages,
(b) two separate repos, (c) shared private npm package.
**Decision (recommend):** **Monorepo** with shared packages: `@violet/tokens`,
`@violet/ui`, `@violet/types` (product-data contract).
**Why:** Keeps brand + data shape in sync (a stated requirement) without coupling runtime.
Each app deploys independently. Two repos would drift; the design system is already built to
be shared.
**Revisit when:** teams/ownership split hard enough that repo isolation outweighs sync cost.

## TD-5 · i18n & content model (site, EN/RU/AR) 🟢
**Context:** Localized (not machine-translated) content; full RTL for Arabic; per-language
SEO + hreflang; language switch keeps the user in place.
**Decisions:**
- **Routing:** path-prefix locales (`/en/…`, `/ru/…`, `/ar/…`) — clean hreflang, shareable.
- **Direction:** `dir` from locale on `<html>`; **logical CSS** everywhere (already in tokens).
- **Content:** CMS holds per-language fields; **fallback to default language per-field**, never
  blank, never auto-MT.
- **Library:** `next-intl`/`i18next` (framework-dependent on TD-2).
**Why:** Matches the explicit requirements (localized, RTL-first, hreflang, in-place switch).
**Revisit when:** adding more languages (the model already scales).

## TD-6 · Filtering: client vs. server 🟢
**Context:** Rich facets (gender, strap, color, movement, water-resistance, size, style,
New-only), AJAX without full refresh, over 1000+ models.
**Decision:** **Server-side filtering + pagination**, results via AJAX; filter *state* lives in
the URL query (shareable, restorable).
**Why:** 1000+ items is too many to ship to the client; server filtering keeps payloads small,
enables proper pagination counts, and the URL-as-state gives deep-linking + back-button sanity.
**Revisit when:** catalog is small per-category enough to filter client-side for instant feel
(could hybridize: server page + client refine within page).

## TD-7 · Image pipeline (4000+ frames) 🟢
**Context:** 4000+ frames, gallery zoom, color variants, mobile swipe, "speed is critical".
**Decision:** **CDN + on-the-fly/derivative transforms** (WebP/AVIF, responsive `srcset`,
multiple sizes), `loading="lazy"`, `aspect-ratio` reservations, blur/skeleton placeholders,
preload only the active gallery + variant thumbs.
**Why:** Build-time transforms of 4000+ assets don't scale; a CDN with on-demand variants does.
Reqs explicitly call for WebP/compressed/lazy.
**Revisit when:** asset count or cost makes a pre-baked pipeline cheaper, or AVIF support is universal.
**⚪ Needs input:** is there an existing DAM/CDN (Cloudinary, imgix, S3+CloudFront) or do we choose?

## TD-8 · Product-data contract (shared) 🟢
**Context:** Site and app must show the *same* model identity/specs though decoupled.
**Decision:** A versioned **shared TypeScript type package** (`@violet/types`) defining
`Product`, `Variant`, `SpecSheet`, `Category`, plus a documented JSON shape both backends honor.
**Why:** Single definition of "a Violet model" prevents drift; either system can map its own
API to it. Wholesale-only fields (price, MOQ, stock) are an *extension* used by the app, absent
on the public site.
**Revisit when:** the two backends diverge enough to need per-system DTOs (then map at the edge).

## TD-9 · Catalog state & data fetching (both apps) 🟢
**Decision:** **Server-state via TanStack Query** (caching, retries, background refetch);
**URL as the source of truth** for filters/sort/page; minimal global client state (auth, cart, locale).
**Why:** Matches the failure-state contract (retry/stale-while-revalidate), keeps screens
resilient and shareable, avoids a heavy global store.
**Revisit when:** complex cross-screen client state appears (then add Zustand for that slice only).

## TD-10 · Order-submit integrity (B2B) 🟢
**Context:** Stock/price can change between add-to-cart and submit; double-submit risk.
**Decision:** **Idempotency key per order submit** + **submit-time re-validation** of stock/price;
on conflict, block and surface affected lines (never silently alter). Optimistic cart UI reconciles
against server on load.
**Why:** Prevents duplicate orders and "price changed under me" surprises — both real B2B failures.
**Revisit when:** inventory becomes real-time enough to reserve stock at add-to-cart.

## TD-11 · Analytics: GA4 + Hotjar 🟢
**Context:** Reqs mandate GA4 (or equivalent) + a full Hotjar-level behavior suite.
**Decision:** **GA4 for events/funnels** (taxonomy in `user-flows.md`) + **Hotjar** for
recordings/heatmaps/funnels/forms/surveys; **consent-gated**, **fail-silent** (never block UI),
loaded async/deferred so they don't hurt LCP.
**Why:** Directly required; isolating them protects performance and privacy compliance.
**Revisit when:** privacy regulation in target markets (RU/Arab/EU) requires a different vendor.

## TD-12 · Styling approach 🟢
**Context:** Two apps, RTL, theming, shared system.
**Decision:** **Tailwind consuming the CSS-variable tokens** (`tailwind.preset.js`) +
logical-property utilities for RTL. Component primitives (headless) for a11y (e.g., Radix).
**Why:** Tokens stay the single source of truth (themeable, Figma-synced); Tailwind gives speed;
headless primitives give accessible focus/keyboard behavior for free.
**Revisit when:** a component needs styling Tailwind can't express cleanly (drop to CSS module
against the same tokens).

## TD-13 · Accessibility & browser scope 🟡
**Decision (recommend):** Target **WCAG 2.1 AA**, modern evergreen browsers + Safari iOS,
graceful degradation (site content renders without JS for SEO/no-JS).
**⚪ Needs input:** any required legacy support (older Android webviews common in some markets)?

---

## Open questions for you (⚪)
1. **Framework** for the site (TD-2): Next.js, Astro, or Remix?
2. **Repo shape** (TD-4): monorepo with shared packages — OK to proceed?
3. **Image hosting** (TD-7): existing CDN/DAM, or should I pick one?
4. **Browser/legacy scope** (TD-13): any old-device targets in RU/Arab/Iran markets?
5. **Backend reality:** are the two backends/APIs already defined, or are we designing the
   front end against a to-be-built API (affects the data contract in TD-8)?

Answering these turns the 🟡/⚪ rows into 🟢 and unblocks scaffolding.
