/**
 * Dealer dashboard — stat cards, recent orders table, and a quick "new in
 * catalog" strip. Entry point after login.
 */
import { useNavigate } from "react-router-dom";
import { StatTile, OrderStatusPill, Button } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { Package, FileText, TrendingUp, Store } from "../components/icons";
import { useStore } from "../state/store";
import {
  products,
  frame,
  toman,
  fa,
  statusFa,
  orderTotal,
  orderUnits,
  invoices,
  dealer,
} from "../lib/b2b-data";

export function Dashboard() {
  const { orders, user } = useStore();
  const navigate = useNavigate();

  const openOrders = orders.filter((o) => o.status !== "completed" && o.status !== "rejected").length;
  const unpaid = invoices.filter((i) => !i.paid).length;
  const totalSpend = orders.reduce((s, o) => s + orderTotal(o), 0);
  const newModels = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <div>
      <PageHead
        title="داشبورد"
        sub={`خوش آمدید، ${user?.name ?? ""} — خلاصهٔ فعالیت ${dealer.company}`}
      />
      <div className="dashboard-notice">ⓘ <span>سفارش <bdi>ORD-4815</bdi> تأیید شد و در حال آماده‌سازی است.</span><button onClick={() => navigate("/orders/ORD-4815")}>پیگیری ←</button></div>

      {/* Stats */}
      <div className="dashboard-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBlockEnd: 28 }}>
        <StatTile value={fa(openOrders)} label="سفارش‌های در جریان" icon={<Package size={20} />} />
        <StatTile value={fa(unpaid)} label="فاکتورهای پرداخت‌نشده" icon={<FileText size={20} />} />
        <StatTile value={fa(orders.length)} label="کل سفارش‌ها" icon={<Store size={20} />} />
        <StatTile value={`${fa((totalSpend / 1_000_000_000).toFixed(1))} میلیارد`} label="جمع خرید ماه" icon={<TrendingUp size={20} />} />
      </div>

      {/* Recent orders */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBlockEnd: "var(--vt-space-3)" }}>
        <h2 style={{ fontSize: "var(--vt-text-xl)", fontWeight: 800, margin: 0 }}>سفارش‌های اخیر</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/orders")}>مشاهدهٔ همه</Button>
      </div>
      <div className="dashboard-orders">
        <div className="dashboard-order-head"><span>شماره سفارش</span><span>تاریخ</span><span>تعداد</span><span>مبلغ</span><span>وضعیت</span></div>
        {orders.slice(0, 4).map((o) => (
          <button
            key={o.id}
            onClick={() => navigate(`/orders/${o.id}`)}
            style={{
              display: "grid",
              gridTemplateColumns: "150px 110px 90px 1fr 130px",
              alignItems: "center",
              gap: "var(--vt-space-3)",
              width: "100%",
              padding: "var(--vt-space-4) var(--vt-space-5)",
              border: "none",
              borderTop: "1px solid var(--vt-color-divider)",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--vt-font-fa)",
              fontSize: "var(--vt-text-sm)",
              textAlign: "start",
              color: "var(--vt-color-text)",
            }}
          >
            <Code>{o.id}</Code>
            <span style={{ color: "var(--vt-color-text-muted)" }}>{o.date}</span>
            <span>{fa(orderUnits(o))} عدد</span>
            <span style={{ fontWeight: 700 }}>{toman(orderTotal(o))}</span>
            <OrderStatusPill status={o.status} label={statusFa[o.status]} />
          </button>
        ))}
      </div>

      {/* New models */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBlockEnd: "var(--vt-space-3)" }}>
        <h2 style={{ fontSize: "var(--vt-text-xl)", fontWeight: 800, margin: 0 }}>جدیدترین مدل‌ها</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/catalog")}>کاتالوگ کامل</Button>
      </div>
      <div className="dashboard-compact-products">
        {newModels.map((p) => (
          <button key={p.id} onClick={() => navigate(`/catalog/${p.id}`)}>
            <img src={frame(p.f)} alt="" /><span><strong>{p.name}</strong><bdi>{p.sku}</bdi></span><em>{toman(p.price)}</em>
          </button>
        ))}
      </div>
    </div>
  );
}
