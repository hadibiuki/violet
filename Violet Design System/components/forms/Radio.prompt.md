Single labelled radio — group options by giving them the same `name`.

```jsx
const [line, setLine] = React.useState('Classic');
{['Classic','Sport','Smart'].map((v) => (
  <Radio key={v} name="line" value={v} label={v} checked={line===v} onChange={setLine} />
))}
```

- Controlled via `checked` + `onChange(value, event)`.
- Used for single-select facets (e.g. Collection in the catalog rail).
