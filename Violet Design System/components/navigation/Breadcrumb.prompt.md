Breadcrumb trail — the PDP/catalog `Home › Products › {Model}` path.

```jsx
<Breadcrumb items={[
  { label: 'Home', href: 'index.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'Chronograph Classic 42' },
]} />
```

- Last item is the current page (no link, `aria-current`). Chevron mirrors in RTL.
