import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { CollectionsClient } from "../../../components/collections/CollectionsClient";

export default async function CollectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <SiteHeader variant="overlay" />
      <CollectionsClient />
      <SiteFooter />
    </>
  );
}
