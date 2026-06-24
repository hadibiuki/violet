"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@violet/ui";

const COUNTRIES = [
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

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontSize: 14, fontWeight: 500, color: "var(--vt-color-text)" }}>{label}</span>
      {children}
      {error && (
        <span style={{ fontSize: 12.5, color: "var(--vt-color-danger)" }}>{error}</span>
      )}
    </label>
  );
}

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

  function set(k: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };
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
        style={{
          background: "var(--vt-color-surface)",
          border: "1px solid var(--vt-color-border)",
          borderRadius: "var(--vt-radius-xl)",
          padding: "48px 40px",
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
      style={{
        background: "var(--vt-color-surface)",
        border: "1px solid var(--vt-color-border)",
        borderRadius: "var(--vt-radius-xl)",
        padding: 36,
        boxShadow: "var(--vt-shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Field label={t("form.name")} htmlFor="c-name" error={errors.name}>
          <input
            id="c-name"
            className={`vt-field${errors.name ? " err" : ""}`}
            value={form.name}
            onChange={set("name")}
            placeholder={t("form.namePlaceholder")}
          />
        </Field>
        <Field label={t("form.company")} htmlFor="c-company" error={errors.company}>
          <input
            id="c-company"
            className={`vt-field${errors.company ? " err" : ""}`}
            value={form.company}
            onChange={set("company")}
            placeholder={t("form.companyPlaceholder")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Field label={t("form.country")} htmlFor="c-country" error={errors.country}>
          <select
            id="c-country"
            className={`vt-field${errors.country ? " err" : ""}`}
            value={form.country}
            onChange={set("country")}
            style={{ color: form.country ? "var(--vt-color-text-strong)" : "var(--vt-color-text-subtle)" }}
          >
            <option value="">{t("form.countryPlaceholder")}</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label={t("form.email")} htmlFor="c-email" error={errors.email}>
          <input
            id="c-email"
            type="email"
            className={`vt-field${errors.email ? " err" : ""}`}
            value={form.email}
            onChange={set("email")}
            placeholder={t("form.emailPlaceholder")}
          />
        </Field>
      </div>

      <Field label={t("form.message")} htmlFor="c-message" error={errors.message}>
        <textarea
          id="c-message"
          className={`vt-field${errors.message ? " err" : ""}`}
          value={form.message}
          onChange={set("message")}
          placeholder={t("form.messagePlaceholder")}
        />
      </Field>

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
