import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
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

const WRAP = { maxWidth: 1200, margin: "0 auto", padding: "0 var(--vt-page-pad)" } as const;

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

const HISTORY = [
  ["Founded", "Violet is established with a single principle — restraint as luxury."],
  ["The Classic line", "The first dress collection sets the house signature: balanced cases, clean dials."],
  ["Going international", "The brand reaches new markets across three languages and two continents."],
  ["Sport & Smart", "Diver and connected lines extend the family without diluting the identity."],
  ["2026 · Today", "Over 1000 models, 4000+ photography frames, and one unwavering design language."],
];

const QUALITY = [
  { title: "Sapphire-grade glass", body: "Hardened mineral crystal that resists the scratches of everyday life." },
  { title: "316L steel cases", body: "Surgical-grade stainless steel, finished by hand to a flawless surface." },
  { title: "Water resistance", body: "From 3 to 20 ATM — tested and rated for life, sport, and the deep." },
  { title: "Movement accuracy", body: "Quartz and automatic calibres, each regulated for lasting precision." },
];

const VALUES = [
  ["Timeless", "We design for decades, not seasons. A Violet should feel as right in twenty years as it does today."],
  ["Refined", "Restraint is our luxury. We remove until only the essential — and the beautiful — remains."],
  ["Authentic", "Honest materials, honest engineering, honest prices. No theatre, no shortcuts."],
];

const STATS = [
  ["1000+", "Watch models"],
  ["4000+", "Photography frames"],
  ["3", "Languages"],
  ["✦", "Timeless by design"],
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
        <div
          style={{
            position: "relative",
            zIndex: 2,
            ...WRAP,
            padding: "70px var(--vt-page-pad) 84px",
            textAlign: "center",
          }}
        >
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
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>About</b>
          </div>
          <Eyebrow dark>About Violet</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              letterSpacing: "-.02em",
              fontSize: "clamp(48px,6vw,84px)",
              lineHeight: 1.04,
              color: "#fff",
              margin: "16px auto 18px",
              maxWidth: 900,
            }}
          >
            Timekeeping, refined
            <br />
            to its <em style={{ fontStyle: "italic", color: "#C4B5FD" }}>essence</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#C4B5FD", maxWidth: 600, margin: "0 auto" }}>
            For those who value time — a brand built on precision, restraint, and a quiet kind of confidence that lasts.
          </p>
        </div>
      </header>

      {/* Story */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ ...WRAP, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <Reveal style={{ position: "relative", aspectRatio: "4/5", borderRadius: "var(--vt-radius-2xl)", overflow: "hidden" }}>
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
            <Eyebrow>Our story</Eyebrow>
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
              A name built on time
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--vt-color-text-muted)", marginBottom: 18 }}>
              Violet began with a simple belief: that a watch should be honest. Honest in its engineering, honest in its
              design, and honest about the person who wears it.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--vt-color-text-muted)" }}>
              Today, over a thousand models carry that idea across borders and languages — each one uniting precision
              movements with considered, restrained design. Nothing decorative. Nothing wasted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section style={{ background: "var(--vt-color-surface)", padding: "100px 0" }}>
        <div style={WRAP}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>Our history</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(34px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "14px 0 0",
                letterSpacing: "-.02em",
              }}
            >
              A measured journey
            </h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {HISTORY.map(([title, body], i) => (
              <Reveal
                key={title}
                delay={i * 60}
                style={{ display: "flex", gap: 24, paddingBottom: i < HISTORY.length - 1 ? 36 : 0, position: "relative" }}
              >
                {i < HISTORY.length - 1 && (
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
                    background: i === HISTORY.length - 1 ? "var(--vt-color-primary)" : "var(--vt-color-surface)",
                    border: `2px solid ${i === HISTORY.length - 1 ? "var(--vt-color-primary)" : "var(--vt-color-accent)"}`,
                    display: "grid",
                    placeItems: "center",
                    zIndex: 1,
                  }}
                >
                  {i === HISTORY.length - 1 && <span style={{ color: "#fff", fontSize: 11 }}>✦</span>}
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
      <section style={{ padding: "100px 0" }}>
        <div style={WRAP}>
          <div style={{ textAlign: "center", marginBottom: 52, maxWidth: 640, marginInline: "auto" }}>
            <Eyebrow>Quality &amp; craftsmanship</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(34px,4vw,52px)",
                color: "var(--vt-color-text-strong)",
                margin: "14px 0 14px",
                letterSpacing: "-.02em",
              }}
            >
              Made to last a lifetime
            </h2>
            <p style={{ fontSize: 17, color: "var(--vt-color-text-muted)", lineHeight: 1.7 }}>
              Every Violet is the sum of small, exacting decisions — materials chosen for their integrity, finishes earned
              by hand.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {QUALITY.map(({ title, body }, i) => (
              <Reveal
                key={title}
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
      <section style={{ background: "var(--vt-color-surface)" }}>
        <div
          style={{
            ...WRAP,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
            borderBlock: "1px solid var(--vt-color-divider)",
            padding: "56px var(--vt-page-pad)",
          }}
        >
          {STATS.map(([n, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontSize: "clamp(40px,5vw,60px)",
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
          padding: "100px 0",
          background: "radial-gradient(900px 460px at 50% 0%,#3B0764,transparent 60%),linear-gradient(160deg,#0D0A1E,#231940)",
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
              "radial-gradient(520px 360px at 22% 30%,rgba(168,85,247,.20),transparent 60%),radial-gradient(440px 440px at 80% 72%,rgba(124,58,237,.18),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, ...WRAP }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow dark>Vision &amp; values</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 300,
                fontSize: "clamp(34px,4vw,52px)",
                margin: "14px 0 0",
                letterSpacing: "-.02em",
              }}
            >
              What we stand for
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {VALUES.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70} style={{ textAlign: "center", padding: "0 12px" }}>
                <div style={{ fontFamily: "var(--vt-font-display)", fontSize: 30, color: "var(--vt-gold-300)", marginBottom: 12 }}>
                  ✦
                </div>
                <h3 style={{ fontFamily: "var(--vt-font-display)", fontWeight: 400, fontSize: 30, margin: "0 0 12px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C4B5FD", margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg">
                Explore the collection →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
