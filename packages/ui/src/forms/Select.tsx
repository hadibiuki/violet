import { useId } from "react";
import type * as React from "react";

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "size"> {
  /** Persistent label above the control. */
  label?: string;
  /** Helper text below. */
  hint?: string;
  /** Error message — red border + aria-invalid. */
  error?: string;
  /** Options as strings or {value,label}. */
  options?: SelectOption[];
  /** Placeholder shown as a disabled-looking empty option. */
  placeholder?: string;
  /** Controlled value. */
  value?: string;
  /** Called with (value, event). */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Control height: md 40 · lg 48. @default "md" */
  size?: "md" | "lg";
}

/** Native dropdown styled to match Input — label/hint/error, focus ring, chevron. */
export function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  value,
  onChange,
  size = "md",
  id,
  style,
  children,
  ...rest
}: SelectProps) {
  const reactId = useId();
  const selId = id || reactId;
  const height = size === "lg" ? 48 : 40;
  const invalid = Boolean(error);
  const isPlaceholder = placeholder && (value === "" || value == null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-2)", fontFamily: "var(--vt-font-sans)", textAlign: "start" }}>
      {label && <label htmlFor={selId} style={{ fontSize: "var(--vt-text-sm)", fontWeight: "var(--vt-weight-medium)", color: "var(--vt-color-text)" }}>{label}</label>}
      <div className="vt-selwrap" style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={selId}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value, e)}
          aria-invalid={invalid || undefined}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            width: "100%",
            height,
            paddingInline: "var(--vt-space-4)",
            paddingInlineEnd: 36,
            background: "var(--vt-color-surface)",
            border: `1.5px solid ${invalid ? "var(--vt-color-danger)" : "var(--vt-color-border-strong)"}`,
            borderRadius: "var(--vt-radius-sm)",
            font: "inherit",
            fontSize: "var(--vt-text-sm)",
            color: isPlaceholder ? "var(--vt-color-text-subtle)" : "var(--vt-color-text-strong)",
            outline: "none",
            cursor: "pointer",
            textAlign: "start",
            transition: "border-color var(--vt-duration-base), box-shadow var(--vt-duration-base)",
            ...style,
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
          {children}
        </select>
        <span aria-hidden="true" style={{ position: "absolute", insetInlineEnd: 12, pointerEvents: "none", color: "var(--vt-color-text-muted)", display: "inline-flex" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5l3.5 3.5L10.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
      {error ? <span style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-danger)" }}>{error}</span>
        : hint ? <span style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-muted)" }}>{hint}</span> : null}
      <style>{`.vt-selwrap:focus-within select{ border-color: var(--vt-color-primary); box-shadow: var(--vt-shadow-focus); }`}</style>
    </div>
  );
}
