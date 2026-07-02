"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import { Badge, Button, SpecTable, ProductCard, Tabs } from "@violet/ui";
import type { SiteProductDetail } from "../../lib/catalog-data";
import { getRelated } from "../../lib/catalog-data";

const COLOR_OPTIONS = [
  { name: "Midnight", hex: "#231940" },
  { name: "Gold",     hex: "#C9A86A" },
  { name: "Steel",    hex: "#6B7280" },
  { name: "Plum",     hex: "#2E2348" },
] as const;

function caseMm(name: string): string {
  const m = name.match(/(\d{2})\s*$/);
  return (m ? m[1] : "40") + " mm";
}

interface Props {
  product: SiteProductDetail;
  locale: string;
}

export function ProductDetail({ product, locale }: Props) {
  const t = useTranslations("Product");
  const initialColor = COLOR_OPTIONS.findIndex((c) => c.name === product.dialColor);
  const [activeImage, setActiveImage] = useState(0);
  const [colorIdx, setColorIdx] = useState(initialColor >= 0 ? initialColor : 0);
  const [detailTab, setDetailTab] = useState("specs");
  const selectedColor = COLOR_OPTIONS[colorIdx] ?? COLOR_OPTIONS[0];

  const mm = product.name.match(/(\d{2})\s*$/)?.[1] ?? "40";
  const currentImage = product.gallery[activeImage] ?? product.gallery[0];

  const highlights = [
    t("highlights.movement", { movement: product.movement }),
    t("highlights.case"),
    t("highlights.water", { atm: product.water, m: product.water * 10 }),
    t("highlights.glass"),
    t("highlights.diameter", { mm }),
  ];

  const specRows: [string, string][] = [
    [t("specs.caseDiameter"), `${mm} mm`],
    [t("specs.caseMaterial"), t("specs.caseMaterialValue")],
    [t("specs.strapMaterial"), product.strap],
    [t("specs.glass"), t("specs.glassValue")],
    [t("specs.movement"), product.movement],
    [t("specs.waterResistance"), t("specs.waterValue", { atm: product.water, m: product.water * 10 })],
    [t("specs.gender"), product.gender],
    [t("specs.colours"), t("specs.coloursValue")],
  ];

  const related = getRelated(product, 4);
  const pdp = (sku: string) => `/${locale}/products/${sku}`;

  return (
    <>
      {/* ── Main two-column layout ── */}
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[560px_1fr] lg:gap-14 lg:py-14 lg:items-start">

          {/* Gallery — sticky on desktop */}
          <div
            className="lg:self-start"
           
          >
            {/* Main image */}
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                borderRadius: "var(--vt-radius-lg)",
                overflow: "hidden",
                background: "linear-gradient(160deg,var(--vt-ink-100,#1a1024),var(--vt-violet-50,#2d1f3a))",
              }}
            >
              {product.isNew && (
                <span
                  style={{
                    position: "absolute",
                    top: 18,
                    insetInlineStart: 18,
                    zIndex: 2,
                  }}
                >
                  <Badge variant="new" />
                </span>
              )}
              <img
                src={currentImage}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity var(--vt-duration-base,180ms)",
                }}
              />
            </div>

            {/* Thumbnails */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 12,
                marginTop: 16,
              }}
            >
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  style={{
                    padding: 0,
                    aspectRatio: "1/1",
                    borderRadius: "var(--vt-radius-md)",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: `2px solid ${i === activeImage ? "var(--vt-color-primary)" : "transparent"}`,
                    background: "var(--vt-color-surface-sunken)",
                    transition: "border-color var(--vt-duration-base)",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "var(--vt-color-accent-strong)",
                fontWeight: 500,
              }}
            >
              {t("collection", { line: product.line })}
            </span>

            <h1
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(34px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                lineHeight: 1.05,
                margin: "10px 0 8px",
                letterSpacing: "-.02em",
              }}
            >
              {product.name}
            </h1>

            <div
              style={{
                fontFamily: "var(--vt-font-mono)",
                fontSize: 13,
                color: "var(--vt-color-text-muted)",
              }}
            >
              {product.sku}
            </div>

            {/* Badges */}
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {product.isNew && <Badge variant="new" />}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".06em",
                  padding: "5px 11px",
                  borderRadius: "var(--vt-radius-pill)",
                  background: "var(--vt-color-info-bg,rgba(59,130,246,.1))",
                  color: "var(--vt-color-info,#3b82f6)",
                }}
              >
                {product.water} ATM
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".06em",
                  padding: "5px 11px",
                  borderRadius: "var(--vt-radius-pill)",
                  background: "var(--vt-color-surface-sunken)",
                  color: "var(--vt-color-text-muted)",
                }}
              >
                {product.gender}
              </span>
            </div>

            <div
              style={{ height: 1, background: "var(--vt-color-divider)", margin: "26px 0" }}
            />

            {/* Highlights */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".06em",
                color: "var(--vt-color-text-muted)",
                marginBottom: 14,
              }}
            >
              {t("highlights.heading")}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {highlights.map((h) => (
                <div
                  key={h}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 15,
                    color: "var(--vt-color-text)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--vt-color-accent-strong)",
                      flexShrink: 0,
                    }}
                  />
                  {h}
                </div>
              ))}
            </div>

            <div
              style={{ height: 1, background: "var(--vt-color-divider)", margin: "26px 0" }}
            />

            {/* Colour swatches */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".06em",
                color: "var(--vt-color-text-muted)",
                marginBottom: 14,
              }}
            >
              {t("colours.heading")}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              {COLOR_OPTIONS.map((c, i) => (
                <button
                  key={c.name}
                  title={c.name}
                  onClick={() => setColorIdx(i)}
                  style={{
                    width: 32,
                    height: 32,
                    padding: 0,
                    borderRadius: "50%",
                    background: c.hex,
                    cursor: "pointer",
                    border: "2px solid var(--vt-color-surface)",
                    boxShadow:
                      i === colorIdx
                        ? "0 0 0 2px var(--vt-color-primary)"
                        : "0 0 0 1px var(--vt-color-border)",
                    transition: "box-shadow var(--vt-duration-base)",
                  }}
                />
              ))}
              <span
                style={{
                  marginInlineStart: 6,
                  fontSize: 14,
                  color: "var(--vt-color-text-muted)",
                }}
              >
                {selectedColor.name}
              </span>
            </div>

            <div
              style={{ height: 1, background: "var(--vt-color-divider)", margin: "26px 0" }}
            />

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="accent" size="md">
                {t("cta.catalogue")}
              </Button>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="md">
                  {t("cta.retailer")}
                </Button>
              </Link>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--vt-color-text-muted)",
                marginTop: 22,
                marginBottom: 0,
              }}
            >
              {t("description", {
                line: product.line.toLowerCase(),
                mm,
                strap: product.strap.toLowerCase(),
              })}
            </p>
          </div>
        </div>
      </div>

      {/* ── Specifications ── */}
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
        <section
          style={{
            padding: "64px 0",
            borderTop: "1px solid var(--vt-color-divider)",
          }}
        >
          <Tabs
            aria-label={t("specs.heading")}
            value={detailTab}
            onChange={setDetailTab}
            tabs={pdpTabs(locale)}
          />
          <div style={{ maxWidth: 760, marginTop: 28 }}>
            {detailTab === "specs" ? (
              <div style={{ border: "1px solid var(--vt-color-border)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden" }}>
                <SpecTable rows={specRows} />
              </div>
            ) : (
              <div style={{ padding: "var(--vt-space-6)", border: "1px solid var(--vt-color-border)", borderRadius: "var(--vt-radius-lg)", color: "var(--vt-color-text-muted)", lineHeight: 1.9, background: "var(--vt-color-surface)" }}>
                {detailTab === "features" ? pdpCopy(locale).features : pdpCopy(locale).care}
              </div>
            )}
          </div>
        </section>

        {/* ── Related products ── */}
        <section
          style={{
            padding: "64px 0",
            borderTop: "1px solid var(--vt-color-divider)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              fontSize: "clamp(28px,3.2vw,36px)",
              color: "var(--vt-color-text-strong)",
              marginBottom: 28,
              letterSpacing: "-.02em",
            }}
          >
            {t("related.heading")}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard
                key={r.sku}
                name={r.name}
                sku={r.sku}
                badge={r.isNew ? "new" : undefined}
                image={r.image}
                hoverImage={r.hoverImage}
                href={pdp(r.sku)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function pdpTabs(locale: string) {
  const labels = locale === "ar"
    ? ["المواصفات", "المزايا", "العناية"]
    : locale === "ru"
      ? ["Характеристики", "Особенности", "Уход"]
      : ["Specifications", "Features", "Care"];
  return ["specs", "features", "care"].map((value, index) => ({ value, label: labels[index] ?? value }));
}

function pdpCopy(locale: string) {
  if (locale === "ar") return {
    features: "حركة دقيقة، زجاج معدني بدرجة صفير، هيكل من فولاذ 316L وحزام قابل للتبديل صُممت جميعها للاستخدام اليومي طويل الأمد.",
    care: "امسح الساعة بقطعة قماش ناعمة وجافة، وتجنب العطور والمذيبات والمجالات المغناطيسية القوية.",
  };
  if (locale === "ru") return {
    features: "Точный механизм, минеральное стекло сапфирового класса, корпус из стали 316L и сменный ремешок рассчитаны на долгую службу.",
    care: "Протирайте часы мягкой сухой тканью, избегайте парфюма, растворителей и сильных магнитных полей.",
  };
  return {
    features: "A precision movement, sapphire-grade mineral glass, 316L steel case, and interchangeable strap are engineered for lasting everyday wear.",
    care: "Wipe with a soft dry cloth and avoid perfumes, solvents, and strong magnetic fields. Rinse water-resistant models after salt-water exposure.",
  };
}
