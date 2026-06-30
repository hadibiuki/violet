# Reference Site — UI kit

High-fidelity recreation of Violet's **international vitrine** (product A): the public
brand showcase serving EN/RU and RTL Arabic. Recreated from the source `home.html` /
`product.html` prototypes and the design-system spec.

## Screens & flow
`index.html` is an interactive click-through:

- **Home** — celestial dark hero (aurora + stars + floating watch), marquee, **New
  Models** grid, **Explore the lines**, **Featured Pieces**, brand split, stats band,
  dark CTA. Clicking any card → Product detail; nav/CTAs → Catalog.
- **Catalog** — left filter rail (Collection / Availability / Movement), live result
  count, active-filter chips with "Clear all", sort, and a 3-up product grid. Cards →
  Product detail.
- **Product detail (PDP)** — sticky gallery with thumbnails + colour swatches, key
  highlights, dual CTA (Download Catalogue / Contact a retailer), spec table, and a
  "You may also like" grid.

## Files
- `index.html` — app shell, routing state, animation keyframes (`@dsCard`).
- `data.js` — shared mock product data + Unsplash watch frames (`window.VT_DATA`).
- `SiteChrome.jsx` — `SiteHeader` (sticky, transparent-over-hero → frosted on scroll) + `SiteFooter`.
- `HomeScreen.jsx` · `CatalogScreen.jsx` · `ProductScreen.jsx`.

## Composition
Built from the design-system components via `window.VioletDesignSystem_7273c4`:
`BrandMark`, `Button`, `ProductCard`, `Badge`, `SpecTable`, `IconButton`. Tokens drive
all color/space/type. Icons are Lucide (CDN).

> Imagery uses the same Unsplash frames as the source prototypes — replace with licensed
> Violet product photography for production.
