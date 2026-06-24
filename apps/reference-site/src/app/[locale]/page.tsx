import type { CSSProperties, ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button, Marquee, ProductCard, StatTile } from "@violet/ui";
import { Link } from "../../i18n/navigation";
import { SiteHeader } from "../../components/site/SiteHeader";
import { SiteFooter } from "../../components/site/SiteFooter";
import { Hero } from "../../components/home/Hero";
import { FeaturedSlider } from "../../components/home/FeaturedSlider";
import { Reveal } from "../../components/home/Reveal";
import { FEATURED, LINES, NEW_MODELS, frame } from "../../lib/catalog-data";

// Centered content column. Horizontal padding tightens on mobile. Layout
// (columns/spacing) is expressed in Tailwind responsive utilities; token-driven
// visual styling (color/font) stays inline.
const WRAP = "mx-auto w-full max-w-[1280px] px-5 md:px-10";
const eyebrowStyle: CSSProperties = {
  fontSize: 12,
  letterSpacing: ".26em",
  textTransform: "uppercase",
  color: "var(--vt-color-accent-strong)",
  fontWeight: 500,
};

function SectionHead({
  eyebrow,
  title,
  link,
  href,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  link?: ReactNode;
  href?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 40,
        gap: 24,
        flexWrap: "wrap",
      }}
    >
      <div>
        <span style={eyebrowStyle}>{eyebrow}</span>
        <h2
          style={{
            fontFamily: "var(--vt-font-display)",
            fontWeight: 300,
            fontSize: "clamp(32px,4vw,48px)",
            color: "var(--vt-color-text-strong)",
            margin: "6px 0 0",
            letterSpacing: "-.02em",
          }}
        >
          {title}
        </h2>
      </div>
      {link && href && (
        <Link
          href={href}
          style={{
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--vt-color-primary)",
            display: "inline-flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {link} <span>→</span>
        </Link>
      )}
    </div>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const pdp = (sku: string) => `/${locale}/products/${sku}`;
  const words = t.raw("marquee.words") as string[];

  return (
    <div>
      <SiteHeader variant="overlay" />
      <Hero />

      <Marquee
        items={words.map((w) => (
          <span key={w} style={{ fontFamily: "var(--vt-font-display)", fontSize: 26 }}>
            {w}
          </span>
        ))}
      />

      {/* New Models */}
      <section className="py-16 md:py-[100px]">
        <div className={WRAP}>
          <SectionHead
            eyebrow={t("newModels.eyebrow")}
            title={t("newModels.title")}
            link={t("newModels.link")}
            href="/new-models"
          />
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {NEW_MODELS.slice(0, 4).map((p, i) => (
              <Reveal key={p.sku} delay={i * 60}>
                <ProductCard
                  name={p.name}
                  sku={p.sku}
                  badge="new"
                  image={p.image}
                  hoverImage={p.hoverImage}
                  href={pdp(p.sku)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the lines */}
      <section className="pb-16 md:pb-[100px]">
        <div className={WRAP}>
          <SectionHead
            eyebrow={t("lines.eyebrow")}
            title={t("lines.title")}
            link={t("lines.link")}
            href="/products"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LINES.map((l, i) => (
              <Reveal key={l.line} delay={i * 70}>
                <Link
                  href="/products"
                  className="vt-linecard"
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    borderRadius: "var(--vt-radius-xl)",
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frame(l.frameIndex, 700)}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 1s var(--vt-ease-standard)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(transparent 38%,rgba(24,15,25,.82))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      insetInlineStart: 26,
                      bottom: 26,
                      color: "#fff",
                      zIndex: 2,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--vt-font-display)",
                        fontSize: 32,
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      {l.line}
                    </h3>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.72)", marginTop: 2 }}>
                      {t(`lines.desc.${l.line}`)}
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--vt-gold-300)",
                        marginTop: 12,
                        display: "inline-flex",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      {t("lines.exploreLine")} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturedSlider />

      {/* Featured pieces */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--vt-color-surface)" }}>
        <div className={WRAP}>
          <SectionHead
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            link={t("featured.link")}
            href="/products"
          />
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {FEATURED.map((p, i) => (
              <Reveal key={p.sku} delay={i * 60}>
                <ProductCard
                  name={p.name}
                  sku={p.sku}
                  badge={p.isNew ? "new" : null}
                  image={p.image}
                  hoverImage={p.hoverImage}
                  href={pdp(p.sku)}
                />
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Button variant="secondary" trailingIcon={<span>→</span>}>
                {t("featured.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-16 md:py-[100px]">
        <div className={`${WRAP} grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16`}>
          <Reveal
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: "var(--vt-radius-2xl)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frame(4, 800)}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 16,
                border: "1px solid rgba(255,255,255,.4)",
                borderRadius: "var(--vt-radius-xl)",
                pointerEvents: "none",
              }}
            />
          </Reveal>
          <Reveal>
            <span style={eyebrowStyle}>{t("about.eyebrow")}</span>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(34px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "16px 0 22px",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
              }}
            >
              {t("about.title")}
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--vt-color-text-muted)",
                marginBottom: 30,
                maxWidth: 440,
              }}
            >
              {t("about.body")}
            </p>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button variant="secondary" trailingIcon={<span>→</span>}>
                {t("about.cta")}
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--vt-color-surface)" }}>
        <div
          className={`${WRAP} grid grid-cols-2 gap-6 py-14 md:grid-cols-4`}
          style={{ borderBlock: "1px solid var(--vt-color-divider)" }}
        >
          <StatTile display label={t("stats.models")} value="1000+" />
          <StatTile display label={t("stats.frames")} value="4000+" />
          <StatTile display label={t("stats.languages")} value="3" />
          <StatTile display label={t("stats.design")} value="✦" />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-[110px]"
        style={{
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          color: "#fff",
          background:
            "radial-gradient(800px 400px at 50% 0%,#45304B,transparent 60%),linear-gradient(160deg,#180F19,#27192A)",
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
            opacity: 0.09,
          }}
        />
        <div
          className="vt-aurora"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-15%",
            pointerEvents: "none",
            background:
              "radial-gradient(520px 360px at 28% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(440px 440px at 78% 72%,rgba(126,88,122,.30),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div className={`relative z-[2] ${WRAP}`}>
          <span style={{ ...eyebrowStyle, color: "var(--vt-gold-300)" }}>{t("cta.eyebrow")}</span>
          <h2
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              fontSize: "clamp(38px,5vw,64px)",
              margin: "12px 0 18px",
              letterSpacing: "-.02em",
            }}
          >
            {t("cta.title")}
          </h2>
          <p style={{ color: "rgba(255,255,255,.74)", fontSize: 18, marginBottom: 32 }}>
            {t("cta.body")}
          </p>
          <Link href="/products" style={{ textDecoration: "none" }}>
            <Button variant="accent" size="lg" trailingIcon={<span>→</span>}>
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
