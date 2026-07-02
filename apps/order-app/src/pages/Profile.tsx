import { useState } from "react";
import { Button, Input, Select, Toast, ToastViewport } from "@violet/ui";
import { PageHead } from "../components/PageHead";
import { dealer } from "../lib/b2b-data";

export function Profile() {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <PageHead eyebrow="حساب کاربری" title="پروفایل و تنظیمات" sub="اطلاعات نمایندگی و راه‌های ارتباطی" />
      <form className="app-form-card" onSubmit={(event) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2200); }}>
        <div className="app-form-grid">
          <Input label="نام و نام خانوادگی" defaultValue={dealer.name} />
          <Input label="نام نمایندگی" defaultValue={dealer.company} />
          <Input label="شماره همراه" defaultValue={dealer.phone} inputMode="tel" />
          <Input label="ایمیل" defaultValue={dealer.email} type="email" />
          <Select label="شهر" defaultValue={dealer.city} options={[dealer.city, "اصفهان", "شیراز", "مشهد"]} />
          <Input label="کد نمایندگی" defaultValue={dealer.code} disabled />
        </div>
        <Input label="نشانی" defaultValue={dealer.address} />
        <div><Button type="submit">ذخیرهٔ تغییرات</Button></div>
      </form>
      <ToastViewport>{saved && <Toast tone="success" title="ذخیره شد" description="تغییرات پروفایل با موفقیت ثبت شد." />}</ToastViewport>
    </div>
  );
}
