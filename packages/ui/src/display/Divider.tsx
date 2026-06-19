import type * as React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Render a vertical rule for inline separation. @default false */
  vertical?: boolean;
  /** Optional centered label (e.g. "or") on a horizontal divider. */
  label?: React.ReactNode;
}

/**
 * Divider — hairline rule. Horizontal by default; `vertical` for inline use;
 * optional centered `label` (e.g. "or").
 */
export function Divider({ vertical = false, label, style, ...rest }: DividerProps) {
  if (vertical) {
    return <span role="separator" aria-orientation="vertical" style={{ display: "inline-block", width: 1, alignSelf: "stretch", minHeight: "1em", background: "var(--vt-color-divider)", ...style }} {...rest} />;
  }
  if (label) {
    return (
      <div role="separator" style={{ display: "flex", alignItems: "center", gap: "var(--vt-space-3)", color: "var(--vt-color-text-muted)", fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-xs)", ...style }} {...rest}>
        <span style={{ flex: 1, height: 1, background: "var(--vt-color-divider)" }} />
        <span style={{ textTransform: "uppercase", letterSpacing: ".08em" }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: "var(--vt-color-divider)" }} />
      </div>
    );
  }
  return <hr role="separator" style={{ border: "none", height: 1, background: "var(--vt-color-divider)", margin: 0, ...style }} {...rest} />;
}
