import { defineRouting } from "next-intl/routing";

// Path-prefix locales (/en, /ru, /ar) — clean hreflang, shareable, crawlable.
// `/` resolves to the negotiated locale (docs/i18n-rtl.md §1, trade-offs TD-5).
export const routing = defineRouting({
  locales: ["en", "ru", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

// Arabic is RTL on the site; en/ru are LTR (docs/i18n-rtl.md §2).
export function dirForLocale(locale: string): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
