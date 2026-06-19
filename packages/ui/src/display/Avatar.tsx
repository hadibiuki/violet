import type * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials fallback and the aria-label. */
  name?: string;
  /** Image URL; when absent, initials render on a violet gradient. */
  src?: string;
  /** sm 28 · md 36 · lg 48. @default "md" */
  size?: "sm" | "md" | "lg";
}

/**
 * Avatar — user/dealer initials or image, in a circle. Falls back to initials
 * on a violet gradient when no `src`. Sizes sm/md/lg.
 */
export function Avatar({ name = "", src, size = "md", style, ...rest }: AvatarProps) {
  const dims = { sm: 28, md: 36, lg: 48 };
  const d = dims[size] || dims.md;
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <span
      role="img"
      aria-label={name || "avatar"}
      style={{
        display: "inline-grid", placeItems: "center", width: d, height: d, flex: "none",
        borderRadius: "50%", overflow: "hidden", fontFamily: "var(--vt-font-sans)", fontWeight: "var(--vt-weight-semibold)",
        fontSize: d * 0.4, color: "#fff", userSelect: "none",
        background: src ? "var(--vt-color-surface-sunken)" : "linear-gradient(135deg, var(--vt-violet-400), var(--vt-violet-600))",
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (initials || "·")}
    </span>
  );
}
