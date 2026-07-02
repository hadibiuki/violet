import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button, QuantityStepper, SpecTable } from "@violet/ui";
import { byId, fa, frame, products, specRows, toman } from "../lib/b2b-data";
import { useStore } from "../state/store";

export function DealerProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const product = id ? byId(id) : undefined;
  const [image, setImage] = useState(0);
  const [quantity, setQuantity] = useState(product?.moq ?? 1);
  if (!product) return <Navigate to="/catalog" replace />;
  const gallery = [product.f, product.f + 1, product.f + 2, product.f + 3];
  const similar = products.filter((item) => item.id !== product.id && item.cat === product.cat).slice(0,4);

  return <div>
    <div className="pdp-breadcrumb"><button onClick={() => navigate("/catalog")}>کاتالوگ</button><span>‹</span><bdi>{product.name}</bdi></div>
    <div className="pdp-exact">
      <section className="pdp-gallery">
        <div className="pdp-main-image"><img src={frame(gallery[image] ?? product.f)} alt={product.name} /><i /></div>
        <div className="pdp-thumbnails">{gallery.map((item,index) => <button key={item} data-active={image===index} onClick={() => setImage(index)}><img src={frame(item)} alt="" /></button>)}</div>
      </section>
      <section className="pdp-info">
        {product.isNew && <span className="pdp-new">جدید · فصل ۱۴۰۵</span>}
        <h1><bdi>{product.name}</bdi></h1>
        <bdi className="pdp-sku">{product.sku}</bdi>
        <p>{product.desc}</p>
        <div className="pdp-buybox">
          <div className="pdp-price"><span>قیمت همکار (هر عدد)</span><strong>{toman(product.price)}</strong></div>
          <div className="pdp-stock">✓ موجودی {fa(product.stock)} عدد · حداقل سفارش {fa(product.moq)} عدد</div>
          <hr />
          {product.stock > 0 ? <>
            <div className="pdp-quantity"><div><small>تعداد</small><QuantityStepper value={quantity} onChange={setQuantity} min={product.moq} moq={product.moq} /></div><div><small>جمع این قلم</small><strong>{toman(product.price*quantity)}</strong></div></div>
            <Button size="lg" onClick={() => addToCart(product.id,quantity)}>افزودن به سبد</Button>
          </> : <Button disabled>ناموجود</Button>}
        </div>
        <h2>مشخصات فنی</h2>
        <SpecTable rows={specRows(product)} />
      </section>
    </div>
    <h2 className="similar-title">محصولات مشابه</h2>
    <div className="similar-grid">{similar.map((item) => <button key={item.id} onClick={() => navigate(`/catalog/${item.id}`)}><div><img src={frame(item.f)} alt="" /></div><span><strong>{item.name}</strong><small>{toman(item.price)}</small></span></button>)}</div>
  </div>;
}
