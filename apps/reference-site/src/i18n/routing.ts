import { defineRouting } from "next-intl/routing";

// Path-prefix locales (/en, /ru, /ar) — clean hreflang, shareable, crawlable.
// `/` resolves to the negotiated locale (docs/i18n-rtl.md §1, trade-offs TD-5).
export const routing = defineRouting({
  locales: ["en", "ru", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

// Type-guard for a supported locale. (Replaces next-intl v4's `hasLocale`,
// which isn't available on the v3 line this app pins.)
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (routing.locales as readonly string[]).includes(value);
}

// Arabic is RTL on the site; en/ru are LTR (docs/i18n-rtl.md §2).
export function dirForLocale(locale: string): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
