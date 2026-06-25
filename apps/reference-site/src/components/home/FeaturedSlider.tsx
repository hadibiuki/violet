"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@violet/ui";
import { Link } from "../../i18n/navigation";
import { SPOTLIGHT } from "../../lib/catalog-data";

const sliderArrow = (side: "left" | "right") =>
  ({
    position: "absolute",
    top: "50%",
    [side]: 18,
    transform: "translateY(-50%)",
    zIndex: 3,
    width: 46,
    height: 46,
    borderRadius: "50%",
    cursor: "pointer",
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(230,180,83,.45)",
    color: "#fff",
    fontSize: 24,
    lineHeight: 1,
    display: "grid",
    placeItems: "center",
    backdropFilter: "blur(6px)",
  }) as const;

const pad = (n: number) => String(n).padStart(2, "0");

/** Auto-advancing spotlight slider (pause on hover). Client — owns slide state. */
export function FeaturedSlider() {
  const t = useTranslations("Home.spotlight");
  const data = SPOTLIGHT;
  const n = data.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (paused || n <= 1) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(id);
  }, [paused, n]);

  if (n === 0) return null;
  const p = data[i]!;

  return (
    <section
      className="pb-16 md:pb-[100px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
        <div style={{ marginBottom: 40 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "var(--vt-color-accent-strong)",
              fontWeight: 500,
            }}
          >
            {t("eyebrow")}
          </span>
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
            {t("title")}
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--vt-radius-2xl)",
            border: "1px solid var(--vt-color-border)",
            background: "var(--vt-color-surface-raised)",
            boxShadow: "var(--vt-shadow-md)",
          }}
        >
          <div
            className="grid grid-cols-1 items-stretch md:grid-cols-2"
            style={{ minHeight: 440 }}
          >
            <div
              key={`t${i}`}
              className="vt-slide-in"
              style={{
                padding: "clamp(32px,4vw,56px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: ".26em",
                  textTransform: "uppercase",
                  color: "var(--vt-color-accent-strong)",
                  fontWeight: 500,
                }}
              >
                {t("counter", { current: pad(i + 1), total: pad(n) })}
              </span>
              <h3
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(34px,4vw,52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-.02em",
                  margin: "14px 0 10px",
                  color: "var(--vt-color-text-strong)",
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--vt-font-mono)",
                  fontSize: 12,
                  letterSpacing: ".1em",
                  color: "var(--vt-color-text-muted)",
                  marginBottom: 18,
                }}
              >
                {p.sku}
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--vt-color-text-muted)",
                  maxWidth: 400,
                  marginBottom: 28,
                }}
              >
                {t("desc", { line: p.line })}
              </p>
              <div>
                <Link href={`/products/${p.sku}`} style={{ textDecoration: "none" }}>
                  <Button variant="accent" size="lg" trailingIcon={<span>→</span>}>
                    {t("cta")}
                  </Button>
                </Link>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 440,
                background: "#180F19",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`i${i}`}
                className="vt-slide-img"
                alt={p.name}
                src={p.image}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(110deg,rgba(24,15,25,.72) 0%,rgba(24,15,25,.12) 38%,transparent 60%),linear-gradient(0deg,rgba(24,15,25,.66),transparent 45%)",
                }}
              />
              <span
                aria-hidden="true"
                key={`n${i}`}
                className="vt-slide-in"
                style={{
                  position: "absolute",
                  top: 18,
                  insetInlineEnd: 26,
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 300,
                  fontSize: 96,
                  lineHeight: 1,
                  color: "rgba(255,255,255,.14)",
                  letterSpacing: "-.04em",
                }}
              >
                {pad(i + 1)}
              </span>
              <button onClick={() => go(-1)} aria-label={t("prev")} style={sliderArrow("left")}>
                ‹
              </button>
              <button onClick={() => go(1)} aria-label={t("next")} style={sliderArrow("right")}>
                ›
              </button>
            </div>
          </div>

          <div
            className="w-full md:w-1/2"
            style={{
              position: "absolute",
              bottom: 20,
              insetInlineStart: 0,
              display: "flex",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {data.map((slide, k) => (
              <button
                key={slide.sku}
                onClick={() => setI(k)}
                aria-label={t("goTo", { n: k + 1 })}
                style={{
                  width: k === i ? 26 : 8,
                  height: 8,
                  padding: 0,
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  background:
                    k === i ? "var(--vt-color-accent-strong)" : "var(--vt-color-border-strong)",
                  transition: "all .4s var(--vt-ease-standard)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
