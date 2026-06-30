// B2B Order tracking — detail with vertical status timeline + line items. RTL.
const { OrderStatusPill, Button, SpecTable } = window.VioletDesignSystem_7273c4;
const OB = window.VT_B2B;

function OrdersScreen({ onBack }) {
  const order = OB.orders[0]; // ORD-4821, shipped
  const steps = [
    ['submitted', 'سفارش ثبت شد', '۱۴۰۵/۰۳/۲۱ — ۰۹:۱۲'],
    ['reviewing', 'در حال بررسی', '۱۴۰۵/۰۳/۲۱ — ۱۱:۴۰'],
    ['approved', 'تأیید شد', '۱۴۰۵/۰۳/۲۲ — ۰۸:۰۵'],
    ['shipped', 'ارسال شد', '۱۴۰۵/۰۳/۲۳ — ۱۴:۳۰'],
    ['completed', 'تکمیل سفارش', '—'],
  ];
  const currentIndex = 3; // shipped
  const lines = [
    ['Chronograph Classic 42', 'VLT-2601', 20, 18500000],
    ['Eclipse Dress 38', 'VLT-1182', 25, 14700000],
    ['Tempo Quartz 36', 'VLT-1183', 15, 9600000],
  ];

  return (
    <div style={{ padding: '28px 28px 60px', maxWidth: 1040, margin: '0 auto' }}>
      <a onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: 'var(--vt-color-text-muted)', cursor: 'pointer', marginBottom: 16 }}>
        <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>←</span> بازگشت به داشبورد
      </a>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 24, color: 'var(--vt-color-text-strong)', margin: '0 0 6px' }}>سفارش <bdi style={{ fontFamily: 'var(--vt-font-mono)' }}>{order.id}</bdi></h1>
          <span style={{ fontSize: 13.5, color: 'var(--vt-color-text-muted)' }}>ثبت‌شده در {order.date} · {OB.faDigits(order.items)} مدل · {OB.faDigits(order.qty)} عدد</span>
        </div>
        <OrderStatusPill status={order.status} label={OB.statusFa[order.status]} withIcon />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 28, alignItems: 'start' }}>
        {/* Timeline */}
        <div style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', padding: '22px 24px' }}>
          <h2 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 15, color: 'var(--vt-color-text-strong)', margin: '0 0 18px' }}>روند سفارش</h2>
          <div style={{ position: 'relative' }}>
            {steps.map(([key, label, time], i) => {
              const done = i < currentIndex, current = i === currentIndex;
              const color = done || current ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)';
              return (
                <div key={key} style={{ display: 'flex', gap: 14, paddingBottom: i < steps.length - 1 ? 24 : 0, position: 'relative' }}>
                  {i < steps.length - 1 && <span style={{ position: 'absolute', insetInlineStart: 8, top: 18, bottom: 4, width: 2, background: done ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)' }} />}
                  <span style={{ position: 'relative', zIndex: 1, width: 18, height: 18, flex: 'none', borderRadius: '50%', marginTop: 1,
                    background: done ? 'var(--vt-color-primary)' : current ? 'var(--vt-color-surface)' : 'var(--vt-color-surface)',
                    border: `2px solid ${color}`, display: 'grid', placeItems: 'center',
                    boxShadow: current ? '0 0 0 4px var(--vt-color-primary-subtle)' : 'none' }}>
                    {done && <span style={{ color: '#fff', fontSize: 10, lineHeight: 1 }}>✓</span>}
                    {current && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--vt-color-primary)' }} />}
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: done || current ? 600 : 400, color: done || current ? 'var(--vt-color-text-strong)' : 'var(--vt-color-text-muted)' }}>{label}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--vt-color-text-subtle)', marginTop: 2, fontFamily: 'var(--vt-font-mono)' }}>{time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Items + summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--vt-color-divider)', fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 15, color: 'var(--vt-color-text-strong)' }}>اقلام سفارش</div>
            {lines.map(([name, sku, qty, price], i) => (
              <div key={sku} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderTop: i ? '1px solid var(--vt-color-divider)' : 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--vt-radius-md)', overflow: 'hidden', flex: 'none', background: 'var(--vt-color-surface-sunken)' }}>
                  <img src={OB.frame(i + 1, 120)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--vt-color-text-strong)' }}><bdi>{name}</bdi></div>
                  <div style={{ fontSize: 11.5, fontFamily: 'var(--vt-font-mono)', color: 'var(--vt-color-text-muted)' }}><bdi>{sku}</bdi> · {OB.faDigits(qty)} عدد</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--vt-color-text-strong)' }}>{OB.toman(qty * price)}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--vt-color-surface)', border: '1px solid var(--vt-color-border)', borderRadius: 'var(--vt-radius-lg)', padding: '18px 20px' }}>
            {[['جمع کل اقلام', OB.toman(order.total - 12000000)], ['هزینهٔ ارسال', OB.toman(12000000)]].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, color: 'var(--vt-color-text-muted)', marginBottom: 10 }}><span>{l}</span><span style={{ color: 'var(--vt-color-text)' }}>{v}</span></div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--vt-color-divider)' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--vt-color-text-strong)' }}>مبلغ نهایی</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--vt-color-primary)' }}>{OB.toman(order.total)}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <Button variant="primary" style={{ flex: 1 }}>دانلود فاکتور</Button>
              <Button variant="secondary" style={{ flex: 1 }}>سفارش مجدد</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { OrdersScreen });
