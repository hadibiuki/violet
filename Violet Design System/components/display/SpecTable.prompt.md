Zebra-striped label/value table for product specifications and dashboard data.

```jsx
<SpecTable rows={[
  ['Case Diameter', '42 mm'],
  ['Case Material', 'Stainless Steel 316L'],
  ['Movement', 'Quartz Chronograph'],
  ['Water Resistance', '5 ATM (50 m)'],
]} />
```

- Label column is muted, value column strong/medium.
- Alternating rows use `surface-sunken`. Alignment follows `start`, so it right-aligns in RTL.
