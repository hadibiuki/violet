import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@violet/ui";
import { Search } from "../components/icons";
import { CATEGORY_FA, MOVEMENT_FA, STRAP_FA, fa, frame, products, toman, type Movement, type ProductCat, type StrapKind } from "../lib/b2b-data";
import { useStore } from "../state/store";

export function DealerCatalog() {
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCat | "all">("all");
  const [movement, setMovement] = useState<Movement | "all">("all");
  const [strap, setStrap] = useState<StrapKind | "all">("all");
  const [stock, setStock] = useState(false);
  const [sort, setSort] = useState<"new" | "price" | "stock">("new");

  const list = useMemo(() => products.filter((product) => {
    if (category !== "all" && product.cat !== category) return false;
    if (movement !== "all" && product.movement !== movement) return false;
    if (strap !== "all" && product.strap !== strap) return false;
    if (stock && product.stock === 0) return false;
    return `${product.name} ${product.sku}`.toLowerCase().includes(query.trim().toLowerCase());
  }).sort((a,b) => sort === "price" ? a.price-b.price : sort === "stock" ? b.stock-a.stock : Number(b.isNew)-Number(a.isNew)), [category,movement,query,sort,stock,strap]);

  function clear() { setCategory("all"); setMovement("all"); setStrap("all"); setStock(false); setQuery(""); }

  return <div className="catalog-exact">
    <aside className="catalog-filter">
      <header><h3>فیلترها</h3><button onClick={clear}>پاک کردن</button></header>
      <Filter label="نوع" value={category} onChange={(value) => setCategory(value as ProductCat | "all")} options={CATEGORY_FA} />
      <Filter label="مکانیزم" value={movement} onChange={(value) => setMovement(value as Movement | "all")} options={MOVEMENT_FA} />
      <Filter label="بند" value={strap} onChange={(value) => setStrap(value as StrapKind | "all")} options={STRAP_FA} />
      <label className="stock-only"><input type="checkbox" checked={stock} onChange={(event) => setStock(event.target.checked)} />فقط کالاهای موجود</label>
    </aside>
    <section>
      <div className="catalog-head">
        <div><h1>کاتالوگ عمده</h1><p>{fa(list.length)} مدل · قیمت‌ها ویژهٔ همکار</p></div>
        <div className="catalog-tools">
          <label><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجوی مدل یا کد…" /></label>
          <div className="sort-pills"><span>مرتب‌سازی:</span>{[["new","جدیدترین"],["price","قیمت"],["stock","موجودی"]].map(([value,label]) => <button key={value} data-active={sort===value} onClick={() => setSort(value as typeof sort)}>{label}</button>)}</div>
        </div>
      </div>
      {list.length ? <div className="catalog-card-grid">{list.map((product) => {
        const out = product.stock === 0;
        return <article className="catalog-card" data-out={out} key={product.id}>
          <button className="catalog-card-image" onClick={() => navigate(`/catalog/${product.id}`)}>
            <img src={frame(product.f)} alt={product.name} />
            {product.isNew && <span className="new-badge">جدید</span>}
            <span className={`stock-badge ${out ? "out" : product.stock < 25 ? "low" : "ok"}`}>{out ? "ناموجود" : product.stock < 25 ? `تنها ${fa(product.stock)}` : "موجود"}</span>
          </button>
          <div className="catalog-card-body">
            <button className="catalog-card-title" onClick={() => navigate(`/catalog/${product.id}`)}><bdi>{product.name}</bdi></button>
            <bdi className="catalog-card-sku">{product.sku}</bdi>
            <strong>{toman(product.price)}</strong>
            <small>حداقل سفارش {fa(product.moq)} عدد</small>
            <Button size="sm" disabled={out} onClick={() => addToCart(product.id, product.moq)}>{out ? "ناموجود" : "افزودن به سبد"}</Button>
          </div>
        </article>;
      })}</div> : <div className="catalog-empty"><h3>موردی یافت نشد</h3><p>با حذف برخی فیلترها دوباره تلاش کنید.</p><Button variant="secondary" onClick={clear}>پاک کردن فیلترها</Button></div>}
    </section>
  </div>;
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: Record<string,string> }) {
  return <div className="catalog-filter-group"><strong>{label}</strong><div><button data-active={value==="all"} onClick={() => onChange("all")}>همه</button>{Object.entries(options).map(([key,text]) => <button key={key} data-active={value===key} onClick={() => onChange(key)}>{text}</button>)}</div></div>;
}
