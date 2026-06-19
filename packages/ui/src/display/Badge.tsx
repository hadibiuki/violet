import type * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** NEW (violet) · LIMITED (gold) · neutral · soldout. @default "new" */
  variant?: "new" | "limited" | "neutral" | "soldout";
  /** Override the default label text. */
  children?: React.ReactNode;
}

/**
 * Badge — pill label for product status. NEW = violet, LIMITED = gold.
 * Semantics always carry text, never color alone.
 */
export function Badge({ variant = "new", children, style, ...rest }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, React.CSSProperties> = {
    new: { background: "var(--vt-color-badge-new)", color: "#fff" },
    limited: { background: "var(--vt-color-badge-limited)", color: "var(--vt-ink-950)" },
    neutral: { background: "var(--vt-color-surface-sunken)", color: "var(--vt-color-text-muted)" },
    soldout: { background: "var(--vt-ink-700)", color: "#fff" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--vt-font-sans)",
        fontSize: "var(--vt-text-2xs)",
        fontWeight: "var(--vt-weight-semibold)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: "var(--vt-radius-pill)",
        lineHeight: 1,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children || (variant === "new" ? "New" : variant === "limited" ? "Limited" : "")}
    </span>
  );
}
