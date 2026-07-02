/**
 * Cart + proforma. CartLineItem rows (MOQ-clamped stepper, remove → Toast),
 * order summary, a proforma invoice built from InvoiceRow, and a confirm Modal
 * that routes to checkout.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartLineItem,
  Button,
  Modal,
  Toast,
  ToastViewport,
} from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";
import { ShoppingCart } from "../components/icons";
import { useStore } from "../state/store";
import { byId, toman, fa } from "../lib/b2b-data";

export function Cart() {
  const { cart, setQty, removeFromCart, cartUnits, cartSubtotal } = useStore();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const tax = Math.round(cartSubtotal * 0.09);
  const total = cartSubtotal + tax;

  if (cart.length === 0) {
    return (
      <div>
        <PageHead title="سبد سفارش" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--vt-space-4)",
            padding: "var(--vt-space-20) var(--vt-space-8)",
            background: "var(--vt-color-surface)",
            border: "1px dashed var(--vt-color-border-strong)",
            borderRadius: "var(--vt-radius-lg)",
            color: "var(--vt-color-text-muted)",
          }}
        >
          <ShoppingCart size={40} />
          <p style={{ margin: 0 }}>سبد سفارش شما خالی است.</p>
          <Button variant="primary" onClick={() => navigate("/catalog")}>رفتن به کاتالوگ</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHead
        eyebrow="سبد سفارش"
        title="بازبینی سفارش عمده"
        sub={`${fa(cart.length)} مدل · ${fa(cartUnits)} عدد`}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "var(--vt-space-8)", alignItems: "start" }}>
        {/* Lines */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-3)" }}>
          {cart.map((l) => {
            const p = byId(l.id)!;
            return (
              <CartLineItem
                key={l.id}
                name={p.name}
                sku={p.sku}
                image={`/watches/watch-${String(((p.f % 12) + 12) % 12).padStart(2, "0")}.jpg`}
                price={p.price}
                qty={l.qty}
                moq={p.moq}
                currency={toman}
                onQty={(n) => setQty(l.id, n)}
                onRemove={() => {
                  removeFromCart(l.id);
                  setToast(`${p.name} از سبد حذف شد`);
                  setTimeout(() => setToast(null), 2600);
                }}
              />
            );
          })}
        </div>

        {/* Summary + proforma */}
        <aside
          style={{
            position: "sticky",
            top: 84,
            background: "var(--vt-color-surface)",
            border: "1px solid var(--vt-color-divider)",
            borderRadius: "var(--vt-radius-lg)",
            padding: "var(--vt-space-6)",
            boxShadow: "var(--vt-shadow-sm)",
          }}
        >
          <h3 style={{ margin: "0 0 var(--vt-space-4)", fontSize: "var(--vt-text-lg)", fontWeight: 800 }}>
            خلاصهٔ سفارش
          </h3>

          <Row label="جمع کل اقلام" value={toman(cartSubtotal)} />
          <Row label="مالیات بر ارزش افزوده (۹٪)" value={toman(tax)} muted />
          <div style={{ height: 1, background: "var(--vt-color-divider)", margin: "var(--vt-space-3) 0" }} />
          <Row label="مبلغ قابل پرداخت" value={toman(total)} strong />

          <Button
            variant="primary"
            size="lg"
            style={{ width: "100%", marginBlockStart: "var(--vt-space-5)" }}
            onClick={() => setConfirmOpen(true)}
          >
            ثبت سفارش
          </Button>
          <p style={{ fontSize: "var(--vt-text-2xs)", color: "var(--vt-color-text-subtle)", textAlign: "center", marginBlockStart: "var(--vt-space-3)" }}>
            با ثبت سفارش، پیش‌فاکتور برای بررسی به واحد فروش ارسال می‌شود.
          </p>
        </aside>
      </div>

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="تأیید ثبت سفارش"
        description={`سفارش شامل ${fa(cart.length)} مدل و ${fa(cartUnits)} عدد به مبلغ ${toman(total)} ثبت خواهد شد.`}
        footer={
          <div style={{ display: "flex", gap: "var(--vt-space-3)", justifyContent: "flex-end" }}>
            <Button variant="ghost" onClick={() => setConfirmOpen(false)}>انصراف</Button>
            <Button variant="primary" onClick={() => { setConfirmOpen(false); navigate("/checkout"); }}>
              تأیید و ادامه
            </Button>
          </div>
        }
      >
        <p style={{ margin: 0, color: "var(--vt-color-text-muted)", fontSize: "var(--vt-text-sm)" }}>
          شمارهٔ پیگیری پس از ثبت در بخش <Code>سفارش‌های من</Code> قابل مشاهده است.
        </p>
      </Modal>

      <ToastViewport>
        {toast && <Toast tone="info" title="حذف شد" description={toast} />}
      </ToastViewport>
    </div>
  );
}

function Row({ label, value, strong, muted }: { label: string; value: string; strong?: boolean; muted?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0" }}>
      <span style={{ fontSize: strong ? "var(--vt-text-base)" : "var(--vt-text-sm)", fontWeight: strong ? 700 : 500, color: muted ? "var(--vt-color-text-muted)" : "var(--vt-color-text)" }}>
        {label}
      </span>
      <span style={{ fontSize: strong ? "var(--vt-text-lg)" : "var(--vt-text-sm)", fontWeight: strong ? 800 : 600, color: strong ? "var(--vt-color-primary)" : "var(--vt-color-text-strong)" }}>
        {value}
      </span>
    </div>
  );
}
