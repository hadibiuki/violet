/**
 * Mock catalog data for the reference site.
 *
 * Backend is not ready (docs/trade-offs.md open question) — this stands in for
 * the future API and is the ONLY place that needs to change when it lands.
 * Components read this synchronously; there is no data-fetching layer yet.
 *
 * Mirrors the design prototype's `site/data.js`. Shapes reference @violet/types
 * so the swap to real `Product` / `ProductSummary` records is a narrow one.
 */

import type { DialColor, Gender, Movement, ProductLine, Sku, Strap } from "@violet/types";
import { DIAL_COLORS, GENDERS, MOVEMENTS, PRODUCT_LINES, STRAPS } from "@violet/types";

// Twelve square (600×600) Violet watch renders, bundled locally in
// public/watches so they load with no external network dependency. The backend
// will later return real product photography via the ResponsiveImage contract.
const FRAME_COUNT = 12;

/**
 * Resolve frame `i` to a local watch asset path. `size` is accepted for call-site
 * parity with the future responsive API but the SVGs scale to any box.
 */
export function frame(i: number, _size = 640): string {
  const n = String(i % FRAME_COUNT).padStart(2, "0");
  // return `/watches/watch-${n}.svg`;
  return `/watches/watch-${n}.jpg`;
}

/**
 * The card-level view a {@link ProductCard} needs, plus the facets the catalog
 * filters by — a slim slice of the full `Product`.
 */
export interface SiteProductCard {
  sku: Sku;
  name: string;
  line: ProductLine;
  isNew: boolean;
  gender: Gender;
  strap: Strap;
  dialColor: DialColor;
  movement: Movement;
  /** Primary catalog image. */
  image: string;
  /** Second frame, revealed on hover. */
  hoverImage: string;
}

// frame index pairs (primary / hover) match the prototype's f / f2. Facet values
// carry over from the prototype's site/data.js.
const RAW: Array<Omit<SiteProductCard, "image" | "hoverImage"> & { f: number; f2: number }> = [
  { name: "Chronograph Classic 42", sku: "VLT-2601", line: "Classic", isNew: true, gender: "Men", strap: "Leather", dialColor: "Midnight", movement: "Quartz", f: 0, f2: 1 },
  { name: "Heritage Automatic 40", sku: "VLT-2602", line: "Classic", isNew: true, gender: "Men", strap: "Steel", dialColor: "Steel", movement: "Automatic", f: 2, f2: 3 },
  { name: "Sport Diver 44", sku: "VLT-2603", line: "Sport", isNew: true, gender: "Men", strap: "Rubber", dialColor: "Plum", movement: "Quartz", f: 3, f2: 5 },
  { name: "Lunar Moonphase 41", sku: "VLT-2604", line: "Classic", isNew: true, gender: "Women", strap: "Leather", dialColor: "Gold", movement: "Automatic", f: 6, f2: 4 },
  { name: "Aurora Skeleton 42", sku: "VLT-2605", line: "Classic", isNew: true, gender: "Men", strap: "Steel", dialColor: "Steel", movement: "Automatic", f: 7, f2: 4 },
  { name: "Solaria Rose 36", sku: "VLT-2606", line: "Classic", isNew: true, gender: "Women", strap: "Mesh", dialColor: "Gold", movement: "Quartz", f: 8, f2: 9 },
  { name: "Meridian GMT 43", sku: "VLT-2607", line: "Sport", isNew: true, gender: "Men", strap: "Steel", dialColor: "Midnight", movement: "Quartz", f: 4, f2: 0 },
  { name: "Pulse Smart 45", sku: "VLT-2608", line: "Smart", isNew: true, gender: "Men", strap: "Rubber", dialColor: "Midnight", movement: "Smart", f: 10, f2: 1 },
  { name: "Eclipse Dress 38", sku: "VLT-1182", line: "Classic", isNew: false, gender: "Women", strap: "Leather", dialColor: "Plum", movement: "Quartz", f: 5, f2: 2 },
  { name: "Tempo Quartz 36", sku: "VLT-1183", line: "Smart", isNew: false, gender: "Women", strap: "Mesh", dialColor: "Steel", movement: "Quartz", f: 1, f2: 6 },
  { name: "Nocturne Automatic 40", sku: "VLT-1184", line: "Classic", isNew: false, gender: "Men", strap: "Leather", dialColor: "Midnight", movement: "Automatic", f: 2, f2: 7 },
  { name: "Regatta Sport 42", sku: "VLT-1186", line: "Sport", isNew: false, gender: "Men", strap: "Rubber", dialColor: "Plum", movement: "Quartz", f: 11, f2: 3 },
];

export const PRODUCTS: SiteProductCard[] = RAW.map(({ f, f2, ...p }) => ({
  ...p,
  image: frame(f),
  hoverImage: frame(f2),
}));

export const NEW_MODELS: SiteProductCard[] = PRODUCTS.filter((p) => p.isNew);

/** Featured rail = the four products after the "new" run (prototype parity). */
export const FEATURED: SiteProductCard[] = PRODUCTS.slice(4, 8);

/** Slides for the home spotlight slider. */
export const SPOTLIGHT: SiteProductCard[] = NEW_MODELS.slice(0, 4);

/** The three merchandising lines, with a representative frame index. */
export const LINES: Array<{ line: ProductLine; frameIndex: number }> = [
  { line: "Classic", frameIndex: 2 },
  { line: "Sport", frameIndex: 3 },
  { line: "Smart", frameIndex: 10 },
];

// ── Catalog filtering ───────────────────────────────────────────────────────

/** The facetable keys on {@link SiteProductCard}. */
export type FacetKey = "line" | "gender" | "strap" | "dialColor" | "movement";

/**
 * Filter groups shown in the catalog rail, in display order. `key` matches a
 * product field; `options` are the selectable values (from the @violet/types
 * const arrays, so they never drift from the union types). `labelKey` resolves
 * the localized group heading via the Catalog.facets messages.
 */
export const CATALOG_FACETS: ReadonlyArray<{
  key: FacetKey;
  labelKey: string;
  options: readonly string[];
}> = [
  { key: "line", labelKey: "collection", options: PRODUCT_LINES },
  { key: "gender", labelKey: "gender", options: GENDERS },
  { key: "strap", labelKey: "strap", options: STRAPS },
  { key: "dialColor", labelKey: "color", options: DIAL_COLORS },
  { key: "movement", labelKey: "movement", options: MOVEMENTS },
];

/** Selected filter values per facet, e.g. `{ line: ["Sport"], strap: ["Steel"] }`. */
export type CatalogFilters = Partial<Record<FacetKey, string[]>>;

export type CatalogSort = "newest" | "name-asc";

/**
 * Apply filters + sort to the catalog. Filters are OR-within a facet, AND-across
 * facets; `newOnly` further restricts to new models. Mirrors the eventual
 * server query (docs: server-side filtering) but runs on the mock array for now.
 */
export function filterCatalog(
  filters: CatalogFilters,
  newOnly: boolean,
  sort: CatalogSort,
): SiteProductCard[] {
  const items = PRODUCTS.filter((p) => {
    if (newOnly && !p.isNew) return false;
    return CATALOG_FACETS.every(({ key }) => {
      const selected = filters[key] ?? [];
      return selected.length === 0 || selected.includes(p[key]);
    });
  });

  return sort === "name-asc"
    ? [...items].sort((a, b) => a.name.localeCompare(b.name))
    : // "newest" — new models first, otherwise stable original order.
      [...items].sort((a, b) => Number(b.isNew) - Number(a.isNew));
}
