import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { ProductDetail } from "../../../components/pdp/ProductDetail";
import { getProductDetail, PRODUCTS_FULL } from "../../../lib/catalog-data";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ sku?: string }>;
}): Promise<Metadata> {
  const { sku } = await searchParams;
  const product = sku ? getProductDetail(sku) : PRODUCTS_FULL[0];
  return {
    title: product ? `${product.name} · Violet` : "Product · Violet",
    description: "A Violet timepiece — precision movement, refined design.",
  };
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ sku?: string }>;
};

export default async function ProductPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { sku } = await searchParams;
  const product = sku ? getProductDetail(sku) : PRODUCTS_FULL[0];
  if (!product) notFound();

  return (
    <div>
      <SiteHeader variant="overlay" />

      {/* Breadcrumb header band */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--vt-color-brand-ink)",
          color: "#fff",
          paddingTop: 110,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/brand/violet-floral.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "140px",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div
          className="mx-auto w-full max-w-[1280px] px-4 md:px-10"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: 22,
            paddingBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 13,
              color: "rgba(255,255,255,.62)",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "var(--vt-color-brand-gold)" }}>›</span>
            <Link href="/products" style={{ color: "inherit", textDecoration: "none" }}>
              Products
            </Link>
            <span style={{ color: "var(--vt-color-brand-gold)" }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>{product.name}</b>
          </div>
        </div>
      </header>

      <ProductDetail product={product} locale={locale} />

      <SiteFooter />
    </div>
  );
}
