// B2B app chrome: RTL sidebar nav + topbar. Persian / Farsi.
const { BrandMark, IconButton } = window.VioletDesignSystem_7273c4;

function AppShell({ active, onNav, cartCount, onCart, children }) {
  const nav = [
    ['داشبورد', 'dashboard', 'layout-dashboard'],
    ['محصولات', 'dashboard', 'watch'],
    ['سفارش‌های من', 'orders', 'package'],
    ['فاکتورها', 'orders', 'file-text'],
    ['پشتیبانی', 'orders', 'headphones'],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '248px 1fr', height: '100vh', background: 'var(--vt-color-bg)' }}>
      {/* Sidebar (inline-start = right in RTL) */}
      <aside style={{ background: 'var(--vt-color-surface)', borderInlineEnd: '1px solid var(--vt-color-border)', display: 'flex', flexDirection: 'column', padding: '22px 16px' }}>
        <div style={{ padding: '4px 8px 22px' }}><BrandMark /></div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {nav.map(([label, to, icon], i) => {
            const on = i === 0 ? active === 'dashboard' : i === 2 ? active === 'orders' : false;
            return (
              <a key={label} onClick={() => onNav(to)} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--vt-radius-md)', cursor: 'pointer',
                fontSize: 14, fontWeight: on ? 600 : 500,
                color: on ? 'var(--vt-color-primary)' : 'var(--vt-color-text)',
                background: on ? 'var(--vt-color-primary-subtle)' : 'transparent',
              }}>
                <i data-lucide={icon} style={{ width: 18, height: 18 }}></i>{label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginTop: 'auto', padding: 12, borderRadius: 'var(--vt-radius-lg)', background: 'var(--vt-color-surface-sunken)', fontSize: 12.5, color: 'var(--vt-color-text-muted)', lineHeight: 1.7 }}>
          نمایندگی <b style={{ color: 'var(--vt-color-text)' }}>ساعت پارس</b><br />کد فروشنده <bdi style={{ fontFamily: 'var(--vt-font-mono)' }}>DLR-0192</bdi>
        </div>
      </aside>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <header style={{ height: 64, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', background: 'var(--vt-color-surface)', borderBottom: '1px solid var(--vt-color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--vt-color-surface-sunken)', borderRadius: 'var(--vt-radius-sm)', padding: '8px 14px', width: 320, maxWidth: '40vw' }}>
            <i data-lucide="search" style={{ width: 16, height: 16, color: 'var(--vt-color-text-muted)' }}></i>
            <input placeholder="جستجوی مدل…" style={{ border: 'none', background: 'transparent', outline: 'none', font: '14px var(--vt-font-fa)', color: 'var(--vt-color-text)', flex: 1, textAlign: 'start' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={onCart} style={{ position: 'relative', width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 'var(--vt-radius-md)', border: '1.5px solid var(--vt-color-border-strong)', background: 'var(--vt-color-surface)', cursor: 'pointer' }}>
              <i data-lucide="shopping-bag" style={{ width: 18, height: 18 }}></i>
              {cartCount > 0 && <span style={{ position: 'absolute', top: -6, insetInlineStart: -6, minWidth: 18, height: 18, padding: '0 5px', borderRadius: 9, background: 'var(--vt-color-primary)', color: '#fff', fontSize: 11, fontWeight: 600, display: 'grid', placeItems: 'center', fontFamily: 'var(--vt-font-fa)' }}>{window.VT_B2B.faDigits(cartCount)}</span>}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,var(--vt-violet-400),var(--vt-violet-600))', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 600, fontSize: 14 }}>ر</div>
              <div style={{ fontSize: 13, lineHeight: 1.3 }}><b style={{ color: 'var(--vt-color-text-strong)' }}>رضا کریمی</b><br /><span style={{ color: 'var(--vt-color-text-muted)' }}>مدیر خرید</span></div>
            </div>
          </div>
        </header>
        <main style={{ flex: 1, overflowY: 'auto' }}>{children}</main>
      </div>
    </div>
  );
}

Object.assign(window, { AppShell });
