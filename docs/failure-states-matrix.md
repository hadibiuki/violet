# Violet · Failure-State Matrix

One reference for *how every category of failure behaves*, so screens stay
consistent. Read with `screen-states-and-edge-cases.md` (per-screen detail).

**Owner** = who must act: **U**ser, **S**ystem (auto-retry/fallback), **A**dmin/support.
**Recovery** = the designed way out. Messages are non-blaming and localized; never
expose stack traces, IDs, or SQL.

---

## 1. By failure category (applies across screens)

| # | Failure | Where it bites | UX response | Recovery | Owner |
|---|---|---|---|---|---|
| N1 | **Network offline** | any data fetch | subtle "you're offline" banner; show cached content read-only; block writes | auto-resume on reconnect | S |
| N2 | **Request timeout / 5xx** | grid, PDP, dashboard | inline retry block in the failed region (rest of page lives) | "Retry" + auto-retry w/ backoff | S→U |
| N3 | **Slow response (>1s)** | grids, galleries | skeletons hold layout; no spinner-only screens | resolves on arrival | S |
| V1 | **Field validation** | all forms | inline message under field, `aria-invalid`, focus first error | user corrects | U |
| V2 | **Form-level / business rule** (e.g. qty < MOQ) | B2B PDP, cart, create-order | rule message at the control; submit disabled until satisfied | user adjusts | U |
| A1 | **Unauthenticated / session expired** | app routes | redirect to login, preserve intended destination | re-login → resume | U |
| A2 | **Unauthorized (role)** | dealer→admin route | 403 screen with safe message, link home | request access | U→A |
| A3 | **Account pending / disabled** | login | specific status message, no ordering | wait/contact sales | A |
| C1 | **Write conflict** (stock/price changed at submit) | create-order | block submit, list affected lines, let user adjust | re-review → resubmit | U |
| C2 | **Concurrent edit** (two admins) | admin records | version check, "changed since you opened", show diff | reload/merge | A |
| D1 | **Duplicate submit** | create-order, contact | idempotency key returns existing result, no double order | none needed | S |
| R1 | **Not found / unpublished** | PDP, deep links | proper **404** page (SEO-safe), link to catalog | navigate away | U |
| R2 | **Missing media** (image of 4000+) | cards, gallery | placeholder + alt; content still usable | CMS fixes asset | A |
| I1 | **Missing translation** | any localized string | fall back to default language for that string only | CMS fills gap | A |
| I2 | **RTL/bidi mixed content** | AR/FA + Latin SKU | bidi isolation (`<bdi>`); never garble | none | S |
| P1 | **Permission to download doc** before Approved | order docs | disabled control + reason | wait for approval | S |
| E1 | **Export too large / async** | admin reports | "preparing, we'll notify you"; non-blocking | notify when ready | S |
| X1 | **Third-party down** (GA4/Hotjar) | analytics | fail silently, never block UI or content | auto | S |

---

## 2. By screen × failure (quick lookup)

| Screen | Loading | 0 results / empty | Fetch error | Special failure |
|---|---|---|---|---|
| Home | hero+grid skeleton | hide empty rails; default hero | per-section retry (page survives) | bad banner ratio → cover-fit |
| New Models | filter+grid skeleton | "no new models" → catalog CTA | grid retry, filters live | new item missing image → placeholder |
| Catalog | grid skeleton (filters live) | name restrictive facet + clear | grid retry, pagination off | deep-link restores filters; back keeps scroll |
| PDP | gallery+info skeleton | omit empty spec rows | 404 if unpublished | variant image missing → keep prev + flag |
| Contact | — | — | preserve input + banner retry | async email → still confirm |
| Login | button loading | — | generic invalid msg | pending/disabled = specific msg; rate-limit |
| Dashboard | card/list skeleton | onboarding empty | per-widget retry | surface admin approval/rejection banner |
| Catalog B2B | grid skeleton | empty + clear | show item, disable Add | MOQ hint; out-of-stock dimmed |
| Cart | line skeleton | "empty list" + CTA | line items, total "—" retry | line < MOQ blocks order; item inactive |
| Create Order | form lock + btn loading | redirect (empty cart) | keep input + retry | **C1 stock/price conflict**; **D1 dup guard** |
| My Orders | list+timeline skeleton | onboarding empty | retry, list survives | docs gated pre-Approved; rejected → reason |
| Admin tables | table skeleton | setup empty + add | keep form on save fail | soft-delete if referenced; transition guard; **C2** |

---

## 3. Message tone & content rules
1. **Plain + specific + kind.** Say what happened and the next step. "We couldn't load
   the catalog. Retry." not "Error 500".
2. **No blame, no jargon, no IDs.** Internal codes go to logs, not the user.
3. **Localized & RTL-correct** in all four languages; allow text expansion.
4. **One primary recovery action** per state, visually obvious.
5. **Preserve user work** (form input, cart) across every failure.
6. **Accessible:** errors announced (live region), focus moves to the problem, color is
   never the only signal (icon + text).
7. **Security:** auth failures never reveal whether a username/email exists.

## 4. Resilience principles (engineering ↔ design contract)
- **Partial failure > total failure:** sections fail independently; one broken rail never
  blanks a page.
- **Skeletons not spinners** for content; spinners only for in-place button actions.
- **Idempotency** on all create/submit endpoints (orders, contact).
- **Submit-time validation is authoritative** for stock/price (optimistic UI must reconcile).
- **Graceful degradation:** no-JS/old-browser → core content (site SEO) still renders;
  analytics/enhancements are additive.
