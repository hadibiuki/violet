/**
 * Catalog querying — filters, sort, and pagination. Shared so the site's
 * filterable catalog and the B2B product list speak the same query language
 * (docs/trade-offs.md: server-side filtering, pagination on site / Load-More in app).
 */

import type {
  DialColor,
  Gender,
  Movement,
  ProductLine,
  Strap,
} from "./primitives";

/** A selectable filter value with its current result count, for facet UIs. */
export interface FacetOption<T extends string = string> {
  value: T;
  /** Localized display label. */
  label: string;
  /** Matching products under the current query — drives "(12)" counts / disabling. */
  count: number;
}

/** All facet groups the catalog filters by, each with its available options. */
export interface FacetGroups {
  line: FacetOption<ProductLine>[];
  gender: FacetOption<Gender>[];
  strap: FacetOption<Strap>[];
  dialColor: FacetOption<DialColor>[];
  movement: FacetOption<Movement>[];
}

export const PRODUCT_SORTS = [
  "newest",
  "name-asc",
  "name-desc",
  "price-asc",
  "price-desc",
] as const;
export type ProductSort = (typeof PRODUCT_SORTS)[number];

/**
 * A catalog request. Filter arrays are OR-within / AND-across (selecting two
 * straps widens; adding a movement narrows). Omitted filters are unconstrained.
 */
export interface CatalogQuery {
  line?: ProductLine[];
  gender?: Gender[];
  strap?: Strap[];
  dialColor?: DialColor[];
  movement?: Movement[];
  /** Free-text search over name + SKU. */
  q?: string;
  isNew?: boolean;
  sort?: ProductSort;
  /** 1-based page number for offset pagination. */
  page?: number;
  /** Items per page. */
  pageSize?: number;
}

/** A page of results plus everything the UI needs to render filters and paging. */
export interface CatalogResult<T> {
  items: T[];
  /** Total matching the query across all pages. */
  total: number;
  page: number;
  pageSize: number;
  /** Whether a "Load more" / next page exists. */
  hasMore: boolean;
  /** Facet groups recomputed for the current query (for live counts). */
  facets: FacetGroups;
}
