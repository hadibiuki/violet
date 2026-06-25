import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { Reveal } from "../../../components/home/Reveal";
import { Button } from "@violet/ui";
import { FaqAccordion } from "../../../components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ · Violet — Answers, plainly",
  description:
    "Frequently asked questions about Violet timepieces — orders, shipping, warranty, care, and returns.",
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

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FAQ");

  const categories = t.raw("categories") as {
    key: string;
    icon: string;
    label: string;
    items: { q: string; a: string }[];
  }[];

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
              fontSize: "clamp(48px,6vw,84px)",
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
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "#C4B5FD",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {t("hero.subtitle")}
          </p>
          {/* Jump pills rendered by client component */}
          <FaqAccordion categories={categories} pillsOnly />
        </div>
      </header>

      {/* FAQ accordion body */}
      <section className="py-16 md:py-24">
        <div className={WRAP}>
          <FaqAccordion categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 100 }}>
        <div className={WRAP}>
          <Reveal>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--vt-radius-2xl)",
                textAlign: "center",
                color: "#fff",
                padding: "clamp(48px,6vw,72px) 40px",
                border: "1px solid rgba(230,180,83,.25)",
                background:
                  "radial-gradient(800px 400px at 50% 0%,#45304B,transparent 60%),linear-gradient(160deg,#180F19,#27192A)",
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <Eyebrow dark>{t("cta.eyebrow")}</Eyebrow>
                <h2
                  style={{
                    fontFamily: "var(--vt-font-display)",
                    fontWeight: 300,
                    fontSize: "clamp(32px,4.5vw,52px)",
                    margin: "12px 0 14px",
                    letterSpacing: "-.02em",
                  }}
                >
                  {t("cta.title")}
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.74)",
                    fontSize: 17,
                    lineHeight: 1.7,
                    maxWidth: 480,
                    margin: "0 auto 30px",
                  }}
                >
                  {t("cta.body")}
                </p>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button variant="accent" size="lg">
                    {t("cta.button")}
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
