"use client";

import Link from "next/link";
import { SiteHeader } from "../../components/site/SiteHeader";

const SPARKS = [
  { top: "18%", left: "8%",  size: 3, delay: 0 },
  { top: "32%", left: "14%", size: 2, delay: 1.2 },
  { top: "55%", left: "5%",  size: 2.5, delay: 0.7 },
  { top: "72%", left: "18%", size: 2, delay: 2.1 },
  { top: "14%", left: "48%", size: 2, delay: 0.4 },
  { top: "20%", left: "82%", size: 3, delay: 1.6 },
  { top: "38%", left: "92%", size: 2, delay: 0.9 },
  { top: "60%", left: "88%", size: 2.5, delay: 1.9 },
  { top: "80%", left: "75%", size: 2, delay: 0.3 },
  { top: "45%", left: "70%", size: 3, delay: 2.4 },
  { top: "88%", left: "42%", size: 2, delay: 1.1 },
  { top: "10%", left: "65%", size: 2, delay: 0.6 },
];

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background gradient */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 55%, #3b1f6e 0%, #1e0d40 40%, #0d0a1e 80%)",
          zIndex: 0,
        }}
      />

      {/* Sparkle dots */}
      {SPARKS.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#fff",
            opacity: 0.7,
            zIndex: 1,
            animation: `vt-sparkle 3s ${s.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Header */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <SiteHeader variant="overlay" />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        {/* 500 number */}
        <p
          style={{
            fontFamily: "var(--vt-font-display, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(160px, 22vw, 280px)",
            fontWeight: 300,
            color: "rgba(196,181,253,0.55)",
            lineHeight: 0.9,
            margin: "0 0 16px",
            letterSpacing: "-.04em",
            textShadow: "0 0 80px rgba(196,181,253,0.4), 0 0 160px rgba(139,92,246,0.3)",
          }}
        >
          500
        </p>

        {/* Eyebrow */}
        <span
          style={{
            display: "block",
            fontSize: 12,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#E6B453",
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          A Movement Skipped
        </span>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--vt-font-display, 'Cormorant Garamond', Georgia, serif)",
            fontWeight: 400,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#fff",
            margin: "0 0 4px",
            lineHeight: 1.1,
          }}
        >
          Something went
        </h1>
        <h1
          style={{
            fontFamily: "var(--vt-font-display, 'Cormorant Garamond', Georgia, serif)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "rgba(196,181,253,0.9)",
            margin: "0 0 28px",
            lineHeight: 1.1,
          }}
        >
          wrong on our end
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,.55)",
            margin: "0 0 48px",
            maxWidth: 480,
          }}
        >
          An unexpected error stopped this page from loading. Our team has been notified — please try again in a moment, or head back home.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              padding: "14px 32px",
              background: "#E6B453",
              border: "none",
              borderRadius: 4,
              color: "#1a0d30",
              fontSize: 13,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <Link
            href="/en"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,.35)",
              borderRadius: 4,
              color: "#fff",
              fontSize: 13,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
