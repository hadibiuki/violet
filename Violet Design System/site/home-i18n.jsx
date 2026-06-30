// Localized Violet home page body (Hero → CTA), EN/RU/AR.
// Renders into #root; reads strings from window.VT_I18N[window.VT_LANG].
(function () {
  const { SiteHeaderI18n, SiteFooterI18n } = window;
  const { Button, ProductCard, StatTile, BrandMark } = window.VioletDesignSystem_7273c4;
  const D = window.VT_SITE;
  const LANG = window.VT_LANG || 'en';
  const T = window.VT_I18N[LANG];
  const RTL = T.dir === 'rtl';
  const ARR = RTL ? '←' : '→';
  const wrap = { maxWidth: 1280, margin: '0 auto', padding: '0 40px' };

  function Hero() {
    return (
      <header style={{ position: 'relative', minHeight: 640, display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 96,
        background: 'radial-gradient(1100px 700px at 72% 38%,#45304B 0%,transparent 58%),linear-gradient(160deg,#180F19,#27192A 55%,#342032)' }}>
        <div className="vt-aurora" style={{ position: 'absolute', inset: '-20%', pointerEvents: 'none', background:
          'radial-gradient(620px 420px at 22% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(520px 520px at 80% 70%,rgba(126,88,122,.30),transparent 60%),radial-gradient(420px 420px at 60% 22%,rgba(230,180,83,.08),transparent 60%)', filter: 'blur(10px)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../assets/brand/violet-floral.svg)', backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: .1, pointerEvents: 'none' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, ...wrap, display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 40, alignItems: 'center', width: '100%' }}>
          <div style={{ color: '#fff' }}>
            <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-gold-300)', fontWeight: 500 }}>{T.hero.eyebrow}</span>
            <h1 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, letterSpacing: '-.02em', fontSize: 'clamp(52px,6vw,96px)', lineHeight: 1.02, color: '#fff', margin: '18px 0 22px' }}>
              {T.hero.h1a}<br />{T.hero.h1b}<em style={{ fontStyle: 'italic', color: 'var(--vt-gold-300)' }}>{T.hero.h1em}</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,.74)', maxWidth: 440, marginBottom: 34 }}>
              {T.hero.lead}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="new-models.html" style={{ textDecoration: 'none' }}><Button variant="accent" size="lg" trailingIcon={<span>{ARR}</span>}>{T.hero.ctaNew}</Button></a>
              <a href="about.html" style={{ textDecoration: 'none' }}><Button size="lg" style={{ background: 'rgba(255,255,255,.06)', border: '1.5px solid rgba(255,255,255,.2)', color: '#fff' }}>{T.hero.ctaBrand}</Button></a>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'grid', placeItems: 'center', height: 480 }}>
            <div className="vt-spin-slow" style={{ position: 'absolute', width: 460, height: 460, border: '1px solid rgba(230,180,83,.28)', borderRadius: '50%' }} />
            <div className="vt-spin-rev" style={{ position: 'absolute', width: 540, height: 540, border: '1px dashed rgba(230,180,83,.18)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle,rgba(230,180,83,.20),transparent 62%)', filter: 'blur(8px)' }} />
            <img className="vt-float" alt="Violet timepiece" src={D.frame(0, 760)} style={{ width: 360, height: 360, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 40px 90px rgba(0,0,0,.55),0 0 0 1px rgba(230,180,83,.22)' }} />
          </div>
        </div>
      </header>
    );
  }

  function Marquee() {
    const run = [...T.marquee, ...T.marquee];
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

  function FeaturedSlider() {
    const slides = D.products.filter((p) => p.isNew).slice(0, 4);
    const data = slides.length ? slides : D.products.slice(0, 4);
    const [i, setI] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const n = data.length;
    const go = (d) => setI((v) => (v + d + n) % n);
    React.useEffect(() => {
      if (paused) return;
      const t = setInterval(() => setI((v) => (v + 1) % n), 5500);
      return () => clearInterval(t);
    }, [paused, n]);
    const p = data[i];
    const desc = p.line ? T.slider.descLine.replace('{line}', p.line) : T.slider.descNoLine;
    return (
      <section onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ padding: '0 0 100px' }}>
        <div style={wrap}>
          <SecHead eyebrow={T.slider.eyebrow} title={T.slider.title} />
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--vt-radius-2xl)',
            border: '1px solid var(--vt-color-border)', background: 'var(--vt-color-surface-raised)', boxShadow: 'var(--vt-shadow-md)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', minHeight: 440 }}>
              <div key={`t${i}`} className="vt-slide-in" style={{ padding: 'clamp(32px,4vw,56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>{T.slider.label} · {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
                <h3 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '14px 0 10px', color: 'var(--vt-color-text-strong)' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--vt-font-mono)', fontSize: 12, letterSpacing: '.1em', color: 'var(--vt-color-text-muted)', marginBottom: 18 }} dir="ltr">{p.sku}</p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--vt-color-text-muted)', maxWidth: 400, marginBottom: 28 }}>{desc}</p>
                <div><a href={`product.html?sku=${p.sku}`} style={{ textDecoration: 'none' }}><Button variant="accent" size="lg" trailingIcon={<span>{ARR}</span>}>{T.slider.cta}</Button></a></div>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: 440, background: '#180F19' }}>
                <img key={`i${i}`} className="vt-slide-img" alt={p.name} src={D.frame(p.f, 760)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(110deg,rgba(24,15,25,.72) 0%,rgba(24,15,25,.12) 38%,transparent 60%),linear-gradient(0deg,rgba(24,15,25,.66),transparent 45%)' }} />
                <span aria-hidden="true" key={`n${i}`} className="vt-slide-in" style={{ position: 'absolute', top: 18, insetInlineEnd: 26,
                  fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 96, lineHeight: 1, color: 'rgba(255,255,255,.14)', letterSpacing: '-.04em' }}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ position: 'absolute', insetInlineStart: 26, bottom: 22, width: 44, height: 2, background: 'var(--vt-gold-300)' }} />
                <button onClick={() => go(RTL ? 1 : -1)} aria-label="Previous" style={sliderArrow('insetInlineStart')}>{RTL ? '›' : '‹'}</button>
                <button onClick={() => go(RTL ? -1 : 1)} aria-label="Next" style={sliderArrow('insetInlineEnd')}>{RTL ? '‹' : '›'}</button>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 20, insetInlineStart: 0, width: '50%', display: 'flex', justifyContent: 'center', gap: 10 }}>
              {data.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}
                  style={{ width: k === i ? 26 : 8, height: 8, padding: 0, borderRadius: 999, border: 'none', cursor: 'pointer',
                    background: k === i ? 'var(--vt-color-accent-strong)' : 'var(--vt-color-border-strong)', transition: 'all .4s var(--vt-ease-standard)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  const sliderArrow = (side) => ({
    position: 'absolute', top: '50%', [side]: 18, transform: 'translateY(-50%)', zIndex: 3,
    width: 46, height: 46, borderRadius: '50%', cursor: 'pointer',
    background: 'rgba(255,255,255,.08)', border: '1px solid rgba(230,180,83,.45)', color: '#fff',
    fontSize: 24, lineHeight: 1, display: 'grid', placeItems: 'center', backdropFilter: 'blur(6px)',
  });

  function SecHead({ eyebrow, title, link, href }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
        <div>
          <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>{eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(32px,4vw,48px)', color: 'var(--vt-color-text-strong)', margin: '6px 0 0', letterSpacing: '-.02em' }}>{title}</h2>
        </div>
        {link && <a href={href} style={{ textDecoration: 'none', fontSize: 14, fontWeight: 500, color: 'var(--vt-color-primary)', display: 'inline-flex', gap: 8, alignItems: 'center' }}>{link} <span>{ARR}</span></a>}
      </div>
    );
  }

  function Home() {
    const newM = D.products.filter((p) => p.isNew).slice(0, 4);
    const feat = D.products.slice(4, 8);

    React.useEffect(() => {
      if (window.lucide) lucide.createIcons();
      const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.08 });
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
      return () => io.disconnect();
    });

    return (
      <div dir={T.dir}>
        <SiteHeaderI18n active="home" lang={LANG} variant="overlay" />
        <Hero />
        <Marquee />

        {/* New Models */}
        <section style={{ padding: '100px 0' }}>
          <div style={wrap}>
            <SecHead eyebrow={T.newModels.eyebrow} title={T.newModels.title} link={T.newModels.link} href="new-models.html" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {newM.map((p, i) => (
                <div key={p.sku} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <ProductCard name={p.name} sku={p.sku} badge="new" image={D.frame(p.f)} hoverImage={D.frame(p.f2)} href={`product.html?sku=${p.sku}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lines */}
        <section style={{ padding: '0 0 100px' }}>
          <div style={wrap}>
            <SecHead eyebrow={T.lines.eyebrow} title={T.lines.title} link={T.lines.link} href="products.html" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {D.lines.map((l, i) => (
                <a key={l.name} href="products.html" className="vt-linecard reveal" style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 'var(--vt-radius-xl)', overflow: 'hidden', display: 'block', transitionDelay: `${i * 70}ms` }}>
                  <img src={D.frame(l.f, 700)} alt={l.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s var(--vt-ease-standard)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 38%,rgba(24,15,25,.82))' }} />
                  <div style={{ position: 'absolute', insetInlineStart: 26, bottom: 26, color: '#fff', zIndex: 2 }}>
                    <h3 style={{ fontFamily: 'var(--vt-font-display)', fontSize: 32, fontWeight: 400, margin: 0 }}>{l.name}</h3>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.72)', marginTop: 2 }}>{l.desc}</div>
                    <span style={{ fontSize: 13, color: 'var(--vt-gold-300)', marginTop: 12, display: 'inline-flex', gap: 8, alignItems: 'center' }}>{T.lines.card} {ARR}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FeaturedSlider />

        {/* Featured */}
        <section style={{ background: 'var(--vt-color-surface)', padding: '100px 0' }}>
          <div style={wrap}>
            <SecHead eyebrow={T.featured.eyebrow} title={T.featured.title} link={T.featured.link} href="products.html" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {feat.map((p, i) => (
                <div key={p.sku} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <ProductCard name={p.name} sku={p.sku} badge={p.isNew ? 'new' : null} image={D.frame(p.f)} hoverImage={D.frame(p.f2)} href={`product.html?sku=${p.sku}`} />
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="products.html" style={{ textDecoration: 'none' }}><Button variant="secondary" trailingIcon={<span>{ARR}</span>}>{T.featured.cta}</Button></a>
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section style={{ padding: '100px 0' }}>
          <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div className="reveal" style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--vt-radius-2xl)', overflow: 'hidden' }}>
              <img src={D.frame(4, 800)} alt="Craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(255,255,255,.4)', borderRadius: 'var(--vt-radius-xl)', pointerEvents: 'none' }} />
            </div>
            <div className="reveal">
              <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-color-accent-strong)', fontWeight: 500 }}>{T.about.eyebrow}</span>
              <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(34px,4vw,52px)', color: 'var(--vt-color-text-strong)', margin: '16px 0 22px', lineHeight: 1.1, letterSpacing: '-.02em' }}>{T.about.title}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--vt-color-text-muted)', marginBottom: 30, maxWidth: 440 }}>{T.about.body}</p>
              <a href="about.html" style={{ textDecoration: 'none' }}><Button variant="secondary" trailingIcon={<span>{ARR}</span>}>{T.about.cta}</Button></a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: 'var(--vt-color-surface)' }}>
          <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, borderBlock: '1px solid var(--vt-color-divider)', padding: '56px 40px' }}>
            {T.stats.map(([label, value]) => (
              <StatTile key={label} display label={label} value={value} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', color: '#fff', padding: '110px 0',
          background: 'radial-gradient(800px 400px at 50% 0%,#45304B,transparent 60%),linear-gradient(160deg,#180F19,#27192A)' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../assets/brand/violet-floral.svg)', backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: .09, pointerEvents: 'none' }} />
          </div>
          <div className="vt-aurora" style={{ position: 'absolute', inset: '-15%', pointerEvents: 'none', background:
            'radial-gradient(520px 360px at 28% 30%,rgba(230,180,83,.12),transparent 60%),radial-gradient(440px 440px at 78% 72%,rgba(126,88,122,.30),transparent 60%)', filter: 'blur(10px)' }} />
          <div style={{ position: 'relative', zIndex: 2, ...wrap }}>
            <span style={{ fontSize: 12, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--vt-gold-300)', fontWeight: 500 }}>{T.cta.eyebrow}</span>
            <h2 style={{ fontFamily: 'var(--vt-font-display)', fontWeight: 300, fontSize: 'clamp(38px,5vw,64px)', margin: '12px 0 18px', letterSpacing: '-.02em' }}>{T.cta.title}</h2>
            <p style={{ color: 'rgba(255,255,255,.74)', fontSize: 18, marginBottom: 32 }}>{T.cta.body}</p>
            <a href="products.html" style={{ textDecoration: 'none' }}><Button variant="accent" size="lg" trailingIcon={<span>{ARR}</span>}>{T.cta.btn}</Button></a>
          </div>
        </section>

        <SiteFooterI18n lang={LANG} />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
})();
