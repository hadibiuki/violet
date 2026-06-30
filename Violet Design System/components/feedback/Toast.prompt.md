Transient confirmation/notice. A tone accent bar + icon carries meaning (never colour alone). Place inside a `ToastViewport`.

```jsx
<ToastViewport position="bottom-end">
  <Toast tone="success" title="Added to cart" description="20 × Chronograph Classic 42" onClose={dismiss} />
  <Toast tone="error" title="Couldn’t submit" description="Check your connection and retry." onClose={dismiss} />
</ToastViewport>
```

- Tones: success / error / warning / info. Requires Lucide for the default icons.
