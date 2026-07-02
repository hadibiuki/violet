import { useState } from "react";
import { Button, Textarea } from "@violet/ui";
import { PageHead, Code } from "../components/PageHead";

const seed = [
  { mine: false, text: "سلام، چطور می‌توانیم کمک کنیم؟", time: "امروز ۰۹:۳۰" },
  { mine: true, text: "برای سفارش ORD-4821 دربارهٔ زمان تحویل سؤال داشتم.", time: "امروز ۰۹:۴۲" },
  { mine: false, text: "سفارش شما ارسال شده و تا دو روز کاری آینده تحویل می‌شود.", time: "امروز ۱۰:۰۵" },
];

export function Support() {
  const [messages, setMessages] = useState(seed);
  const [draft, setDraft] = useState("");
  return (
    <div>
      <PageHead eyebrow="پشتیبانی" title="گفت‌وگو با واحد فروش" sub="پرسش‌های مربوط به سفارش، موجودی و ارسال" />
      <section className="support-shell">
        <header><div><strong>پشتیبانی فروش ویولت</strong><span>معمولاً کمتر از یک ساعت پاسخ می‌دهد</span></div><Code>THREAD-0192</Code></header>
        <div className="support-messages" aria-live="polite">
          {messages.map((message, index) => (
            <div key={index} className={`support-message ${message.mine ? "mine" : ""}`}>
              <p>{message.text}</p><span>{message.time}</span>
            </div>
          ))}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); if (!draft.trim()) return; setMessages((current) => [...current, { mine: true, text: draft.trim(), time: "همین حالا" }]); setDraft(""); }}>
          <Textarea label="پیام شما" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="پیام خود را بنویسید…" />
          <Button type="submit">ارسال پیام</Button>
        </form>
      </section>
    </div>
  );
}
