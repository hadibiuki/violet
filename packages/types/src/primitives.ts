/**
 * Shared scalars and brand-level primitives used across both products.
 *
 * Facet option lists are exported as runtime `const` arrays (not just types) so
 * the apps can render filter UIs by iterating them, and the matching union types
 * are derived from those same arrays — one source of truth, no drift.
 */

/** Reference-site audience locales. The B2B app is Persian-only (see {@link AppLocale}). */
export const SITE_LOCALES = ["en", "ru", "ar"] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

/** B2B order app locale. */
export type AppLocale = "fa";

/** Any locale the design system renders. */
export type Locale = SiteLocale | AppLocale;

/** Locales that lay out right-to-left. */
export const RTL_LOCALES = ["ar", "fa"] as const;
export type RtlLocale = (typeof RTL_LOCALES)[number];

export function isRtlLocale(locale: string): locale is RtlLocale {
  return (RTL_LOCALES as readonly string[]).includes(locale);
}

/** ISO 8601 timestamp, e.g. "2026-06-20T14:32:00Z". Kept as a string for transport. */
export type ISODateString = string;

/** ISO 4217 currency code. Site shows reference pricing; B2B settles wholesale. */
export type CurrencyCode = "USD" | "EUR" | "RUB" | "IRR";

/**
 * A monetary amount stored in the currency's minor unit (cents / dinar) to avoid
 * float rounding. `amount` of 125000 at USD = $1,250.00.
 */
export interface Money {
  amount: number;
  currency: CurrencyCode;
}

// ── Watch facets — derived from the catalog mockup data (site/data.js) ──────

export const PRODUCT_LINES = ["Classic", "Sport", "Smart"] as const;
export type ProductLine = (typeof PRODUCT_LINES)[number];

export const GENDERS = ["Men", "Women", "Unisex"] as const;
export type Gender = (typeof GENDERS)[number];

export const STRAPS = ["Leather", "Steel", "Mesh", "Rubber"] as const;
export type Strap = (typeof STRAPS)[number];

export const DIAL_COLORS = ["Midnight", "Gold", "Steel", "Plum"] as const;
export type DialColor = (typeof DIAL_COLORS)[number];

export const MOVEMENTS = ["Quartz", "Automatic", "Smart"] as const;
export type Movement = (typeof MOVEMENTS)[number];
