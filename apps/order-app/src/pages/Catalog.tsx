/**
 * Wholesale catalog — dealer-facing. Filter rail (category / movement / strap /
 * availability) + search, responsive ProductCard grid showing wholesale price +
 * MOQ, and a per-card MOQ-clamped quantity stepper → add to cart (Toast).
 */
import { useMemo, useState } from "react";
import { ProductCard, QuantityStepper, Button, Badge, Toast, ToastViewport } from "@violet/ui";
import { PageHead } from "../components/PageHead";
import { Search, Plus } from "../components/icons";
import {
  products,
  frame,
  toman,
  fa,
  CATEGORY_FA,
  MOVEMENT_FA,
  STRAP_FA,
  type B2BProduct,
  type ProductCat,
  type Movement,
  type StrapKind,
} from "../lib/b2b-data";
import { useStore } from "../state/store";
import { useNavigate } from "react-router-dom";

type ToastMsg = { id: number; text: string };

export function Catalog() {
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ProductCat | "all">("all");
  const [movement, setMovement] = useState<Movement | "all">("all");
  const [strap, setStrap] = useState<StrapKind | "all">("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  const list = useMemo(
    () =>
      products.filter((p) => {
        if (cat !== "all" && p.cat !== cat) return false;
        if (movement !== "all" && p.movement !== movement) return false;
        if (strap !== "all" && p.strap !== strap) return false;
        if (inStockOnly && p.stock === 0) return false;
        if (q.trim() && !`${p.name} ${p.sku}`.toLowerCase().includes(q.trim().toLowerCase())) return false;
        return true;
      }),
    [q, cat, movement, strap, inStockOnly],
  );

  function pushToast(text: string) {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, text }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }

  return (
    <div>
      <PageHead
        eyebrow="کاتالوگ عمده"
        title="مجموعهٔ ساعت‌های ویولت"
        sub={`${fa(list.length)} مدل قابل سفارش · قیمت‌ها به‌صورت عمده و بدون احتساب مالیات`}
      />

      <div className="catalog-layout" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--vt-space-8)", alignItems: "start" }}>
        {/* Filter rail */}
        <aside
          style={{
            position: "sticky",
            top: 84,
            background: "var(--vt-color-surface)",
            border: "1px solid var(--vt-color-divider)",
            borderRadius: "var(--vt-radius-lg)",
            padding: "var(--vt-space-5)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--vt-space-5)",
          }}
        >
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", insetInlineStart: 12, insetBlockStart: 11, color: "var(--vt-color-text-subtle)" }}>
              <Search size={16} />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="جستجوی مدل یا کد…"
              style={{
                width: "100%",
                height: 38,
                paddingInlineStart: 36,
                paddingInlineEnd: 12,
                border: "1.5px solid var(--vt-color-border-strong)",
                borderRadius: "var(--vt-radius-sm)",
                background: "var(--vt-color-surface)",
                fontFamily: "var(--vt-font-fa)",
                fontSize: "var(--vt-text-sm)",
                color: "var(--vt-color-text)",
                outline: "none",
              }}
            />
          </div>

          <FilterGroup<ProductCat>
            label="نوع"
            value={cat}
            onChange={setCat}
            options={Object.entries(CATEGORY_FA).map(([v, l]) => [v as ProductCat, l])}
          />
          <FilterGroup<Movement>
            label="مکانیزم"
            value={movement}
            onChange={setMovement}
            options={Object.entries(MOVEMENT_FA).map(([v, l]) => [v as Movement, l])}
          />
          <FilterGroup<StrapKind>
            label="بند"
            value={strap}
            onChange={setStrap}
            options={Object.entries(STRAP_FA).map(([v, l]) => [v as StrapKind, l])}
          />

          <label style={{ display: "flex", alignItems: "center", gap: "var(--vt-space-2)", cursor: "pointer", fontSize: "var(--vt-text-sm)" }}>
            <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
            فقط کالاهای موجود
          </label>
        </aside>

        {/* Grid */}
        {list.length === 0 ? (
          <div style={{ padding: "var(--vt-space-16)", textAlign: "center", color: "var(--vt-color-text-muted)" }}>
            موردی با این فیلترها یافت نشد.
          </div>
        ) : (
          <div className="b2b-product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--vt-space-5)" }}>
            {list.map((p) => (
              <CatalogCard key={p.id} product={p} onOpen={() => navigate(`/catalog/${p.id}`)} onAdd={(qty) => { addToCart(p.id, qty); pushToast(`${p.name} به سبد افزوده شد`); }} />
            ))}
          </div>
        )}
      </div>

      <ToastViewport>
        {toasts.map((t) => (
          <Toast key={t.id} tone="success" title="افزوده شد" description={t.text} />
        ))}
      </ToastViewport>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T | "all";
  onChange: (v: T | "all") => void;
  options: [T, string][];
}) {
  return (
    <div>
      <div style={{ fontSize: "var(--vt-text-xs)", fontWeight: 700, color: "var(--vt-color-text-muted)", marginBlockEnd: "var(--vt-space-2)" }}>
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        <Pill active={value === "all"} onClick={() => onChange("all")}>همه</Pill>
        {options.map(([v, l]) => (
          <Pill key={v} active={value === v} onClick={() => onChange(v)}>{l}</Pill>
        ))}
      </div>
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        borderRadius: "var(--vt-radius-pill)",
        border: `1px solid ${active ? "var(--vt-color-primary)" : "var(--vt-color-border)"}`,
        background: active ? "var(--vt-color-primary)" : "transparent",
        color: active ? "var(--vt-color-on-primary)" : "var(--vt-color-text-muted)",
        fontFamily: "var(--vt-font-fa)",
        fontSize: "var(--vt-text-xs)",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function CatalogCard({ product: p, onAdd, onOpen }: { product: B2BProduct; onAdd: (qty: number) => void; onOpen: () => void }) {
  const [qty, setQty] = useState(p.moq);
  const out = p.stock === 0;
  return (
    <ProductCard
      name={p.name}
      sku={p.sku}
      image={frame(p.f)}
      badge={p.isNew ? "new" : null}
      price={toman(p.price)}
      priceUnit="هر عدد · عمده"
      moq={p.moq}
      unavailable={out}
      href={`/catalog/${p.id}`}
      onClick={(e) => { e.preventDefault(); onOpen(); }}
      action={
        out ? (
          <Badge variant="soldout">ناموجود</Badge>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-2)", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--vt-space-2)" }}>
              <span style={{ fontSize: "var(--vt-text-2xs)", color: "var(--vt-color-text-subtle)" }}>
                حداقل سفارش: {fa(p.moq)}
              </span>
              <QuantityStepper value={qty} onChange={setQty} min={p.moq} moq={p.moq} step={p.moq >= 10 ? 5 : 1} />
            </div>
            <Button variant="primary" size="sm" leadingIcon={<Plus size={16} />} style={{ width: "100%" }} onClick={() => onAdd(qty)}>
              افزودن به سبد
            </Button>
          </div>
        )
      }
    />
  );
}
