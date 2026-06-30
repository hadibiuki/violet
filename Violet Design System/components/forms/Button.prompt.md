The primary action control — token-driven, RTL-safe, with the brand's trailing-arrow slide on hover. Use exactly one primary button per view.

```jsx
<Button variant="primary" trailingIcon={<span>→</span>}>View New Models</Button>
<Button variant="secondary">Contact a retailer</Button>
<Button variant="ghost" size="sm">Clear all</Button>
<Button variant="accent" trailingIcon={<span>→</span>}>Download Catalogue</Button>
<Button variant="primary" loading>Submitting</Button>
```

- Variants: `primary` (violet), `secondary` (outlined), `ghost` (toolbars), `accent` (gold gradient — rare premium CTA), `danger` (admin delete).
- Sizes: `sm` 32 · `md` 40 · `lg` 48 (the site hero CTA size).
- `loading` swaps the leading icon for a spinner and locks width. Disabled = 50% opacity, kept in the a11y tree.
