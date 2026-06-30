Native dropdown styled to match `Input` — label, hint/error, focus ring, custom chevron. Native under the hood for accessibility and mobile.

```jsx
<Select label="Country" placeholder="Select a country…" value={c} onChange={setC}
  options={['United Kingdom','Russia','UAE','Iran']} />

<Select label="Sort" value={sort} onChange={setSort}
  options={[{value:'new',label:'Newest'},{value:'az',label:'A–Z'}]} />
```

- `onChange(value, event)`. Chevron sits on the inline-end (RTL-safe).
