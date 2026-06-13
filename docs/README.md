# Violet · Frontend Documentation (Phase 4)

Frontend specs for the two Violet products — the international **Reference Site**
(EN/RU/AR, LTR+RTL) and the Persian **B2B Order App** (RTL). These define behavior
the requirements imply but don't spell out, so the React build (Phase 5) has a
contract to follow. Everything is grounded in `../tokens.css` and the
`../design-system/` specs.

| Doc | Covers |
|---|---|
| [user-flows.md](user-flows.md) | End-to-end journeys (site + B2B + admin): actors, happy paths, branches, error branches, analytics events |
| [screen-states-and-edge-cases.md](screen-states-and-edge-cases.md) | Per-screen **loading / empty / error / edge cases** |
| [failure-states-matrix.md](failure-states-matrix.md) | Failure categories × screens, recovery owners, message-tone & resilience rules |
| [validation-rules.md](validation-rules.md) | Field/form validation: rules, timing, copy, MOQ, server-authoritative checks |
| [i18n-rtl.md](i18n-rtl.md) | Locales, routing, direction, fonts, numbers/dates, bidi, content fallback |
| [a11y-checklist.md](a11y-checklist.md) | WCAG 2.1 AA checklist: contrast (incl. gold caveat), keyboard, ARIA, RTL a11y |
| [seo.md](seo.md) | Site SEO: metadata, **hreflang**, JSON-LD schema, crawl hygiene, Core Web Vitals |
| [analytics.md](analytics.md) | GA4 event dictionary + Hotjar suite, funnels, consent/privacy, fail-silent |
| [trade-offs.md](trade-offs.md) | Architecture/UX decision log (rendering, i18n, images, data contract, analytics) |

Open questions awaiting client/owner input are collected at the bottom of
[trade-offs.md](trade-offs.md) (framework, repo shape, image hosting, browser scope,
backend reality). Resolving them turns the 🟡/⚪ rows 🟢 and unblocks Phase 5
scaffolding.

> Full project context: [violet-handbook.md](violet-handbook.md).
