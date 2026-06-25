"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { BrandMark } from "@violet/ui";
import { Link, usePathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";

// Route table: [translation key, path]. Paths are locale-agnostic — the
// next-intl <Link> adds the /en, /ru, /ar prefix.
const NAV = [
  ["home", "/"],
  ["newModels", "/new-models"],
  ["products", "/products"],
  ["brand", "/brand"],
  ["about", "/about"],
  ["technologies", "/technologies"],
  ["contact", "/contact"],
] as const;

const LOCALE_LABEL: Record<string, string> = { en: "EN", ru: "RU", ar: "AR" };

/**
 * Site chrome header. `overlay` sits transparent over the dark hero and frosts
 * on scroll; otherwise it's a solid sticky bar. RTL-safe via logical inset.
 */
export function SiteHeader({ variant = "light" }: { variant?: "light" | "overlay" }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const activeLocale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publish the header's live height as a CSS variable so sticky content (e.g.
  // the catalog filter rail) can offset by it instead of a hardcoded guess.
  // Re-measures on resize and whenever the bar compacts on scroll.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty("--vt-header-height", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    window.addEventListener("resize", publish);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (el) document.documentElement.style.setProperty("--vt-header-height", `${el.offsetHeight}px`);
  }, [scrolled]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const onHero = variant === "overlay" && !scrolled && !menuOpen;
  const activeColor = onHero ? "var(--vt-gold-300)" : "var(--vt-color-accent-strong)";

  const isActiveHref = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      ref={navRef}
      className="px-4 md:px-10"
      style={{
        position: variant === "overlay" ? (scrolled ? "fixed" : "absolute") : "sticky",
        insetBlockStart: 0,
        insetInline: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: scrolled ? 12 : 18,
        background: onHero ? "transparent" : "rgba(248,247,255,.92)",
        backdropFilter: onHero ? "none" : "blur(18px) saturate(1.4)",
        borderBottom: `1px solid ${onHero ? "transparent" : "var(--vt-color-divider)"}`,
        transition: "background var(--vt-duration-slow), padding var(--vt-duration-slow)",
      }}
    >
      <Link href="/" aria-label="Violet — home" style={{ textDecoration: "none" }}>
        <BrandMark tone={onHero ? "onDark" : "light"} />
      </Link>

      {/* Desktop nav — hidden below lg. */}
      <div className="hidden items-center gap-[30px] lg:flex">
        {NAV.map(([key, href]) => {
          const isActive = isActiveHref(href);
          return (
            <Link
              key={key}
              href={href}
              className="vt-navlink"
              style={{
                position: "relative",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                whiteSpace: "nowrap",
                paddingBottom: 4,
                color: isActive
                  ? activeColor
                  : onHero
                    ? "rgba(255,255,255,.82)"
                    : "var(--vt-color-text)",
                transition: "color var(--vt-duration-base) var(--vt-ease-standard)",
              }}
            >
              {t(key)}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  insetInline: 0,
                  insetBlockEnd: 0,
                  height: 2,
                  borderRadius: 2,
                  background: activeColor,
                  transform: `scaleX(${isActive ? 1 : 0})`,
                  transformOrigin: "left",
                  transition: "transform var(--vt-duration-base) var(--vt-ease-emphasized)",
                }}
              />
            </Link>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 2, alignItems: "center", fontSize: 12.5 }}>
        {routing.locales.map((loc) => {
          const isActive = loc === activeLocale;
          return (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              style={{
                padding: "5px 9px",
                borderRadius: 6,
                userSelect: "none",
                textDecoration: "none",
                color: isActive
                  ? onHero
                    ? "#fff"
                    : "var(--vt-color-primary)"
                  : onHero
                    ? "rgba(255,255,255,.6)"
                    : "var(--vt-color-text-muted)",
                background: isActive
                  ? onHero
                    ? "rgba(255,255,255,.16)"
                    : "var(--vt-color-primary-subtle)"
                  : "transparent",
              }}
            >
              {LOCALE_LABEL[loc] ?? loc.toUpperCase()}
            </Link>
          );
        })}

        {/* Hamburger — only below lg. */}
        <button
          type="button"
          className="grid place-items-center lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            marginInlineStart: 8,
            width: 38,
            height: 38,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: onHero ? "#fff" : "var(--vt-color-text)",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown panel. */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "absolute",
            insetBlockStart: "100%",
            insetInline: 0,
            display: "flex",
            flexDirection: "column",
            padding: "8px 20px 20px",
            background: "var(--vt-color-surface)",
            borderBottom: "1px solid var(--vt-color-divider)",
            boxShadow: "var(--vt-shadow-lg)",
          }}
        >
          {NAV.map(([key, href]) => {
            const isActive = isActiveHref(href);
            return (
              <Link
                key={key}
                href={href}
                style={{
                  padding: "12px 4px",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--vt-color-accent-strong)" : "var(--vt-color-text)",
                  borderBottom: "1px solid var(--vt-color-divider)",
                }}
              >
                {t(key)}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
