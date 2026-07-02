import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Avatar,
  BrandMark,
  Button,
  ImageUploader,
  Input,
  Modal,
  OrderStatusPill,
  Select,
  StatTile,
  Switch,
  type UploadedImage,
} from "@violet/ui";
import type { OrderStatus } from "@violet/types";
import { dealers, fa, orders as seedOrders, products as seedProducts, statusFa, toman } from "./data";

type Route = "overview" | "users" | "products" | "orders" | "reports";
const nav: Array<{ key: Route; label: string; icon: string }> = [
  { key: "overview", label: "نمای کلی", icon: "grid" },
  { key: "users", label: "کاربران", icon: "users" },
  { key: "products", label: "محصولات", icon: "watch" },
  { key: "orders", label: "سفارش‌ها", icon: "box" },
  { key: "reports", label: "گزارش‌ها", icon: "chart" },
];

export function App() {
  const routeFromPath = (): Route => {
    const segment = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return nav.some((item) => item.key === segment) ? segment as Route : "overview";
  };
  const [route, setRouteState] = useState<Route>(routeFromPath);
  const [search, setSearch] = useState("");
  const [approved, setApproved] = useState<string[]>([]);
  const [active, setActive] = useState<Record<string, boolean>>({});
  const [orders, setOrders] = useState(seedOrders);
  const [modal, setModal] = useState<"product" | "user" | null>(null);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const setRoute = (next: Route) => {
    setRouteState(next);
    window.history.pushState({}, "", next === "overview" ? "/" : `/${next}`);
  };

  useEffect(() => {
    const syncRoute = () => setRouteState(routeFromPath());
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const pending = dealers.filter((dealer) => dealer.status === "pending" && !approved.includes(dealer.code));
  const filteredProducts = useMemo(() => seedProducts.filter((product) => `${product.name} ${product.sku}`.toLowerCase().includes(search.trim().toLowerCase())), [search]);
  const filteredOrders = useMemo(() => orders.filter((order) => `${order.id} ${order.dealer}`.toLowerCase().includes(search.trim().toLowerCase())), [orders, search]);

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="admin-logo">
          <BrandMark variant="monogram" size="sm" />
          <div><strong>VIOLET</strong><span>ADMIN PANEL</span></div>
        </div>
        <nav>
          {nav.map((item) => (
            <button key={item.key} data-active={route === item.key} onClick={() => { setRoute(item.key); setMenuOpen(false); }}>
              <AdminIcon name={item.icon} />
              <span>{item.label}</span>
              {item.key === "users" && pending.length > 0 && <b>{fa(pending.length)}</b>}
            </button>
          ))}
        </nav>
        <a href="http://127.0.0.1:5173">نمای فروشنده <span>↗</span></a>
      </aside>
      {menuOpen && <button className="admin-backdrop" aria-label="بستن منو" onClick={() => setMenuOpen(false)} />}
      <section className="admin-workspace">
        <header>
          <button className="admin-menu" type="button" onClick={() => setMenuOpen(true)}>☰</button>
          <label className="admin-global-search"><AdminIcon name="search" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="جستجوی کاربر، محصول یا سفارش…" /></label>
          <div className="admin-account">
            <button aria-label="اعلان‌ها"><AdminIcon name="bell" /></button>
            <Avatar name="مدیر سیستم" />
            <span><strong>مدیر سیستم</strong><small>فروش و عملیات</small></span>
          </div>
        </header>
        <main>
          {route === "overview" && <Overview pending={pending.length} onRoute={setRoute} />}
          {route === "users" && <Users approved={approved} onApprove={(code) => setApproved((current) => [...current, code])} onCreate={() => setModal("user")} />}
          {route === "products" && <Products items={filteredProducts} active={active} onToggle={(id, value) => setActive((current) => ({ ...current, [id]: value }))} onCreate={() => setModal("product")} />}
          {route === "orders" && <Orders items={filteredOrders} onStatus={(id, status) => setOrders((current) => current.map((order) => order.id === id ? { ...order, status } : order))} />}
          {route === "reports" && <Reports onExport={() => exportOrders(orders)} />}
        </main>
      </section>

      <Modal open={modal === "user"} onClose={() => setModal(null)} title="ایجاد کاربر عمده" footer={<><Button variant="secondary" onClick={() => setModal(null)}>انصراف</Button><Button onClick={() => setModal(null)}>ایجاد کاربر</Button></>}>
        <div className="admin-form-grid"><Input label="نام نمایندگی" /><Input label="نام مسئول خرید" /><Input label="شماره همراه" /><Input label="شهر" /></div>
      </Modal>
      <Modal open={modal === "product"} onClose={() => setModal(null)} title="افزودن محصول" size="lg" footer={<><Button variant="secondary" onClick={() => setModal(null)}>انصراف</Button><Button onClick={() => setModal(null)}>ذخیره محصول</Button></>}>
        <div className="admin-form-grid"><Input label="نام محصول" /><Input label="کد محصول" /><Input label="قیمت عمده" /><Input label="حداقل سفارش" /><Input label="موجودی" /><Select label="دسته‌بندی" options={["کلاسیک","اسپرت","مجلسی"]} /><ImageUploader label="تصاویر محصول" value={images} onChange={setImages} /></div>
      </Modal>
    </div>
  );
}

function PageTitle({ title, sub, action }: { title: string; sub: string; action?: ReactNode }) {
  return <div className="admin-page-title"><div><h1>{title}</h1><p>{sub}</p></div>{action}</div>;
}

function Overview({ pending, onRoute }: { pending: number; onRoute: (route: Route) => void }) {
  return <div><PageTitle title="نمای کلی" sub="خلاصهٔ وضعیت پورتال عمدهٔ ویولت" />
    <div className="admin-stats"><StatTile value={fa(pending)} label="تأییدهای در انتظار" /><StatTile value={fa(3)} label="سفارش‌های نیازمند اقدام" /><StatTile value={fa(seedProducts.filter((p) => p.active).length)} label="محصولات فعال" /><StatTile value={`${fa((seedOrders.reduce((sum, order) => sum + order.total, 0) / 1_000_000_000).toFixed(1))} میلیارد`} label="حجم کل سفارش‌ها" /></div>
    <div className="admin-overview-grid">
      <Panel title="تأییدهای در انتظار" action={<button onClick={() => onRoute("users")}>مشاهده همه</button>}>{dealers.filter((d) => d.status === "pending").map((d) => <Row key={d.code}><Avatar name={d.company} /><span><strong>{d.company}</strong><small>{d.contact} · {d.city}</small></span><Button size="sm">بررسی</Button></Row>)}</Panel>
      <Panel title="سفارش‌های نیازمند اقدام" action={<button onClick={() => onRoute("orders")}>مشاهده همه</button>}>{seedOrders.slice(0,3).map((order) => <Row key={order.id}><bdi>{order.id}</bdi><span><strong>{order.dealer}</strong><small>{toman(order.total)}</small></span><OrderStatusPill status={order.status} label={statusFa[order.status]} /></Row>)}</Panel>
    </div>
  </div>;
}

function Users({ approved, onApprove, onCreate }: { approved: string[]; onApprove: (code: string) => void; onCreate: () => void }) {
  return <div><PageTitle title="کاربران عمده" sub="ایجاد، تأیید و مدیریت دسترسی نمایندگان" action={<Button onClick={onCreate}>ایجاد کاربر</Button>} /><Panel title={`${fa(dealers.length)} نماینده`}><div className="admin-table-wrap"><table><thead><tr><th>نمایندگی</th><th>مسئول</th><th>شهر</th><th>کد</th><th>وضعیت</th><th /></tr></thead><tbody>{dealers.map((dealer) => { const pending = dealer.status === "pending" && !approved.includes(dealer.code); return <tr key={dealer.code}><td><strong>{dealer.company}</strong></td><td>{dealer.contact}</td><td>{dealer.city}</td><td><bdi>{dealer.code}</bdi></td><td><span className={`user-pill ${pending ? "pending" : "active"}`}>{pending ? "در انتظار تأیید" : "فعال"}</span></td><td>{pending && <Button size="sm" onClick={() => onApprove(dealer.code)}>تأیید</Button>}</td></tr>; })}</tbody></table></div></Panel></div>;
}

function Products({ items, active, onToggle, onCreate }: { items: typeof seedProducts; active: Record<string, boolean>; onToggle: (id: string, value: boolean) => void; onCreate: () => void }) {
  return <div><PageTitle title="محصولات" sub="مدیریت قیمت عمده، موجودی و انتشار" action={<Button onClick={onCreate}>افزودن محصول</Button>} /><Panel title={`${fa(items.length)} محصول`}><div className="admin-table-wrap"><table><thead><tr><th>محصول</th><th>کد</th><th>قیمت عمده</th><th>MOQ</th><th>موجودی</th><th>انتشار</th></tr></thead><tbody>{items.map((product) => { const enabled = active[product.id] ?? product.active; return <tr key={product.id}><td><div className="product-cell"><span className="product-thumb"><img src={product.image} alt="" /></span><strong>{product.name}</strong></div></td><td><bdi>{product.sku}</bdi></td><td>{toman(product.price)}</td><td>{fa(product.moq)}</td><td className={product.stock < 25 ? "stock-low" : ""}>{fa(product.stock)}</td><td><Switch checked={enabled} onChange={(value) => onToggle(product.id, value)} label={enabled ? "فعال" : "غیرفعال"} /></td></tr>; })}</tbody></table></div></Panel></div>;
}

function Orders({ items, onStatus }: { items: typeof seedOrders; onStatus: (id: string, status: OrderStatus) => void }) {
  return <div><PageTitle title="سفارش‌ها" sub="بررسی و تغییر وضعیت سفارش‌های عمده" /><Panel title={`${fa(items.length)} سفارش`}><div className="admin-table-wrap"><table><thead><tr><th>شماره</th><th>نمایندگی</th><th>تاریخ</th><th>تعداد</th><th>مبلغ</th><th>وضعیت</th></tr></thead><tbody>{items.map((order) => <tr key={order.id}><td><bdi>{order.id}</bdi></td><td>{order.dealer}</td><td>{order.date}</td><td>{fa(order.units)}</td><td>{toman(order.total)}</td><td><Select value={order.status} onChange={(value) => onStatus(order.id, value as OrderStatus)} options={Object.entries(statusFa).map(([value,label]) => ({ value,label }))} /></td></tr>)}</tbody></table></div></Panel></div>;
}

function Reports({ onExport }: { onExport: () => void }) {
  const values = [88,74,61,38,55,43];
  return <div><PageTitle title="گزارش‌ها" sub="حجم سفارش، مدل‌های پرفروش و خروجی داده" action={<Button variant="secondary" onClick={onExport}>خروجی CSV / Excel</Button>} /><div className="admin-report-grid"><Panel title="حجم سفارش‌ها (۶ ماه اخیر)"><div className="report-bars">{values.map((value,index) => <div key={index}><span>{fa(value)}</span><i style={{ height: `${value}%` }} /><small>{["خرداد","اردیبهشت","فروردین","اسفند","بهمن","دی"][index]}</small></div>)}</div></Panel><Panel title="مدل‌های پرفروش">{seedProducts.map((product,index) => <Row key={product.id}><em>{fa(index+1)}</em><span><strong>{product.name}</strong><small><bdi>{product.sku}</bdi></small></span><b>{fa((5-index)*40+60)} عدد</b></Row>)}</Panel></div></div>;
}

function Panel({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  return <section className="admin-panel-exact"><header><h2>{title}</h2>{action}</header><div>{children}</div></section>;
}
function Row({ children }: { children: ReactNode }) { return <div className="admin-exact-row">{children}</div>; }

function AdminIcon({ name }: { name: string }) {
  const path = name === "search" ? <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></> : name === "users" ? <><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M17 5a3 3 0 0 1 0 6M21 20c0-3-1-5-4-6"/></> : name === "box" ? <><path d="m3 7 9-4 9 4-9 5-9-5Z"/><path d="M3 7v10l9 4 9-4V7M12 12v9"/></> : name === "chart" ? <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></> : name === "bell" ? <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></> : <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></>;
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{path}</svg>;
}

function exportOrders(items: typeof seedOrders) {
  const blob = new Blob([["order,dealer,status,total", ...items.map((item) => `${item.id},${item.dealer},${item.status},${item.total}`)].join("\n")], { type: "text/csv" });
  const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "violet-orders.csv"; link.click(); URL.revokeObjectURL(link.href);
}
