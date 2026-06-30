Lines of a proforma / invoice document (B2B). Compose header + rows + total inside a bordered container.

```jsx
const toman = (n) => n.toLocaleString('fa') + ' تومان';
<div style={{ border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)' }}>
  <InvoiceRow header />
  <InvoiceRow description="Chronograph Classic 42" sku="VLT-2601" qty={20} unitPrice={18500000} amount={370000000} currency={toman} />
  <InvoiceRow description="Eclipse Dress 38" sku="VLT-1182" qty={25} unitPrice={14700000} amount={367500000} currency={toman} />
  <InvoiceRow total description="Total" amount={737500000} currency={toman} />
</div>
```

- Pass `currency` to localize. Latin SKUs wrapped in `<bdi>` for RTL.
