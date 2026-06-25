import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { SiteHeader } from "../../../../components/site/SiteHeader";
import { SiteFooter } from "../../../../components/site/SiteFooter";
import { ProductDetail } from "../../../../components/pdp/ProductDetail";
import { PRODUCTS, getProductDetail } from "../../../../lib/catalog-data";

type Props = { params: Promise<{ locale: string; sku: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ sku: p.sku }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sku } = await params;
  const product = getProductDetail(sku);
  if (!product) return {};
  return {
    title: `${product.name} — Violet`,
    description: `${product.name} (${product.sku}) — ${product.line} collection. ${product.movement} movement, ${product.water} ATM water resistance.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, sku } = await params;
  setRequestLocale(locale);

  const product = getProductDetail(sku);
  if (!product) notFound();

  const t = await getTranslations("Product");

  return (
    <div>
      <SiteHeader variant="overlay" />

      <header
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          paddingTop: 128,
          background: "linear-gradient(160deg,#180F19,#27192A 60%,#342032)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "url(/brand/violet-floral.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "140px",
            opacity: 0.08,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(900px 380px at 78% 40%,rgba(230,180,83,.10),transparent 60%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-4 pb-8 pt-6 md:px-10">
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 13,
              color: "rgba(255,255,255,.62)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {t("breadcrumb.home")}
            </Link>
            <span style={{ color: "var(--vt-gold-300)" }}>›</span>
            <Link href="/products" style={{ color: "inherit", textDecoration: "none" }}>
              {t("breadcrumb.products")}
            </Link>
            <span style={{ color: "var(--vt-gold-300)" }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>{product.name}</b>
          </div>
        </div>
      </header>

      <ProductDetail product={product} locale={locale} />

      <SiteFooter />
    </div>
  );
}
