// Catalog screen — filter rail + product grid with live count, sort, active chips.
const { Button, ProductCard, IconButton } = window.VioletDesignSystem_7273c4;
const CD = window.VT_DATA;

function CatalogScreen({ onOpen }) {
  const [line, setLine] = React.useState('All');
  const [newOnly, setNewOnly] = React.useState(false);
  const [sort, setSort] = React.useState('Newest');

  const lines = ['All', 'Classic', 'Sport', 'Smart'];
  let items = CD.products.filter((p) => (line === 'All' || p.line === line) && (!newOnly || p.badge === 'new'));
  if (sort === 'A–Z') items = [...items].sort((a, b) => a.name.localeCompare(b.name));

  const activeChips = [];
  if (line !== 'All') activeChips.push(['Line: ' + line, () => setLine('All')]);
  if (newOnly) activeChips.push(['New only', () => setNewOnly(false)]);

  const accGroup = (title, children) => (
    <div style={{ borderBottom: '1px solid var(--vt-color-divider)', padding: '18px 0' }}>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.04em', color: 'var(--vt-color-text-muted)', textTransform: 'uppercase', marginBottom: 14 }}>{title}</div>
      {children}
    </div>
  );

  return (
    <div style={{ background: 'var(--vt-color-bg)', minHeight: '100%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 40px 90px' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--vt-color-text-muted)', marginBottom: 18 }}>
          <span style={{ cursor: 'pointer' }}>Home</span><span style={{ color: 'var(--vt-color-text-subtle)' }}>/</span><b style={{ color: 'var(--vt-color-text)', fontWeight: 500 }}>Products</b>
        </div>
        <h1 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 48, color: 'var(--vt-color-text-strong)', margin: '0 0 6px', letterSpacing: '-.02em' }}>All Products</h1>
        <p style={{ color: 'var(--vt-color-text-muted)', fontSize: 15, margin: '0 0 28px' }}>Over a thousand models — a curated selection shown here.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '248px 1fr', gap: 32, alignItems: 'start' }}>
          {/* Filter rail */}
          <aside style={{ background: 'var(--vt-color-surface-sunken)', borderRadius: 'var(--vt-radius-lg)', padding: '4px 20px 14px', position: 'sticky', top: 88 }}>
            {accGroup('Collection', (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {lines.map((l) => (
                  <label key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, cursor: 'pointer', color: line === l ? 'var(--vt-color-primary)' : 'var(--vt-color-text)', fontWeight: line === l ? 600 : 400 }}>
                    <input type="radio" name="line" checked={line === l} onChange={() => setLine(l)} style={{ accentColor: 'var(--vt-color-primary)' }} />{l}
                  </label>
                ))}
              </div>
            ))}
            {accGroup('Availability', (
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, cursor: 'pointer', color: 'var(--vt-color-text)' }}>
                <input type="checkbox" checked={newOnly} onChange={(e) => setNewOnly(e.target.checked)} style={{ accentColor: 'var(--vt-color-primary)' }} />New models only
              </label>
            ))}
            {accGroup('Movement', (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Quartz', 'Automatic', 'Smart'].map((m) => (
                  <span key={m} style={{ fontSize: 12.5, padding: '6px 12px', borderRadius: 'var(--vt-radius-pill)', border: '1px solid var(--vt-color-border-strong)', color: 'var(--vt-color-text-muted)', cursor: 'pointer' }}>{m}</span>
                ))}
              </div>
            ))}
          </aside>

          {/* Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <span aria-live="polite" style={{ fontSize: 14, color: 'var(--vt-color-text-muted)' }}><b style={{ color: 'var(--vt-color-text-strong)' }}>{items.length}</b> results</span>
                {activeChips.map(([label, clear], i) => (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, padding: '5px 6px 5px 12px', borderRadius: 'var(--vt-radius-pill)', background: 'var(--vt-color-primary-subtle)', color: 'var(--vt-color-primary)', fontWeight: 500 }}>
                    {label}<span onClick={clear} style={{ cursor: 'pointer', width: 16, height: 16, display: 'grid', placeItems: 'center', borderRadius: '50%', background: 'rgba(124,58,237,.16)' }}>×</span>
                  </span>
                ))}
                {activeChips.length > 0 && <a onClick={() => { setLine('All'); setNewOnly(false); }} style={{ fontSize: 13, color: 'var(--vt-color-text-muted)', cursor: 'pointer', textDecoration: 'underline' }}>Clear all</a>}
              </div>
              <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ fontFamily: 'var(--vt-font-sans)', fontSize: 14, padding: '8px 12px', borderRadius: 'var(--vt-radius-sm)', border: '1.5px solid var(--vt-color-border-strong)', background: 'var(--vt-color-surface)', color: 'var(--vt-color-text)' }}>
                <option>Newest</option><option>A–Z</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
              {items.map((p) => (
                <ProductCard key={p.sku} name={p.name} sku={p.sku} badge={p.badge} image={CD.frame(p.f)} hoverImage={CD.frame(p.f2)} price={p.price} onClick={(e) => { e.preventDefault(); onOpen(p); }} href="#" />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Button variant="secondary">Load more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CatalogScreen });
