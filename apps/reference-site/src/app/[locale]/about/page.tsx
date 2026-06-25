import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { Reveal } from "../../../components/home/Reveal";
import { Button } from "@violet/ui";
import { frame } from "../../../lib/catalog-data";

export const metadata: Metadata = {
  title: "About Violet · Heritage & Craft",
  description:
    "The Violet story — heritage, craftsmanship, and a vision for timeless design.",
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

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  const history = t.raw("history.items") as { title: string; body: string }[];
  const quality = t.raw("quality.items") as { title: string; body: string }[];
  const values = t.raw("vision.values") as { title: string; body: string }[];

  const STATS: [string, string][] = [
    ["1000+", t("stats.models")],
    ["4000+", t("stats.frames")],
    ["3", t("stats.languages")],
    ["✦", t("stats.design")],
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
              maxWidth: 900,
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

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className={`${WRAP} grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <Reveal
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: "var(--vt-radius-2xl)",
              overflow: "hidden",
            }}
          >
            <img
              src={frame(4, 800)}
              alt="Violet craftsmanship"
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
            <Eyebrow>{t("story.eyebrow")}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(30px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "16px 0 22px",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
              }}
            >
              {t("story.title")}
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--vt-color-text-muted)", marginBottom: 18 }}>
              {t("story.body1")}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--vt-color-text-muted)" }}>
              {t("story.body2")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section style={{ background: "var(--vt-color-surface)" }} className="py-16 md:py-24">
        <div className={WRAP}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t("history.eyebrow")}</Eyebrow>
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
              {t("history.title")}
            </h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {history.map(({ title, body }, i) => (
              <Reveal
                key={i}
                delay={i * 60}
                style={{
                  display: "flex",
                  gap: 24,
                  paddingBottom: i < history.length - 1 ? 36 : 0,
                  position: "relative",
                }}
              >
                {i < history.length - 1 && (
                  <span
                    style={{
                      position: "absolute",
                      insetInlineStart: 11,
                      top: 26,
                      bottom: 0,
                      width: 2,
                      background: "var(--vt-color-divider)",
                    }}
                  />
                )}
                <span
                  style={{
                    flex: "none",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    marginTop: 2,
                    background:
                      i === history.length - 1 ? "var(--vt-color-primary)" : "var(--vt-color-surface)",
                    border: `2px solid ${i === history.length - 1 ? "var(--vt-color-primary)" : "var(--vt-color-accent)"}`,
                    display: "grid",
                    placeItems: "center",
                    zIndex: 1,
                  }}
                >
                  {i === history.length - 1 && <span style={{ color: "#fff", fontSize: 11 }}>✦</span>}
                </span>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 600, color: "var(--vt-color-text-strong)", margin: "0 0 6px" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--vt-color-text-muted)", margin: 0 }}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16 md:py-24">
        <div className={WRAP}>
          <div style={{ textAlign: "center", marginBottom: 52, maxWidth: 640, marginInline: "auto" }}>
            <Eyebrow>{t("quality.eyebrow")}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(30px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "14px 0 14px",
                letterSpacing: "-.02em",
              }}
            >
              {t("quality.title")}
            </h2>
            <p style={{ fontSize: 17, color: "var(--vt-color-text-muted)", lineHeight: 1.7 }}>
              {t("quality.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quality.map(({ title, body }, i) => (
              <Reveal
                key={i}
                delay={i * 60}
                style={{
                  background: "var(--vt-color-surface)",
                  border: "1px solid var(--vt-color-border)",
                  borderRadius: "var(--vt-radius-lg)",
                  padding: 28,
                  boxShadow: "var(--vt-shadow-sm)",
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

      {/* Stats band */}
      <section style={{ background: "var(--vt-color-surface)", borderBlock: "1px solid var(--vt-color-divider)" }}>
        <div className={`${WRAP} grid grid-cols-2 gap-6 py-12 lg:grid-cols-4`}>
          {STATS.map(([n, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontSize: "clamp(36px,5vw,60px)",
                  lineHeight: 1,
                  color: n === "✦" ? "var(--vt-color-accent-strong)" : "var(--vt-color-text-strong)",
                }}
              >
                {n}
              </div>
              <div style={{ marginTop: 8, fontSize: 13, color: "var(--vt-color-text-muted)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          background:
            "radial-gradient(900px 460px at 50% 0%,#3B0764,transparent 60%),linear-gradient(160deg,#0D0A1E,#231940)",
        }}
        className="py-16 md:py-24"
      >
        <div
          className="vt-aurora"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-15%",
            pointerEvents: "none",
            background:
              "radial-gradient(520px 360px at 22% 30%,rgba(168,85,247,.20),transparent 60%),radial-gradient(440px 440px at 80% 72%,rgba(124,58,237,.18),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div className={`relative z-[2] ${WRAP}`}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow dark>{t("vision.eyebrow")}</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(30px,4vw,52px)",
                margin: "14px 0 0",
                letterSpacing: "-.02em",
              }}
            >
              {t("vision.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {values.map(({ title, body }, i) => (
              <Reveal key={i} delay={i * 70} style={{ textAlign: "center", padding: "0 8px" }}>
                <div
                  style={{
                    fontFamily: "var(--vt-font-display)",
                    fontSize: 30,
                    color: "var(--vt-gold-300)",
                    marginBottom: 12,
                  }}
                >
                  ✦
                </div>
                <h3
                  style={{
                    fontFamily: "var(--vt-font-display)",
                    fontWeight: 400,
                    fontSize: 30,
                    margin: "0 0 12px",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C4B5FD", margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg">
                {t("vision.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
