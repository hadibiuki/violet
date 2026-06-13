# Violet · Internationalization & RTL Rules

How both products handle **language, direction, fonts, numbers, dates, and bidi**.
RTL is a first-class citizen (Arabic on the site, all of the Persian B2B app),
not a mirror bolted on later. Grounds the decisions in `trade-offs.md` (TD-5) and
the tokens in `tokens.css`.

| | Site (A) | B2B App (B) |
|---|---|---|
| Languages | English, Russian, Arabic | Persian (Farsi) |
| Direction | LTR (en/ru) + **RTL (ar)** | **RTL** |
| Font (UI) | `--vt-font-sans` (Inter) | `--vt-font-fa` (Vazirmatn) |
| Font (RTL) | `--vt-font-ar` (Cairo / Noto Kufi) | `--vt-font-fa` |
| Display | `--vt-font-display` (Cormorant) — Latin only; RTL uses the locale font for headings | n/a (functional UI) |
| Digits | en: Latin · ru: Latin · ar: Arabic-Indic (or Latin per market) | **Persian digits** |
| Calendar | Gregorian | **Jalali (Shamsi)** for display |

---

## 1. Locale model & routing

- **Site routing = path-prefix locales:** `/en/…`, `/ru/…`, `/ar/…`. Clean for
  `hreflang`, shareable, crawlable (see `seo.md`). Default locale resolves at `/`
  → redirect to the negotiated locale.
- **Language negotiation order:** explicit stored choice → URL prefix → `Accept-Language`
  → geo guess → default (`en`). **Honor an explicit choice over geo** (edge case in
  screen-states).
- **Switching language keeps the user in place** (F-A4): same page/product, swap
  locale, update `<html lang dir>`, font, content, and the URL/`hreflang`.
- **B2B app:** single locale (`fa`), `dir="rtl"` fixed; no locale routing needed.
- Persist choice in a cookie/localStorage; reflect in the URL on the site.

## 2. Direction handling

- Set `dir` on `<html>` from the locale (`ar`,`fa` → `rtl`; else `ltr`) **and**
  `lang`. Everything downstream uses **logical CSS** so it flips for free.
- **Logical properties only** — already the rule in tokens/components:
  - `margin-inline-start/-end`, `padding-inline-*`, `inset-inline-*`
  - `text-align: start/end` (never hard `left/right`)
  - `border-inline-start`, `border-start-start-radius`, etc.
  - Fl/grid: rely on writing-mode; avoid `flex-direction: row-reverse` hacks.
- **Mirror directional affordances** (arrows, chevrons, breadcrumb separators,
  back/next, progress/timeline, carousel/swipe axis, drawer slide-in side).
- **Do NOT mirror:** logos, the watch product imagery, play/pause/media glyphs,
  external-brand marks, numbers themselves, checkmarks.
- Icons that imply direction get a `[dir="rtl"] { transform: scaleX(-1) }` or a
  mirrored variant; non-directional icons stay.

## 3. Fonts & loading

- Font assigned by `lang`/`dir` (already wired in `tokens.css`):
  `[lang="fa"] → --vt-font-fa`, `[lang="ar"] → --vt-font-ar`.
- `font-display: swap`; preload the **active** locale's primary weight only
  (don't ship Vazirmatn to an English visitor). Subset where possible.
- Cormorant Garamond is **Latin display only** — for RU large headings it's fine
  (Cyrillic coverage), for AR/FA headings use the locale font (Cairo/Vazirmatn),
  not a serif that lacks the script.
- Line-height: RTL scripts (Arabic/Persian) need a touch more leading — use
  `--vt-leading-normal`/`-loose` for body, avoid `tight` on Arabic/Persian text.

## 4. Numbers, currency, dates

- **Format via `Intl`**, never hand-roll: `Intl.NumberFormat`, `Intl.DateTimeFormat`,
  `Intl.RelativeTimeFormat`, with the active locale.
- **Persian digits** in the B2B app (`fa-IR`); Arabic-Indic vs Latin digits on the
  site is a per-market call (default: Latin for prices, locale digits for body —
  confirm with client). Keep it consistent within a locale.
- **Jalali calendar** for B2B date display (order timestamps, invoices) — store UTC,
  render Jalali via a converter; Gregorian on the site.
- **Currency:** show with locale formatting + explicit currency code/symbol;
  wholesale prices are B2B-only and never exposed on the public site.
- SKUs/model codes stay **Latin + monospace** (`--vt-font-mono`) in every locale.

## 5. Bidi (mixed-direction text)

- Latin tokens inside RTL text (SKU `VT-2024-A`, email, URL, phone, Western numbers)
  must be **bidi-isolated**: `<bdi>…</bdi>` or `unicode-bidi: isolate`. Prevents the
  classic reordering garble (e.g. punctuation jumping).
- Never build sentences by **concatenation** — word order differs across RU/AR/FA.
  Use full message templates with named placeholders: `"حداقل {n} عدد"` not
  `"حداقل " + n + " عدد"`.
- Pluralization via ICU MessageFormat / `Intl.PluralRules` (Arabic has 6 plural
  categories; Persian/Russian differ from English) — don't fake it with `n > 1`.
- Mixed numerals + units: keep the unit on the correct side per locale; isolate
  the number.

## 6. Content & fallback

- Content is **localized, not machine-translated** (requirement). CMS holds
  per-language fields.
- **Fallback is per-field to the default language**, never a blank, never the raw
  key, never auto-MT. Missing key → default-language value + log a content gap for
  the CMS team.
- **Text expansion:** RU and AR run ~+30% longer than EN; FA varies. Designs must
  not assume EN width — clamp/scale long hero titles, let buttons grow, test the
  longest-known string. (Echoed in screen-states Home edge cases.)
- Don't bake text into images; all copy is translatable text over media.

## 7. Implementation contract (per TD-5 / TD-12)

- Library: `next-intl` / `i18next` (site, framework-dependent) — message catalogs
  per locale, namespaced by route/feature; ICU format for plurals/gender/number.
- Tailwind + logical-property utilities; RTL handled by `dir` on root, **no
  duplicate RTL stylesheet**.
- Server components/SSG render per-locale (site) for SEO; the app is CSR single-locale.
- Lint guard: ban physical `left/right`, `margin-left`, `text-align:left/right` in
  component CSS (allowlist for genuinely non-directional cases).

## 8. Per-component RTL checklist (quick)

| Concern | Rule |
|---|---|
| Nav / header | logo inline-start in LTR → inline-end side mirrors; menu order flips |
| Breadcrumb | separator + order mirror (`Home › Products` → reversed) |
| Product card | badge corner mirrors; price/label alignment = `start` |
| Filter panel | sits inline-start; on mobile drawer slides from the mirrored side |
| PDP two-column | gallery/info columns swap; spec table aligns `end`→`start` |
| Carousel / banner slider | swipe + arrow direction flip; dots order flip |
| Order timeline (B2B) | progresses inline-start→end in the locale's reading order |
| Forms | labels/errors align `start`; required `*` on the start side |
| Toast / drawer / modal | enter from the mirrored edge; close affordance mirrors |

**Test matrix:** every screen reviewed in EN (LTR), RU (LTR, long), AR (RTL), and
the app in FA (RTL) — including all loading/empty/error states (they mirror too).
See `a11y-checklist.md` for the bidi + lang-attribute a11y items.
