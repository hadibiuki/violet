// Shared error-page shell for the Violet reference site (404 / 500).
// Celestial dark hero with a giant numeral, message, and DS Button actions.
// Reuses SiteHeader / SiteFooter from chrome.jsx and the design-system Button.
const { Button: VtErrButton } = window.VioletDesignSystem_7273c4;

function VioletErrorStars() {
  // A scatter of twinkling points behind the numeral — deterministic positions.
  const pts = [
    [12, 22, 2], [22, 64, 1.5], [34, 16, 2.5], [44, 78, 1.5], [58, 28, 2],
    [67, 70, 1.5], [78, 20, 2.5], [86, 58, 2], [92, 36, 1.5], [8, 48, 1.5],
    [50, 12, 2], [72, 44, 1.5], [28, 86, 2], [62, 88, 1.5], [40, 50, 1.5],
  ];
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {pts.map(([x, y, r], i) => (
        <span key={i} className="vt-twinkle" style={{
          position: 'absolute', left: `${x}%`, top: `${y}%`, width: r * 2, height: r * 2,
          borderRadius: '50%', background: i % 3 === 0 ? 'var(--vt-gold-300)' : '#C4B5FD',
          boxShadow: '0 0 8px currentColor', animationDelay: `${(i % 5) * 0.6}s`,
        }} />
      ))}
    </div>
  );
}

function VioletErrorPage({ code, eyebrow, title, body, primary, secondary }) {
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });

  const renderAction = (a, variant) => {
    if (!a) return null;
    const btn = (
      <Button variant={variant} size="lg" trailingIcon={variant === 'accent' ? <span>→</span> : undefined}>
        {a.label}
      </Button>
    );
    if (a.onClick === 'reload') {
      return <span role="button" tabIndex={0} onClick={() => window.location.reload()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.reload(); } }}
        style={{ cursor: 'pointer', display: 'inline-flex' }}>{btn}</span>;
    }
    return <a href={a.href} style={{ textDecoration: 'none' }}>{btn}</a>;
  };

  // alias for JSX
  const Button = VtErrButton;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader active={null} variant="overlay" />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: 132, paddingBottom: 80,
        background: 'radial-gradient(1100px 640px at 70% 22%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)' }}>
        <div className="vt-aurora" aria-hidden="true" style={{ position: 'absolute', inset: '-15%', pointerEvents: 'none', background:
          'radial-gradient(560px 380px at 16% 26%,rgba(168,85,247,.24),transparent 60%),radial-gradient(460px 460px at 84% 72%,rgba(124,58,237,.20),transparent 60%),radial-gradient(360px 360px at 60% 14%,rgba(201,168,106,.12),transparent 60%)', filter: 'blur(10px)' }} />
        <VioletErrorStars />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 40px', maxWidth: 760 }}>
          <div className="vt-rise" style={{ position: 'relative', display: 'inline-block', marginBottom: 8 }}>
            <span style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, letterSpacing: '-.04em',
              fontSize: 'clamp(140px,22vw,300px)', lineHeight: .9,
              background: 'linear-gradient(180deg,#fff 0%,#C4B5FD 55%,rgba(196,181,253,.25) 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>
              {code}
            </span>
          </div>
          <div className="vt-rise" style={{ animationDelay: '.08s' }}>
            <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--vt-gold-300)' }}>{eyebrow}</span>
          </div>
          <h1 className="vt-rise" style={{ animationDelay: '.14s', fontFamily: 'var(--vt-font-display)', fontWeight: 300, letterSpacing: '-.02em',
            fontSize: 'clamp(32px,4.5vw,56px)', lineHeight: 1.08, color: '#fff', margin: '14px 0 18px' }}>
            {title}
          </h1>
          <p className="vt-rise" style={{ animationDelay: '.2s', fontSize: 18, lineHeight: 1.7, color: '#C4B5FD', maxWidth: 520, margin: '0 auto 36px' }}>
            {body}
          </p>
          <div className="vt-rise" style={{ animationDelay: '.26s', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {renderAction(primary, 'accent')}
            {renderAction(secondary, 'secondary')}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

window.VioletErrorPage = VioletErrorPage;
