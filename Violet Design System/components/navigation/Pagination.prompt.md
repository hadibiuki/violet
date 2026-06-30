Page navigation with prev/next and truncated page numbers — the catalog's alternative to "Load more".

```jsx
const [page, setPage] = React.useState(1);
<Pagination page={page} pageCount={12} onChange={setPage} />
```

- Auto-hides when `pageCount <= 1`. Arrows mirror in RTL; ellipses collapse long ranges.
