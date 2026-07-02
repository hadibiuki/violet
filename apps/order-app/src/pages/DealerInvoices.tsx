import { invoices, toman } from "../lib/b2b-data";

export function DealerInvoices() {
  return <div><h1 className="screen-title">فاکتورها و اسناد</h1><p className="screen-subtitle">پیش‌فاکتورها و فاکتورهای رسمی سفارش‌های شما</p>
    <div className="dealer-table"><table><thead><tr><th>شماره سند</th><th>سفارش</th><th>نوع</th><th>تاریخ</th><th>مبلغ</th><th>وضعیت</th><th /></tr></thead><tbody>{invoices.map((invoice) => <tr key={invoice.id}><td><bdi>{invoice.id}</bdi></td><td><bdi>{invoice.order}</bdi></td><td>{invoice.type}</td><td>{invoice.date}</td><td><strong>{toman(invoice.amount)}</strong></td><td><span className={`invoice-state ${invoice.paid ? "paid" : "pending"}`}>{invoice.paid ? "پرداخت‌شده" : "در انتظار پرداخت"}</span></td><td><button className="download-invoice" onClick={() => downloadInvoice(invoice)}>↓ دانلود</button></td></tr>)}</tbody></table></div>
  </div>;
}

function downloadInvoice(invoice: (typeof invoices)[number]) {
  const content = `VIOLET\n${invoice.type}\n${invoice.id}\nOrder: ${invoice.order}\nDate: ${invoice.date}\nAmount: ${toman(invoice.amount)}`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${invoice.id}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}
