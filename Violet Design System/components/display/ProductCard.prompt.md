The catalog workhorse — square reserved image, badge overlay, model name + mono SKU, optional B2B price/MOQ. The whole card is one link to the PDP; hover lifts it and swaps to the second image.

```jsx
{/* Site catalog */}
<ProductCard name="Chronograph Classic 42" sku="VLT-2601" badge="new"
  image={img} hoverImage={img2} href="/products/vlt-2601" />

{/* B2B catalog with price + MOQ + nested Add action */}
<ProductCard name="Aurora Skeleton 42" sku="VLT-1180" image={img}
  price="$1,250" moq={10}
  action={<IconButton aria-label="Add" variant="primary" icon={<i data-lucide="plus"></i>} />} />

{/* Unavailable */}
<ProductCard name="Tempo Quartz 36" sku="VLT-1183" image={img} unavailable />
```

- Reserves `aspect-ratio: 1/1` so the grid never reflows while images lazy-load.
- Badge sits top-inline-start; flips correctly in RTL. Nested actions are real buttons inside the card link.
