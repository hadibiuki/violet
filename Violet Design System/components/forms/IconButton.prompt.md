Square, icon-only control for toolbars, nav, card actions. Always pass `aria-label`.

```jsx
<IconButton aria-label="Search" icon={<i data-lucide="search"></i>} />
<IconButton aria-label="Add to cart" variant="primary" icon={<i data-lucide="plus"></i>} />
```

- Ghost by default; `secondary` (outlined) and `primary` (violet) available.
- Sizes sm/md/lg map to 32/40/48px. Directional icons mirror in RTL.
