Centered dialog over a scrim — for confirmations, quick views, and forms. Closes on Esc, backdrop click, or ×; locks body scroll.

```jsx
const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>Delete model</Button>
<Modal open={open} onClose={() => setOpen(false)}
  title="Delete this model?"
  description="This deactivates the product; open orders are unaffected."
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={confirm}>Delete</Button>
  </>}>
  VLT-2601 · Chronograph Classic 42 will be hidden from the catalog.
</Modal>
```

- Sizes sm/md/lg. Title uses the display face. Requires Lucide for the × icon.
