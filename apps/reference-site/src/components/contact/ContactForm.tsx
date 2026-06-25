"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Input, Select, Textarea } from "@violet/ui";

const COUNTRIES: string[] = [
  "United Kingdom",
  "Russia",
  "United Arab Emirates",
  "Iran",
  "Germany",
  "France",
  "Turkey",
  "Other",
];

interface FormState {
  name: string;
  company: string;
  country: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", company: "", country: "", email: "", message: "" };

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function ContactForm() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function setField(k: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [k]: value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t("form.errors.name");
    if (!form.company.trim()) e.company = t("form.errors.company");
    if (!form.country) e.country = t("form.errors.country");
    if (!form.email.trim()) e.email = t("form.errors.email");
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = t("form.errors.emailInvalid");
    if (!form.message.trim()) e.message = t("form.errors.message");
    return e;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="px-4 py-12 md:px-10"
        style={{
          background: "var(--vt-color-surface)",
          border: "1px solid var(--vt-color-border)",
          borderRadius: "var(--vt-radius-xl)",
          textAlign: "center",
          boxShadow: "var(--vt-shadow-sm)",
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: "var(--vt-color-success-bg,rgba(34,197,94,.12))",
            color: "var(--vt-color-success,#16a34a)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <CheckIcon />
        </div>
        <h3
          style={{
            fontFamily: "var(--vt-font-display)",
            fontWeight: 400,
            fontSize: 30,
            color: "var(--vt-color-text-strong)",
            margin: "0 0 10px",
          }}
        >
          {t("form.success.title", { name: form.name.split(" ")[0] })}
        </h3>
        <p
          style={{
            fontSize: 16,
            color: "var(--vt-color-text-muted)",
            lineHeight: 1.7,
            maxWidth: 420,
            margin: "0 auto 26px",
          }}
        >
          {t("form.success.body", { email: form.email })}
        </p>
        <Button variant="secondary" onClick={() => { setForm(EMPTY); setSent(false); }}>
          {t("form.success.again")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="p-4 md:p-9"
      style={{
        background: "var(--vt-color-surface)",
        border: "1px solid var(--vt-color-border)",
        borderRadius: "var(--vt-radius-xl)",
        boxShadow: "var(--vt-shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Input
          label={t("form.name")}
          placeholder={t("form.namePlaceholder")}
          error={errors.name}
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          size="lg"
          autoComplete="name"
        />
        <Input
          label={t("form.company")}
          placeholder={t("form.companyPlaceholder")}
          error={errors.company}
          value={form.company}
          onChange={(e) => setField("company", e.target.value)}
          size="lg"
          autoComplete="organization"
        />
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Select
          label={t("form.country")}
          placeholder={t("form.countryPlaceholder")}
          error={errors.country}
          value={form.country}
          options={COUNTRIES}
          onChange={(val) => setField("country", val)}
          size="lg"
        />
        <Input
          label={t("form.email")}
          type="email"
          placeholder={t("form.emailPlaceholder")}
          error={errors.email}
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          size="lg"
          autoComplete="email"
        />
      </div>

      <Textarea
        label={t("form.message")}
        placeholder={t("form.messagePlaceholder")}
        error={errors.message}
        value={form.message}
        onChange={(e) => setField("message", e.target.value)}
        minHeight={128}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 12.5, color: "var(--vt-color-text-subtle)" }}>
          {t("form.privacy")}
        </span>
        <Button type="submit" variant="primary" size="lg" trailingIcon={<span>→</span>}>
          {t("form.submit")}
        </Button>
      </div>
    </form>
  );
}
