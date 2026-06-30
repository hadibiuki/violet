Pill status label for product imagery — NEW (violet), LIMITED (gold), plus neutral and soldout. Sits top-inline-start on cards.

```jsx
<Badge variant="new" />
<Badge variant="limited" />
<Badge variant="soldout">Out of stock</Badge>
```

- Status always carries a text label, never color alone (a11y).
- Flips to the inline-start corner automatically in RTL when placed in a logical layout.
