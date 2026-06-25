import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { Reveal } from "../../../components/home/Reveal";
import { Button } from "@violet/ui";
import { frame } from "../../../lib/catalog-data";

export const metadata: Metadata = {
  title: "Technologies & Features · Violet",
  description:
    "The engineering behind every Violet — movements, materials, and the details that endure.",
};

type Props = { params: Promise<{ locale: string }> };

const WRAP = "mx-auto w-full max-w-[1200px] px-5 md:px-10";

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      style={{
        fontSize: 12,
        letterSpacing: ".26em",
        textTransform: "uppercase",
        fontWeight: 500,
        color: dark ? "var(--vt-gold-300)" : "var(--vt-color-accent-strong)",
      }}
    >
      {children}
    </span>
  );
}

function FeaturePoints({ points }: { points: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {points.map((pt) => (
        <div
          key={pt}
          style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15.5, color: "var(--vt-color-text)" }}
        >
          <span style={{ color: "var(--vt-color-primary)", fontSize: 16, marginTop: 1, flex: "none" }}>✓</span>
          {pt}
        </div>
      ))}
    </div>
  );
}

function FeatureImage({ frameIdx, title }: { frameIdx: number; title: string }) {
  return (
    <Reveal
      style={{
        position: "relative",
        aspectRatio: "4/3",
        borderRadius: "var(--vt-radius-2xl)",
        overflow: "hidden",
      }}
    >
      <img src={frame(frameIdx, 800)} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div
        style={{
          position: "absolute",
          inset: 16,
          border: "1px solid rgba(255,255,255,.35)",
          borderRadius: "var(--vt-radius-xl)",
          pointerEvents: "none",
        }}
      />
    </Reveal>
  );
}

export default async function TechnologiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Technologies");

  const waterRows = t.raw("water.rows") as { atm: string; use: string; line: string }[];
  const featureItems = t.raw("features.items") as { title: string; body: string }[];

  const featureRows = [
    {
      eyebrow: t("movements.eyebrow"),
      title: t("movements.title"),
      body: t("movements.body"),
      points: t.raw("movements.points") as string[],
      frameIdx: 4,
      flip: false,
    },
    {
      eyebrow: t("materials.eyebrow"),
      title: t("materials.title"),
      body: t("materials.body"),
      points: t.raw("materials.points") as string[],
      frameIdx: 7,
      flip: true,
    },
  ];

  return (
    <div>
      <SiteHeader variant="overlay" />

      {/* Hero */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 132,
          background:
            "radial-gradient(1100px 640px at 72% 24%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)",
        }}
      >
        <div
          className="vt-aurora"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-15%",
            pointerEvents: "none",
            background:
              "radial-gradient(560px 380px at 18% 28%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 84% 70%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 16%,rgba(201,168,106,.12),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div className={`relative z-[2] ${WRAP} py-16 text-center md:py-20`}>
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              fontSize: 13,
              color: "rgba(196,181,253,.8)",
              marginBottom: 24,
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {t("breadcrumb.home")}
            </Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>{t("breadcrumb.page")}</b>
          </div>
          <Eyebrow dark>{t("hero.eyebrow")}</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              letterSpacing: "-.02em",
              fontSize: "clamp(40px,6vw,84px)",
              lineHeight: 1.04,
              color: "#fff",
              margin: "16px auto 18px",
              maxWidth: 880,
            }}
          >
            {t("hero.title")}
            <br />
            <em style={{ fontStyle: "italic", color: "#C4B5FD" }}>{t("hero.titleEmph")}</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#C4B5FD", maxWidth: 600, margin: "0 auto" }}>
            {t("hero.subtitle")}
          </p>
        </div>
      </header>

      {/* Alternating feature rows */}
      {featureRows.map(({ eyebrow, title, body, points, frameIdx, flip }) => (
        <section key={title} className="py-14 md:py-20">
          <div className={`${WRAP} grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
            <div className={flip ? "lg:order-2" : ""}>
              <FeatureImage frameIdx={frameIdx} title={title} />
            </div>
            <Reveal className={flip ? "lg:order-1" : ""}>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(28px,3.4vw,44px)",
                  color: "var(--vt-color-text-strong)",
                  margin: "14px 0 18px",
                  lineHeight: 1.12,
                  letterSpacing: "-.02em",
                }}
              >
                {title}
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--vt-color-text-muted)", marginBottom: 22 }}>
                {body}
              </p>
              <FeaturePoints points={points} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Water resistance scale */}
      <section className="py-16 md:py-24">
        <div className={`${WRAP} max-w-[880px]`}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Eyebrow>{t("water.eyebrow")}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(28px,4vw,46px)",
                color: "var(--vt-color-text-strong)",
                margin: "14px 0 0",
                letterSpacing: "-.02em",
              }}
            >
              {t("water.title")}
            </h2>
          </div>
          <Reveal
            style={{
              border: "1px solid var(--vt-color-border)",
              borderRadius: "var(--vt-radius-lg)",
              overflow: "hidden",
              background: "var(--vt-color-surface)",
            }}
          >
            {waterRows.map(({ atm, use, line }, i) => (
              <div
                key={atm}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "8px 16px",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderTop: i ? "1px solid var(--vt-color-divider)" : "none",
                  background: i % 2 ? "var(--vt-color-surface-sunken)" : "transparent",
                }}
                className="sm:[grid-template-columns:100px_1fr_160px]"
              >
                <span
                  style={{
                    fontFamily: "var(--vt-font-mono)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--vt-color-primary)",
                  }}
                >
                  {atm}
                </span>
                <span style={{ fontSize: 15, color: "var(--vt-color-text)" }}>{use}</span>
                <span
                  className="col-span-2 sm:col-span-1 sm:text-end"
                  style={{ fontSize: 13, color: "var(--vt-color-text-muted)" }}
                >
                  {line}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Feature grid */}
      <section style={{ background: "var(--vt-color-surface)" }} className="py-16 md:py-24">
        <div className={WRAP}>
          <div style={{ textAlign: "center", marginBottom: 52, maxWidth: 600, marginInline: "auto" }}>
            <Eyebrow>{t("features.eyebrow")}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(30px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "14px 0 0",
                letterSpacing: "-.02em",
              }}
            >
              {t("features.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map(({ title, body }, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 60}
                style={{
                  background: "var(--vt-color-bg)",
                  border: "1px solid var(--vt-color-border)",
                  borderRadius: "var(--vt-radius-lg)",
                  padding: 28,
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--vt-color-text-strong)", margin: "0 0 8px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--vt-color-text-muted)", margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          color: "#fff",
          background:
            "radial-gradient(800px 400px at 50% 0%,#3B0764,transparent 60%),linear-gradient(160deg,#0D0A1E,#231940)",
        }}
        className="py-20 md:py-28"
      >
        <div
          className="vt-aurora"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-15%",
            pointerEvents: "none",
            background:
              "radial-gradient(520px 360px at 28% 30%,rgba(168,85,247,.20),transparent 60%),radial-gradient(440px 440px at 78% 72%,rgba(124,58,237,.18),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div className={`relative z-[2] ${WRAP}`}>
          <Eyebrow dark>{t("cta.eyebrow")}</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              fontSize: "clamp(32px,5vw,60px)",
              margin: "12px 0 18px",
              letterSpacing: "-.02em",
            }}
          >
            {t("cta.title")}
          </h2>
          <p style={{ color: "#C4B5FD", fontSize: 18, marginBottom: 32 }}>
            {t("cta.subtitle")}
          </p>
          <Link href="/products" style={{ textDecoration: "none" }}>
            <Button variant="accent" size="lg">
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
