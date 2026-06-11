# Violet · Screen States & Edge Cases

For every screen: **Loading · Empty · Error · key Edge cases**. These are the
non-happy-path designs that the requirements imply but don't spell out. Components
referenced are specified in `design-system/components.md`.

Universal defaults (apply unless overridden):
- **Loading** = skeletons that match final layout (never spinners for content), images
  reserve space via `aspect-ratio`.
- **Empty** = illustration + one-line reason + one primary recovery action.
- **Error** = non-blaming message + retry; inline for fields, banner for sections,
  full-page only for route failures. Never expose stack traces.
- **Offline/slow** = keep cached content; subtle "you're offline" banner; queue nothing
  destructive.
- **RTL** = every state mirrors (AR site, all of B2B app).

---

## A — Reference Site

### Home
- **Loading:** hero skeleton (full-bleed block) + 8 card skeletons in the Highlight grid.
- **Empty:** hero has no campaign set → fall back to a default brand hero (never blank);
  "New Models" section with 0 new items → hide the section entirely, don't show an empty rail.
- **Error:** a section fails → render the rest; failed section shows inline "couldn't load,
  retry" — the page never fully fails because one rail broke.
- **Edge cases:**
  - Admin set a banner image with wrong aspect → object-fit cover + safe text area, never letterbox.
  - Very long localized hero title (RU/AR ~+30%) → clamp lines, scale down, never overflow.
  - First visit language detection vs. explicit choice → honor stored choice over geo guess.

### New Models
- **Loading:** filter bar skeleton + grid skeleton.
- **Empty:** no models currently flagged "New" → friendly "No new models right now — browse
  the full catalog" → CTA to Products. (Admin can flag/unflag; this state is expected.)
- **Error:** list fetch fails → retry block in place of grid; filters stay usable.
- **Edge cases:**
  - Filter yields 0 → "No matches" + "Clear filters"; keep chosen chips visible to undo.
  - A "New" model lost its image → placeholder, but card still links to PDP.

### Products (Catalog) — the core screen
- **Loading:** first load = full grid skeleton; filter/sort change = skeletons only in the
  grid region (filter panel stays interactive — AJAX, no full refresh).
- **Empty:** 0 results → empty state naming the most restrictive active facet ("Try removing
  *Automatic*"); one-tap clear.
- **Error:** grid fetch fails → retry in grid; pagination disabled until recovered.
- **Edge cases:**
  - **1000+ models** → must paginate/Load-More; never render all at once (perf). Preserve
    scroll position on back-from-PDP.
  - Deep-linked filtered URL (shared) → restore filters/sort/page from query params.
  - Conflicting filters (e.g., color not available with chosen material) → either disable
    impossible options or show 0-state gracefully.
  - Mobile: filters move to a bottom **drawer**; active-filter count badge on the trigger.
  - Slow images while scrolling fast → lazy-load + decode; cards never jump (reserved ratio).

### Product Details (PDP)
- **Loading:** gallery skeleton (main + thumbs) + info skeleton (name, specs lines).
- **Empty:** missing optional fields (weight, some specs) → omit those rows, don't show "N/A"
  noise; missing description → hide the description block (it's optional per reqs).
- **Error:** model not found / unpublished → 404 with "this model may have moved" + link to
  catalog (important for SEO — return proper 404, not soft-200).
- **Edge cases:**
  - Single image only → hide thumbnail strip + disable zoom-lens affordance gracefully.
  - **Color variants** → switching a variant swaps the whole gallery and updates the URL/ref;
    if a variant image is missing, keep the previous and flag for CMS.
  - Language switch on PDP → stay on the *same* model in the new language (F-A4).
  - RTL → two-column order reverses, spec table right-aligns, gallery/swipe axis flips.
  - Very long spec table → remains scannable; sticky header optional; fully translatable.
  - Similar products returns <4 → show what exists or hide the section; never pad with repeats.

### About / Brand · Technologies · Contact
- **Loading:** content skeleton blocks.
- **Empty:** a CMS section unpublished in current language → fall back to default language for
  that block (F-A4), log gap.
- **Error:** form (Contact) submit fail → preserve input, banner + retry; validation inline.
- **Edge cases:** Contact form spam → honeypot/anti-bot; success even if email delivery is
  async (queue + confirm).

---

## B — B2B Order App (Persian, RTL)

### Login / Forgot password
- **Loading:** button shows loading; form locked during submit.
- **Empty:** n/a.
- **Error:** invalid creds → generic message (no user enumeration); locked/pending account →
  specific, actionable message ("awaiting approval", "account disabled — contact sales").
- **Edge cases:** rate-limit after N attempts; password reset for unknown email → still show
  "if the account exists, we sent a link" (no enumeration); session expiry mid-use → redirect
  to login preserving intended destination.

### Dashboard
- **Loading:** stat-card + recent-orders skeletons.
- **Empty:** brand-new dealer, no orders → onboarding empty state ("Browse products to place
  your first order" → CTA Products); announcements area empty → hide.
- **Error:** a widget fails → that card shows retry; rest of dashboard renders.
- **Edge cases:** important admin message (approval/rejection) surfaces as a prominent banner;
  many recent orders → show latest N + "view all".

### Products (B2B) / PDP (B2B)
- **Loading:** grid/info skeletons (as site).
- **Empty:** no products in a filtered view → empty + clear; whole catalog empty (setup phase)
  → admin-facing "no products yet".
- **Error:** price/stock fetch fails → show product but disable "Add to cart" with "pricing
  unavailable, retry".
- **Edge cases:**
  - **MOQ enforcement:** qty below MOQ disables add/submit with "Minimum N units"; stepper
    clamps; pre-fill qty to MOQ as a hint.
  - **Out of stock / inactive:** card dimmed + "Out of stock"; PDP shows status, "Add" disabled,
    optional "notify"/contact.
  - Stock/inventory **sync** with warehouse → if availability is stale, treat submit-time check
    as source of truth (see Cart conflict).
  - Wholesale price hidden until login (it's a B2B price) — never expose on the public site.

### Cart / Request List
- **Loading:** line skeletons.
- **Empty:** "Your request list is empty" + CTA to Products.
- **Error:** subtotal calc fails → show line items, flag total as "—, retry".
- **Edge cases:**
  - Line drops below MOQ after editing → flag that line, block Create-Order until fixed.
  - Volume/tiered discount is **off now but designed-in** → UI has the slot, hidden when inactive.
  - Item removed/inactive while in cart → mark line "no longer available", let user remove.
  - Persisted cart across sessions/devices → restore; reconcile prices on load.

### Create Order
- **Loading:** submit in progress → disable form, button loading; **idempotent** (no double order).
- **Empty:** reached with empty cart → redirect to Cart with notice.
- **Error:** submit fails → keep all input, retry, never partial order.
- **Edge cases:**
  - **Conflict at submit:** an item went out of stock or price changed since adding → block,
    list affected lines, let dealer adjust + resubmit (never silently alter the order).
  - Required shipping/notes missing → inline validation, focus first error.
  - Network drop after server accepted but before client confirmation → on retry, idempotency
    key returns the existing order, not a duplicate.

### My Orders / Order detail / Documents
- **Loading:** list + timeline skeletons.
- **Empty:** no orders → onboarding empty (as Dashboard).
- **Error:** detail fetch fails → retry; list still browsable.
- **Edge cases:**
  - Status timeline reflects admin changes (Submitted→…→Completed / Rejected); only valid
    forward transitions or Reject shown.
  - **Documents** (proforma/invoice) unavailable before Approved → disabled with reason.
  - Rejected order → reason + "contact sales"; completed order → reorder shortcut (nice-to-have).
  - Long history → paginate events; timestamps locale-formatted (Persian digits/Jalali).

### Profile / Support
- **Empty:** no messages → "Start a conversation with the sales team".
- **Error:** send fails → keep draft, retry.
- **Edge cases:** sensitive profile changes (password) → re-auth; concurrent admin edit to the
  account → last-write conflict warning.

---

## Admin panels (B)
- **Loading:** table skeletons; bulk actions disabled until loaded.
- **Empty:** no users/products/orders yet → setup-oriented empty states with the primary "add".
- **Error:** save fails → keep form data, show which field/server error; optimistic UI reverts.
- **Edge cases:**
  - Publishing a product missing required spec/image → checklist of blockers.
  - Delete referenced by open orders → soft-deactivate, not hard delete.
  - Multi-language publish with an empty language → warn + fallback.
  - Invalid order-status transition → blocked.
  - Large export → generate async, notify when ready (don't freeze the UI).
  - Two admins editing same record → conflict detection (version check), don't clobber.

---

## Global / system-level edge cases
- **Auth/session:** expiry → graceful re-login keeping destination; role change mid-session
  (dealer↔admin) → re-evaluate access.
- **Permissions:** dealer hitting an admin route → 403 screen, not a redirect loop.
- **i18n:** missing translation key → fall back to default language for that string, never show
  the raw key; RTL/LTR mixed content (Latin SKU in Arabic) → bidi-isolate.
- **Performance:** 4000+ images → enforce lazy-load, WebP, CDN; never block first paint on media.
- **Network:** offline → cached read-only; retry queues for idempotent reads, block writes.
- **Forms:** double-submit guarded everywhere; unsaved-changes prompt on navigate-away.
- **Data integrity:** the two systems share product-data shape — a mismatch (model exists on
  site, not in app) → app treats as unavailable rather than crashing.
- **Accessibility states:** all of the above announced to screen readers (live regions for
  async results, focus moved to errors, status changes spoken).
