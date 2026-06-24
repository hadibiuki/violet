import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { Reveal } from "../../../components/home/Reveal";
import { BrandMark, Button } from "@violet/ui";

export const metadata: Metadata = {
  title: "Brand & Identity — Violet",
  description:
    "The Violet identity system — monogram, palette, typography and the guilloché texture, extracted from Collection 2026.",
};

type Props = { params: Promise<{ locale: string }> };

const INK = "var(--vt-color-brand-ink)";
const GOLD = "var(--vt-color-brand-gold)";
const WRAP = "mx-auto w-full max-w-[1280px] px-5 md:px-10";

const VIOLET_STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const GOLD_STOPS = [50, 100, 200, 300, 400, 500, 600] as const;

const TYPE_ROWS = [
  {
    font: "Pinyon Script",
    role: "Monogram · signature",
    note: "Brand moments only",
    sample: "Violet",
    size: 80,
    extra: { fontFamily: "var(--vt-font-script)", color: GOLD } as React.CSSProperties,
  },
  {
    font: "Cinzel",
    role: "Wordmark · engraved caps",
    note: "Lockups, premium titles",
    sample: "VIOLET",
    size: 36,
    extra: { fontFamily: "var(--vt-font-wordmark)", letterSpacing: ".32em", fontWeight: 500 } as React.CSSProperties,
  },
  {
    font: "Cormorant Garamond",
    role: "Display · headlines",
    note: "Hero & section titles",
    sample: "Timeless, reimagined",
    size: 42,
    extra: { fontFamily: "var(--vt-font-display)", fontWeight: 300 } as React.CSSProperties,
  },
  {
    font: "Inter",
    role: "Interface · body & UI",
    note: "All product surfaces",
    sample: "Precision engineering, considered design.",
    size: 20,
    extra: { fontFamily: "var(--vt-font-sans)" } as React.CSSProperties,
  },
];

const TEXTURE_TILES = [
  { label: "On aubergine", bg: INK, opacity: 0.7, filter: "none", textColor: "rgba(255,255,255,.7)" },
  {
    label: "On champagne",
    bg: GOLD,
    opacity: 0.85,
    filter:
      "brightness(0) saturate(100%) invert(11%) sepia(20%) saturate(1500%) hue-rotate(255deg)",
    textColor: INK,
  },
  { label: "Tone on tone", bg: "#180F19", opacity: 0.5, filter: "none", textColor: "rgba(255,255,255,.7)" },
];

// Shared section heading block
function SecHead({
  eyebrow,
  title,
  sub,
  dark,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div style={{ marginBottom: 48, maxWidth: 720 }}>
      <span
        style={{
          fontSize: 12,
          letterSpacing: ".28em",
          textTransform: "uppercase",
          fontWeight: 500,
          color: dark ? GOLD : "var(--vt-color-accent-strong)",
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: "var(--vt-font-display)",
          fontWeight: 300,
          fontSize: "clamp(32px,4vw,46px)",
          color: dark ? "#fff" : "var(--vt-color-text-strong)",
          margin: "10px 0 0",
          letterSpacing: "-.02em",
          lineHeight: 1.08,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: dark ? "rgba(255,255,255,.72)" : "var(--vt-color-text-muted)",
            marginTop: 16,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// BrandMark display cell used in the Mark section
function MarkCell({ label, dark, children }: { label: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: "var(--vt-radius-xl)",
        border: "1px solid var(--vt-color-border)",
        background: dark ? INK : "var(--vt-color-surface)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "grid",
          placeItems: "center",
          padding: 40,
          minHeight: 180,
        }}
      >
        {children}
      </div>
      <div
        style={{
          padding: "12px 16px",
          fontSize: 12,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,.55)" : "var(--vt-color-text-muted)",
          borderTop: `1px solid ${dark ? "rgba(255,255,255,.1)" : "var(--vt-color-divider)"}`,
        }}
      >
        {label}
      </div>
    </div>
  );
}

import type React from "react";

export default async function BrandPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Brand");

  return (
    <div>
      <SiteHeader variant="overlay" />

      {/* ── Hero ── */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          minHeight: 660,
          display: "grid",
          paddingTop: 96,
          background:
            "radial-gradient(1100px 700px at 72% 38%,#45304B 0%,transparent 58%),linear-gradient(160deg,#180F19,#27192A 55%,#342032)",
        }}
      >
        {/* Aurora blob */}
        <div
          className="vt-aurora"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20%",
            pointerEvents: "none",
            background:
              "radial-gradient(620px 420px at 22% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(520px 520px at 80% 70%,rgba(126,88,122,.30),transparent 60%),radial-gradient(420px 420px at 60% 22%,rgba(230,180,83,.08),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        {/* Guilloché */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/brand/violet-floral.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "150px",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />

        <div className={`relative z-[2] ${WRAP}`} style={{ alignSelf: "center", width: "100%" }}>
          <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-10">
            {/* Copy */}
            <div>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: GOLD,
                }}
              >
                {t("hero.eyebrow")}
              </span>
              <h1
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(46px,5.4vw,82px)",
                  lineHeight: 1.02,
                  letterSpacing: "-.02em",
                  margin: "20px 0 20px",
                }}
              >
                {t("hero.title1")}
                <br />
                {t("hero.title2")}
              </h1>
              <p
                style={{
                  fontFamily: "var(--vt-font-script)",
                  fontSize: "clamp(26px,3vw,38px)",
                  color: GOLD,
                  margin: "0 0 28px",
                  lineHeight: 1.25,
                }}
              >
                {t("hero.tagline")}
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,.7)",
                  maxWidth: 420,
                  marginBottom: 32,
                }}
              >
                {t("hero.body")}
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#mark" style={{ textDecoration: "none" }}>
                  <Button variant="accent" size="lg">
                    {t("hero.ctaPrimary")}
                  </Button>
                </a>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Button
                    size="lg"
                    style={{
                      background: "rgba(255,255,255,.06)",
                      border: "1.5px solid rgba(230,180,83,.4)",
                      color: "#fff",
                    }}
                  >
                    {t("hero.ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* BrandMark */}
            <div className="hidden lg:grid" style={{ placeItems: "center" }}>
              <BrandMark variant="lockup" tone="ink" size="xl" framed tagline />
            </div>
          </div>
        </div>
      </header>

      {/* ── The Mark ── */}
      <section id="mark" style={{ padding: "104px 0" }}>
        <div className={WRAP}>
          <Reveal>
            <SecHead eyebrow={t("mark.eyebrow")} title={t("mark.title")} sub={t("mark.sub")} />
          </Reveal>

          {/* 4 small cells */}
          <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal delay={0}>
              <MarkCell label="Monogram">
                <BrandMark variant="monogram" tone="light" size="lg" framed />
              </MarkCell>
            </Reveal>
            <Reveal delay={60}>
              <MarkCell label="Monogram · gold on ink" dark>
                <BrandMark variant="monogram" tone="ink" size="lg" framed />
              </MarkCell>
            </Reveal>
            <Reveal delay={120}>
              <MarkCell label="Wordmark">
                <BrandMark variant="wordmark" tone="light" size="md" />
              </MarkCell>
            </Reveal>
            <Reveal delay={180}>
              <MarkCell label="Wordmark · on ink" dark>
                <BrandMark variant="wordmark" tone="onDark" size="md" />
              </MarkCell>
            </Reveal>
          </div>

          {/* 2 large cells */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Reveal>
              <MarkCell label="Primary lockup">
                <BrandMark variant="lockup" tone="light" size="lg" framed tagline />
              </MarkCell>
            </Reveal>
            <Reveal delay={80}>
              <MarkCell label="Horizontal lockup · on ink" dark>
                <BrandMark variant="horizontal" tone="ink" size="lg" framed />
              </MarkCell>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Palette ── */}
      <section style={{ background: "var(--vt-color-surface)", padding: "104px 0" }}>
        <div className={WRAP}>
          <Reveal>
            <SecHead
              eyebrow={t("palette.eyebrow")}
              title={t("palette.title")}
              sub={t("palette.sub")}
            />
          </Reveal>

          {/* Two primary swatches */}
          <Reveal>
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                { name: "Primary · Aubergine", varName: "--vt-color-primary", hex: "#27192A", textColor: "#fff" },
                { name: "Secondary · Champagne Gold", varName: "--vt-color-brand-gold", hex: "#E6B453", textColor: INK },
              ].map((sw) => (
                <div
                  key={sw.varName}
                  style={{
                    borderRadius: "var(--vt-radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--vt-color-border)",
                  }}
                >
                  <div
                    style={{
                      background: `var(${sw.varName})`,
                      height: 168,
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 14,
                      color: sw.textColor,
                    }}
                  >
                    <span style={{ fontFamily: "var(--vt-font-mono)", fontSize: 12 }}>{sw.hex}</span>
                  </div>
                  <div style={{ padding: "10px 14px", background: "var(--vt-color-surface)" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--vt-color-text-strong)" }}>
                      {sw.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--vt-color-text-subtle)",
                        fontFamily: "var(--vt-font-mono)",
                        marginTop: 2,
                      }}
                    >
                      {sw.varName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Four secondary swatches */}
          <Reveal>
            <div className="mb-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {[
                { name: "Ink (text)", varName: "--vt-ink-900", hex: "#1C131F", textColor: "#fff" },
                { name: "Surface", varName: "--vt-color-surface", hex: "#FFFFFF", textColor: INK },
                { name: "Background", varName: "--vt-color-bg", hex: "#FAF8F9", textColor: INK },
                { name: "Gold deep", varName: "--vt-gold-600", hex: "#A87B2A", textColor: "#fff" },
              ].map((sw) => (
                <div
                  key={sw.varName}
                  style={{
                    borderRadius: "var(--vt-radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--vt-color-border)",
                  }}
                >
                  <div
                    style={{
                      background: `var(${sw.varName})`,
                      height: 96,
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 14,
                      color: sw.textColor,
                    }}
                  >
                    <span style={{ fontFamily: "var(--vt-font-mono)", fontSize: 11 }}>{sw.hex}</span>
                  </div>
                  <div style={{ padding: "10px 14px", background: "var(--vt-color-surface)" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--vt-color-text-strong)" }}>
                      {sw.name}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "var(--vt-color-text-subtle)",
                        fontFamily: "var(--vt-font-mono)",
                        marginTop: 2,
                      }}
                    >
                      {sw.varName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Color ramps */}
          <Reveal>
            <div style={{ display: "grid", gap: 22 }}>
              {/* Aubergine ramp */}
              <div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--vt-color-text-muted)",
                    marginBottom: 10,
                  }}
                >
                  Aubergine ramp
                </div>
                <div
                  style={{
                    display: "flex",
                    borderRadius: "var(--vt-radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--vt-color-border)",
                  }}
                >
                  {VIOLET_STOPS.map((s) => (
                    <div
                      key={s}
                      style={{
                        flex: 1,
                        height: 56,
                        background: `var(--vt-violet-${s})`,
                        display: "grid",
                        placeItems: "center",
                        fontSize: 10,
                        fontFamily: "var(--vt-font-mono)",
                        color: s >= 500 ? "#fff" : "rgba(0,0,0,.5)",
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Champagne ramp */}
              <div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--vt-color-text-muted)",
                    marginBottom: 10,
                  }}
                >
                  Champagne ramp
                </div>
                <div
                  style={{
                    display: "flex",
                    borderRadius: "var(--vt-radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--vt-color-border)",
                  }}
                >
                  {GOLD_STOPS.map((s) => (
                    <div
                      key={s}
                      style={{
                        flex: 1,
                        height: 56,
                        background: `var(--vt-gold-${s})`,
                        display: "grid",
                        placeItems: "center",
                        fontSize: 10,
                        fontFamily: "var(--vt-font-mono)",
                        color: s >= 500 ? "#fff" : "rgba(0,0,0,.5)",
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Typography ── */}
      <section style={{ padding: "104px 0" }}>
        <div className={WRAP}>
          <Reveal>
            <SecHead
              eyebrow={t("type.eyebrow")}
              title={t("type.title")}
              sub={t("type.sub")}
            />
          </Reveal>

          <div>
            {TYPE_ROWS.map((row, i) => (
              <Reveal key={row.font} delay={i * 60}>
                <div
                  className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[200px_1fr]"
                  style={{
                    padding: "28px 0",
                    borderTop: "1px solid var(--vt-color-divider)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--vt-color-text-strong)",
                      }}
                    >
                      {row.font}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "var(--vt-color-text-muted)", marginTop: 4 }}
                    >
                      {row.role}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--vt-color-text-subtle)",
                        marginTop: 8,
                      }}
                    >
                      {row.note}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: row.size,
                      lineHeight: 1.05,
                      color: "var(--vt-color-text-strong)",
                      ...row.extra,
                    }}
                  >
                    {row.sample}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Texture ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: INK,
          color: "#fff",
          padding: "104px 0",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/brand/violet-floral.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "150px",
            opacity: 0.14,
            pointerEvents: "none",
          }}
        />
        <div className={`relative z-[2] ${WRAP}`}>
          <Reveal>
            <SecHead
              eyebrow={t("texture.eyebrow")}
              title={t("texture.title")}
              sub={t("texture.body")}
              dark
            />
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {TEXTURE_TILES.map((tile) => (
                <div
                  key={tile.label}
                  style={{
                    position: "relative",
                    borderRadius: "var(--vt-radius-xl)",
                    overflow: "hidden",
                    background: tile.bg,
                    aspectRatio: "1",
                    border: "1px solid rgba(230,180,83,.2)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "url(/brand/violet-floral.svg)",
                      backgroundRepeat: "repeat",
                      backgroundSize: "120px",
                      opacity: tile.opacity,
                      filter: tile.filter,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 14,
                      bottom: 12,
                      fontSize: 12,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: tile.textColor,
                    }}
                  >
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Application ── */}
      <section style={{ padding: "104px 0", background: "var(--vt-color-surface)" }}>
        <div className={WRAP}>
          <Reveal>
            <SecHead
              eyebrow={t("application.eyebrow")}
              title={t("application.title")}
              sub={t("application.sub")}
            />
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Dark brand card */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  borderRadius: "var(--vt-radius-xl)",
                  background: INK,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid var(--vt-color-border)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/brand/violet-floral.svg)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "120px",
                    opacity: 0.22,
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 16,
                    border: "1px solid rgba(230,180,83,.3)",
                  }}
                />
                <BrandMark variant="lockup" tone="ink" size="md" framed tagline />
              </div>

              {/* Light brand card */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  borderRadius: "var(--vt-radius-xl)",
                  background: "var(--vt-color-bg)",
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid var(--vt-color-border)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 16,
                    border: "1px solid var(--vt-color-border-strong)",
                  }}
                />
                <BrandMark variant="lockup" tone="light" size="md" framed tagline />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
