/**
 * The product contract (docs/trade-offs.md TD-8) — shared by both products.
 *
 * The reference site reads {@link Product} for the public vitrine. The B2B app
 * reads the same product plus the wholesale extension in commerce.ts. The
 * backends generate their schema from these types; this file is the source of
 * truth.
 */

import type {
  DialColor,
  Gender,
  ISODateString,
  Movement,
  ProductLine,
  Strap,
} from "./primitives";
import type { ResponsiveImage } from "./image";

/** Stable manufacturer SKU, e.g. "VLT-2601". Also the human-facing product code. */
export type Sku = string;

/** One row of the technical specification sheet on the product detail page. */
export interface SpecRow {
  /** i18n key or already-localized label, e.g. "Case diameter". */
  label: string;
  value: string;
}

/**
 * The facets a watch is filtered and merchandised by. Mirrors the option lists
 * in primitives.ts so the catalog filter UI and the data stay in lockstep.
 */
export interface ProductFacets {
  line: ProductLine;
  gender: Gender;
  strap: Strap;
  dialColor: DialColor;
  movement: Movement;
  /** Water resistance in ATM (bar). `5` ⇒ 5 ATM / 50 m. */
  waterResistanceAtm: number;
  /** Case diameter in mm, parsed from the model name suffix (e.g. "42"). */
  caseSizeMm?: number;
}

/**
 * The lightweight shape used in catalog grids, carousels, and "related" rails —
 * everything a {@link ProductCard} needs, nothing it doesn't.
 */
export interface ProductSummary {
  id: string;
  sku: Sku;
  name: string;
  line: ProductLine;
  isNew: boolean;
  /** Limited-edition flag — drives the "limited" badge and gold flourish. */
  isLimited?: boolean;
  /** Primary catalog image; `images[1]` (if present) is the hover-swap frame. */
  images: ResponsiveImage[];
}

/** The full product, as read by the product detail page. */
export interface Product extends ProductSummary {
  /** URL slug, locale-independent, e.g. "chronograph-classic-42". */
  slug: string;
  /** Localized marketing description. */
  description?: string;
  facets: ProductFacets;
  /** Ordered technical spec sheet. */
  specs: SpecRow[];
  createdAt: ISODateString;
}

/** A merchandising line (Classic / Sport / Smart) as shown on the home page. */
export interface ProductLineSummary {
  line: ProductLine;
  /** Localized one-liner, e.g. "Timeless dress watches". */
  description: string;
  /** Hero/representative frame for the line card. */
  image: ResponsiveImage;
}
