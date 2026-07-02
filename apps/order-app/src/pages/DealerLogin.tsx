import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrandMark, Button, Checkbox, Input } from "@violet/ui";
import { useStore } from "../state/store";

export function DealerLogin() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [username, setUsername] = useState("saatpars");
  const [password, setPassword] = useState("123456");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("نام کاربری و رمز عبور را وارد کنید.");
      return;
    }
    login("dealer");
    navigate("/");
  }

  return (
    <main className="dealer-login">
      <section className="dealer-login-brand">
        <div className="dealer-login-aurora" aria-hidden="true" />
        <div className="dealer-login-pattern" aria-hidden="true" />
        <BrandMark tone="onDark" />
        <div className="dealer-login-copy">
          <span>B2B · WHOLESALE PORTAL</span>
          <h1>پورتال سفارش عمدهٔ نمایندگان ویولت</h1>
          <p>ثبت و پیگیری سفارش، مشاهدهٔ قیمت همکار و موجودی لحظه‌ای، و دریافت فاکتورها — همه در یک‌جا.</p>
        </div>
        <small>ویولت ✦ ساعت‌سازی، بازتعریف‌شده</small>
      </section>
      <section className="dealer-login-form">
        <form onSubmit={submit}>
          <h2>ورود به حساب</h2>
          <p>با نام کاربری و رمز عبور نمایندگی وارد شوید.</p>
          <Input label="نام کاربری" value={username} onChange={(event) => setUsername(event.target.value)} size="lg" autoComplete="username" />
          <Input label="رمز عبور" type="password" value={password} onChange={(event) => setPassword(event.target.value)} size="lg" autoComplete="current-password" error={error || undefined} />
          <div className="dealer-login-options">
            <Checkbox label="مرا به خاطر بسپار" checked={remember} onChange={setRemember} />
            <Link to="/forgot-password">فراموشی رمز؟</Link>
          </div>
          <Button type="submit" style={{ width: "100%", justifyContent: "center" }}>ورود به حساب</Button>
          <small>حساب کاربری توسط مدیر فروش ایجاد می‌شود.<br />برای دریافت دسترسی با ما تماس بگیرید.</small>
        </form>
      </section>
    </main>
  );
}
