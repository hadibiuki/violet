/**
 * Invoices / documents — proformas and official invoices, paid/unpaid status.
 */
import { Badge } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { invoices, toman } from "../lib/b2b-data";

export function Invoices() {
  return (
    <div>
      <PageHead eyebrow="اسناد مالی" title="فاکتورها و پیش‌فاکتورها" />

      <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden" }}>
        <div style={{ ...row, background: "var(--vt-color-surface-sunken)", color: "var(--vt-color-text-muted)", fontWeight: 600, fontSize: "var(--vt-text-xs)" }}>
          <span>شماره سند</span>
          <span>سفارش مرتبط</span>
          <span>تاریخ</span>
          <span>نوع</span>
          <span>مبلغ</span>
          <span>وضعیت</span>
        </div>
        {invoices.map((inv) => (
          <div key={inv.id} style={{ ...row, borderTop: "1px solid var(--vt-color-divider)" }}>
            <Code>{inv.id}</Code>
            <Code>{inv.order}</Code>
            <span style={{ color: "var(--vt-color-text-muted)" }}>{inv.date}</span>
            <span>{inv.type}</span>
            <span style={{ fontWeight: 700 }}>{toman(inv.amount)}</span>
            <span>
              <Badge variant={inv.paid ? "new" : "neutral"}>{inv.paid ? "پرداخت‌شده" : "در انتظار پرداخت"}</Badge>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "130px 130px 110px 1fr 150px 140px",
  alignItems: "center",
  gap: "var(--vt-space-3)",
  padding: "var(--vt-space-4) var(--vt-space-5)",
  fontSize: "var(--vt-text-sm)",
};
