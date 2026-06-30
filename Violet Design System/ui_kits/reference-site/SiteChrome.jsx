// Site chrome: sticky header + footer for the Violet reference site.
const { BrandMark } = window.VioletDesignSystem_7273c4;

function SiteHeader({ active, onNav, dark }) {
  const links = [
    ['Home', 'home'],
    ['New Models', 'catalog'],
    ['Products', 'catalog'],
    ['About', 'home'],
    ['Contact', 'home'],
  ];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('vt-scroll');
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 40);
    el.addEventListener('scroll', on);
    return () => el.removeEventListener('scroll', on);
  }, []);

  const onHero = dark && !scrolled;
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)',
    }}>
      <a onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>
        <BrandMark tone={onHero ? 'onDark' : 'light'} />
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(([label, to], i) => (
          <a key={i} onClick={() => onNav(to)} className="vt-navlink" style={{
            cursor: 'pointer', fontSize: 14, fontWeight: 500,
            color: onHero ? 'rgba(255,255,255,.82)' : (active === to ? 'var(--vt-color-primary)' : 'var(--vt-color-text)'),
          }}>{label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 2, fontSize: 12.5 }}>
        {['EN', 'RU', 'AR'].map((l, i) => (
          <span key={l} style={{
            padding: '5px 9px', borderRadius: 6, cursor: 'pointer',
            color: i === 0 ? (onHero ? '#fff' : 'var(--vt-color-primary)') : (onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)'),
            background: i === 0 ? (onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)') : 'transparent',
          }}>{l}</span>
        ))}
      </div>
    </nav>
  );
}

function SiteFooter() {
  const col = (h, items) => (
    <div>
      <h4 style={{ color: 'var(--vt-gold-300)', fontSize: 12, letterSpacing: '.12em', marginBottom: 16, fontWeight: 600 }}>{h}</h4>
      {items.map((a) => <a key={a} style={{ display: 'block', color: '#C4B5FD', fontSize: 14, marginBottom: 10, cursor: 'pointer', textDecoration: 'none' }}>{a}</a>)}
    </div>
  );
  return (
    <footer style={{ background: 'var(--vt-ink-950)', color: '#fff', padding: '64px 40px 30px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 36 }}>
          <div>
            <BrandMark tone="onDark" size="lg" />
            <p style={{ color: '#C4B5FD', fontSize: 13, lineHeight: 1.7, marginTop: 14, maxWidth: 280 }}>
              Brand · Watches — an international reference for timeless design, crafted for those who value time.
            </p>
          </div>
          {col('EXPLORE', ['New Models', 'Products', 'Collections'])}
          {col('BRAND', ['About Violet', 'History', 'Quality'])}
          {col('SUPPORT', ['Contact', 'FAQ', 'Technologies'])}
        </div>
        <div style={{ borderTop: '1px solid rgba(167,139,250,.2)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: '#A78BFA', fontSize: 13, flexWrap: 'wrap', gap: 10 }}>
          <span>© 2026 Violet Watches. All rights reserved.</span>
          <span>English · Русский · العربية</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
