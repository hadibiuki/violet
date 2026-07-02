import type { OrderStatus } from "@violet/types";

export const fa = (value: string | number) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)] ?? digit);
export const toman = (value: number) => `${fa(value.toLocaleString("en-US"))} تومان`;
const watch = (index: number) => new URL(`../../order-app/public/watches/watch-${String(index).padStart(2, "0")}.jpg`, import.meta.url).href;

export const dealers = [
  { code: "DLR-0192", company: "ساعت پارس", contact: "رضا کریمی", city: "تهران", status: "active" },
  { code: "DLR-0188", company: "گالری زمان", contact: "مریم احمدی", city: "اصفهان", status: "active" },
  { code: "DLR-0201", company: "زمان‌سنج شیراز", contact: "علی مرادی", city: "شیراز", status: "pending" },
  { code: "DLR-0203", company: "ساعت البرز", contact: "سارا رستمی", city: "کرج", status: "pending" },
];

export const products = [
  { id: "p1", name: "Chronograph Classic 42", sku: "VLT-2601", price: 18500000, moq: 10, stock: 240, active: true, image: watch(0) },
  { id: "p2", name: "Heritage Automatic 40", sku: "VLT-2602", price: 22400000, moq: 10, stock: 120, active: true, image: watch(2) },
  { id: "p3", name: "Sport Diver 44", sku: "VLT-2603", price: 17800000, moq: 20, stock: 0, active: false, image: watch(3) },
  { id: "p4", name: "Lunar Moonphase 41", sku: "VLT-2604", price: 24300000, moq: 10, stock: 64, active: true, image: watch(6) },
  { id: "p5", name: "Aurora Skeleton 42", sku: "VLT-1180", price: 33800000, moq: 5, stock: 18, active: true, image: watch(7) },
];

export const orders: Array<{ id: string; dealer: string; date: string; units: number; total: number; status: OrderStatus }> = [
  { id: "ORD-4821", dealer: "ساعت پارس", date: "۱۴۰۵/۰۳/۲۱", units: 60, total: 1140000000, status: "shipped" },
  { id: "ORD-4815", dealer: "گالری زمان", date: "۱۴۰۵/۰۳/۱۸", units: 30, total: 691000000, status: "approved" },
  { id: "ORD-4806", dealer: "زمان‌سنج شیراز", date: "۱۴۰۵/۰۳/۱۲", units: 110, total: 1489000000, status: "completed" },
  { id: "ORD-4799", dealer: "ساعت البرز", date: "۱۴۰۵/۰۳/۰۹", units: 20, total: 578000000, status: "reviewing" },
];

export const statusFa: Record<OrderStatus, string> = {
  submitted: "ثبت‌شده",
  reviewing: "در حال بررسی",
  approved: "تأیید شد",
  shipped: "ارسال شد",
  completed: "تکمیل شد",
  rejected: "رد شد",
};
