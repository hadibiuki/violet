/**
 * Dealer dashboard — stat cards, recent orders table, and a quick "new in
 * catalog" strip. Entry point after login.
 */
import { useNavigate } from "react-router-dom";
import { StatTile, OrderStatusPill, ProductCard, Button } from "@violet/ui";
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
        eyebrow={`خوش آمدید، ${user?.name ?? ""}`}
        title="داشبورد همکار"
        sub={`${dealer.tier} · کد همکار ${dealer.code}`}
        action={<Button variant="primary" onClick={() => navigate("/catalog")}>ثبت سفارش جدید</Button>}
      />

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--vt-space-4)", marginBlockEnd: "var(--vt-space-8)" }}>
        <StatTile value={fa(openOrders)} label="سفارش‌های در جریان" icon={<Package size={20} />} />
        <StatTile value={fa(unpaid)} label="فاکتورهای پرداخت‌نشده" icon={<FileText size={20} />} />
        <StatTile value={fa(orders.length)} label="کل سفارش‌ها" icon={<Store size={20} />} />
        <StatTile display value={toman(totalSpend)} label="مجموع خرید" icon={<TrendingUp size={20} />} />
      </div>

      {/* Recent orders */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBlockEnd: "var(--vt-space-3)" }}>
        <h2 style={{ fontSize: "var(--vt-text-xl)", fontWeight: 800, margin: 0 }}>سفارش‌های اخیر</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/orders")}>مشاهدهٔ همه</Button>
      </div>
      <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", overflow: "hidden", marginBlockEnd: "var(--vt-space-8)" }}>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--vt-space-4)" }}>
        {newModels.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            sku={p.sku}
            image={frame(p.f)}
            badge="new"
            price={toman(p.price)}
            priceUnit="عمده"
            moq={p.moq}
            href={undefined}
            onClick={(e) => { e.preventDefault(); navigate("/catalog"); }}
          />
        ))}
      </div>
    </div>
  );
}
