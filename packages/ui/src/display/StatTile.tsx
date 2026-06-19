import type * as React from "react";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric value, e.g. "1000+" or "۴٫۵ میلیارد". */
  value: React.ReactNode;
  /** Caption under/over the value. */
  label: React.ReactNode;
  /** Optional icon node (top-inline-end). */
  icon?: React.ReactNode;
  /** Optional delta text, e.g. "12%". */
  delta?: React.ReactNode;
  /** Delta direction → colour + arrow. @default "up" */
  deltaDir?: "up" | "down";
  /** Use the Cormorant display face for the value (marketing stat band). @default false */
  display?: boolean;
}

/**
 * StatTile — a single dashboard / marketing metric: big value, label, optional
 * icon and delta. Used in the B2B dashboard and the site stats band.
 */
export function StatTile({ value, label, icon, delta, deltaDir = "up", display = false, style, ...rest }: StatTileProps) {
  const deltaColor = deltaDir === "down" ? "var(--vt-color-danger)" : "var(--vt-color-success)";
  return (
    <div style={{
      background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-border)",
      borderRadius: "var(--vt-radius-lg)", padding: "var(--vt-space-5)", boxShadow: "var(--vt-shadow-xs)",
      fontFamily: "var(--vt-font-sans)", ...style,
    }} {...rest}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--vt-space-2)" }}>
        <span style={{ fontSize: "var(--vt-text-sm)", color: "var(--vt-color-text-muted)" }}>{label}</span>
        {icon && <span style={{ width: 34, height: 34, flex: "none", borderRadius: "var(--vt-radius-md)", background: "var(--vt-color-primary-subtle)", color: "var(--vt-color-primary)", display: "grid", placeItems: "center" }}>{icon}</span>}
      </div>
      <div style={{
        marginTop: 10, lineHeight: 1,
        fontFamily: display ? "var(--vt-font-display)" : "var(--vt-font-sans)",
        fontWeight: display ? 300 : "var(--vt-weight-semibold)",
        fontSize: display ? "var(--vt-text-4xl)" : "var(--vt-text-3xl)",
        color: "var(--vt-color-text-strong)",
      }}>{value}</div>
      {delta && <div style={{ marginTop: 6, fontSize: "var(--vt-text-xs)", color: deltaColor }}>{deltaDir === "down" ? "▼" : "▲"} {delta}</div>}
    </div>
  );
}
