/**
 * Full-width proforma invoice table. Uses @violet/ui InvoiceRow for the data +
 * total rows, but renders a Persian column header (the component's built-in
 * `header` prop is English-only) so the document is fully localized.
 */
import { InvoiceRow } from "@violet/ui";
import { toman, fa } from "../lib/b2b-data";

export interface ProformaLine {
  name: string;
  sku: string;
  qty: number;
  unitPrice: number;
}

export function Proforma({ lines, tax = 0.09 }: { lines: ProformaLine[]; tax?: number }) {
  const subtotal = lines.reduce((s, l) => s + l.unitPrice * l.qty, 0);
  const taxAmount = Math.round(subtotal * tax);
  const total = subtotal + taxAmount;

  return (
    <div style={{ border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden", background: "var(--vt-color-surface)" }}>
      {/* Persian header (replaces InvoiceRow's English header) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 70px 130px 130px",
          alignItems: "center",
          borderBottom: "1px solid var(--vt-color-border)",
          color: "var(--vt-color-text-muted)",
          fontWeight: 500,
          background: "var(--vt-color-surface-sunken)",
        }}
      >
        <span style={cell}>شرح کالا</span>
        <span style={{ ...cell, textAlign: "center" }}>تعداد</span>
        <span style={{ ...cell, textAlign: "end" }}>قیمت واحد</span>
        <span style={{ ...cell, textAlign: "end" }}>مبلغ</span>
      </div>

      {lines.map((l) => (
        <InvoiceRow
          key={l.sku}
          description={l.name}
          sku={l.sku}
          qty={fa(l.qty)}
          unitPrice={l.unitPrice}
          amount={l.unitPrice * l.qty}
          currency={toman}
        />
      ))}

      <div style={{ padding: "var(--vt-space-3) var(--vt-space-4)", display: "flex", flexDirection: "column", gap: 6, background: "var(--vt-color-surface-sunken)" }}>
        <SumRow label="جمع اقلام" value={toman(subtotal)} />
        <SumRow label="مالیات بر ارزش افزوده (۹٪)" value={toman(taxAmount)} muted />
      </div>
      <InvoiceRow total description="مبلغ قابل پرداخت" amount={total} currency={toman} />
    </div>
  );
}

const cell: React.CSSProperties = { padding: "var(--vt-space-3) var(--vt-space-4)", fontFamily: "var(--vt-font-fa)", fontSize: "var(--vt-text-sm)" };

function SumRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--vt-text-sm)", color: muted ? "var(--vt-color-text-muted)" : "var(--vt-color-text)" }}>
      <span>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}
