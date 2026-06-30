The B2B order-pipeline status as a colored pill with a dot (or Lucide icon) and a label. Each stage has its own status token pair.

```jsx
<OrderStatusPill status="submitted" />
<OrderStatusPill status="reviewing" withIcon />
<OrderStatusPill status="approved" />
<OrderStatusPill status="shipped" />
<OrderStatusPill status="completed" />
<OrderStatusPill status="rejected" label="رد شد" />   {/* localized */}
```

- Pipeline order: Submitted → Reviewing → Approved → Shipped → Completed, plus Rejected.
- Always pairs color with a label (and optional icon) — never color alone. Pass `label` to localize for the Persian app.
