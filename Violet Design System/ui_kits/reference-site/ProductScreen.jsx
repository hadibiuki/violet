// Product detail screen — sticky gallery + info column, spec table, related grid.
const { Button, ProductCard, SpecTable, Badge } = window.VioletDesignSystem_7273c4;
const PD = window.VT_DATA;

function ProductScreen({ product, onOpen, onNav }) {
  const p = product || PD.products[0];
  const views = [p.f, p.f2, (p.f + 3) % 8, (p.f + 5) % 8];
  const [main, setMain] = React.useState(0);
  const [color, setColor] = React.useState(0);
  React.useEffect(() => { setMain(0); }, [p.sku]);

  const colors = [['Midnight', '#231940'], ['Gold', '#C9A86A'], ['Steel', '#6B7280'], ['Plum', '#2E2348']];
  const related = PD.products.filter((r) => r.sku !== p.sku).slice(0, 4);

  return (
    <div style={{ background: 'var(--vt-color-bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 40px 0' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--vt-color-text-muted)', marginBottom: 8 }}>
          <span onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>Home</span><span style={{ color: 'var(--vt-color-text-subtle)' }}>›</span>
          <span onClick={() => onNav('catalog')} style={{ cursor: 'pointer' }}>Products</span><span style={{ color: 'var(--vt-color-text-subtle)' }}>›</span>
          <b style={{ color: 'var(--vt-color-text)', fontWeight: 500 }}>{p.name}</b>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '560px 1fr', gap: 56, padding: '20px 0 72px', alignItems: 'start' }}>
          {/* Gallery */}
          <div style={{ position: 'sticky', top: 88 }}>
            <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 'var(--vt-radius-lg)', overflow: 'hidden', background: 'linear-gradient(160deg,var(--vt-ink-100),var(--vt-violet-50))' }}>
              {p.badge && <span style={{ position: 'absolute', top: 18, insetInlineStart: 18, zIndex: 2 }}><Badge variant={p.badge} /></span>}
              <img src={PD.frame(views[main], 900)} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              {views.map((v, i) => (
                <div key={i} onClick={() => setMain(i)} style={{ width: 84, height: 84, borderRadius: 'var(--vt-radius-md)', overflow: 'hidden', cursor: 'pointer', border: `2px solid ${i === main ? 'var(--vt-color-primary)' : 'transparent'}` }}>
                  <img src={PD.frame(v, 200)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>{p.line} Collection</span>
            <h1 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(34px,4vw,52px)', color: 'var(--vt-color-text-strong)', lineHeight: 1.05, margin: '10px 0 8px', letterSpacing: '-.02em' }}>{p.name}</h1>
            <div style={{ fontFamily: 'var(--vt-font-mono)', fontSize: 13, color: 'var(--vt-color-text-muted)' }}>{p.sku}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              {p.badge && <Badge variant={p.badge} />}
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.06em', padding: '5px 11px', borderRadius: 'var(--vt-radius-pill)', background: 'var(--vt-color-info-bg)', color: 'var(--vt-color-info)' }}>{p.wr}</span>
            </div>

            <div style={{ height: 1, background: 'var(--vt-color-divider)', margin: '26px 0' }} />
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', color: 'var(--vt-color-text-muted)', marginBottom: 14 }}>KEY HIGHLIGHTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[p.mvmt, 'Stainless Steel 316L Case', 'Water Resistant — ' + p.wr, 'Sapphire-grade Mineral Glass', p.mm + ' Case Diameter'].map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--vt-color-text)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--vt-color-accent-strong)' }} />{h}
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: 'var(--vt-color-divider)', margin: '26px 0' }} />
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', color: 'var(--vt-color-text-muted)', marginBottom: 14 }}>AVAILABLE COLOURS</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {colors.map(([nm, c], i) => (
                <span key={nm} title={nm} onClick={() => setColor(i)} style={{ width: 30, height: 30, borderRadius: '50%', background: c, cursor: 'pointer', border: '2px solid var(--vt-color-surface)', boxShadow: i === color ? '0 0 0 2px var(--vt-color-primary)' : '0 0 0 1px var(--vt-color-border)' }} />
              ))}
            </div>

            <div style={{ height: 1, background: 'var(--vt-color-divider)', margin: '26px 0' }} />
            <div style={{ display: 'flex', gap: 14 }}>
              <Button variant="primary" trailingIcon={<span>→</span>}>Download Catalogue (PDF)</Button>
              <Button variant="secondary">Contact a retailer</Button>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--vt-color-text-muted)', marginTop: 22 }}>
              A refined everyday {p.line.toLowerCase()} timepiece — stainless steel, sapphire-clear mineral glass, and a balanced {p.mm} case. Designed in the Violet tradition of quiet, lasting elegance.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--vt-color-divider)' }}>
          <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 36, color: 'var(--vt-color-text-strong)', marginBottom: 24, letterSpacing: '-.02em' }}>Specifications</h2>
          <div style={{ maxWidth: 760, border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', overflow: 'hidden' }}>
            <SpecTable rows={[
              ['Case Diameter', p.mm],
              ['Case Material', 'Stainless Steel 316L'],
              ['Strap Material', 'Genuine Leather'],
              ['Glass Type', 'Mineral Crystal'],
              ['Movement', p.mvmt],
              ['Water Resistance', p.wr + ' (50 m)'],
              ['Available Colours', 'Midnight · Gold · Steel · Plum'],
            ]} />
          </div>
        </section>

        <section style={{ padding: '64px 0', borderTop: '1px solid var(--vt-color-divider)' }}>
          <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 36, color: 'var(--vt-color-text-strong)', marginBottom: 24, letterSpacing: '-.02em' }}>You may also like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {related.map((r) => <ProductCard key={r.sku} name={r.name} sku={r.sku} badge={r.badge} image={PD.frame(r.f)} hoverImage={PD.frame(r.f2)} onClick={(e) => { e.preventDefault(); onOpen(r); }} href="#" />)}
          </div>
        </section>
      </div>
    </div>
  );
}

Object.assign(window, { ProductScreen });
