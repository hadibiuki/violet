On/off toggle for binary settings (notifications, preferences). For catalog filters use Checkbox instead.

```jsx
const [on, setOn] = React.useState(true);
<Switch label="Notify me on restock" checked={on} onChange={setOn} />
```

- `role="switch"`, keyboard-focusable, knob slides on the inline axis (mirrors in RTL).
