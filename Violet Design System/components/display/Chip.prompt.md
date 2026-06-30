Compact selectable / removable token — active filters, tags, quick-pick facets.

```jsx
<Chip selected onClick={toggle}>Men</Chip>
<Chip onRemove={() => clear('Gold')}>Gold</Chip>
<Chip leadingIcon={<i data-lucide="tag"></i>}>Limited</Chip>
```

- `selected` fills violet; `onRemove` adds an × button; `onClick` makes it a toggle.
