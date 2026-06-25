"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqCategory = { key: string; icon: string; label: string; items: FaqItem[] };

function Icon({ name }: { name: string }) {
  const s = { width: 20, height: 20, stroke: "currentColor", fill: "none", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "package") return (
    <svg viewBox="0 0 24 24" {...s}>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
  );
  if (name === "shield-check") return (
    <svg viewBox="0 0 24 24" {...s}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
  if (name === "sparkles") return (
    <svg viewBox="0 0 24 24" {...s}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/>
    </svg>
  );
  if (name === "rotate-ccw") return (
    <svg viewBox="0 0 24 24" {...s}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
    </svg>
  );
  return null;
}

export function FaqAccordion({
  categories,
  pillsOnly = false,
}: {
  categories: FaqCategory[];
  pillsOnly?: boolean;
}) {
  const [openKey, setOpenKey] = useState<string | null>("orders-0");

  const scrollTo = (key: string) => {
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggle = (id: string) => setOpenKey((prev) => (prev === id ? null : id));

  if (pillsOnly) {
    return (
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 36,
        }}
      >
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => scrollTo(c.key)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              padding: "9px 16px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,.86)",
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(196,181,253,.28)",
              backdropFilter: "blur(6px)",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      {categories.map((cat) => (
        <section
          key={cat.key}
          id={cat.key}
          style={{ scrollMarginTop: 96, marginBottom: 60 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--vt-radius-md)",
                background: "var(--vt-color-primary-subtle)",
                color: "var(--vt-color-primary)",
                display: "grid",
                placeItems: "center",
                fontSize: 20,
              }}
            >
              <Icon name={cat.icon} />
            </span>
            <h2
              style={{
                fontFamily: "var(--vt-font-display)",
                fontWeight: 400,
                fontSize: "clamp(24px,3vw,32px)",
                color: "var(--vt-color-text-strong)",
                margin: 0,
                letterSpacing: "-.01em",
              }}
            >
              {cat.label}
            </h2>
          </div>

          <div style={{ borderTop: "1px solid var(--vt-color-divider)", marginTop: 18 }}>
            {cat.items.map(({ q, a }, i) => {
              const id = `${cat.key}-${i}`;
              const isOpen = openKey === id;
              return (
                <div key={id} style={{ borderBottom: "1px solid var(--vt-color-divider)" }}>
                  <button
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 24,
                      padding: "24px 8px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(15px,1.5vw,18px)",
                        fontWeight: 500,
                        color: "var(--vt-color-text-strong)",
                        lineHeight: 1.4,
                      }}
                    >
                      {q}
                    </span>
                    <span
                      style={{
                        flex: "none",
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        background: isOpen
                          ? "var(--vt-color-primary)"
                          : "var(--vt-color-primary-subtle)",
                        color: isOpen ? "#fff" : "var(--vt-color-primary)",
                        transition:
                          "all var(--vt-duration-base) var(--vt-ease-emphasized)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        fontSize: 20,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition:
                        "grid-template-rows var(--vt-duration-slow) var(--vt-ease-standard)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          margin: 0,
                          padding: "0 56px 26px 8px",
                          fontSize: 16,
                          lineHeight: 1.75,
                          color: "var(--vt-color-text-muted)",
                          maxWidth: 720,
                        }}
                      >
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
