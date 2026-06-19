import type * as React from "react";

/**
 * Button — the primary action control. Token-driven, RTL-safe, with the
 * brand's signature trailing-arrow slide on hover.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "accent" | "danger";
  /** Control height: sm 32 · md 40 · lg 48 (site CTA). @default "md" */
  size?: "sm" | "md" | "lg";
  /** Icon node placed on the inline-start. */
  leadingIcon?: React.ReactNode;
  /** Icon node on the inline-end — slides on hover (use the brand → arrow). */
  trailingIcon?: React.ReactNode;
  /** Replaces the leading icon with a spinner; width stays locked. @default false */
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  loading = false,
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}: ButtonProps) {
  const heights = { sm: 32, md: 40, lg: 48 };
  const padX = { sm: "var(--vt-space-3)", md: "var(--vt-space-4)", lg: "var(--vt-space-6)" };
  const fontSize = size === "lg" ? "var(--vt-text-base)" : "var(--vt-text-sm)";

  const variants: Record<NonNullable<ButtonProps["variant"]>, React.CSSProperties> = {
    primary: {
      background: "var(--vt-color-primary)",
      color: "var(--vt-color-on-primary)",
      border: "1.5px solid transparent",
      boxShadow: "var(--vt-shadow-md)",
    },
    secondary: {
      background: "var(--vt-color-surface)",
      color: "var(--vt-color-text)",
      border: "1.5px solid var(--vt-color-border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--vt-color-text)",
      border: "1.5px solid transparent",
    },
    accent: {
      background: "linear-gradient(135deg, var(--vt-gold-300), var(--vt-gold-400))",
      color: "var(--vt-color-on-accent)",
      border: "1.5px solid transparent",
      boxShadow: "0 8px 24px rgba(201,168,106,.30)",
    },
    danger: {
      background: "var(--vt-color-danger)",
      color: "#fff",
      border: "1.5px solid transparent",
    },
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`vt-btn vt-btn--${variant}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--vt-space-2)",
        height: heights[size] || heights.md,
        paddingInline: padX[size] || padX.md,
        fontFamily: "var(--vt-font-sans)",
        fontWeight: "var(--vt-weight-medium)",
        fontSize,
        lineHeight: 1,
        borderRadius: "var(--vt-radius-md)",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        transition:
          "transform var(--vt-duration-base) var(--vt-ease-standard), box-shadow var(--vt-duration-base), background var(--vt-duration-base)",
        whiteSpace: "nowrap",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {loading ? (
        <span
          aria-hidden="true"
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            animation: "vt-spin 0.7s linear infinite",
            opacity: 0.9,
          }}
        />
      ) : (
        leadingIcon && <span style={{ display: "inline-flex" }}>{leadingIcon}</span>
      )}
      {children && <span>{children}</span>}
      {trailingIcon && (
        <span className="vt-btn__arr" style={{ display: "inline-flex", transition: "transform var(--vt-duration-base)" }}>
          {trailingIcon}
        </span>
      )}
      <style>{`
        @keyframes vt-spin { to { transform: rotate(360deg); } }
        .vt-btn:hover:not(:disabled) { transform: translateY(-1px); }
        .vt-btn--primary:hover:not(:disabled) { background: var(--vt-color-primary-hover); }
        .vt-btn--secondary:hover:not(:disabled) { background: var(--vt-color-surface-sunken); }
        .vt-btn--ghost:hover:not(:disabled) { background: var(--vt-color-primary-subtle); }
        .vt-btn--accent:hover:not(:disabled) { box-shadow: 0 12px 32px rgba(201,168,106,.45); }
        .vt-btn:active:not(:disabled) { transform: translateY(0); }
        .vt-btn:focus-visible { outline: none; box-shadow: var(--vt-shadow-focus); }
        .vt-btn:hover:not(:disabled) .vt-btn__arr { transform: translateX(4px); }
      `}</style>
    </button>
  );
}
