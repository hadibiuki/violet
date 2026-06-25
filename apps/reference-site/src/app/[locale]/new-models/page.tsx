import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { NewModelsClient } from "../../../components/new-models/NewModelsClient";
import { NEW_MODELS, CATALOG_FACETS } from "../../../lib/catalog-data";

export const metadata: Metadata = {
  title: "New Models · Violet",
  description: "The latest Violet timepieces — just arrived for the 2026 season.",
};

type Props = { params: Promise<{ locale: string }> };

export default async function NewModelsPage({ params }: Props) {
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
            "radial-gradient(1100px 620px at 72% 26%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)",
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
              "radial-gradient(560px 380px at 20% 30%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 82% 70%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 16%,rgba(201,168,106,.12),transparent 60%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="mx-auto w-full max-w-[1280px] px-4 md:px-10"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: 64,
            paddingBottom: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 13,
              color: "rgba(196,181,253,.8)",
              marginBottom: 22,
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>New Models</b>
          </div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "var(--vt-gold-300)",
              fontWeight: 500,
            }}
          >
            Just arrived · 2026
          </span>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              letterSpacing: "-.02em",
              fontSize: "clamp(48px,6vw,84px)",
              lineHeight: 1.02,
              color: "#fff",
              margin: "16px 0 18px",
            }}
          >
            New Models
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#C4B5FD", maxWidth: 540 }}>
            The season's latest timepieces — fresh designs, refined movements. Filter by what matters to you and find the
            one that's yours.
          </p>
        </div>
      </header>

      <NewModelsClient products={NEW_MODELS} facets={CATALOG_FACETS} />

      <SiteFooter />
    </div>
  );
}
