import { useMemo, useState } from "react";
import {
  Button,
  ImageUploader,
  Input,
  Modal,
  OrderStatusPill,
  Select,
  StatTile,
  Switch,
  Tabs,
} from "@violet/ui";
import type { UploadedImage } from "@violet/ui";
import type { OrderStatus } from "@violet/types";
import { PageHead, Code } from "../components/PageHead";
import { useStore } from "../state/store";
import {
  CATEGORY_FA,
  fa,
  frame,
  orderTotal,
  orderUnits,
  products,
  statusFa,
  toman,
} from "../lib/b2b-data";

type Section = "overview" | "dealers" | "products" | "orders" | "reports";

const sections = [
  { value: "overview", label: "نمای کلی" },
  { value: "dealers", label: "نمایندگان" },
  { value: "products", label: "محصولات" },
  { value: "orders", label: "سفارش‌ها" },
  { value: "reports", label: "گزارش‌ها" },
];

const dealers = [
  { code: "DLR-0192", company: "ساعت پارس", contact: "رضا کریمی", city: "تهران", pending: false },
  { code: "DLR-0194", company: "گالری زمان", contact: "مریم احمدی", city: "اصفهان", pending: true },
  { code: "DLR-0198", company: "زمان‌سنج شیراز", contact: "علی مرادی", city: "شیراز", pending: true },
];

const nextStatus: Record<OrderStatus, OrderStatus[]> = {
  submitted: ["submitted", "reviewing", "rejected"],
  reviewing: ["reviewing", "approved", "rejected"],
  approved: ["approved", "shipped", "rejected"],
  shipped: ["shipped", "completed"],
  completed: ["completed"],
  rejected: ["rejected"],
};

export function Admin() {
  const { orders, setOrderStatus } = useStore();
  const [section, setSection] = useState<Section>("overview");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});
  const [approved, setApproved] = useState<string[]>([]);
  const [confirm, setConfirm] = useState<{ code: string; company: string } | null>(null);
  const [productForm, setProductForm] = useState(false);
  const [productImages, setProductImages] = useState<UploadedImage[]>([]);

  const shownProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("fa");
    return products.filter(
      (product) =>
        (category === "all" || product.cat === category) &&
        (!query ||
          product.name.toLocaleLowerCase().includes(query) ||
          product.sku.toLocaleLowerCase().includes(query)),
    );
  }, [category, search]);

  const openOrders = orders.filter(
    (order) => order.status !== "completed" && order.status !== "rejected",
  );
  const pendingDealers = dealers.filter(
    (dealer) => dealer.pending && !approved.includes(dealer.code),
  );

  return (
    <div>
      <PageHead
        eyebrow="پنل مدیریت"
        title="مدیریت فروش ویولت"
        sub="نمایندگان، محصولات، سفارش‌ها و گزارش‌های فروش عمده"
        action={section === "products" ? <Button onClick={() => setProductForm(true)}>افزودن محصول</Button> : section === "reports" ? <Button variant="secondary" onClick={() => downloadReport(orders)}>خروجی CSV</Button> : undefined}
      />

      <Tabs
        value={section}
        onChange={(value) => setSection(value as Section)}
        tabs={sections}
        aria-label="بخش‌های مدیریت"
      />

      <div style={{ marginBlockStart: "var(--vt-space-6)" }}>
        {section === "overview" && (
          <>
            <div className="admin-stat-grid">
              <StatTile label="نمایندگان در انتظار" value={fa(pendingDealers.length)} />
              <StatTile label="سفارش‌های در جریان" value={fa(openOrders.length)} />
              <StatTile label="محصولات فعال" value={fa(products.filter((p) => p.stock > 0).length)} />
              <StatTile
                label="ارزش سفارش‌ها"
                value={toman(orders.reduce((sum, order) => sum + orderTotal(order), 0))}
              />
            </div>
            <AdminPanel title="نیازمند اقدام">
              {openOrders.slice(0, 4).map((order) => (
                <div className="admin-row" key={order.id}>
                  <Code>{order.id}</Code>
                  <span>{fa(orderUnits(order))} عدد</span>
                  <OrderStatusPill status={order.status} label={statusFa[order.status]} />
                  <Button variant="ghost" size="sm" onClick={() => setSection("orders")}>
                    بررسی
                  </Button>
                </div>
              ))}
            </AdminPanel>
          </>
        )}

        {section === "dealers" && (
          <AdminPanel title="نمایندگان عمده">
            {dealers.map((dealer) => {
              const isPending = dealer.pending && !approved.includes(dealer.code);
              return (
                <div className="admin-row" key={dealer.code}>
                  <div className="admin-row-main">
                    <strong>{dealer.company}</strong>
                    <span>{dealer.contact} · {dealer.city}</span>
                  </div>
                  <Code>{dealer.code}</Code>
                  {isPending ? (
                    <Button size="sm" onClick={() => setConfirm(dealer)}>
                      تأیید نماینده
                    </Button>
                  ) : (
                    <span className="admin-state admin-state-success">فعال</span>
                  )}
                </div>
              );
            })}
          </AdminPanel>
        )}

        {section === "products" && (
          <>
            <div className="admin-toolbar">
              <label className="admin-search">
                <span>جستجوی محصول</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="نام یا کد محصول…"
                />
              </label>
              <Select
                label="دسته‌بندی"
                value={category}
                onChange={(value) => setCategory(String(value))}
                options={[
                  { value: "all", label: "همهٔ دسته‌ها" },
                  ...Object.entries(CATEGORY_FA).map(([value, label]) => ({ value, label })),
                ]}
              />
            </div>
            <AdminPanel title={`${fa(shownProducts.length)} محصول`}>
              {shownProducts.length === 0 ? (
                <div className="admin-empty">
                  <strong>محصولی پیدا نشد</strong>
                  <Button variant="secondary" size="sm" onClick={() => { setSearch(""); setCategory("all"); }}>
                    پاک کردن فیلترها
                  </Button>
                </div>
              ) : shownProducts.map((product) => {
                const active = enabled[product.id] ?? product.stock > 0;
                return (
                  <div className="admin-row" key={product.id}>
                    <img className="admin-product-image" src={frame(product.f)} alt="" />
                    <div className="admin-row-main">
                      <strong><bdi>{product.name}</bdi></strong>
                      <Code>{product.sku}</Code>
                    </div>
                    <span>{toman(product.price)}</span>
                    <span>موجودی {fa(product.stock)}</span>
                    <Switch
                      checked={active}
                      onChange={(checked) => setEnabled((current) => ({ ...current, [product.id]: checked }))}
                      label={active ? "فعال" : "غیرفعال"}
                    />
                  </div>
                );
              })}
            </AdminPanel>
          </>
        )}

        {section === "orders" && (
          <AdminPanel title="مدیریت وضعیت سفارش‌ها">
            {orders.map((order) => (
              <div className="admin-row" key={order.id}>
                <div className="admin-row-main">
                  <Code>{order.id}</Code>
                  <span>{order.date} · {fa(orderUnits(order))} عدد</span>
                </div>
                <strong>{toman(orderTotal(order))}</strong>
                <div style={{ minWidth: 190 }}>
                  <Select
                    aria-label={`وضعیت سفارش ${order.id}`}
                    value={order.status}
                    onChange={(value) => setOrderStatus(order.id, value as OrderStatus)}
                    options={nextStatus[order.status].map((value) => ({ value, label: statusFa[value] }))}
                  />
                </div>
              </div>
            ))}
          </AdminPanel>
        )}

        {section === "reports" && (
          <div className="admin-report-grid">
            <AdminPanel title="حجم فروش">
              <div className="admin-bars" aria-label="نمودار حجم فروش شش ماه اخیر">
                {[45, 72, 58, 88, 66, 96].map((height, index) => (
                  <div key={index} className="admin-bar-wrap">
                    <div className="admin-bar" style={{ height: `${height}%` }} />
                    <span>{fa(index + 1)}</span>
                  </div>
                ))}
              </div>
            </AdminPanel>
            <AdminPanel title="مدل‌های پرفروش">
              {products.slice(0, 5).map((product, index) => (
                <div className="admin-row" key={product.id}>
                  <span className="admin-rank">{fa(index + 1)}</span>
                  <div className="admin-row-main">
                    <strong>{product.name}</strong>
                    <Code>{product.sku}</Code>
                  </div>
                </div>
              ))}
            </AdminPanel>
          </div>
        )}
      </div>

      <Modal
        open={Boolean(confirm)}
        onClose={() => setConfirm(null)}
        title="تأیید نماینده"
        description={confirm ? `دسترسی سفارش عمده برای «${confirm.company}» فعال شود؟` : undefined}
        footer={
          <>
            <Button variant="secondary" onClick={() => setConfirm(null)}>انصراف</Button>
            <Button
              onClick={() => {
                if (confirm) setApproved((current) => [...current, confirm.code]);
                setConfirm(null);
              }}
            >
              تأیید نماینده
            </Button>
          </>
        }
      />
      <Modal
        open={productForm}
        onClose={() => setProductForm(false)}
        title="افزودن محصول"
        description="اطلاعات محصول عمده و تصویرهای کاتالوگ را وارد کنید."
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setProductForm(false)}>انصراف</Button>
            <Button onClick={() => setProductForm(false)}>ذخیرهٔ محصول</Button>
          </>
        }
      >
        <div className="admin-product-form">
          <Input label="نام محصول" required />
          <Input label="کد محصول (SKU)" required style={{ direction: "ltr" }} />
          <Input label="قیمت عمده" required inputMode="numeric" />
          <Input label="حداقل سفارش" required inputMode="numeric" />
          <Input label="موجودی" required inputMode="numeric" />
          <Select label="دسته‌بندی" options={Object.entries(CATEGORY_FA).map(([value, label]) => ({ value, label }))} />
          <div className="admin-product-upload">
            <ImageUploader label="تصاویر محصول" hint="حداقل یک تصویر برای انتشار لازم است." value={productImages} onChange={setProductImages} addLabel="افزودن" removeLabel="حذف تصویر" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

function downloadReport(orders: ReturnType<typeof useStore>["orders"]) {
  const rows = ["order,status,units,total", ...orders.map((order) => `${order.id},${order.status},${orderUnits(order)},${orderTotal(order)}`)];
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = "violet-orders.csv";
  anchor.click();
  URL.revokeObjectURL(href);
}

function AdminPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="admin-panel">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
