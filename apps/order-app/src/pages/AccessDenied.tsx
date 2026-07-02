import { Link } from "react-router-dom";
import { Button } from "@violet/ui";

export function AccessDenied() {
  return (
    <main className="auth-simple">
      <div className="auth-simple-card">
        <span className="error-code">۴۰۳</span>
        <h1>دسترسی مجاز نیست</h1>
        <p>این بخش فقط برای مدیران فروش در دسترس است.</p>
        <Link to="/" style={{ textDecoration: "none" }}><Button>بازگشت به داشبورد</Button></Link>
      </div>
    </main>
  );
}
