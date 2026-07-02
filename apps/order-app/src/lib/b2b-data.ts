/**
 * Violet B2B — typed Persian/RTL mock data + helpers.
 *
 * Ported from the design handoff's `templates/b2b-app/b2b-data.js` and grounded
 * in @violet/types (commerce / order / account). This is the single swap-point
 * for a real backend later — replace these consts with API calls.
 */
import type { OrderStatus } from "@violet/types";

/** Persian (Western→Eastern Arabic) digit conversion. */
export const fa = (s: string | number): string =>
  String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

/** Toman formatter with Persian digits. */
export const toman = (n: number): string =>
  fa(Number(n).toLocaleString("en-US")) + " تومان";

/** Local watch image by frame index (bundled, network-free). */
export const frame = (i: number): string =>
  `/watches/watch-${String(((i % 12) + 12) % 12).padStart(2, "0")}.jpg`;

export type ProductCat = "classic" | "sport" | "dress";
export type Movement = "quartz" | "automatic";
export type StrapKind = "steel" | "leather" | "rubber";

export interface B2BProduct {
  id: string;
  name: string;
  sku: string;
  price: number;
  moq: number;
  stock: number;
  f: number;
  cat: ProductCat;
  gender: "men" | "women" | "unisex";
  strap: StrapKind;
  movement: Movement;
  wr: number;
  isNew: boolean;
  desc: string;
}

export const products: B2BProduct[] = [
  { id: "p1", name: "Chronograph Classic 42", sku: "VLT-2601", price: 18500000, moq: 10, stock: 240, f: 0, cat: "classic", gender: "men", strap: "steel", movement: "quartz", wr: 50, isNew: true, desc: "کرنوگراف کلاسیک با قاب ۴۲ میلی‌متری استیل و صفحهٔ گیوشه." },
  { id: "p2", name: "Heritage Automatic 40", sku: "VLT-2602", price: 22400000, moq: 10, stock: 120, f: 2, cat: "classic", gender: "men", strap: "leather", movement: "automatic", wr: 50, isNew: true, desc: "ساعت اتوماتیک هریتیج با بند چرم طبیعی و موتور درون‌سازمانی." },
  { id: "p3", name: "Sport Diver 44", sku: "VLT-2603", price: 17800000, moq: 20, stock: 0, f: 3, cat: "sport", gender: "men", strap: "rubber", movement: "quartz", wr: 200, isNew: false, desc: "غواصی اسپرت با مقاومت ۲۰۰ متر و بازل چرخان یک‌طرفه." },
  { id: "p4", name: "Lunar Moonphase 41", sku: "VLT-2604", price: 24300000, moq: 10, stock: 64, f: 6, cat: "classic", gender: "unisex", strap: "leather", movement: "automatic", wr: 30, isNew: true, desc: "نمایش فاز ماه با صفحهٔ سرمه‌ای و عقربه‌های طلایی." },
  { id: "p5", name: "Aurora Skeleton 42", sku: "VLT-1180", price: 33800000, moq: 5, stock: 18, f: 7, cat: "classic", gender: "men", strap: "leather", movement: "automatic", wr: 30, isNew: false, desc: "اسکلتون اتوماتیک با نمای باز موتور و پل‌های تزئین‌شده." },
  { id: "p6", name: "Meridian GMT 43", sku: "VLT-1181", price: 22300000, moq: 10, stock: 96, f: 4, cat: "sport", gender: "men", strap: "steel", movement: "quartz", wr: 100, isNew: false, desc: "GMT با عقربهٔ زمان دوم و بازل ۲۴ ساعته دو رنگ." },
  { id: "p7", name: "Eclipse Dress 38", sku: "VLT-1182", price: 14700000, moq: 15, stock: 310, f: 5, cat: "dress", gender: "women", strap: "steel", movement: "quartz", wr: 30, isNew: false, desc: "ساعت مجلسی نازک ۳۸ میلی‌متری با صفحهٔ صدفی." },
  { id: "p8", name: "Tempo Quartz 36", sku: "VLT-1183", price: 9600000, moq: 20, stock: 420, f: 1, cat: "dress", gender: "unisex", strap: "leather", movement: "quartz", wr: 30, isNew: false, desc: "کوارتز پایه و مقرون‌به‌صرفه، انتخابی محبوب برای عمده." },
  { id: "p9", name: "Nebula Chrono 44", sku: "VLT-1190", price: 28900000, moq: 10, stock: 52, f: 8, cat: "sport", gender: "men", strap: "steel", movement: "quartz", wr: 100, isNew: true, desc: "کرنوگراف اسپرت با صفحهٔ کهکشانی و تاکی‌متر." },
  { id: "p10", name: "Solstice Dual 40", sku: "VLT-1191", price: 19900000, moq: 10, stock: 8, f: 9, cat: "classic", gender: "unisex", strap: "rubber", movement: "quartz", wr: 50, isNew: false, desc: "صفحهٔ دوگانه با نمایش روز/شب و طراحی مینیمال." },
  { id: "p11", name: "Vanguard Field 41", sku: "VLT-1192", price: 16200000, moq: 15, stock: 180, f: 2, cat: "sport", gender: "men", strap: "leather", movement: "automatic", wr: 100, isNew: false, desc: "ساعت فیلد نظامی با خوانایی بالا و بند چرم روغنی." },
  { id: "p12", name: "Celeste Petite 34", sku: "VLT-1193", price: 12800000, moq: 20, stock: 240, f: 5, cat: "dress", gender: "women", strap: "steel", movement: "quartz", wr: 30, isNew: true, desc: "مدل ظریف زنانه ۳۴ میلی‌متری با نگین‌های ایندکس." },
];

export const CATEGORY_FA: Record<ProductCat, string> = {
  classic: "کلاسیک",
  sport: "اسپرت",
  dress: "مجلسی",
};

export const MOVEMENT_FA: Record<Movement, string> = {
  quartz: "کوارتز",
  automatic: "اتوماتیک",
};

export const STRAP_FA: Record<StrapKind, string> = {
  steel: "فولادی",
  leather: "چرم طبیعی",
  rubber: "لاستیکی",
};

export const specRows = (p: B2BProduct): [string, string][] => [
  ["کد مدل", p.sku],
  ["قطر قاب", fa(p.name.match(/\d+/)?.[0] ?? 42) + " میلی‌متر"],
  ["جنس بدنه", "استیل ضدزنگ ۳۱۶L"],
  ["مکانیزم", MOVEMENT_FA[p.movement]],
  ["بند", STRAP_FA[p.strap]],
  ["مقاومت آب", fa(p.wr) + " متر (" + fa(Math.round(p.wr / 10)) + " ATM)"],
  ["گارانتی", "۲۴ ماه بین‌المللی"],
];

export const statusFa: Record<OrderStatus, string> = {
  submitted: "ثبت‌شده",
  reviewing: "در حال بررسی",
  approved: "تأیید شد",
  shipped: "ارسال شد",
  completed: "تکمیل شد",
  rejected: "رد شد",
};

export const stageOrder = ["submitted", "reviewing", "approved", "shipped", "completed"] as const;

export interface B2BOrderLine {
  id: string;
  qty: number;
}
export interface B2BOrder {
  id: string;
  date: string;
  status: OrderStatus;
  lines: B2BOrderLine[];
  times: Partial<Record<string, string>>;
  ship: string;
  track: string;
  rejectReason?: string;
}

export const orders: B2BOrder[] = [
  { id: "ORD-4821", date: "۱۴۰۵/۰۳/۲۱", status: "shipped", lines: [{ id: "p1", qty: 20 }, { id: "p6", qty: 20 }, { id: "p11", qty: 20 }], times: { submitted: "۲۱ خرداد ۰۹:۱۲", reviewing: "۲۱ خرداد ۱۱:۴۰", approved: "۲۲ خرداد ۱۰:۰۵", shipped: "۲۳ خرداد ۱۶:۳۰" }, ship: "باربری پیشتاز · تهران", track: "TRK-558120" },
  { id: "ORD-4815", date: "۱۴۰۵/۰۳/۱۸", status: "approved", lines: [{ id: "p4", qty: 10 }, { id: "p2", qty: 20 }], times: { submitted: "۱۸ خرداد ۱۴:۰۲", reviewing: "۱۸ خرداد ۱۵:۲۰", approved: "۱۹ خرداد ۰۹:۴۵" }, ship: "پست پیشتاز", track: "—" },
  { id: "ORD-4806", date: "۱۴۰۵/۰۳/۱۲", status: "completed", lines: [{ id: "p7", qty: 30 }, { id: "p8", qty: 40 }, { id: "p12", qty: 20 }, { id: "p1", qty: 10 }, { id: "p6", qty: 10 }], times: { submitted: "۱۲ خرداد ۱۰:۰۰", reviewing: "۱۲ خرداد ۱۲:۱۵", approved: "۱۳ خرداد ۰۸:۳۰", shipped: "۱۴ خرداد ۱۷:۰۰", completed: "۱۷ خرداد ۱۱:۲۰" }, ship: "باربری پیشتاز · اصفهان", track: "TRK-551044" },
  { id: "ORD-4799", date: "۱۴۰۵/۰۳/۰۹", status: "reviewing", lines: [{ id: "p9", qty: 20 }], times: { submitted: "۰۹ خرداد ۱۳:۴۰", reviewing: "۰۹ خرداد ۱۶:۱۰" }, ship: "پست پیشتاز", track: "—" },
  { id: "ORD-4790", date: "۱۴۰۵/۰۳/۰۴", status: "rejected", lines: [{ id: "p5", qty: 5 }, { id: "p3", qty: 20 }], times: { submitted: "۰۴ خرداد ۰۹:۳۰", reviewing: "۰۴ خرداد ۱۰:۱۵" }, rejectReason: "موجودی مدل Sport Diver 44 ناکافی بود. لطفاً اقلام را اصلاح و دوباره ثبت کنید.", ship: "—", track: "—" },
];

export interface B2BInvoice {
  id: string;
  order: string;
  date: string;
  amount: number;
  paid: boolean;
  type: string;
}

export const invoices: B2BInvoice[] = [
  { id: "INV-2041", order: "ORD-4806", date: "۱۴۰۵/۰۳/۱۷", amount: 2040000000, paid: true, type: "فاکتور رسمی" },
  { id: "INV-2035", order: "ORD-4815", date: "۱۴۰۵/۰۳/۱۹", amount: 672000000, paid: false, type: "پیش‌فاکتور" },
  { id: "INV-2028", order: "ORD-4821", date: "۱۴۰۵/۰۳/۲۲", amount: 1110000000, paid: false, type: "پیش‌فاکتور" },
  { id: "INV-2012", order: "ORD-4780", date: "۱۴۰۵/۰۲/۲۸", amount: 384000000, paid: true, type: "فاکتور رسمی" },
];

export const dealer = {
  name: "رضا کریمی",
  role: "مدیر خرید",
  company: "نمایندگی ساعت پارس",
  code: "DLR-0192",
  phone: "۰۹۱۲۳۴۵۶۷۸۹",
  email: "r.karimi@saatpars.ir",
  city: "تهران",
  address: "تهران، خیابان ولیعصر، پلاک ۱۲۰۴",
  tier: "همکار طلایی",
};

export const byId = (id: string): B2BProduct | undefined => products.find((p) => p.id === id);
export const orderLineProducts = (o: B2BOrder) =>
  o.lines.map((l) => ({ product: byId(l.id)!, qty: l.qty })).filter((x) => x.product);
export const orderTotal = (o: B2BOrder): number =>
  o.lines.reduce((s, l) => s + (byId(l.id)?.price ?? 0) * l.qty, 0);
export const orderUnits = (o: B2BOrder): number => o.lines.reduce((s, l) => s + l.qty, 0);
