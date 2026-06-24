import { useTranslations } from "next-intl";
import { Button } from "@violet/ui";
import { Link } from "../../i18n/navigation";
import { frame } from "../../lib/catalog-data";


/**
 * Celestial dark hero — gold-accented display headline, dual CTAs, and a
 * floating watch ringed by two slow-spinning orbits. Motion is pure CSS
 * (globals.css), so this stays a server component.
 */
export function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <header
      // Top clears the overlay nav with breathing room; bottom keeps the CTAs
      // off the fold edge. Both tighten on mobile.
      className="pt-28 pb-16 md:pt-[150px] md:pb-[110px]"
      style={{
        position: "relative",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(1100px 700px at 72% 38%,#45304B 0%,transparent 58%),linear-gradient(160deg,#180F19,#27192A 55%,#342032)",
      }}
    >
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

      {/* Repeating Violet floral motif — the brand pattern behind the hero. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "url(/brand/violet-floral.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
          opacity: 0.1,
        }}
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.1fr_.9fr]">
        <div style={{ color: "#fff" }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "var(--vt-gold-300)",
              fontWeight: 500,
            }}
          >
            {t("eyebrow")}
          </span>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              letterSpacing: "-.02em",
              fontSize: "clamp(52px,6vw,96px)",
              lineHeight: 1.02,
              color: "#fff",
              margin: "18px 0 22px",
            }}
          >
            {t("titleLead")}
            <br />
            {t.rich("titleEmph", {
              em: (chunks) => (
                <em style={{ fontStyle: "italic", color: "var(--vt-gold-300)" }}>{chunks}</em>
              ),
            })}
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.74)",
              maxWidth: 440,
              marginBottom: 34,
            }}
          >
            {t("lead")}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/new-models" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" trailingIcon={<span>→</span>}>
                {t("ctaPrimary")}
              </Button>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1.5px solid rgba(255,255,255,.2)",
                  color: "#fff",
                }}
              >
                {t("ctaSecondary")}
              </Button>
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hidden lg:grid"
          style={{ position: "relative", placeItems: "center", height: 480 }}
        >
          <div
            className="vt-spin-slow"
            style={{
              position: "absolute",
              width: 460,
              height: 460,
              border: "1px solid rgba(230,180,83,.28)",
              borderRadius: "50%",
            }}
          />
          <div
            className="vt-spin-rev"
            style={{
              position: "absolute",
              width: 540,
              height: 540,
              border: "1px dashed rgba(230,180,83,.18)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(230,180,83,.20),transparent 62%)",
              filter: "blur(8px)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="vt-float"
            alt=""
            src={frame(0, 760)}
            style={{
              width: 360,
              height: 360,
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(230,180,83,.22)",
            }}
          />
        </div>
      </div>
    </header>
  );
}
