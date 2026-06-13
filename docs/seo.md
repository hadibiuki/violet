# Violet · SEO & Metadata Spec

SEO rules for the **public Reference Site** (A). SEO is a core goal there
(multilingual vitrine, 1000+ models, shareable). The **B2B app (B) is behind auth
and explicitly `noindex`** — it has no SEO surface; this doc is about the site.

Grounds the rendering/i18n decisions in `trade-offs.md` (TD-2 SSG/ISR, TD-5
locales) and `i18n-rtl.md`.

---

## 1. Foundations

- [ ] **Rendering:** SSG + ISR (TD-2) so every page ships fully-rendered HTML —
      crawlers and social scrapers see content without running JS. CSR-only would
      tank SEO (a stated risk).
- [ ] **Indexable URLs:** clean, lowercase, hyphenated, stable. Catalog uses
      **numbered pagination** (`?page=2`, crawlable) not infinite scroll (TD-1).
- [ ] **One canonical per page** via `<link rel="canonical">`; self-canonical by
      default; filtered/sorted variants canonicalize to the base catalog page (or a
      curated facet page) to avoid duplicate-content dilution.
- [ ] **Proper status codes:** unpublished/missing PDP → real **404** (not soft-200);
      removed model with a successor → **301**; never index error/empty states.
- [ ] **robots.txt + XML sitemaps** (per locale, see §3). The whole B2B app host/path
      is `Disallow` + `noindex`.
- [ ] **HTTPS, fast LCP** (image pipeline TD-7: WebP/AVIF, lazy, `aspect-ratio` → low
      CLS). Core Web Vitals are a ranking + UX concern, not an afterthought.

## 2. Per-page metadata

Every page renders, localized per active locale:

| Tag | Rule |
|---|---|
| `<title>` | unique, ≤ ~60 chars, pattern `{Page/Model} — Violet`; localized |
| `<meta name="description">` | unique, ~140–160 chars, localized, compelling |
| `<link rel="canonical">` | absolute, locale-correct URL |
| `<meta name="robots">` | `index,follow` for public pages; `noindex` for search-results/empty/utility |
| Open Graph | `og:title`, `og:description`, `og:image` (the model/hero image, ≥1200×630 derivative), `og:type`, `og:locale`, `og:url`, `og:site_name=Violet` |
| Twitter | `twitter:card=summary_large_image` + title/desc/image |
| Favicon / theme | brand favicon set; `theme-color` = violet |

- **PDP** title/description use model name + key trait + brand; OG image = primary
  product photo. **Catalog/category** describe the collection. **Brand pages**
  describe the section.
- No metadata baked into images (translatable text only).

## 3. Internationalization SEO (the big one)

Three locales (`en`, `ru`, `ar`) with **path-prefix routing** `/{locale}/…` (TD-5).

- [ ] **hreflang on every page** — reciprocal set linking all locale equivalents of
      the *same* content, plus `x-default`:
  ```html
  <link rel="alternate" hreflang="en" href="https://violet.example/en/products/aurora-01" />
  <link rel="alternate" hreflang="ru" href="https://violet.example/ru/products/aurora-01" />
  <link rel="alternate" hreflang="ar" href="https://violet.example/ar/products/aurora-01" />
  <link rel="alternate" hreflang="x-default" href="https://violet.example/en/products/aurora-01" />
  ```
- [ ] hreflang values are language(-region) codes; **must be reciprocal** (each page
      points to all, including itself) or Google ignores them.
- [ ] `<html lang>` + `dir` match the locale (`ar` → `rtl`); OG `og:locale` +
      `og:locale:alternate` set.
- [ ] **Language switch keeps the same content** in the new locale at its localized
      URL (F-A4) — so the hreflang map always resolves to equivalent pages.
- [ ] **Per-locale sitemaps** (or one sitemap index) listing each localized URL with
      its `xhtml:link` alternates. Submit in Search Console / Yandex Webmaster (RU
      market → Yandex matters).
- [ ] Localized (not MT) content; missing-translation fallback (i18n-rtl §6) must not
      create thin/duplicate pages — if a locale truly lacks a page, exclude it from
      that locale's sitemap rather than ship an English-only "localized" URL.
- [ ] AR market: ensure RTL pages render correctly for crawlers; Arabic content
      properly encoded (UTF-8), `dir` set.

## 4. Structured data (Schema.org / JSON-LD)

Emit JSON-LD (preferred over microdata) per page type. **Only mark up content
actually visible on the page.** Note the site has **no prices/checkout** publicly,
so `Product` markup is intentionally **without `offers`** (avoid invalid/penalized
markup).

| Page | Schema |
|---|---|
| All | `Organization` (logo, name, sameAs socials) + `WebSite` (+ `SearchAction` if site search) — site-wide, in the layout |
| Home | `WebPage` + `Organization` |
| Catalog / New Models | `CollectionPage` + `BreadcrumbList` + optional `ItemList` of products |
| **PDP** | `Product` — `name`, `image[]`, `description`, `brand: {Organization "Violet"}`, `sku`/`mpn`, `category`, `additionalProperty` for specs (movement, water-resistance, strap…). **No `offers`** (no public price). |
| Brand/About | `AboutPage` / `WebPage` |
| Contact | `ContactPage` + `Organization` contactPoint |
| Breadcrumbs | `BreadcrumbList` on catalog/PDP (matches the visible breadcrumb) |

- [ ] Validate with the Rich Results / Schema validator; keep types minimal and truthful.
- [ ] Localize text fields inside JSON-LD per locale; `inLanguage` set.
- [ ] Don't fabricate ratings/offers/availability that aren't on the page.

## 5. Crawl & indexing hygiene

- [ ] **robots.txt:** allow public site; `Disallow` the B2B app, admin, search-result
      URLs with tracking params; point to sitemap(s).
- [ ] **Parameter handling:** filter/sort query params → canonical to base; mark
      faceted result pages `noindex,follow` unless a facet is a curated landing page.
- [ ] **Pagination:** crawlable `?page=N` links in the DOM (not JS-only); each page
      self-canonical; first page is the category canonical.
- [ ] **No orphan pages:** every PDP reachable via catalog + sitemap + internal links
      (similar products, breadcrumb).
- [ ] **404/410** for gone models; **soft-deactivated** B2B products never leak to the
      public site (they're separate systems — site shows only published models).
- [ ] **Duplicate content:** color variants share a PDP (variant switch updates URL/ref
      but canonicals to the model) — don't index each variant as a separate thin page.

## 6. Performance & UX signals (Core Web Vitals)

- [ ] **LCP** — hero/first product image preloaded at the right size, no render-blocking
      fonts (font-display swap, preload active locale only), SSG HTML.
- [ ] **CLS** — `aspect-ratio` on all media (tokens already define product/banner
      ratios); reserved space for async sections.
- [ ] **INP** — defer/async non-critical JS; analytics loaded async/consent-gated and
      **fail-silent** so they never block render (TD-11).
- [ ] Images: responsive `srcset`/`sizes`, WebP/AVIF, lazy below the fold, CDN (TD-7).

## 7. Process / handoff to React phase

- Metadata + hreflang + JSON-LD generated from the **same product data contract**
  (`@violet/types`, TD-8) so they can't drift from on-page content.
- Framework metadata API (Next.js `generateMetadata` / Astro head) per route, per
  locale; sitemap generated at build/ISR time.
- **B2B app:** global `<meta name="robots" content="noindex,nofollow">`, no sitemap,
  no JSON-LD — it is an authenticated app, not a search surface.

> Out of scope (no public commerce): `Offer`, `AggregateRating`, `Review`,
> shopping feeds. Revisit only if the site ever exposes pricing/retail.
