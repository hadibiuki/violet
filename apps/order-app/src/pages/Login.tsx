/**
 * B2B login — mock gate. Two demo roles (dealer / admin). On submit we set the
 * auth user and route into the app. Split layout: brand panel + form (mirrors
 * in RTL via logical properties).
 */
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, BrandMark } from "@violet/ui";
import type { UserRole } from "@violet/types";
import { useStore } from "../state/store";

export function Login() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("dealer");
  const [phone, setPhone] = useState("09123456789");
  const [pass, setPass] = useState("demo1234");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!phone.trim() || !pass.trim()) {
      setError("شمارهٔ همراه و گذرواژه را وارد کنید.");
      return;
    }
    login(role);
    navigate(role === "admin" ? "/admin" : "/");
  }

  return (
    <div className="login-layout" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Brand panel */}
      <div
        className="login-brand"
        style={{
          background: "var(--vt-color-brand-ink)",
          color: "#fff",
          padding: "var(--vt-space-16) var(--vt-space-12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            insetBlockStart: -120,
            insetInlineEnd: -120,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(230,180,83,.22), transparent 70%)",
          }}
        />
        <BrandMark tone="onDark" />
        <div style={{ position: "relative" }}>
          <h1
            style={{
              fontFamily: "var(--vt-font-fa-display)",
              fontWeight: 900,
              fontSize: "var(--vt-text-4xl)",
              lineHeight: 1.3,
              margin: "0 0 var(--vt-space-4)",
              color: "#fff",
            }}
          >
            سامانهٔ سفارش عمدهٔ ویولت
          </h1>
          <p style={{ color: "var(--vt-violet-200)", fontSize: "var(--vt-text-lg)", lineHeight: 1.8, maxWidth: 420 }}>
            ثبت سفارش عمده، پیگیری وضعیت ارسال و دریافت پیش‌فاکتور — ویژهٔ همکاران و
            نمایندگی‌های فروش ویولت.
          </p>
        </div>
        <div style={{ position: "relative", display: "flex", gap: "var(--vt-space-8)" }}>
          <Stat value="۱۰۰۰+" label="مدل ساعت" />
          <Stat value="۲۴ ماه" label="گارانتی" />
          <Stat value="۴۸ ساعت" label="بررسی سفارش" />
        </div>
      </div>

      {/* Form panel */}
      <div
        className="login-form-panel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--vt-space-12)",
          background: "var(--vt-color-bg)",
        }}
      >
        <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: 380 }}>
          <h2 style={{ fontSize: "var(--vt-text-2xl)", fontWeight: 800, margin: "0 0 var(--vt-space-2)", color: "var(--vt-color-text-strong)" }}>
            ورود همکاران
          </h2>
          <p style={{ color: "var(--vt-color-text-muted)", margin: "0 0 var(--vt-space-8)", fontSize: "var(--vt-text-sm)" }}>
            برای ورود، نقش خود را انتخاب و اطلاعات حساب را وارد کنید.
          </p>

          {/* Role switch */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 4,
              padding: 4,
              background: "var(--vt-color-surface-sunken)",
              borderRadius: "var(--vt-radius-md)",
              marginBlockEnd: "var(--vt-space-5)",
            }}
          >
            {(["dealer", "admin"] as UserRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                style={{
                  padding: "10px",
                  borderRadius: "var(--vt-radius-sm)",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--vt-font-fa)",
                  fontSize: "var(--vt-text-sm)",
                  fontWeight: role === r ? 700 : 500,
                  background: role === r ? "var(--vt-color-surface)" : "transparent",
                  color: role === r ? "var(--vt-color-primary)" : "var(--vt-color-text-muted)",
                  boxShadow: role === r ? "var(--vt-shadow-xs)" : "none",
                }}
              >
                {r === "dealer" ? "همکار / نماینده" : "مدیر فروش"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--vt-space-4)" }}>
            <Input
              label="شمارهٔ همراه"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              style={{ direction: "ltr", textAlign: "right" }}
            />
            <Input
              label="گذرواژه"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              error={error ?? undefined}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" style={{ width: "100%", marginBlockStart: "var(--vt-space-6)" }}>
            ورود به سامانه
          </Button>
          <Link to="/forgot-password" style={{ display: "block", marginBlockStart: 14, textAlign: "center", color: "var(--vt-color-primary)", fontSize: "var(--vt-text-sm)" }}>
            گذرواژه را فراموش کرده‌اید؟
          </Link>

          <p style={{ marginBlockStart: "var(--vt-space-5)", fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-subtle)", textAlign: "center" }}>
            حساب کاربری ندارید؟ با واحد فروش ویولت تماس بگیرید.
          </p>
        </form>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{ fontSize: "var(--vt-text-2xl)", fontWeight: 800, color: "var(--vt-gold-300)" }}>{value}</div>
      <div style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-violet-300)" }}>{label}</div>
    </div>
  );
}
