A single metric tile — big value, label, optional icon and delta. Used in the B2B dashboard (boxed) and the marketing stats band (`display`).

```jsx
<StatTile label="Open orders" value="4" icon={<i data-lucide="package"></i>} delta="2 this week" />
<StatTile label="Watch models" value="1000+" display />
<StatTile label="Invoices" value="2" delta="1 overdue" deltaDir="down" />
```

- `display` swaps the value to Cormorant Garamond for the editorial stat band.
