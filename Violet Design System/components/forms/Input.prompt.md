Labelled text field — persistent label above, optional leading affix, hint or error below, violet focus ring.

```jsx
<Input label="Company email" placeholder="you@dealer.com" />
<Input label="Search models" leadingAffix={<i data-lucide="search"></i>} />
<Input label="Password" type="password" error="Incorrect password" />
```

- Labels are always visible; placeholders are not labels.
- `error` turns the border `danger` and wires `aria-invalid` + `aria-describedby`.
- `text-align: start` keeps it correct in RTL.
