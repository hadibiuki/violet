import type * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. a Lucide <i data-lucide>). */
  icon: React.ReactNode;
  /** Square size: sm 32 · md 40 · lg 48. @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "ghost" */
  variant?: "ghost" | "secondary" | "primary";
  /** Required for accessibility — describes the action. */
  "aria-label": string;
}

/** Square, icon-only control. Ghost by default; aria-label required. */
export function IconButton({
  icon,
  size = "md",
  variant = "ghost",
  disabled = false,
  style,
  ...rest
}: IconButtonProps) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || dims.md;

  const variants: Record<NonNullable<IconButtonProps["variant"]>, React.CSSProperties> = {
    ghost: { background: "transparent", color: "var(--vt-color-text)", border: "1.5px solid transparent" },
    secondary: { background: "var(--vt-color-surface)", color: "var(--vt-color-text)", border: "1.5px solid var(--vt-color-border-strong)" },
    primary: { background: "var(--vt-color-primary)", color: "var(--vt-color-on-primary)", border: "1.5px solid transparent" },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`vt-iconbtn vt-iconbtn--${variant}`}
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: d,
        height: d,
        borderRadius: "var(--vt-radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--vt-duration-base), transform var(--vt-duration-base)",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon}
      <style>{`
        .vt-iconbtn--ghost:hover:not(:disabled){ background: var(--vt-color-primary-subtle); }
        .vt-iconbtn--secondary:hover:not(:disabled){ background: var(--vt-color-surface-sunken); }
        .vt-iconbtn--primary:hover:not(:disabled){ background: var(--vt-color-primary-hover); }
        .vt-iconbtn:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }
      `}</style>
    </button>
  );
}
