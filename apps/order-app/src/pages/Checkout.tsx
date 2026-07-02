/**
 * Checkout — final review of the proforma + shipping/notes, then submit. On
 * submit the store creates an order (status=submitted) and we show a success
 * state linking to the new order's tracking page.
 */
import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Select } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { Proforma, type ProformaLine } from "../components/Proforma";
import { Check as CheckIcon } from "../components/icons";
import { useStore } from "../state/store";
import { byId, dealer, fa } from "../lib/b2b-data";

const SHIPPING = ["باربری پیشتاز (تیپاکس)", "پست پیشتاز", "تحویل حضوری در انبار"];

export function Checkout() {
  const { cart, cartUnits, submitOrder } = useStore();
  const navigate = useNavigate();
  const [ship, setShip] = useState(SHIPPING[0]);
  const [note, setNote] = useState("");
  const [placed, setPlaced] = useState<string | null>(null);

  const lines = useMemo<ProformaLine[]>(
    () =>
      cart.map((l) => {
        const p = byId(l.id)!;
        return { name: p.name, sku: p.sku, qty: l.qty, unitPrice: p.price };
      }),
    [cart],
  );

  // Guard: nothing to check out (and not just-placed)
  if (cart.length === 0 && !placed) return <Navigate to="/cart" replace />;

  if (placed) {
    return (
      <div style={{ maxWidth: 560, margin: "var(--vt-space-16) auto", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "var(--vt-color-success-bg)",
            color: "var(--vt-color-success)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto var(--vt-space-5)",
          }}
        >
          <CheckIcon size={34} strokeWidth={2} />
        </div>
        <h1 style={{ fontSize: "var(--vt-text-3xl)", fontWeight: 800, margin: "0 0 var(--vt-space-3)", color: "var(--vt-color-text-strong)" }}>
          سفارش شما ثبت شد
        </h1>
        <p style={{ color: "var(--vt-color-text-muted)", lineHeight: 1.9 }}>
          سفارش با شمارهٔ <Code>{placed}</Code> ثبت و برای بررسی به واحد فروش ارسال شد.
          نتیجهٔ بررسی حداکثر طی ۴۸ ساعت کاری اعلام می‌شود.
        </p>
        <div style={{ display: "flex", gap: "var(--vt-space-3)", justifyContent: "center", marginBlockStart: "var(--vt-space-6)" }}>
          <Button variant="primary" onClick={() => navigate(`/orders/${placed}`)}>پیگیری سفارش</Button>
          <Button variant="ghost" onClick={() => navigate("/catalog")}>ادامهٔ خرید</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHead eyebrow="نهایی‌سازی" title="ثبت سفارش عمده" sub={`${fa(cart.length)} مدل · ${fa(cartUnits)} عدد`} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--vt-space-8)", alignItems: "start" }}>
        <div>
          <Proforma lines={lines} />
        </div>

        <aside style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-5)" }}>
          <Card title="اطلاعات خریدار">
            <Field label="شرکت" value={dealer.company} />
            <Field label="کد همکار" value={<Code>{dealer.code}</Code>} />
            <Field label="نشانی" value={dealer.address} />
          </Card>

          <Card title="ارسال و یادداشت">
            <Select
              label="روش ارسال"
              value={ship}
              onChange={(v) => setShip(v)}
              options={SHIPPING}
            />
            <label style={{ display: "block", marginBlockStart: "var(--vt-space-3)", fontSize: "var(--vt-text-sm)", fontWeight: 600, marginBlockEnd: 6 }}>
              یادداشت سفارش (اختیاری)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="مثلاً درخواست بسته‌بندی ویژه…"
              style={{
                width: "100%",
                resize: "vertical",
                padding: "10px 12px",
                border: "1.5px solid var(--vt-color-border-strong)",
                borderRadius: "var(--vt-radius-sm)",
                fontFamily: "var(--vt-font-fa)",
                fontSize: "var(--vt-text-sm)",
                background: "var(--vt-color-surface)",
                color: "var(--vt-color-text)",
                outline: "none",
              }}
            />
          </Card>

          <Button
            variant="primary"
            size="lg"
            style={{ width: "100%" }}
            onClick={() => {
              const order = submitOrder();
              setPlaced(order.id);
            }}
          >
            ثبت نهایی سفارش
          </Button>
        </aside>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--vt-color-surface)", border: "1px solid var(--vt-color-divider)", borderRadius: "var(--vt-radius-lg)", padding: "var(--vt-space-5)" }}>
      <h3 style={{ margin: "0 0 var(--vt-space-3)", fontSize: "var(--vt-text-base)", fontWeight: 800 }}>{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--vt-space-4)", padding: "5px 0", fontSize: "var(--vt-text-sm)" }}>
      <span style={{ color: "var(--vt-color-text-muted)" }}>{label}</span>
      <span style={{ fontWeight: 600, color: "var(--vt-color-text-strong)", textAlign: "left" }}>{value}</span>
    </div>
  );
}
