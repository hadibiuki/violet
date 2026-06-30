A "Sort" label + `Select` preset for the catalog toolbar.

```jsx
const [sort, setSort] = React.useState('newest');
<SortDropdown value={sort} onChange={setSort} />
```

- Defaults to Newest / A–Z (the documented catalog sorts); pass `options` to override. Built on `Select`.
