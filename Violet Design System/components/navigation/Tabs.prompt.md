Underline tab bar — primary indicator animates; arrow keys move between tabs. For catalog views (All / New) and B2B sub-sections.

```jsx
const [tab, setTab] = React.useState('all');
<Tabs value={tab} onChange={setTab} tabs={[
  { value: 'all', label: 'All models' },
  { value: 'new', label: 'New' },
]} />
```
