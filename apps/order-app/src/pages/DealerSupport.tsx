import { useState } from "react";

const initial = [
  { me: false, text: "سلام، چطور می‌توانیم کمک کنیم؟", time: "امروز ۰۹:۳۰" },
  { me: true, text: "برای سفارش ORD-4821 دربارهٔ زمان تحویل سؤال داشتم.", time: "امروز ۰۹:۴۲" },
  { me: false, text: "سفارش شما ارسال شده و تا دو روز کاری آینده تحویل می‌شود.", time: "امروز ۱۰:۰۵" },
];

export function DealerSupport() {
  const [messages,setMessages] = useState(initial);
  const [draft,setDraft] = useState("");
  function send() { if (!draft.trim()) return; setMessages((current) => [...current,{ me:true,text:draft,time:"همین حالا" }]); setDraft(""); }
  return <div className="support-exact"><h1 className="screen-title">پشتیبانی</h1><p className="screen-subtitle">گفتگو با تیم فروش ویولت</p><section>
    <header><span>⌁</span><div><strong>تیم فروش ویولت</strong><small>● آنلاین</small></div></header>
    <div className="message-list">{messages.map((message,index) => <div key={index} className="message-bubble" data-me={message.me}><p>{message.text}</p><small>{message.time}</small></div>)}</div>
    <footer><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key==="Enter"&&send()} placeholder="پیام خود را بنویسید…" /><button onClick={send}>←</button></footer>
  </section></div>;
}
