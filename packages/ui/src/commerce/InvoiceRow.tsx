import type * as React from "react";

export interface InvoiceRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Line description / product name (or the label on a total row). */
  description?: React.ReactNode;
  /** Mono SKU under the description. */
  sku?: string;
  /** Quantity. */
  qty?: React.ReactNode;
  /** Unit price (number). */
  unitPrice?: number;
  /** Line amount, or grand total (number). */
  amount?: number;
  /** Number → currency string. @default `$1,234` */
  currency?: (n: number) => string;
  /** Render the column header row. @default false */
  header?: boolean;
  /** Render a bold total row (description + amount only). @default false */
  total?: boolean;
}

/**
 * InvoiceRow — one line in a proforma / invoice table: description, qty, unit
 * price and amount. Use several inside a table-like container; `header` renders
 * the column titles, `total` renders a bold summary row.
 */
export function InvoiceRow({ description, sku, qty, unitPrice, amount, currency = (n: number) => `$${n.toLocaleString()}`, header = false, total = false, style, ...rest }: InvoiceRowProps) {
  const cellBase: React.CSSProperties = { padding: "var(--vt-space-3) var(--vt-space-4)", fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-sm)" };
  if (header) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 130px 130px", alignItems: "center", borderBottom: "1px solid var(--vt-color-border)", color: "var(--vt-color-text-muted)", fontWeight: "var(--vt-weight-medium)", ...style }} {...rest}>
        <span style={cellBase}>Description</span>
        <span style={{ ...cellBase, textAlign: "center" }}>Qty</span>
        <span style={{ ...cellBase, textAlign: "end" }}>Unit price</span>
        <span style={{ ...cellBase, textAlign: "end" }}>Amount</span>
      </div>
    );
  }
  if (total) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 130px", alignItems: "center", borderTop: "1.5px solid var(--vt-color-border-strong)", ...style }} {...rest}>
        <span style={{ ...cellBase, textAlign: "end", fontWeight: "var(--vt-weight-semibold)", color: "var(--vt-color-text-strong)" }}>{description || "Total"}</span>
        <span style={{ ...cellBase, textAlign: "end", fontWeight: "var(--vt-weight-semibold)", fontSize: "var(--vt-text-lg)", color: "var(--vt-color-primary)" }}>{currency(amount ?? 0)}</span>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 130px 130px", alignItems: "center", borderBottom: "1px solid var(--vt-color-divider)", ...style }} {...rest}>
      <span style={{ ...cellBase, color: "var(--vt-color-text-strong)" }}>
        <bdi>{description}</bdi>
        {sku && <span style={{ display: "block", fontFamily: "var(--vt-font-mono)", fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-muted)", marginTop: 2 }}><bdi>{sku}</bdi></span>}
      </span>
      <span style={{ ...cellBase, textAlign: "center", fontFamily: "var(--vt-font-mono)", color: "var(--vt-color-text)" }}>{qty}</span>
      <span style={{ ...cellBase, textAlign: "end", color: "var(--vt-color-text-muted)" }}>{currency(unitPrice ?? 0)}</span>
      <span style={{ ...cellBase, textAlign: "end", fontWeight: "var(--vt-weight-medium)", color: "var(--vt-color-text-strong)" }}>{currency(amount ?? 0)}</span>
    </div>
  );
}
