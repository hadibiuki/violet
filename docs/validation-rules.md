# Violet · Form & Field Validation Rules

The authoritative spec for **what each field accepts, when it's checked, what it
says when wrong, and who is the source of truth**. Pairs with
`failure-states-matrix.md` (V1/V2 rows) and `screen-states-and-edge-cases.md`.

Principles (apply to every form, both products):
1. **Validate on blur, re-validate on change once errored** — never punish on the
   first keystroke. Submit re-runs everything.
2. **Server is authoritative.** Client validation is a courtesy for speed/UX; the
   server re-checks all rules (security: never trust the client).
3. **Inline, at the control.** Message under the field, `aria-invalid="true"`,
   `aria-describedby` → the error id. Focus moves to the **first** error on submit.
4. **Never color-only.** Icon + text + color together (a11y).
5. **Localized + RTL + text-expansion safe** in all four languages; numbers and
   digits respect locale (Persian digits / Jalali dates in the B2B app).
6. **Preserve input** across any failure (network/server). Never clear a form on error.
7. **Bidi-safe:** wrap Latin tokens (SKU, email, URL) in `<bdi>` inside RTL messages.

Legend: **Req** = required · **Fmt** = format/pattern · **Rng** = range/length ·
**Biz** = business rule · **Async** = server-side/remote check.

---

## 1. Shared field rules (both products)

| Field | Type | Rules | Error copy (EN, localize all) |
|---|---|---|---|
| Email | Req, Fmt | non-empty; RFC-5322-lite pattern; trim; lowercase on submit; max 254 | "Enter a valid email address." |
| Phone | Fmt | E.164 or local; digits/`+`/space/`-`; strip formatting before send; 7–15 digits | "Enter a valid phone number." |
| Name / contact | Req, Rng | 2–80 chars; allow Unicode letters, marks, spaces, `'-.`; collapse whitespace | "Enter your name." |
| Company | Req, Rng | 2–120 chars | "Enter your company name." |
| Country | Req | from controlled list (select), not free text | "Select a country." |
| Message / notes | Rng | ≤ 1000 chars; show live counter at 80%; allow newlines | "Keep it under 1000 characters." |
| Password (set) | Req, Rng | ≥ 8 chars, ≥ 1 letter + 1 number; max 128; strength meter (advisory) | "Use at least 8 characters with a letter and a number." |
| Password (confirm) | Biz | must equal the new password | "Passwords don't match." |
| Quantity | Req, Rng, Biz | integer ≥ 1; ≥ **MOQ**; ≤ stock (if enforced); stepper clamps | see §3 MOQ |

General format guards: trim leading/trailing whitespace on submit; reject
control characters; normalize Unicode (NFC) for names; enforce max-length at the
input (`maxlength`) **and** on the server.

---

## 2. Part A — Reference Site forms

The site is a vitrine: **no auth, no checkout**. The only real form is Contact;
filters/search are inputs but not "validated" so much as constrained.

### Contact / Find-a-dealer (F-A5)
| Field | Rules |
|---|---|
| Name | Req, 2–80 |
| Company | optional, ≤120 |
| Country | Req, from list |
| Email **or** Phone | **at least one** required (cross-field rule) → if both empty, error on the group |
| Message | Req, 10–1000 |
| Consent checkbox | Req (privacy/marketing per market) |
| Honeypot field | hidden; if filled → silently drop (anti-spam, no error shown) |

- **Submit behavior:** disable button + spinner; on success show confirmation +
  alternate contact info; on network/server fail → banner + retry, **input preserved**.
- **Async email delivery** may be queued — still confirm success to the user (don't
  block on SMTP).
- **Rate-limit / anti-bot:** honeypot + time-to-submit heuristic; optional captcha
  only if abuse appears (avoid by default for UX).

### Search & filters (catalog / new models)
- Not blocking validation — they **constrain** instead. Free-text search: trim,
  ≤ 64 chars, debounce 300ms, ignore empty. Filter values come from controlled
  facets (no invalid input possible). Out-of-range/garbage query params in a
  deep-link → ignore the bad param, keep the valid ones, never error the page.
- Language selector: value ∈ {en, ru, ar}; unknown → fall back to default.

---

## 3. Part B — B2B Order App forms (Persian, RTL)

Auth + ordering means **more, stricter** rules and security-sensitive messaging.

### Login (F-B1)
| Field | Rules |
|---|---|
| Username / email | Req |
| Password | Req (no strength check here — just presence) |
- **Invalid credentials → generic message** ("Invalid username or password.") — never
  reveal which was wrong (no user enumeration). 
- **Lockout:** after N failed attempts → rate-limit message + cooldown timer.
- **Account state** (server-driven): `pending` → "Your account is awaiting approval.";
  `disabled` → "Account disabled — contact sales." (specific, because they're not
  credential leaks).
- Session expiry mid-use → redirect to login, preserve intended destination.

### Forgot / reset password
- Request: email field (Req, Fmt). **Always** respond "If an account exists, we've
  sent a link." (no enumeration), even for unknown emails.
- Reset: new password + confirm (§1 rules); token must be valid + unexpired
  (server) → invalid/expired token screen with "request a new link".

### Quantity / MOQ (the core B2B rule) — V2 business rule
- `qty` must be an **integer ≥ MOQ** for that product. Below MOQ:
  - stepper **clamps** down to MOQ minimum; pre-fill the field with MOQ as a hint;
  - "Add to cart" / "Submit" **disabled** with message **"Minimum {MOQ} units."**
- Above available stock (if stock is enforced): clamp to stock or warn
  "Only {N} in stock." Submit-time re-check is authoritative (see Cart conflict).
- Non-integer / negative / non-numeric input → reject, snap to nearest valid.

### Cart / Request List
- Each line re-validates MOQ on edit; a line dropping below MOQ → flag that line,
  **block "Create Order"** until fixed (form-level gate).
- Line note ≤ 200 chars. Removing the last line → empty-cart state (not an error).

### Create Order (F-B2)
| Field | Rules |
|---|---|
| Shipping method | Req, from list |
| Shipping address / notes | Req if method needs it; ≤ 500 |
| Order notes | optional, ≤ 1000 |
- **Pre-submit gate:** cart non-empty, every line ≥ MOQ, all required fields filled.
- **Submit-time conflict (C1):** item out of stock or price changed since add →
  **block**, list affected lines, let dealer adjust + resubmit. Never silently alter.
- **Idempotency (D1):** idempotency key per submit → retry returns the existing
  order, never a duplicate. Button disabled during in-flight submit.

### Profile / Settings
- Editable: company info, contact, language, password. Same §1 rules.
- **Sensitive changes** (password, primary email) → require **re-authentication**.
- Optimistic save reverts on server rejection, showing the offending field.

### Admin Panel
| Form | Key rules |
|---|---|
| Create/approve user | unique company/contact (Async); warn on duplicate before create |
| Product add/edit | Req: name, SKU (unique, Async), category, ≥1 image, MOQ ≥1, wholesale price > 0; **publish gate** = checklist of missing required spec/image |
| Price / MOQ | numeric > 0; MOQ integer ≥ 1 |
| CMS content (3 langs) | each published page needs the **default language**; empty secondary language → warn + fall back, don't hard-block |
| Order status change | only **valid transitions** (forward, or Reject); block e.g. Completed→Submitted |
| Delete product | if referenced by open orders → **soft-deactivate**, block hard delete |

---

## 4. Timing & UX contract

| Moment | Behavior |
|---|---|
| On focus | no validation |
| On blur | validate that field (if it has content or is required) |
| On change (after first error) | re-validate live so the user sees it clear |
| On submit | validate all; focus + scroll to first error; announce count via live region ("3 fields need attention") |
| In-flight | disable submit, show loading; guard double-submit |
| On server error | map server field errors back to controls; show form-level banner for non-field errors; **preserve all input** |
| On success | clear only on confirmed success; show confirmation / redirect |

**Accessibility:** `aria-invalid`, `aria-describedby`, `role="alert"`/live region for
async errors, labels always present (never placeholder-as-label), error text not
conveyed by color alone, 44px min touch targets. See `a11y-checklist.md`.

**i18n:** all messages are keys with interpolation (`min_units` → "Minimum {n} units")
— never concatenate sentence fragments (word order differs RU/AR/FA). Numbers,
currency, and dates format per locale. See `i18n-rtl.md`.
