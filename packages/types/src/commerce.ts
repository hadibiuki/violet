/**
 * B2B wholesale commerce — the extension that turns a public {@link Product}
 * into a dealer-orderable line: wholesale price, MOQ, stock, and quantity
 * price breaks. Reference-site code never imports this.
 */

import type { Money } from "./primitives";
import type { ProductSummary, Sku } from "./product";

/** A quantity threshold that unlocks a lower unit price (volume discount). */
export interface PriceBreak {
  /** Order this many units or more to get {@link unitPrice}. */
  minQty: number;
  unitPrice: Money;
}

/**
 * Wholesale terms layered onto a product for the B2B catalog. The dealer-facing
 * unit price, the minimum order quantity, and current availability.
 */
export interface WholesaleTerms {
  /** Base wholesale unit price before any volume break. */
  unitPrice: Money;
  /** Minimum order quantity — the cart stepper floor for this product. */
  moq: number;
  /** Order in multiples of this (e.g. cartons of 5). @default 1 */
  orderIncrement?: number;
  /** Units in stock. `0` ⇒ out of stock; omit when stock isn't tracked. */
  stock?: number;
  /** Ascending volume price breaks, if the product has tiered pricing. */
  priceBreaks?: PriceBreak[];
}

/** A B2B catalog entry: the public summary plus wholesale terms. */
export interface WholesaleProduct extends ProductSummary {
  wholesale: WholesaleTerms;
}

/** One line in a dealer's cart / request list. */
export interface CartLine {
  sku: Sku;
  name: string;
  /** Resolved image id (or URL) for the thumbnail. */
  image?: string;
  /** Requested quantity — validated against MOQ and increment at submit. */
  qty: number;
  moq: number;
  /** Unit price resolved for `qty` after applying any price break. */
  unitPrice: Money;
}

/** The dealer's working cart before it becomes an order. */
export interface Cart {
  lines: CartLine[];
  /** Sum of line totals. */
  subtotal: Money;
}

/** Resolve the effective unit price for a quantity given any volume breaks. */
export function resolveUnitPrice(terms: WholesaleTerms, qty: number): Money {
  let price = terms.unitPrice;
  for (const brk of terms.priceBreaks ?? []) {
    if (qty >= brk.minQty) price = brk.unitPrice;
  }
  return price;
}
