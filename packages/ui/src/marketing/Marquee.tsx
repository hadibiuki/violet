import type * as React from "react";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Words or nodes to scroll. */
  items: React.ReactNode[];
  /** Seconds per loop (lower = faster). @default 28 */
  speed?: number;
  /** Glyph between items. @default "✦" */
  separator?: React.ReactNode;
}

/**
 * Marquee — horizontally scrolling row of words/nodes, each separated by the
 * gold ✦ sparkle. Loops seamlessly; pauses on hover; halts under reduced-motion.
 */
export function Marquee({ items = [], speed = 28, separator = "✦", style, ...rest }: MarqueeProps) {
  const run = [...items, ...items]; // duplicate for seamless loop
  return (
    <div style={{ overflow: "hidden", borderBlock: "1px solid var(--vt-color-divider)", background: "var(--vt-color-surface)", padding: "18px 0", ...style }} {...rest}>
      <div className="vt-marquee" style={{ display: "flex", gap: 60, whiteSpace: "nowrap", width: "max-content" }}>
        {run.map((it, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 60, fontFamily: "var(--vt-font-display)", fontSize: 26, color: "var(--vt-color-text-subtle)" }}>
            {it}
            <span aria-hidden="true" style={{ color: "var(--vt-color-accent)", fontSize: 14 }}>{separator}</span>
          </span>
        ))}
      </div>
      <style>{`
        .vt-marquee{animation:vt-marquee ${speed}s linear infinite}
        .vt-marquee:hover{animation-play-state:paused}
        @keyframes vt-marquee{to{transform:translateX(-50%)}}
        @media(prefers-reduced-motion:reduce){.vt-marquee{animation:none}}
      `}</style>
    </div>
  );
}
