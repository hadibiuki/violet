git status# Violet · Remaining Implementation Tasks

Audit date: 2026-07-02

This backlog compares the current React monorepo with:

- every specification in `docs/`;
- `Violet Design System/design_handoff_violet/`;
- the design tokens, component contracts, and 11 live HTML templates.

The HTML design bundle is reference-only and may be removed after these tasks are
finished. Production code must continue to use `@violet/tokens`, `@violet/ui`, and
the conventions of each app.

## P0 · Restore a reliable baseline

- [x] Implement the missing B2B `Admin` route currently imported by `App.tsx`.
- [ ] Make `build`, `typecheck`, and `lint` run non-interactively in the workspace.
- [ ] Add a small smoke-test matrix for the public routes and authenticated app routes.

## P1 · Complete the design-system contract

- [x] Add the missing `ImageUploader` primitive, contract behavior, export, and story.
- [ ] Compare every production primitive with its handoff `.d.ts` and `.prompt.md`;
      close prop, state, RTL, keyboard, and visual gaps.
- [ ] Harden `Modal`, `Tooltip`, `Tabs`, `Select`, `SortDropdown`, `Toast`, and
      `QuantityStepper` for the keyboard/focus requirements in the a11y spec.
- [ ] Verify light/dark token parity and WCAG AA token pairs, especially gold and
      muted text.
- [ ] Remove remaining visual hard-coding where a semantic `--vt-*` token exists.

## P1 · Reference Site screens and behavior

- [x] Add the Collection Line screen: selector, 21/9 campaign, story, stats, and grid.
- [x] Add a user-facing light/dark theme toggle and persist the preference.
- [x] Complete catalog filtering, sorting, numbered pagination, mobile drawer,
      active chips, and empty state.
- [ ] Add simulated loading/retry states and URL/scroll restoration.
- [x] Complete PDP tabs, gallery switching, variants, and related products.
- [ ] Add advanced gallery zoom and missing-image recovery.
      behavior, loading state, and related-product edge cases.
- [ ] Finish Contact validation: email-or-phone, consent, blur/change timing,
      focus-first-error, preserved input, and submit failure/success states.
- [ ] Add partial-failure/loading states to Home and CMS-backed content pages.
- [ ] Verify every screen in EN, RU expansion, and AR RTL/bidi.

## P1 · B2B Order App screens and behavior

- [x] Complete Admin: overview, dealer approvals, products, orders/status changes,
      reports/export, forms, confirmations, and empty/error states.
- [x] Add B2B product-detail route instead of catalog-only quick ordering.
- [x] Add Forgot Password UI and navigation.
- [x] Add Profile/Settings and Support/Messages screens.
- [x] Add a real 403 screen.
- [x] Persist authenticated mock session and cart state across reloads.
- [ ] Implement submit conflict + idempotency UX.
- [ ] Add loading, empty, offline, per-widget retry, and session-expiry states.
- [x] Enforce valid forward-only admin order transitions.

## Deferred · Outside the current UI-only scope

- [ ] Add localized canonical, reciprocal hreflang, Open Graph, Twitter metadata,
      Organization/WebPage/Product/Breadcrumb JSON-LD, robots, and locale sitemaps.
- [ ] Add the typed, consent-gated, fail-silent analytics layer and specified events.
- [ ] Add consent UI and ensure no GA4/Hotjar request occurs before consent.
- [ ] Replace in-memory/mock data access with typed query adapters while keeping
      fixtures for development; integrate real APIs when available.
- [ ] Add responsive image variants (`srcset`/`sizes`), error fallbacks, preload/LCP
      rules, and licensed Violet imagery when supplied.
- [ ] Confirm production font and image licensing.

## P2 · Cross-cutting quality gates

- [ ] Add automated axe/Lighthouse checks for key routes, themes, and locales.
- [ ] Add keyboard, 320px/reflow, 200% zoom, reduced-motion, and screen-reader QA.
- [ ] Add noindex/nofollow protection for the B2B app.
- [ ] Verify native Persian digits, Jalali dates, `<bdi>` isolation, and logical CSS.
- [ ] Verify all loading/empty/error states against the failure-state matrix.
