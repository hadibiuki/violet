The B2B order pipeline as a stepper. Pairs with `OrderStatusPill` (pill = badge, timeline = history).

```jsx
<OrderTimeline current="shipped" times={{
  submitted: '1405/03/21 — 09:12', reviewing: '1405/03/21 — 11:40',
  approved: '1405/03/22 — 08:05', shipped: '1405/03/23 — 14:30',
}} labels={{ submitted:'ثبت‌شده', reviewing:'در حال بررسی', approved:'تأیید شد', shipped:'ارسال شد', completed:'تکمیل شد' }} />

<OrderTimeline current="reviewing" rejected orientation="horizontal" />
```

- `current` marks the active stage; earlier = done (✓), later = muted. `rejected` ends the trail in red. Vertical or horizontal.
