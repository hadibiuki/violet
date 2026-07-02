import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { ContactForm } from "../../../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Violet",
  description: "Get in touch with Violet, or find an authorised dealer near you.",
};

type Props = { params: Promise<{ locale: string }> };

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.41-1.41a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  const INFO_ITEMS = [
    { icon: <MailIcon />, label: t("side.items.email.label"), value: "partners@violet-watches.com" },
    { icon: <PhoneIcon />, label: t("side.items.phone.label"), value: "+44 20 7946 0102" },
    { icon: <MapPinIcon />, label: t("side.items.office.label"), value: "12 Horology Row, London, UK" },
    { icon: <ClockIcon />, label: t("side.items.hours.label"), value: "Mon–Fri · 09:00–18:00 GMT" },
  ];

  return (
    <div>
      <SiteHeader variant="overlay" />

      {/* Dark header band */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          paddingTop: 128,
          background: "linear-gradient(160deg,#180F19,#27192A 60%,#342032)",
        }}
      >
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
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(900px 360px at 80% 40%,rgba(230,180,83,.10),transparent 60%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-4 pb-10 pt-6 md:px-10">
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 13,
              color: "rgba(255,255,255,.6)",
              marginBottom: 18,
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {t("breadcrumb.home")}
            </Link>
            <span style={{ color: "var(--vt-gold-300)" }}>›</span>
            <b style={{ color: "#fff", fontWeight: 500 }}>{t("breadcrumb.contact")}</b>
          </div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "var(--vt-gold-300)",
              fontWeight: 500,
            }}
          >
            {t("hero.eyebrow")}
          </span>
          <h1
            style={{
              fontFamily: "var(--vt-font-display)",
              fontWeight: 300,
              fontSize: "clamp(44px,5.4vw,68px)",
              color: "#fff",
              margin: "14px 0 10px",
              letterSpacing: "-.02em",
              lineHeight: 1.02,
            }}
          >
            {t("hero.title")}
          </h1>
          <p style={{ color: "rgba(255,255,255,.66)", fontSize: 17, margin: 0, maxWidth: 560 }}>
            {t("hero.subtitle")}
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-14">

          {/* Form — client island */}
          <ContactForm />

          {/* Side info — static, stays in server component */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: ".26em",
                  textTransform: "uppercase",
                  color: "var(--vt-color-accent-strong)",
                  fontWeight: 500,
                }}
              >
                {t("side.eyebrow")}
              </span>
              <h2
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(28px,3vw,34px)",
                  color: "var(--vt-color-text-strong)",
                  margin: "12px 0",
                  letterSpacing: "-.02em",
                }}
              >
                {t("side.title")}
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--vt-color-text-muted)" }}>
                {t("side.body")}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    padding: "14px 0",
                    borderTop: "1px solid var(--vt-color-divider)",
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      borderRadius: "var(--vt-radius-md)",
                      background: "var(--vt-color-primary-subtle)",
                      color: "var(--vt-color-primary)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: 12.5, color: "var(--vt-color-text-muted)" }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "var(--vt-color-text-strong)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social / misc icon buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[GlobeIcon, InstagramIcon, SendIcon].map((Icon, i) => (
                <span
                  key={i}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--vt-radius-md)",
                    border: "1.5px solid var(--vt-color-border-strong)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--vt-color-text-muted)",
                    cursor: "pointer",
                  }}
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
