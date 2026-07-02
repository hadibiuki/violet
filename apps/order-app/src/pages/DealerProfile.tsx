import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@violet/ui";
import { dealer } from "../lib/b2b-data";
import { useStore } from "../state/store";

export function DealerProfile() {
  const { logout } = useStore();
  const navigate = useNavigate();
  return <div className="profile-exact"><h1 className="screen-title">حساب کاربری</h1>
    <section className="profile-hero"><Avatar name={dealer.name} size="lg" /><div><strong>{dealer.name}</strong><span>{dealer.role} · {dealer.company}</span></div><em>✦ {dealer.tier}</em></section>
    <section className="profile-card"><h2>اطلاعات نمایندگی</h2><div className="profile-grid"><Field label="نام نمایندگی" value={dealer.company} /><Field label="کد فروشنده" value={dealer.code} code /><Field label="شمارهٔ تماس" value={dealer.phone} /><Field label="ایمیل" value={dealer.email} code /><div className="profile-wide"><Field label="آدرس" value={dealer.address} /></div></div><div className="profile-buttons"><Button size="sm">ذخیرهٔ تغییرات</Button><Button variant="secondary" size="sm">تغییر رمز عبور</Button></div></section>
    <section className="logout-card"><div><strong>خروج از حساب</strong><span>از این دستگاه خارج می‌شوید.</span></div><button onClick={() => { logout(); navigate("/login"); }}>خروج</button></section>
  </div>;
}
function Field({ label, value, code }: { label: string; value: string; code?: boolean }) { return <div className="profile-field"><span>{label}</span><div>{code ? <bdi>{value}</bdi> : value}</div></div>; }
