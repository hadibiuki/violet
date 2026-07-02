/**
 * Order detail + tracking. OrderTimeline shows the submitted→…→completed
 * pipeline (or the rejected short-circuit), plus line items, totals, shipping
 * and tracking. Rejected orders surface the reason.
 */
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { OrderTimeline, OrderStatusPill, Button } from "@violet/ui";
import type { OrderStage } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { ArrowLeft } from "../components/icons";
import { useStore } from "../state/store";
import { byId, frame, statusFa, toman, fa, orderTotal, orderUnits } from "../lib/b2b-data";

const STAGE_LABELS: Record<string, string> = {
  submitted: "ثبت شد",
  reviewing: "در حال بررسی",
  approved: "تأیید شد",
  shipped: "ارسال شد",
  completed: "تکمیل شد",
};

export function OrderDetail() {
  const { id } = useParams();
  const { getOrder } = useStore();
  const navigate = useNavigate();
  const order = id ? getOrder(id) : undefined;

  if (!order) return <Navigate to="/orders" replace />;

  const rejected = order.status === "rejected";

  return (
    <div>
      <Button variant="ghost" size="sm" leadingIcon={<ArrowLeft size={16} />} onClick={() => navigate("/orders")} style={{ marginBlockEnd: "var(--vt-space-4)" }}>
        بازگشت به سفارش‌ها
      </Button>

      <PageHead
        eyebrow="جزئیات سفارش"
        title={`سفارش ${order.id}`}
        sub={`${order.date} · ${fa(orderUnits(order))} عدد`}
        action={<OrderStatusPill status={order.status} label={statusFa[order.status]} withIcon />}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "var(--vt-space-8)", alignItems: "start" }}>
        {/* Lines */}
        <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden" }}>
          {order.lines.map((l) => {
            const p = byId(l.id);
            if (!p) return null;
            return (
              <div key={l.id} style={{ display: "flex", alignItems: "center", gap: "var(--vt-space-4)", padding: "var(--vt-space-4) var(--vt-space-5)", borderBottom: "1px solid var(--vt-color-divider)" }}>
                <img src={frame(p.f)} alt={p.name} width={56} height={56} style={{ borderRadius: "var(--vt-radius-md)", objectFit: "cover", background: "var(--vt-color-surface-sunken)" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <Code>{p.sku}</Code>
                </div>
                <div style={{ textAlign: "center", color: "var(--vt-color-text-muted)", fontSize: "var(--vt-text-sm)" }}>
                  {fa(l.qty)} × {toman(p.price)}
                </div>
                <div style={{ fontWeight: 700, minWidth: 120, textAlign: "left" }}>{toman(p.price * l.qty)}</div>
              </div>
            );
          })}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--vt-space-4) var(--vt-space-5)", background: "var(--vt-color-surface-sunken)" }}>
            <span style={{ fontWeight: 700 }}>جمع کل</span>
            <span style={{ fontWeight: 800, fontSize: "var(--vt-text-lg)", color: "var(--vt-color-primary)" }}>{toman(orderTotal(order))}</span>
          </div>
        </div>

        {/* Timeline + shipping */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-5)" }}>
          <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", padding: "var(--vt-space-5)" }}>
            <h3 style={{ margin: "0 0 var(--vt-space-4)", fontSize: "var(--vt-text-base)", fontWeight: 800 }}>وضعیت پیگیری</h3>
            <OrderTimeline
              current={rejected ? "reviewing" : (order.status as OrderStage)}
              rejected={rejected}
              times={order.times}
              labels={STAGE_LABELS}
            />
            {rejected && order.rejectReason && (
              <div style={{ marginBlockStart: "var(--vt-space-4)", padding: "var(--vt-space-3)", background: "var(--vt-color-danger-bg)", color: "var(--vt-color-danger)", borderRadius: "var(--vt-radius-md)", fontSize: "var(--vt-text-sm)", lineHeight: 1.8 }}>
                <strong>علت رد سفارش: </strong>{order.rejectReason}
              </div>
            )}
          </div>

          <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", padding: "var(--vt-space-5)" }}>
            <h3 style={{ margin: "0 0 var(--vt-space-3)", fontSize: "var(--vt-text-base)", fontWeight: 800 }}>اطلاعات ارسال</h3>
            <InfoRow label="روش ارسال" value={order.ship} />
            <InfoRow label="کد رهگیری" value={order.track === "—" ? "—" : <Code>{order.track}</Code>} />
          </div>
        </aside>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: "var(--vt-text-sm)" }}>
      <span style={{ color: "var(--vt-color-text-muted)" }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}
