Hover/focus label around a single trigger element.

```jsx
<Tooltip label="Add to cart">
  <IconButton aria-label="Add" icon={<i data-lucide="plus"></i>} />
</Tooltip>
<Tooltip label="5 ATM — safe for swimming" side="right"><span>5 ATM</span></Tooltip>
```

- Shows on hover and keyboard focus. `side` mirrors correctly in RTL.
