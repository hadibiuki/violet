// Shared site chrome for the standalone multi-page reference site (EN / LTR).
// Real <a href> navigation between pages. Pass `active` = page key.
const { BrandMark } = window.VioletDesignSystem_7273c4;

const VT_NAV = [
['Home', 'index.html', 'home'],
['New Models', 'new-models.html', 'new'],
['Products', 'products.html', 'products'],
['Brand', 'brand.html', 'brand'],
['About', 'about.html', 'about'],
['Technologies', 'technologies.html', 'tech'],
['Contact', 'contact.html', 'contact']];


function SiteHeader({ active, variant = 'light' }) {
  // variant: 'light' (solid) or 'overlay' (transparent over a dark hero, frosts on scroll)
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const onHero = variant === 'overlay' && !scrolled;

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)', height: "122px"
    }}>
      <a href="index.html" style={{ textDecoration: 'none' }}><BrandMark tone={onHero ? 'onDark' : 'light'} /></a>
      <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        {VT_NAV.map(([label, href, key]) =>
        <a key={key} href={href} className="vt-navlink" style={{
          textDecoration: 'none', fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap',
          color: onHero ? 'rgba(255,255,255,.82)' : active === key ? 'var(--vt-color-primary)' : 'var(--vt-color-text)'
        }}>{label}</a>
        )}
      </div>
      <div style={{ display: 'flex', gap: 2, fontSize: 12.5 }}>
        {['EN', 'RU', 'AR'].map((l, i) =>
        <span key={l} style={{
          padding: '5px 9px', borderRadius: 6, cursor: 'pointer', userSelect: 'none',
          color: i === 0 ? onHero ? '#fff' : 'var(--vt-color-primary)' : onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)',
          background: i === 0 ? onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)' : 'transparent'
        }}>{l}</span>
        )}
      </div>
    </nav>);

}

function SiteFooter() {
  const col = (h, items) =>
  <div>
      <h4 style={{ color: 'var(--vt-gold-300)', fontSize: 12, letterSpacing: '.12em', marginBottom: 16, fontWeight: 600 }}>{h}</h4>
      {items.map(([label, href]) => <a key={label} href={href} style={{ display: 'block', color: 'rgba(255,255,255,.66)', fontSize: 14, marginBottom: 10, textDecoration: 'none' }}>{label}</a>)}
    </div>;

  return (
    <footer style={{ background: 'var(--vt-ink-950)', color: '#fff', padding: '64px 40px 30px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 36 }}>
          <div>
            <BrandMark tone="onDark" size="lg" />
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, lineHeight: 1.7, marginTop: 14, maxWidth: 280 }}>
              Brand · Watches — an international reference for timeless design, crafted for those who value time.
            </p>
          </div>
          {col('EXPLORE', [['New Models', 'new-models.html'], ['Products', 'products.html'], ['Technologies', 'technologies.html']])}
          {col('BRAND', [['About Violet', 'about.html'], ['History', 'about.html'], ['Quality', 'about.html']])}
          {col('SUPPORT', [['Contact', 'contact.html'], ['Find a dealer', 'contact.html'], ['FAQ', 'contact.html']])}
        </div>
        <div style={{ borderTop: '1px solid rgba(230,180,83,.2)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,.5)', fontSize: 13, flexWrap: 'wrap', gap: 10 }}>
          <span>© 2026 Violet Watches. All rights reserved.</span>
          <span>English · Русский · العربية</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { SiteHeader, SiteFooter, VT_NAV });