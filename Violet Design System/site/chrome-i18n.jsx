// Localized site chrome (header + footer) for the home page, EN/RU/AR.
// Reads strings from window.VT_I18N[lang]; wires the language switcher to anchors.
const { BrandMark: BrandMarkI18n } = window.VioletDesignSystem_7273c4;

function SiteHeaderI18n({ active, lang = 'en', variant = 'overlay' }) {
  const T = window.VT_I18N[lang];
  const rtl = T.dir === 'rtl';
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const onHero = variant === 'overlay' && !scrolled;
  const langCode = lang.toUpperCase();
  const homeHref = window.VT_LANG_LINKS[langCode] || 'index.html';

  return (
    <nav dir={T.dir} style={{
      position: variant === 'overlay' ? (scrolled ? 'fixed' : 'absolute') : 'sticky',
      top: 0, insetInline: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '12px 40px' : '18px 40px',
      background: onHero ? 'transparent' : 'rgba(248,247,255,.78)',
      backdropFilter: onHero ? 'none' : 'blur(18px) saturate(1.4)',
      borderBottom: `1px solid ${onHero ? 'transparent' : 'var(--vt-color-divider)'}`,
      transition: 'all var(--vt-duration-slow) var(--vt-ease-standard)',
    }}>
      <a href={homeHref} style={{ textDecoration: 'none' }}><BrandMarkI18n tone={onHero ? 'onDark' : 'light'} /></a>
      <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        {T.nav.map(([label, href, key]) => {
          const isActive = active === key;
          const activeColor = onHero ? 'var(--vt-gold-300)' : 'var(--vt-color-accent-strong)';
          return (
            <a key={key} href={href} className="vt-navlink" style={{
              position: 'relative', textDecoration: 'none', fontSize: 14,
              fontWeight: isActive ? 600 : 500, whiteSpace: 'nowrap', paddingBottom: 4,
              color: isActive ? activeColor : (onHero ? 'rgba(255,255,255,.82)' : 'var(--vt-color-text)'),
              transition: 'color var(--vt-duration-base) var(--vt-ease-standard)',
            }}>
              {label}
              <span aria-hidden="true" style={{
                position: 'absolute', insetInline: 0, bottom: 0, height: 2, borderRadius: 2,
                background: activeColor, transform: `scaleX(${isActive ? 1 : 0})`,
                transformOrigin: rtl ? 'right' : 'left', transition: 'transform var(--vt-duration-base) var(--vt-ease-emphasized)',
              }} />
            </a>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 2, fontSize: 12.5 }}>
        {['EN', 'RU', 'AR'].map((l) => {
          const isCur = l === langCode;
          return (
            <a key={l} href={window.VT_LANG_LINKS[l]} style={{
              padding: '5px 9px', borderRadius: 6, cursor: 'pointer', userSelect: 'none', textDecoration: 'none',
              color: isCur ? (onHero ? '#fff' : 'var(--vt-color-primary)') : (onHero ? 'rgba(255,255,255,.6)' : 'var(--vt-color-text-muted)'),
              background: isCur ? (onHero ? 'rgba(255,255,255,.16)' : 'var(--vt-color-primary-subtle)') : 'transparent',
            }}>{l}</a>
          );
        })}
      </div>
    </nav>
  );
}

function SiteFooterI18n({ lang = 'en' }) {
  const T = window.VT_I18N[lang];
  const col = ([h, items]) => (
    <div>
      <h4 style={{ color: 'var(--vt-gold-300)', fontSize: 12, letterSpacing: '.12em', marginBottom: 16, fontWeight: 600 }}>{h}</h4>
      {items.map(([label, href]) => <a key={label} href={href} style={{ display: 'block', color: 'rgba(255,255,255,.66)', fontSize: 14, marginBottom: 10, textDecoration: 'none' }}>{label}</a>)}
    </div>
  );
  return (
    <footer dir={T.dir} style={{ background: 'var(--vt-ink-950)', color: '#fff', padding: '64px 40px 30px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 36 }}>
          <div>
            <BrandMarkI18n tone="onDark" size="lg" />
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, lineHeight: 1.7, marginTop: 14, maxWidth: 280 }}>
              {T.footer.tagline}
            </p>
          </div>
          {col(T.footer.explore)}
          {col(T.footer.brand)}
          {col(T.footer.support)}
        </div>
        <div style={{ borderTop: '1px solid rgba(230,180,83,.2)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,.5)', fontSize: 13, flexWrap: 'wrap', gap: 10 }}>
          <span>{T.footer.copy}</span>
          <span>{T.footer.langs}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeaderI18n, SiteFooterI18n });
