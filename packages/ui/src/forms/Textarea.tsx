"use client";

import { useId } from "react";
import type * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Persistent label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the border red and sets aria-invalid. */
  error?: string;
  /** Minimum height in px. @default 128 */
  minHeight?: number;
}

/**
 * Textarea — multi-line text field matching the Input visual language.
 * Label + hint/error, focus ring, RTL-safe, resizable.
 */
export function Textarea({
  label,
  hint,
  error,
  minHeight = 128,
  id,
  style,
  ...rest
}: TextareaProps) {
  const reactId = useId();
  const taId = id || reactId;
  const invalid = Boolean(error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--vt-space-2)",
        fontFamily: "var(--vt-font-sans)",
        textAlign: "start",
      }}
    >
      {label && (
        <label
          htmlFor={taId}
          style={{
            fontSize: "var(--vt-text-sm)",
            fontWeight: "var(--vt-weight-medium)",
            color: "var(--vt-color-text)",
          }}
        >
          {label}
        </label>
      )}
      <textarea
        id={taId}
        className="vt-ta"
        aria-invalid={invalid || undefined}
        aria-describedby={
          error ? `${taId}-err` : hint ? `${taId}-hint` : undefined
        }
        style={{
          width: "100%",
          minHeight,
          padding: "12px var(--vt-space-4)",
          background: "var(--vt-color-surface)",
          border: `1.5px solid ${invalid ? "var(--vt-color-danger)" : "var(--vt-color-border-strong)"}`,
          borderRadius: "var(--vt-radius-sm)",
          font: "inherit",
          fontSize: "var(--vt-text-sm)",
          color: "var(--vt-color-text-strong)",
          lineHeight: 1.6,
          resize: "vertical",
          outline: "none",
          transition:
            "border-color var(--vt-duration-base), box-shadow var(--vt-duration-base)",
          textAlign: "start",
          ...style,
        }}
        {...rest}
      />
      {error ? (
        <span
          id={`${taId}-err`}
          style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-danger)" }}
        >
          {error}
        </span>
      ) : hint ? (
        <span
          id={`${taId}-hint`}
          style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-muted)" }}
        >
          {hint}
        </span>
      ) : null}
      <style>{`.vt-ta:focus { border-color: var(--vt-color-primary); box-shadow: var(--vt-shadow-focus); }`}</style>
    </div>
  );
}
