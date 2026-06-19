import type * as React from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** Placement relative to the trigger. @default "top" */
  side?: "top" | "bottom" | "left" | "right";
  /** The single trigger element. */
  children: React.ReactNode;
}

/**
 * Tooltip — hover/focus label on a single child. CSS-driven (no portal); the
 * trigger is wrapped in an inline-flex span. `side` positions the bubble.
 */
export function Tooltip({ label, side = "top", children, style, ...rest }: TooltipProps) {
  const pos: React.CSSProperties = {
    top: { bottom: "100%", insetInlineStart: "50%", transform: "translateX(-50%) translateY(-8px)" },
    bottom: { top: "100%", insetInlineStart: "50%", transform: "translateX(-50%) translateY(8px)" },
    left: { insetInlineEnd: "100%", top: "50%", transform: "translateY(-50%) translateX(-8px)" },
    right: { insetInlineStart: "100%", top: "50%", transform: "translateY(-50%) translateX(8px)" },
  }[side];

  return (
    <span className="vt-tip" tabIndex={0} style={{ position: "relative", display: "inline-flex", outline: "none", ...style }} {...rest}>
      {children}
      <span role="tooltip" className="vt-tip__bubble" style={{
        position: "absolute", zIndex: 600, ...pos, pointerEvents: "none",
        background: "var(--vt-ink-900)", color: "#fff",
        fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-xs)", fontWeight: "var(--vt-weight-medium)",
        padding: "6px 10px", borderRadius: "var(--vt-radius-sm)", whiteSpace: "nowrap",
        boxShadow: "var(--vt-shadow-lg)", opacity: 0, transition: "opacity var(--vt-duration-fast)",
      }}>{label}</span>
      <style>{`.vt-tip:hover .vt-tip__bubble,.vt-tip:focus-visible .vt-tip__bubble{opacity:1}`}</style>
    </span>
  );
}
