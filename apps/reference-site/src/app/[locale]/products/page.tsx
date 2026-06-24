import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { CatalogBrowser } from "../../../components/catalog/CatalogBrowser";

const eyebrow = {
  fontSize: 12,
  letterSpacing: ".28em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: "var(--vt-gold-300)",
} as const;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Catalog");

  return (
    <div>
      <SiteHeader variant="overlay" />

      {/* Branded dark page-header band so inner pages don't start on a white bar. */}
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
            backgroundSize: "150px",
            opacity: 0.1,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(900px 380px at 78% 40%,rgba(230,180,83,.10),transparent 60%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-5 pb-12 pt-10 md:px-10">
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 13,
              color: "rgba(255,255,255,.6)",
              marginBottom: 18,
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {t("breadcrumb.home")}
            </Link>
            <span style={{ color: "var(--vt-gold-300)" }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>{t("breadcrumb.products")}</b>
          </div>

          <span style={eyebrow}>{t("hero.eyebrow")}</span>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              fontSize: "clamp(44px,5.4vw,72px)",
              color: "#fff",
              margin: "14px 0 10px",
              letterSpacing: "-.02em",
              lineHeight: 1.02,
            }}
          >
            {t("hero.title")}
          </h1>
          <p style={{ color: "rgba(255,255,255,.66)", fontSize: 17, margin: 0, maxWidth: 560 }}>
            {t("hero.subtitle")}
          </p>
        </div>
      </header>

      <CatalogBrowser locale={locale} />

      <SiteFooter />
    </div>
  );
}
