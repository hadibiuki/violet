The celestial brand hero — deep ink gradient + drifting aurora, with eyebrow, display title, lead, and action buttons.

```jsx
<Hero
  eyebrow="New Season · 2026"
  title={<>Timeless,<br/>reimagined for <em style={{fontStyle:'italic',color:'#C4B5FD'}}>now</em></>}
  lead="Over a thousand models of precision engineering."
  actions={<>
    <Button variant="accent" size="lg" trailingIcon={<span>→</span>}>View New Models</Button>
    <Button size="lg" style={{background:'rgba(255,255,255,.06)',border:'1.5px solid rgba(255,255,255,.2)',color:'#fff'}}>Explore</Button>
  </>}
/>
```

- `align="center"` for interior page heroes (About, Technologies). Aurora animation respects reduced-motion.
