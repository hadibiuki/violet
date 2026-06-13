# Violet · Analytics Spec (GA4 + Hotjar)

The full event taxonomy and behavior-analytics plan for both products. Requirements
mandate GA4 (or equivalent) **plus** a Hotjar-level behavior suite. Decisions live in
`trade-offs.md` (TD-11); the flow-level event list is seeded in `user-flows.md` — this
doc is the **authoritative event dictionary + parameters + consent/privacy rules**.

Implementation contract (TD-11): **consent-gated, fail-silent, async/deferred** so
analytics never block LCP/INP or break the UI if a vendor is down (X1 in the failure
matrix). Loaded after consent; respects Do-Not-Track and per-market privacy law.

---

## 1. Conventions

- **Naming:** `snake_case`, verb-first or object-first but consistent; lowercase.
- **Every event** carries the global context params below (auto-attached):

| Param | Values | Notes |
|---|---|---|
| `product_surface` | `site` \| `b2b_app` | which of the two systems |
| `locale` | `en`\|`ru`\|`ar`\|`fa` | active locale |
| `dir` | `ltr`\|`rtl` | layout direction |
| `theme` | `light`\|`dark` | site theme |
| `device` | `mobile`\|`tablet`\|`desktop` | breakpoint bucket |

- **PII:** never send names, emails, phone, addresses, raw order contents, or
  wholesale prices to analytics. Use **opaque IDs** (`order_id`, `sku`,
  pseudonymous `user_ref`), not identities. Wholesale price is commercially
  sensitive — never logged.
- **Consent:** no analytics fires before consent (GA4 Consent Mode v2 +
  Hotjar suppression). Denied → no tracking, app still fully works.

---

## 2. GA4 — Site (A) event dictionary

| Event | When | Key params |
|---|---|---|
| `page_view` | every route (SPA-aware) | `page`, `page_location`, `page_title`, +global |
| `view_new_models` | New Models list opens | `count` |
| `view_catalog` | Products/catalog opens | `category?`, `result_count` |
| `filter_apply` | a facet applied/removed | `facet`, `value`, `result_count`, `active_filter_count` |
| `catalog_sort` | sort changed | `sort` (`newest`\|`az`) |
| `catalog_paginate` | page/Load-more | `page`, `mechanism` (`pagination`) |
| `card_hover_quickview` | quick-view shown | `sku` |
| `view_item` | PDP opens | `sku`, `model`, `category`, `is_new` |
| `pdp_gallery_interact` | zoom/swipe/thumb | `sku`, `action` (`zoom`\|`swipe`\|`thumb`) |
| `variant_switch` | color variant changed | `sku`, `from_variant`, `to_variant` |
| `similar_click` | similar product clicked | `from_sku`, `to_sku` |
| `view_brand` | About/brand section | `section` |
| `download_catalog` | PDF/catalog download | `sku?`, `context` |
| `language_switch` | locale changed | `from`, `to` |
| `theme_toggle` | light/dark toggled | `to` |
| `contact_submit` | contact form success | `country` (coarse), `has_company` (bool) |
| `contact_error` | contact validation/submit fail | `reason` (`validation`\|`network`\|`server`) |
| `search` | site search executed | `query_len`, `result_count` (not the raw query, to avoid PII leakage) |
| `outbound_click` | external/dealer link | `domain` |

> No `add_to_cart`/`purchase` on the site — it has **no cart/checkout** (out of scope).

## 3. GA4 — B2B App (B) event dictionary

| Event | When | Key params |
|---|---|---|
| `login_success` | auth ok | `user_ref` |
| `login_failure` | auth fail | `reason` (`invalid`\|`locked`\|`pending`\|`disabled`) |
| `password_reset` | reset completed | — |
| `view_catalog_b2b` | products list | `result_count` |
| `catalog_filter` | filter/search (app) | `facet`, `value`, `result_count` |
| `view_item_b2b` | B2B PDP opens | `sku`, `moq`, `in_stock` (bool) |
| `moq_block` | qty below MOQ blocked add/submit | `sku`, `attempted_qty`, `moq` |
| `add_to_cart` | line added | `sku`, `qty` (no price) |
| `cart_update` | qty/remove edit | `sku`, `action` (`update`\|`remove`), `qty` |
| `begin_create_order` | Create Order opened | `line_count`, `total_units` |
| `order_submit` | order created (Submitted) | `order_id`, `line_count`, `total_units` (**no monetary total** to analytics — sensitive) |
| `order_submit_conflict` | C1 stock/price conflict at submit | `order_id?`, `affected_lines` |
| `order_submit_error` | submit network/server fail | `reason` |
| `view_order` | order detail opened | `order_id`, `status` |
| `order_status_view` | timeline viewed | `order_id`, `status` |
| `download_invoice` | proforma/invoice downloaded | `order_id`, `doc_type` |
| `support_message_send` | message to sales | `thread_ref` |
| `profile_update` | settings saved | `fields_changed` (keys only) |

### Admin (B) — operational events
`admin_user_approve` (`action` approve/reject), `admin_product_save`
(`sku`, `is_new` bool), `admin_order_status` (`order_id`, `from`, `to`),
`cms_publish` (`page`, `langs_filled[]`), `admin_export` (`report`, `range`).

## 4. Funnels (GA4 + Hotjar)

- **Site discovery funnel:** `view_catalog`/`view_new_models` → `filter_apply` →
  `view_item` → `download_catalog`/`outbound_click`/`contact_submit`.
- **B2B order funnel (core):** `view_catalog_b2b` → `view_item_b2b` → `add_to_cart`
  → `begin_create_order` → `order_submit`. Watch drop-off at `moq_block` and
  `order_submit_conflict`.
- **Auth funnel:** login attempts → `login_success` vs `login_failure{reason}`.

Define these as GA4 funnel explorations and Hotjar funnels so drop-off is visible.

## 5. Hotjar (behavior suite)

Required behavior-analytics coverage (TD-11), consent-gated and suppressed on
sensitive fields:

- [ ] **Session recordings** — both products; **mask all PII** (form inputs,
      addresses, the entire B2B price/total columns) via Hotjar field suppression.
- [ ] **Heatmaps** — click / move / scroll on high-traffic pages: Home, Catalog,
      PDP (site); Catalog, PDP, Cart, Create-Order (app).
- [ ] **Funnels** — the funnels in §4 (catalog→PDP→cart→order; discovery).
- [ ] **Form analysis** — Contact (site); Login, Create-Order, Cart (app): drop-off
      field, time-to-complete, error fields.
- [ ] **Surveys / feedback widget** — on-site survey + feedback button (post-PDP,
      post-order); throttled, dismissible, never blocking.
- [ ] **Rage-click / u-turn / exit detection** — on high-drop pages to flag UX pain.

**Masking is mandatory** on: all credentials, contact details, addresses, order
monetary values, wholesale prices. Default Hotjar to "mask all text" then unmask
only safe, non-PII content.

## 6. Privacy, consent & performance

- [ ] **Consent banner** before any tracking; GA4 **Consent Mode v2**; Hotjar held
      until consent. Denied = zero analytics, full functionality.
- [ ] **Per-market law:** EU (GDPR), Russia (152-FZ data-localization implications),
      Arab markets, Iran (B2B) — confirm vendor legality per market; TD-11 notes a
      vendor swap may be required for some regions. Keep the event layer
      **vendor-abstracted** (a thin `track(event, params)` wrapper) so GA4/Hotjar can
      be replaced without touching call sites.
- [ ] **Fail-silent:** a blocked/dead analytics script never throws into the UI,
      never blocks render, never delays navigation (X1).
- [ ] **Performance:** load async/deferred after first paint; don't hurt LCP/INP
      (see `seo.md` §6). No analytics on the critical render path.
- [ ] **Data minimization:** send only the params listed; no free-text queries, no
      PII, no prices. Coarsen where possible (country bucket, query length).

## 7. Implementation contract (React phase)

- A single **`track(eventName, params)`** util injects global context (§1),
  enforces consent, swallows errors, and routes to GA4 + the Hotjar bridge.
- Event names are **constants** (typed enum) shared so site/app don't drift — lives
  with the shared packages (`@violet/*`, TD-4/TD-8).
- Page-view tracking is router-driven (SPA/SSG-aware), fired on route commit.
- QA: a debug mode logs events to console; verify params + no-PII in staging before
  enabling production keys.

> Cross-reference: flow-level event placement → `user-flows.md`; failure of analytics
> vendors → `failure-states-matrix.md` (X1); consent/perf → `seo.md` + `trade-offs.md`
> (TD-11).
