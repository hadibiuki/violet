// Home screen — the celestial hero, marquee, New Models grid, lines, brand split, stats, CTA.
const { Button, ProductCard } = window.VioletDesignSystem_7273c4;
const D = window.VT_DATA;

function Hero({ onNav }) {
  return (
    <header style={{
      position: 'relative', minHeight: 620, display: 'flex', alignItems: 'center', overflow: 'hidden',
      background: 'radial-gradient(1200px 700px at 70% 30%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)',
      marginTop: -72, paddingTop: 72,
    }}>
      <div className="vt-aurora" style={{ position: 'absolute', inset: '-20%', background:
        'radial-gradient(600px 400px at 20% 30%,rgba(168,85,247,.25),transparent 60%),radial-gradient(500px 500px at 80% 70%,rgba(124,58,237,.22),transparent 60%),radial-gradient(400px 400px at 60% 20%,rgba(201,168,106,.10),transparent 60%)',
        filter: 'blur(10px)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 40, alignItems: 'center', width: '100%' }}>
        <div style={{ color: '#fff' }}>
          <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-gold-300)', fontWeight: 500 }}>New Season · 2026</span>
          <h1 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, letterSpacing: '-.02em', fontSize: 'clamp(52px,6vw,96px)', lineHeight: 1.02, color: '#fff', margin: '18px 0 22px' }}>
            Timeless,<br />reimagined for <em style={{ fontStyle: 'italic', color: '#C4B5FD' }}>now</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#C4B5FD', maxWidth: 440, marginBottom: 34 }}>
            Over a thousand models of precision engineering and considered design — discover the latest Violet collection.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Button variant="accent" size="lg" trailingIcon={<span>→</span>} onClick={() => onNav('catalog')}>View New Models</Button>
            <Button size="lg" onClick={() => onNav('catalog')} style={{ background: 'rgba(255,255,255,.06)', border: '1.5px solid rgba(255,255,255,.2)', color: '#fff' }}>Explore the brand</Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'grid', placeItems: 'center', height: 480 }}>
          <div className="vt-spin-slow" style={{ position: 'absolute', width: 460, height: 460, border: '1px solid rgba(196,181,253,.18)', borderRadius: '50%' }} />
          <div className="vt-spin-rev" style={{ position: 'absolute', width: 540, height: 540, border: '1px dashed rgba(196,181,253,.14)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,181,253,.30),transparent 62%)', filter: 'blur(8px)' }} />
          <img className="vt-float" alt="Violet timepiece" src={D.frame(0, 760)} style={{ width: 360, height: 360, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08)' }} />
        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const words = ['Precision', 'Craftsmanship', 'Heritage', 'Timeless', 'Innovation'];
  const run = [...words, ...words];
  return (
    <div style={{ borderBlock: '1px solid var(--vt-color-divider)', background: 'var(--vt-color-surface)', overflow: 'hidden', padding: '18px 0' }}>
      <div className="vt-marquee" style={{ display: 'flex', gap: 60, whiteSpace: 'nowrap', width: 'max-content' }}>
        {run.map((w, i) => (
          <span key={i} style={{ fontFamily: 'var(--vt-font-display)', fontSize: 26, color: 'var(--vt-color-text-subtle)', display: 'flex', alignItems: 'center', gap: 60 }}>
            {w}<span style={{ color: 'var(--vt-color-accent)', fontSize: 14 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SecHead({ eyebrow, title, link, onNav }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
      <div>
        <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>{eyebrow}</span>
        <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(32px,4vw,48px)', color: 'var(--vt-color-text-strong)', margin: '6px 0 0', letterSpacing: '-.02em' }}>{title}</h2>
      </div>
      {link && <a onClick={() => onNav('catalog')} style={{ cursor: 'pointer', fontSize: 14, fontWeight: 500, color: 'var(--vt-color-primary)', display: 'inline-flex', gap: 8, alignItems: 'center' }}>{link} <span>→</span></a>}
    </div>
  );
}

function HomeScreen({ onNav, onOpen }) {
  const wrap = { maxWidth: 1280, margin: '0 auto', padding: '0 40px' };
  const newM = D.products.filter((p) => p.badge === 'new').slice(0, 4);
  const feat = D.products.slice(4, 8);
  return (
    <div>
      <Hero onNav={onNav} />
      <Marquee />

      <section style={{ padding: '100px 0' }}>
        <div style={wrap}>
          <SecHead eyebrow="Just arrived" title="New Models" link="View All New Models" onNav={onNav} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {newM.map((p) => <ProductCard key={p.sku} name={p.name} sku={p.sku} badge={p.badge} image={D.frame(p.f)} hoverImage={D.frame(p.f2)} onClick={(e) => { e.preventDefault(); onOpen(p); }} href="#" />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 100px' }}>
        <div style={wrap}>
          <SecHead eyebrow="Find your style" title="Explore the lines" link="View All Products" onNav={onNav} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {D.lines.map((l) => (
              <a key={l.name} onClick={() => onNav('catalog')} className="vt-linecard" style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 'var(--vt-radius-xl)', overflow: 'hidden', cursor: 'pointer', display: 'block' }}>
                <img src={D.frame(l.f, 700)} alt={l.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s var(--vt-ease-standard)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 38%,rgba(13,10,30,.78))' }} />
                <div style={{ position: 'absolute', insetInlineStart: 26, bottom: 26, color: '#fff', zIndex: 2 }}>
                  <h3 style={{ fontFamily: 'var(--vt-font-display)', fontSize: 32, fontWeight: 400, margin: 0 }}>{l.name}</h3>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.72)', marginTop: 2 }}>{l.desc}</div>
                  <span style={{ fontSize: 13, color: 'var(--vt-gold-300)', marginTop: 12, display: 'inline-flex', gap: 8, alignItems: 'center' }}>Explore the line →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--vt-color-surface)', padding: '100px 0' }}>
        <div style={wrap}>
          <SecHead eyebrow="Most loved" title="Featured Pieces" link="Explore All Products" onNav={onNav} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {feat.map((p) => <ProductCard key={p.sku} name={p.name} sku={p.sku} badge={p.badge} image={D.frame(p.f)} hoverImage={D.frame(p.f2)} price={p.price} onClick={(e) => { e.preventDefault(); onOpen(p); }} href="#" />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Button variant="secondary" trailingIcon={<span>→</span>} onClick={() => onNav('catalog')}>View All Products</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--vt-radius-2xl)', overflow: 'hidden' }}>
            <img src={D.frame(4, 800)} alt="Craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(255,255,255,.4)', borderRadius: 'var(--vt-radius-xl)' }} />
          </div>
          <div>
            <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>About Violet</span>
            <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(34px,4vw,52px)', color: 'var(--vt-color-text-strong)', margin: '16px 0 22px', lineHeight: 1.1, letterSpacing: '-.02em' }}>Timekeeping, refined to its essence</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--vt-color-text-muted)', marginBottom: 30, maxWidth: 440 }}>
              Each Violet timepiece unites precision movements with quiet, considered design — built to carry a sense of authenticity and confidence across borders. Restraint, made to last.
            </p>
            <Button variant="secondary" trailingIcon={<span>→</span>}>Discover our story</Button>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--vt-color-surface)' }}>
        <div style={{ ...wrap }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, borderBlock: '1px solid var(--vt-color-divider)', padding: '56px 0' }}>
            {[['1000+', 'Watch models'], ['4000+', 'Photography frames'], ['3', 'Languages · EN/RU/AR'], ['✦', 'Timeless by design']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--vt-font-display)', fontSize: 'clamp(44px,5vw,64px)', color: n === '✦' ? 'var(--vt-color-accent-strong)' : 'var(--vt-color-text-strong)', lineHeight: 1 }}>{n}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: 'var(--vt-color-text-muted)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', color: '#fff', padding: '110px 0', background: 'radial-gradient(800px 400px at 50% 0%,#3B0764,transparent 60%),linear-gradient(160deg,#0D0A1E,#231940)' }}>
        <div style={{ position: 'relative', zIndex: 2, ...wrap }}>
          <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-gold-300)', fontWeight: 500 }}>Begin</span>
          <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(38px,5vw,64px)', margin: '12px 0 18px', letterSpacing: '-.02em' }}>Find the one that's yours</h2>
          <p style={{ color: '#C4B5FD', fontSize: 18, marginBottom: 32 }}>Explore the complete Violet catalogue — over a thousand models await.</p>
          <Button variant="accent" size="lg" trailingIcon={<span>→</span>} onClick={() => onNav('catalog')}>Explore the collection</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
