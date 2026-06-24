import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, dirForLocale, isLocale } from "../../i18n/routing";
import { Providers } from "../providers";
import "@violet/tokens/tokens.css";
import "../globals.css";

// Fonts are loaded in the browser via a <link> to Google Fonts (below) rather
// than next/font, so the dev/build step never blocks on a font fetch. The
// families match the literal names in tokens.css (--vt-font-*). Inter carries
// Cyrillic (RU); Cairo + Amiri carry Arabic (AR); Cormorant/Cinzel are the
// Latin display + wordmark faces; JetBrains Mono is the SKU face.
const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?" +
  "family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500" +
  "&family=Inter:wght@400;500;600;700" +
  "&family=Cinzel:wght@400;600" +
  "&family=JetBrains+Mono:wght@400;500" +
  "&family=Cairo:wght@400;500;600;700" +
  "&family=Amiri:ital,wght@0,400;0,700;1,400" +
  "&display=swap";

// Pre-render every locale at build time (SSG) — docs/trade-offs.md TD-2.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  // Forward messages to the client provider so client components
  // (SiteHeader, FeaturedSlider) can resolve useTranslations().
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dirForLocale(locale)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
