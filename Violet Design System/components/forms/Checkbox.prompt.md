Labelled checkbox — violet fill + check glyph; supports an indeterminate (partial) state.

```jsx
const [on, setOn] = React.useState(false);
<Checkbox label="New models only" checked={on} onChange={setOn} />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Disabled" disabled />
```

- Controlled via `checked` / `onChange(next, event)`.
- Use in the catalog filter rail and forms. RTL-safe (gap-based layout).
