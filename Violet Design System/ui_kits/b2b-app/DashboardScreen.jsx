// B2B Dashboard — stat cards, recent orders, wholesale catalog with MOQ + add. RTL.
const { Button, OrderStatusPill, QuantityStepper } = window.VioletDesignSystem_7273c4;
const B = window.VT_B2B;

function StatCard({ label, value, delta, deltaUp, icon }) {
  return (
    <div style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', padding: 20, boxShadow: 'var(--vt-shadow-xs)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: 13, color: 'var(--vt-color-text-muted)' }}>{label}</span>
        <span style={{ width: 34, height: 34, borderRadius: 'var(--vt-radius-md)', background: 'var(--vt-color-primary-subtle)', color: 'var(--vt-color-primary)', display: 'grid', placeItems: 'center' }}><i data-lucide={icon} style={{ width: 17, height: 17 }}></i></span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 600, color: 'var(--vt-color-text-strong)', marginTop: 10, fontFamily: 'var(--vt-font-fa)' }}>{value}</div>
      {delta && <div style={{ fontSize: 12.5, marginTop: 4, color: deltaUp ? 'var(--vt-color-success)' : 'var(--vt-color-danger)' }}>{deltaUp ? '▲' : '▼'} {delta}</div>}
    </div>
  );
}

function DashboardScreen({ onAdd, onTrack }) {
  return (
    <div style={{ padding: '28px 28px 60px' }}>
      <h1 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 26, color: 'var(--vt-color-text-strong)', margin: '0 0 4px' }}>داشبورد</h1>
      <p style={{ color: 'var(--vt-color-text-muted)', fontSize: 14, margin: '0 0 24px' }}>خلاصهٔ فعالیت نمایندگی ساعت پارس</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginBottom: 30 }}>
        <StatCard label="سفارش‌های باز" value={B.faDigits(4)} delta="۲ مورد این هفته" deltaUp icon="package" />
        <StatCard label="در انتظار تأیید" value={B.faDigits(1)} icon="clock" />
        <StatCard label="جمع خرید ماه" value="۴٫۵ میلیارد" delta="۱۲٪" deltaUp icon="trending-up" />
        <StatCard label="فاکتورهای باز" value={B.faDigits(2)} delta="۱ سررسید نزدیک" icon="file-text" />
      </div>

      {/* Recent orders */}
      <div style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', overflow: 'hidden', marginBottom: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--vt-color-divider)' }}>
          <h2 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 16, color: 'var(--vt-color-text-strong)', margin: 0 }}>سفارش‌های اخیر</h2>
          <a onClick={onTrack} style={{ fontSize: 13, color: 'var(--vt-color-primary)', cursor: 'pointer', fontWeight: 500 }}>مشاهدهٔ همه</a>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, textAlign: 'start' }}>
          <thead><tr style={{ color: 'var(--vt-color-text-muted)', fontSize: 12 }}>
            {['شماره سفارش', 'تاریخ', 'اقلام', 'مبلغ', 'وضعیت', ''].map((h, i) => <th key={i} style={{ textAlign: 'start', fontWeight: 500, padding: '10px 20px' }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {B.orders.map((o) => (
              <tr key={o.id} style={{ borderTop: '1px solid var(--vt-color-divider)' }}>
                <td style={{ padding: '13px 20px', fontFamily: 'var(--vt-font-mono)', color: 'var(--vt-color-text-strong)' }}><bdi>{o.id}</bdi></td>
                <td style={{ padding: '13px 20px', color: 'var(--vt-color-text-muted)' }}>{o.date}</td>
                <td style={{ padding: '13px 20px', color: 'var(--vt-color-text)' }}>{B.faDigits(o.items)} مدل · {B.faDigits(o.qty)} عدد</td>
                <td style={{ padding: '13px 20px', color: 'var(--vt-color-text-strong)', fontWeight: 500 }}>{B.toman(o.total)}</td>
                <td style={{ padding: '13px 20px' }}><OrderStatusPill status={o.status} label={B.statusFa[o.status]} /></td>
                <td style={{ padding: '13px 20px' }}><a onClick={onTrack} style={{ color: 'var(--vt-color-primary)', cursor: 'pointer', fontWeight: 500 }}>پیگیری</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Catalog */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <h2 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 18, color: 'var(--vt-color-text-strong)', margin: 0 }}>کاتالوگ عمده</h2>
        <span style={{ fontSize: 13, color: 'var(--vt-color-text-muted)' }}>قیمت‌ها ویژهٔ همکار</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {B.products.map((p) => {
          const out = p.stock === 0;
          return (
            <div key={p.sku} style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', overflow: 'hidden', opacity: out ? 0.72 : 1 }}>
              <div style={{ position: 'relative', aspectRatio: '1/1', background: 'linear-gradient(160deg,var(--vt-ink-100),var(--vt-violet-50))' }}>
                <img src={B.frame(p.f)} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {out
                  ? <span style={{ position: 'absolute', top: 10, insetInlineStart: 10, fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 'var(--vt-radius-pill)', background: 'var(--vt-ink-700)', color: '#fff' }}>ناموجود</span>
                  : <span style={{ position: 'absolute', top: 10, insetInlineStart: 10, fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 'var(--vt-radius-pill)', background: 'var(--vt-color-success-bg)', color: 'var(--vt-color-success)' }}>{B.faDigits(p.stock)} موجود</span>}
              </div>
              <div style={{ padding: 14 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: 'var(--vt-color-text-strong)', margin: 0 }}><bdi>{p.name}</bdi></h3>
                <div style={{ fontFamily: 'var(--vt-font-mono)', fontSize: 11.5, color: 'var(--vt-color-text-muted)', marginTop: 3 }}><bdi>{p.sku}</bdi></div>
                <div style={{ marginTop: 10, fontSize: 15, fontWeight: 600, color: 'var(--vt-color-primary)' }}>{B.toman(p.price)}</div>
                <div style={{ fontSize: 11.5, color: 'var(--vt-color-text-muted)', marginTop: 2 }}>حداقل سفارش {B.faDigits(p.moq)} عدد</div>
                <Button variant={out ? 'secondary' : 'primary'} size="sm" disabled={out} onClick={() => onAdd(p)} style={{ width: '100%', marginTop: 12 }}>
                  {out ? 'اطلاع موجودی' : 'افزودن به سبد'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { DashboardScreen });
