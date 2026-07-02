import { useState } from "react";
import { Link } from "react-router-dom";
import { BrandMark, Button, Input } from "@violet/ui";

export function ForgotPassword() {
  const [sent, setSent] = useState(false);
  return (
    <main className="auth-simple">
      <div className="auth-simple-card">
        <BrandMark />
        <h1>بازیابی گذرواژه</h1>
        {sent ? (
          <>
            <p role="status">اگر حسابی با این شماره وجود داشته باشد، راهنمای بازیابی برای شما ارسال می‌شود.</p>
            <Link to="/login">بازگشت به ورود</Link>
          </>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <p>شمارهٔ همراه ثبت‌شده در حساب نمایندگی را وارد کنید.</p>
            <Input required label="شمارهٔ همراه" inputMode="tel" />
            <Button type="submit" style={{ width: "100%" }}>ارسال راهنمای بازیابی</Button>
            <Link to="/login">بازگشت به ورود</Link>
          </form>
        )}
      </div>
    </main>
  );
}
