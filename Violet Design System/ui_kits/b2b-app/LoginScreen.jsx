// B2B Login — split: celestial brand panel + Persian sign-in form. RTL.
const { BrandMark, Button, Input } = window.VioletDesignSystem_7273c4;

function LoginScreen({ onLogin }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh', background: 'var(--vt-color-bg)' }}>
      {/* Brand panel */}
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 48, color: '#fff',
        background: 'radial-gradient(800px 500px at 70% 25%,#3B0764 0%,transparent 60%),linear-gradient(160deg,#0D0A1E,#18122B 55%,#1c0f3a)' }}>
        <div className="vt-aurora" style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(500px 360px at 25% 30%,rgba(168,85,247,.25),transparent 60%),radial-gradient(420px 420px at 80% 70%,rgba(124,58,237,.22),transparent 60%)', filter: 'blur(10px)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}><BrandMark tone="onDark" size="lg" /></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 12, letterSpacing: '.2em', color: 'var(--vt-gold-300)', marginBottom: 14, fontFamily: 'var(--vt-font-fa)' }}>سامانهٔ سفارش عمده</div>
          <h1 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 300, fontSize: 44, lineHeight: 1.4, margin: 0 }}>پنل نمایندگان<br />فروش ویولت</h1>
          <p style={{ color: '#C4B5FD', fontSize: 16, lineHeight: 2, marginTop: 18, maxWidth: 380 }}>ثبت و پیگیری سفارش‌های عمده، مشاهدهٔ قیمت همکار و موجودی، و مدیریت فاکتورها — همه در یک‌جا.</p>
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 40 }}>
          {[['۱۰۰۰+', 'مدل ساعت'], ['۲۴ساعته', 'ثبت سفارش'], ['۳', 'انبار فعال']].map(([n, l]) => (
            <div key={l}><div style={{ fontFamily: 'var(--vt-font-fa)', fontSize: 26, color: 'var(--vt-gold-300)' }}>{n}</div><div style={{ fontSize: 12.5, color: '#C4B5FD', marginTop: 4 }}>{l}</div></div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div style={{ display: 'grid', placeItems: 'center', padding: 40 }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <h2 style={{ fontFamily: 'var(--vt-font-fa)', fontWeight: 600, fontSize: 28, color: 'var(--vt-color-text-strong)', margin: '0 0 6px' }}>خوش آمدید</h2>
          <p style={{ color: 'var(--vt-color-text-muted)', fontSize: 14, margin: '0 0 28px' }}>برای ورود به پنل، اطلاعات حساب خود را وارد کنید.</p>
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="ایمیل شرکت" placeholder="dealer@company.com" defaultValue="reza@saatpars.ir" leadingAffix={<i data-lucide="mail" style={{ width: 18, height: 18 }}></i>} />
            <Input label="رمز عبور" type="password" defaultValue="123456" leadingAffix={<i data-lucide="lock" style={{ width: 18, height: 18 }}></i>} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--vt-color-text)', cursor: 'pointer' }}><input type="checkbox" style={{ accentColor: 'var(--vt-color-primary)' }} />مرا به خاطر بسپار</label>
              <a style={{ color: 'var(--vt-color-link)', cursor: 'pointer' }}>فراموشی رمز؟</a>
            </div>
            <Button type="submit" variant="primary" size="lg" trailingIcon={<span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>→</span>} style={{ width: '100%', marginTop: 4 }}>ورود به حساب</Button>
          </form>
          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--vt-color-text-muted)', marginTop: 24 }}>حساب ندارید؟ <a style={{ color: 'var(--vt-color-link)', cursor: 'pointer' }}>درخواست نمایندگی</a></p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen });
