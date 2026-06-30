A row in the B2B cart / request list — thumbnail, name + SKU, MOQ-aware quantity stepper, line total, remove.

```jsx
<CartLineItem name="Chronograph Classic 42" sku="VLT-2601" image={img}
  price={18500000} qty={20} moq={10}
  currency={(n) => n.toLocaleString('fa') + ' تومان'}
  onQty={setQty} onRemove={remove} />

{/* read-only, in an order summary */}
<CartLineItem name="…" sku="…" price={p} qty={20} editable={false} />
```

- Pass `currency` to localize. `editable={false}` swaps the stepper for "× N". Latin runs wrapped in `<bdi>` for RTL.
