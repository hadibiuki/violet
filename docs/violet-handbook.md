# Violet — Project & Design Handbook
### راهنمای پروژه و دیزاین برند ویولت

> سند مرجع برای ادامهٔ دیزاین و مستندنویسی در سشن‌های بعدی.
> Reference doc to continue design + documentation across future sessions.
> Last updated: 2026-06-12

---

## 1. خلاصهٔ پروژه — Project Overview

پروژهٔ **Violet** (برند ساعت) شامل **دو محصول دیجیتال جدا اما هم‌راستا** است:

| # | محصول | توضیح | زبان | جهت |
|---|-------|-------|------|-----|
| A | **سایت مرجع بین‌المللی** (Reference Site) | ویترین برند، نمایش +۱۰۰۰ مدل ساعت و +۴۰۰۰ فریم عکس، معرفی برند، بنر/کمپین، CMS | EN / RU / AR | LTR + **RTL برای عربی** |
| B | **وب‌اپلیکیشن سفارش عمده** (B2B Order App) | ثبت/پیگیری سفارش عمده، قیمت عمده، MOQ، داشبورد، پنل ادمین | فارسی | **RTL** |

- دو سیستم از نظر فنی جدا هستند ولی باید از نظر **هویت برند، ساختار دادهٔ محصول و زبان بصری هم‌راستا** باشند.
- الهام بصری: **Casio، Citizen، Rolex** (لوکس، مینیمال، رسمی).
- خارج از دامنهٔ این فاز: فروش آنلاین خرده، پرداخت آنلاین، اپ موبایل Native.

**منبع نیازمندی‌ها (Client docs):** `Violet-Requirements.pdf` (۱۲۰ نیازمندی، بخش A=۷۷، B=۳۷، C=۳) + سند فاز ۱/۲/۳ (تحلیل نیازها، Site Map + User Flows، UX صفحات اصلی).

---

## 2. مراحل پروژه — Project Phases (Roadmap & Status)

| فاز | عنوان | محتوا | وضعیت |
|-----|-------|-------|-------|
| **0** | Discovery / نیازمندی‌ها | استخراج نیازمندی‌ها از PDF کارفرما، تعیین دامنه، الهام برند | ✅ انجام شد |
| **1** | Design Tokens & Foundations | توکن‌ها (رنگ، تایپ، فاصله، شعاع، سایه، سایز)، در `tokens.css` + Figma | ✅ انجام شد |
| **2** | Components | Button, Input, Badge, Order Status, Product Card | ✅ انجام شد (۵ کامپوننت پایه) |
| **3** | Page Templates | Home ✅(در حال تکمیل در Figma) → Product Detail, Catalog+Filters, B2B Login/Dashboard/Order Tracking ⏳ | 🟡 Home در حال انجام |
| **4** | Frontend Docs | User flows, edge-cases, failure/empty/loading states, validation, trade-offs, i18n/RTL, a11y, SEO, analytics | ✅ انجام شد (۹ سند در `docs/` + `docs/README.md`) |
| **5** | React App | مونوریپو: `@violet/tokens` + `@violet/ui` + `@violet/types`، دو اپ، i18n، image pipeline | ⏳ مانده |

**کامپوننت‌های باقی‌مانده برای فاز ۲ (بعداً):** Icon set, Icon-button, Checkbox, Radio, Toggle, Select, Chip, Avatar, Tooltip, Spinner, Skeleton, Divider, Navbar, Footer, Filter panel, Sort dropdown, Breadcrumb, Pagination, Quantity stepper, Toast, Stat tile, Cart line-item, Invoice row, Hero, Product gallery+zoom, Spec table, Order timeline/stepper, Orders data table, Modal, Marquee.

---

## 3. مراحل دیزاین — Design Process (Stages)

ترتیب اصولی که این دیزاین‌سیستم با آن ساخته شد (همین ترتیب را برای ادامه نگه دار):

1. **استخراج هویت برند** — از PDF و پروپوزال: بنفش (Violet) به‌عنوان رنگ اصلی، طلایی (Gold) به‌عنوان لهجهٔ لوکس، خنثی‌های بنفش‌مایل (Ink).
2. **Tokens (Primitives → Semantic)** — اول رمپ‌های خام (violet/gold/ink/status)، بعد توکن‌های معنایی (background/text/border/primary/accent/feedback/status/badge). Semanticها به Primitive **alias** می‌شوند، نه مقدار خام.
3. **Scales** — Spacing (پایهٔ 4px)، Radius، Sizing (icon/control/container/breakpoint)، Border-width، Elevation (سایهٔ بنفش‌مایل)، Typography.
4. **Foundations در Figma** — ساخت Variable Collectionها + Text/Effect Styles + صفحهٔ بصری Foundations (سواچ رنگ، نمونهٔ تایپ، مقیاس‌ها).
5. **Components** — هر کامپوننت با **bind شدن به متغیرها** (نه مقدار هاردکد)، با Variantها (Type/State/Status...).
6. **Page Templates** — مونتاژ صفحات از روی کامپوننت‌ها و توکن‌ها. اول **پروتوتایپ HTML** (`home.html`) برای حس و حال، بعد بازسازی **استاتیک در Figma** برای ارائه/هندآف.
7. **RTL** — برای عربی و فارسی از ابتدا با logical properties؛ نسخهٔ RTL هر صفحه باید جدا بررسی شود.

**اصول کلیدی دیزاین:**
- همه‌چیز از طریق توکن (`var(--vt-*)`)، code-syntax روی همهٔ متغیرهای Figma تنظیم شده تا Dev Mode به `tokens.css` برگردد.
- Dark theme فقط در CSS (`[data-theme="dark"]`) — پلن Starter فیگما فقط ۱ Mode می‌دهد، پس toggle در فیگما نیست.
- تصاویر محصول مربع (`--vt-aspect-product: 1/1`)؛ بنر 21/9.

---

## 4. تصمیمات هویت بصری — Brand & Visual Decisions

**رنگ‌ها (Primitives):**
- Violet (brand): `600 #7C3AED` (اصلی)، رمپ 50→950.
- Gold (accent): `400 #C9A86A` / `600 #9A7849`.
- Ink (neutrals، بنفش‌مایل): `50 #F8F7FF` → `950 #0D0A1E`.
- Status: green/amber/red/blue (50/500/600/700).

**فونت‌ها:**
- Display/Hero → **Cormorant Garamond** (سِریف لوکس، Light/Regular/Medium).
- UI (EN/RU) → **Inter**.
- فارسی (B2B) → **Vazirmatn**.
- عربی → **Cairo / Noto Kufi Arabic** (fallback؛ هنوز نهایی نشده).
- SKU/کد → **JetBrains Mono**.

**حال‌وهوا:** رسمی + فانتزی + مینیمال (Hero تیرهٔ سماوی با aurora/ستاره، لهجهٔ طلایی، فضای خالی زیاد).

> جزئیات کامل تصمیمات در memory: `violet-design-decisions.md`.

---

## 5. خروجی‌ها و فایل‌ها — Deliverables & Files

### کد (Repo: `D:\projects\react\violet\`)
| فایل | محتوا |
|------|-------|
| `tokens.css` | **منبع حقیقت توکن‌ها** — کل سیستم + dark theme + sizing/breakpoints/border/motion/z-index/overlay/aspect + فونت‌های RTL |
| `violet.tokens.json` | فرمت **Tokens Studio / DTCG** برای import در فیگما (بدون نیاز به MCP) — شامل تایپوگرافی |
| `tokens-preview.html` | صفحهٔ بصری توکن‌ها (سواچ، تایپ، سایه، شعاع، فاصله) + toggle لایت/دارک |
| `home.html` | **پروتوتایپ Home کامل و انیمیشنی** — hero سماوی، nav چسبان، marquee، کارت محصول با عکس واقعی، **بنر اسلایدر**، Main Product Lines، Featured، Brand، Stats، Gallery، CTA، Footer |
| `home.html?static` | **حالت استاتیک** (بدون انیمیشن، همه‌چیز visible) — برای اسکرین‌شات/Print-to-PDF جهت سرمایه‌گذار |
| `index.html` | ریدایرکت به `home.html` |
| `.claude/launch.json` | سرور پیش‌نمایش: `python -m http.server` روی پورت **4321** |

اجرا: سرور را با Launch Preview استارت کن → `http://localhost:4321/home.html`.

### Figma
- **فایل اصلی (حساب hadibiuki):** `violet` — key **`JswCeN8hqtID2MC7jH7PjJ`**
  - URL: https://www.figma.com/design/JswCeN8hqtID2MC7jH7PjJ/violet
- **حساب احراز شده:** `hadibiuki@gmail.com` → team "Hadi Amrollahi's Team" `team::941295711400687734` (**Starter/رایگان**).
- ⚠️ یک فایل قدیمی در حساب اشتباه ZarinPal هست (`37NBUDcpWQ9UgV36y1ibVm`) — **نادیده بگیر**.

**صفحات Figma (سقف ۳ صفحه در Starter):**
| صفحه | محتوا |
|------|-------|
| 🎨 Foundations | ۶ Variable Collection + ۱۷ Text Style + ۶ Effect Style + صفحهٔ بصری (node `23:2`) |
| 🧩 Components | Button(15) · Input(4) · Badge(2) · Order Status(6) · Product Card Site/B2B (set `32:24`) |
| 🏠 Home | نسخهٔ سادهٔ قدیمی (`36:3`) + نسخهٔ جدید **"Home — Reference Site"** (`45:69`) |

**Variable Collections:** Primitives(۴۸ رنگ، مخفی) · Color(۴۵ معنایی، تک‌Mode «Light») · Spacing(۱۴) · Radius(۷) · Sizing(۱۶) · Border Width(۳). همه با code-syntax `var(--vt-*)`.

---

## 6. وضعیت فعلی Home در Figma — Current Home Build

Master frame: **`45:69`** ("Home — Reference Site") روی صفحهٔ 🏠 Home.

| بخش | وضعیت |
|-----|-------|
| Hero (nav تیره + تیتر Cormorant + CTAها + موتیف ساعت) — node `45:70` | ✅ |
| Marquee | ✅ |
| New Models (۴ کارت محصول) | ✅ |
| **Banner Slider** (بنر کمپین + dots + arrows) | ✅ |
| Explore the lines (Classic/Sport/Smart) | ⏳ |
| Featured (۴ کارت + View All Products) | ⏳ |
| Brand Intro | ⏳ |
| Stats (1000+/4000+/3/✦) | ⏳ |
| Gallery | ⏳ |
| CTA band | ⏳ |
| Footer | ⏳ |

**روش ساخت هر بخش:** یک call `use_figma` که یک AutoLayout عمودی به‌نام بخش می‌سازد و به node `45:69` اضافه می‌کند؛ idempotent با `home.findOne(n=>n.name===<name>)`؛ رنگ/شعاع bind به متغیر؛ تایپ از استایل‌ها؛ کارت محصول = instance از set `32:24` (Context=Site) با override نام/SKU.

---

## 7. محدودیت‌های Figma Starter — Constraints (مهم برای ادامه)

| محدودیت | اثر | راه‌حل فعلی |
|---------|-----|------------|
| **Rate limit روی MCP** (~۱ call در هر ~۳۰ دقیقه) | ساخت صفحه قطره‌چکانی | cron خودکار هر ۳۰ دقیقه یک batch می‌فرستد |
| **۳ صفحه حداکثر** | همه استفاده شده | همهٔ کامپوننت‌ها در یک صفحه؛ Home در یک صفحه |
| **۱ Mode در هر Collection** | بدون toggle دارک در فیگما | دارک در `tokens.css` |
| **بدون fetch تصویر در plugin** (`createImageAsync` پشتیبانی نمی‌شود) | عکس واقعی در فیگما سخت | placeholder گرادیانی؛ یا `upload_assets` per-node (هزینهٔ call) |

> برای حل ریشه‌ای: ارتقا به **Figma Professional** هر سه محدودیت را برمی‌دارد. کاربر فعلاً نمی‌تواند ارتقا دهد.

---

## 8. چطور در سشن بعدی ادامه بدهیم — How to Resume

1. این فایل + memory (`MEMORY.md`, `violet-design-decisions.md`, `violet-project.md`) را بخوان.
2. برای **ادامهٔ Figma Home:** skillهای `figma-use` + `figma-generate-library` را load کن؛ بخش‌های ⏳ بالا را با همان الگو به node `45:69` اضافه کن (idempotent). اگر rate-limit خورد، صبر کن.
3. برای **صفحهٔ بعدی (Product Detail و ...):** اول در `home.html`-style یک پروتوتایپ HTML بساز (سریع، با انیمیشن)، بعد در Figma استاتیک بازبساز.
4. ~~برای **فاز ۴ (داک‌های فرانت):** فایل‌های markdown در `docs/` بساز~~ ✅ **انجام شد** — ۹ سند در `docs/` (user-flows, screen-states-and-edge-cases, failure-states-matrix, validation-rules, i18n-rtl, a11y-checklist, seo, analytics, trade-offs) + `docs/README.md` به‌عنوان ایندکس. سوالات باز برای کارفرما در انتهای `trade-offs.md`.
5. برای **فاز ۵ (React):** مونوریپو با `@violet/tokens` (وصل به `tokens.css`) شروع کن.

**نکتهٔ a11y که باید چک شود:** `gold-400` روی سفید احتمالاً WCAG AA را برای متن رد می‌کند → برای متن از `accent-strong`/`gold-600` استفاده شود.

---

## 9. Site Map (از سند کارفرما) — مرجع برای صفحات بعدی

**سایت مرجع (A):** Home · New Models · Products (Catalog + Filters) · Product Details · Brand/About (History, Quality, Vision) · Technologies/Features · Contact · Language Selector (EN/RU/AR).

**اپ B2B (B):** Dashboard · Products (با قیمت عمده + MOQ + موجودی) · Product Detail · Cart/Request List · Create Order · My Orders · Order Tracking (Submitted→Approved→Shipped→Completed) · Invoices/Documents · Profile/Settings · Support/Messages · Admin Panel.

**User Flows کلیدی:**
- سایت: `Home → New Models → فیلتر → Product Details → Media/Specs`.
- B2B: `Login → Products → فیلتر/انتخاب → Cart → Create Order → My Orders (پیگیری)`.
