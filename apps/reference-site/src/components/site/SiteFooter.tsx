import { useTranslations } from "next-intl";
import { BrandMark } from "@violet/ui";
import { Link } from "../../i18n/navigation";

const COLUMNS = [
  {
    head: "explore",
    links: [
      ["newModels", "/new-models"],
      ["products", "/products"],
      ["technologies", "/technologies"],
    ],
  },
  {
    head: "brand",
    links: [
      ["about", "/about"],
      ["history", "/about"],
      ["quality", "/about"],
    ],
  },
  {
    head: "support",
    links: [
      ["contact", "/contact"],
      ["findDealer", "/contact"],
      ["faq", "/contact"],
    ],
  },
] as const;

/** Dark site footer — brand lockup, link columns, legal line. Server component. */
export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="px-5 pb-[30px] pt-16 md:px-10"
      style={{ background: "var(--vt-ink-950)", color: "#fff" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-2 gap-10 pb-9 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <BrandMark tone="onDark" size="lg" />
            <p
              style={{
                color: "rgba(255,255,255,.6)",
                fontSize: 13,
                lineHeight: 1.7,
                marginTop: 14,
                maxWidth: 280,
              }}
            >
              {t("tagline")}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.head}>
              <h4
                style={{
                  color: "var(--vt-gold-300)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  marginBottom: 16,
                  fontWeight: 600,
                }}
              >
                {t(`col.${col.head}`)}
              </h4>
              {col.links.map(([key, href], i) => (
                <Link
                  key={`${key}-${i}`}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,.66)",
                    fontSize: 14,
                    marginBottom: 10,
                    textDecoration: "none",
                  }}
                >
                  {t(`link.${key}`)}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(230,180,83,.2)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,.5)",
            fontSize: 13,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span>{t("copyright", { year: 2026 })}</span>
          <span>English · Русский · العربية</span>
        </div>
      </div>
    </footer>
  );
}
