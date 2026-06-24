"use client";

import { useRef } from "react";
import type * as React from "react";

export type TabItem = string | { value: string; label: React.ReactNode };

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Tabs as strings or {value,label}. */
  tabs: TabItem[];
  /** Active tab value (controlled). */
  value: string;
  /** Called with the next tab value. */
  onChange?: (value: string) => void;
}

/**
 * Tabs — underline tab bar. Controlled via `value`/`onChange`. The active
 * indicator animates; arrow keys move focus. Used for New Models / catalog views
 * and B2B sub-sections.
 */
export function Tabs({ tabs = [], value, onChange, style, ...rest }: TabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const n = (i + dir + tabs.length) % tabs.length;
    const t = tabs[n];
    if (t) onChange?.(typeof t === "string" ? t : t.value);
    refs.current[n]?.focus();
  };
  return (
    <div role="tablist" style={{ display: "flex", gap: "var(--vt-space-6)", borderBottom: "1px solid var(--vt-color-divider)", ...style }} {...rest}>
      {tabs.map((t, i) => {
        const tab = typeof t === "string" ? { value: t, label: t } : t;
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange?.(tab.value)}
            onKeyDown={(e) => onKey(e, i)}
            style={{
              position: "relative", border: "none", background: "none", cursor: "pointer",
              padding: "0 0 12px", fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-sm)",
              fontWeight: active ? "var(--vt-weight-semibold)" : "var(--vt-weight-medium)",
              color: active ? "var(--vt-color-primary)" : "var(--vt-color-text-muted)",
              transition: "color var(--vt-duration-base)",
            }}
          >
            {tab.label}
            <span aria-hidden="true" style={{
              position: "absolute", insetInline: 0, bottom: -1, height: 2, borderRadius: 2,
              background: "var(--vt-color-primary)", transformOrigin: "center",
              transform: active ? "scaleX(1)" : "scaleX(0)", transition: "transform var(--vt-duration-base) var(--vt-ease-standard)",
            }} />
          </button>
        );
      })}
    </div>
  );
}
