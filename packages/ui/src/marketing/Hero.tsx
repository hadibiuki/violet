import type * as React from "react";

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Gold uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Display-face headline (may include <em> for the violet accent word). */
  title?: React.ReactNode;
  /** Supporting lead paragraph. */
  lead?: React.ReactNode;
  /** Action nodes (Buttons) row. */
  actions?: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: "left" | "center";
  /** Minimum height in px. @default 520 */
  minHeight?: number;
  /** Extra content below the lead (e.g. a hero image/motif). */
  children?: React.ReactNode;
}

/**
 * Hero — the celestial brand banner: deep ink-950 gradient, drifting aurora,
 * eyebrow + display title + lead + actions. `align` left or center.
 * Decorative-only; pass real heading text via `title`.
 */
export function Hero({ eyebrow, title, lead, actions, align = "left", minHeight = 520, children, style, ...rest }: HeroProps) {
  const center = align === "center";
  return (
    <header style={{
      position: "relative", overflow: "hidden", minHeight,
      display: "flex", alignItems: "center",
      background: "radial-gradient(1100px 640px at 72% 26%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)",
      ...style,
    }} {...rest}>
      <div aria-hidden="true" className="vt-hero__aurora" style={{ position: "absolute", inset: "-15%", pointerEvents: "none", background:
        "radial-gradient(560px 380px at 18% 28%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 84% 70%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 16%,rgba(201,168,106,.12),transparent 60%)", filter: "blur(10px)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, width: "100%", margin: "0 auto", padding: "64px 40px", textAlign: center ? "center" : "start" }}>
        <div style={{ maxWidth: center ? 760 : 560, marginInline: center ? "auto" : 0 }}>
          {eyebrow && <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--vt-gold-300)", fontWeight: 500 }}>{eyebrow}</span>}
          {title && <h1 style={{ fontFamily: "var(--vt-font-display)", fontWeight: 300, letterSpacing: "-.02em", fontSize: "clamp(48px,6vw,84px)", lineHeight: 1.02, color: "#fff", margin: "16px 0 18px" }}>{title}</h1>}
          {lead && <p style={{ fontSize: 19, lineHeight: 1.7, color: "#C4B5FD", margin: center ? "0 auto" : 0, maxWidth: 540 }}>{lead}</p>}
          {actions && <div style={{ display: "flex", gap: 14, marginTop: 32, justifyContent: center ? "center" : "flex-start", flexWrap: "wrap" }}>{actions}</div>}
          {children}
        </div>
      </div>
      <style>{`
        .vt-hero__aurora{animation:vt-hero-aurora 18s ease-in-out infinite alternate}
        @keyframes vt-hero-aurora{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-30px,20px,0) scale(1.06)}}
        @media(prefers-reduced-motion:reduce){.vt-hero__aurora{animation:none}}
      `}</style>
    </header>
  );
}
