import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Badge, Button, QuantityStepper, SpecTable, Toast, ToastViewport } from "@violet/ui";
import { ArrowLeft, Plus } from "../components/icons";
import { byId, fa, frame, specRows, toman } from "../lib/b2b-data";
import { useStore } from "../state/store";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const product = id ? byId(id) : undefined;
  const [quantity, setQuantity] = useState(product?.moq ?? 1);
  const [image, setImage] = useState(0);
  const [added, setAdded] = useState(false);
  if (!product) return <Navigate to="/catalog" replace />;

  const gallery = [product.f, product.f + 1, product.f + 2];
  const unavailable = product.stock === 0;
  return (
    <div>
      <button className="app-back" type="button" onClick={() => navigate(-1)}>
        <ArrowLeft size={17} /> بازگشت به کاتالوگ
      </button>
      <div className="b2b-pdp">
        <div>
          <div className="b2b-pdp-main">
            <img src={frame(gallery[image] ?? product.f)} alt={product.name} />
          </div>
          <div className="b2b-pdp-thumbs">
            {gallery.map((item, index) => (
              <button key={item} type="button" aria-label={`تصویر ${fa(index + 1)}`} aria-pressed={image === index} onClick={() => setImage(index)}>
                <img src={frame(item)} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="b2b-pdp-info">
          <div><Badge variant={unavailable ? "soldout" : product.isNew ? "new" : "neutral"}>{unavailable ? "ناموجود" : product.isNew ? "جدید" : "موجود"}</Badge></div>
          <h1>{product.name}</h1>
          <bdi>{product.sku}</bdi>
          <p>{product.desc}</p>
          <div className="b2b-price">{toman(product.price)} <small>هر عدد · عمده</small></div>
          <div className="b2b-order-box">
            <div>
              <strong>تعداد سفارش</strong>
              <span>حداقل {fa(product.moq)} عدد · موجودی {fa(product.stock)}</span>
            </div>
            <QuantityStepper value={quantity} onChange={setQuantity} min={product.moq} max={product.stock} moq={product.moq} />
            <Button
              disabled={unavailable}
              leadingIcon={<Plus size={17} />}
              onClick={() => {
                addToCart(product.id, quantity);
                setAdded(true);
                setTimeout(() => setAdded(false), 2500);
              }}
            >
              افزودن به سبد سفارش
            </Button>
          </div>
          <SpecTable rows={specRows(product)} />
        </div>
      </div>
      <ToastViewport>{added && <Toast tone="success" title="به سبد افزوده شد" description={`${product.name} · ${fa(quantity)} عدد`} />}</ToastViewport>
    </div>
  );
}
