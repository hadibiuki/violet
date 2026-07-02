/**
 * My Orders — list of the dealer's orders with status pill, totals and a link
 * to the detail/tracking page.
 */
import { useNavigate } from "react-router-dom";
import { OrderStatusPill, Button } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { useStore } from "../state/store";
import { statusFa, toman, fa, orderTotal, orderUnits } from "../lib/b2b-data";

export function Orders() {
  const { orders } = useStore();
  const navigate = useNavigate();

  return (
    <div>
      <PageHead eyebrow="سفارش‌های من" title="تاریخچهٔ سفارش‌ها" sub={`${fa(orders.length)} سفارش`} />

      <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden" }}>
        <div style={{ ...gridRow, background: "var(--vt-color-surface-sunken)", color: "var(--vt-color-text-muted)", fontWeight: 600, fontSize: "var(--vt-text-xs)" }}>
          <span>شمارهٔ سفارش</span>
          <span>تاریخ</span>
          <span>اقلام</span>
          <span>مبلغ</span>
          <span>وضعیت</span>
          <span />
        </div>
        {orders.map((o) => (
          <div key={o.id} style={{ ...gridRow, borderTop: "1px solid var(--vt-color-divider)" }}>
            <Code>{o.id}</Code>
            <span style={{ color: "var(--vt-color-text-muted)" }}>{o.date}</span>
            <span>{fa(orderUnits(o))} عدد</span>
            <span style={{ fontWeight: 700 }}>{toman(orderTotal(o))}</span>
            <OrderStatusPill status={o.status} label={statusFa[o.status]} />
            <Button variant="ghost" size="sm" onClick={() => navigate(`/orders/${o.id}`)}>جزئیات</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridRow: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "150px 110px 90px 1fr 130px 90px",
  alignItems: "center",
  gap: "var(--vt-space-3)",
  padding: "var(--vt-space-4) var(--vt-space-5)",
  fontSize: "var(--vt-text-sm)",
};
