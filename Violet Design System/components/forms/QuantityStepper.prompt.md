Minus / value / plus stepper for the B2B wholesale flows. Enforces MOQ (minimum order quantity) by clamping the low bound.

```jsx
const [qty, setQty] = React.useState(10);
<QuantityStepper value={qty} onChange={setQty} moq={10} step={5} max={500} />
```

- Pass `moq` to set the floor and render the "Minimum N units" helper.
- The value clamps at the bounds, so the control can never produce an invalid order quantity. RTL-safe ordering.
