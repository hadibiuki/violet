/**
 * @violet/types — the shared product-data contract for both Violet products.
 *
 * Source of truth: the to-be-built backends generate their schema from these
 * types (docs/trade-offs.md TD-7 image variants, TD-8 contract;
 * docs/validation-rules.md). The reference site consumes the public surface
 * (primitives, image, product, catalog); the B2B order app additionally
 * consumes the wholesale surface (commerce, order, account).
 *
 * Runtime `const` arrays (PRODUCT_LINES, ORDER_PIPELINE, …) ship alongside the
 * types so apps can iterate facet/pipeline values without redeclaring them, and
 * the unions are derived from those arrays — one source, no drift.
 */

export * from "./primitives";
export * from "./image";
export * from "./product";
export * from "./catalog";
export * from "./commerce";
export * from "./order";
export * from "./account";
