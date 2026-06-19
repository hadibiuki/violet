import { useId } from "react";
import type * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Persistent label rendered above the field (never a placeholder). */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the border red and sets aria-invalid. */
  error?: string;
  /** Leading affix node (icon or unit) on the inline-start. */
  leadingAffix?: React.ReactNode;
  /** Field height: md 40 · lg 44/48. @default "md" */
  size?: "md" | "lg";
}

/**
 * Input / TextField — persistent label above, optional leading affix, hint/error.
 * Label is never a placeholder. RTL: text-align follows start.
 */
export function Input({ label, hint, error, leadingAffix, size = "md", id, style, ...rest }: InputProps) {
  const reactId = useId();
  const inputId = id || reactId;
  const height = size === "lg" ? 48 : 40;
  const invalid = Boolean(error);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-2)", fontFamily: "var(--vt-font-sans)", textAlign: "start" }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--vt-text-sm)", fontWeight: "var(--vt-weight-medium)", color: "var(--vt-color-text)" }}>
          {label}
        </label>
      )}
      <div
        className="vt-field"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--vt-space-2)",
          height,
          paddingInline: "var(--vt-space-4)",
          background: "var(--vt-color-surface)",
          border: `1.5px solid ${invalid ? "var(--vt-color-danger)" : "var(--vt-color-border-strong)"}`,
          borderRadius: "var(--vt-radius-sm)",
          transition: "border-color var(--vt-duration-base), box-shadow var(--vt-duration-base)",
        }}
      >
        {leadingAffix && <span style={{ display: "inline-flex", color: "var(--vt-color-text-muted)" }}>{leadingAffix}</span>}
        <input
          id={inputId}
          aria-invalid={invalid || undefined}
          aria-describedby={error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            font: "inherit",
            fontSize: "var(--vt-text-sm)",
            color: "var(--vt-color-text-strong)",
            textAlign: "start",
            ...style,
          }}
          {...rest}
        />
      </div>
      {error ? (
        <span id={`${inputId}-err`} style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-danger)" }}>{error}</span>
      ) : hint ? (
        <span id={`${inputId}-hint`} style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-muted)" }}>{hint}</span>
      ) : null}
      <style>{`.vt-field:focus-within{ border-color: var(--vt-color-primary); box-shadow: var(--vt-shadow-focus); }`}</style>
    </div>
  );
}
