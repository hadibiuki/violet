# B2B Order App — UI kit

High-fidelity recreation of Violet's **B2B wholesale order app** (product B): a
Persian-language, fully **RTL** dealer portal. Efficient, dense, task-first — the
calm/quick temperament of the brand (no display serif; Vazirmatn throughout).

## Screens & flow
`index.html` is an interactive click-through (starts at login):

- **Login** — split layout: celestial brand panel (aurora) + Persian sign-in form
  (pre-filled; press **ورود به حساب** to enter).
- **Dashboard** — stat cards (open orders, pending, monthly spend, invoices), a recent
  **orders table** with `OrderStatusPill` (localized labels), and the **wholesale
  catalog** showing همکار prices in تومان, MOQ (حداقل سفارش), stock, and **افزودن به
  سبد** (add to cart). Out-of-stock items are dimmed with a ناموجود chip.
- **Cart drawer** — slides from the inline-end, line items + total, **ثبت سفارش**
  (submit) → jumps to order tracking.
- **Order tracking** — vertical **status timeline** (ثبت‌شده → بررسی → تأیید → ارسال →
  تکمیل) with done/current/future states, line items, and an order summary.

## RTL notes
`<html dir="rtl" lang="fa">` drives direction + the Vazirmatn font (via the token
`[lang="fa"]` rule). Layout uses logical properties (`insetInlineEnd`, `borderInlineEnd`,
`textAlign:start`). Latin SKUs/model names are wrapped in `<bdi>` for correct bidi.
Persian digits + تومان formatting come from `data.js` helpers (`faDigits`, `toman`).

## Files
- `index.html` — RTL shell, app state, cart drawer (`@dsCard`).
- `data.js` — Persian product/order data + digit/currency helpers (`window.VT_B2B`).
- `AppShell.jsx` — sidebar nav + topbar (search, cart, user).
- `LoginScreen.jsx` · `DashboardScreen.jsx` · `OrdersScreen.jsx`.

## Composition
Uses `window.VioletDesignSystem_7273c4`: `BrandMark`, `Button`, `Input`,
`OrderStatusPill`, `QuantityStepper`, `SpecTable`. Icons via Lucide (CDN).

> Imagery is placeholder Unsplash photography — replace with licensed product frames.
> The pipeline labels follow the documented order: Submitted → Reviewing → Approved →
> Shipped → Completed (+ Rejected).
