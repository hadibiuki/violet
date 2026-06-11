# Violet · Design System

The shared visual language for the two Violet products. Both must feel like one
brand even though they are technically separate systems.

| | **A — Reference Site** | **B — B2B Order App** |
|---|---|---|
| Purpose | International vitrine / brand showcase | Wholesale ordering for dealers |
| Audience | Distributors, partners, public | Bulk buyers, sales team, admins |
| Languages | English · Russian · Arabic | Persian (Farsi) |
| Direction | LTR (EN/RU) + **RTL (AR)** | **RTL** |
| Tone | Editorial, premium, spacious | Efficient, dense, task-first |
| Out of scope | Online retail, payments, native app | (same) |

> Source: `Violet-Requirements.pdf` (120 reqs) and the phase-1 brief. The two
> products **share brand identity, product-data structure, and visual language**
> but are not technically coupled.

---

## 1. Design principles

1. **One brand, two temperaments.** The site breathes (luxury, big imagery, serif
   display moments). The app is calm and quick (function over flourish). Same
   tokens, different *density* and *altitude* — never different palettes.
2. **The watch is the hero.** Chrome stays out of the way: neutral surfaces,
   restrained color, generous negative space so 1000+ models photograph well.
   Violet is for *actions and identity*, not for decorating product imagery.
3. **Premium through restraint.** Borrow the *structure* of Citizen / Casio /
   Rolex — clean grids, confident typography, a single metallic accent — never
   their assets or identity. Champagne gold is our one indulgence, used sparingly.
4. **RTL is a first-class citizen, not a mirror afterthought.** Arabic and Persian
   are designed from the start using logical properties. See §RTL in foundations.
5. **Performance is a design constraint.** 4000+ images means lazy-loading,
   skeletons, WebP, and `aspect-ratio` reservations are part of the visual spec —
   not an engineering detail bolted on later.
6. **Accessible by default.** Every interactive token pair meets WCAG AA contrast;
   focus is always visible; nothing communicates by color alone.

## 2. The Citizen / Casio / Rolex synthesis

What we take (structure & feeling), and how it maps to Violet:

| Reference brand | What we borrow | Violet expression |
|---|---|---|
| **Rolex** | Heritage authority, serif display, deep contrast, "crown" restraint | Cormorant display headings; deep `ink-950` hero; gold hairlines |
| **Citizen** | Clean tech clarity, eco/blue calm, honest spec tables | Tidy spec grids; airy catalog; blue reserved for *info* status only |
| **Casio** | Bold modular cards, confident product grids, utilitarian density | The product card system; B2B table density; strong NEW badges |

**Never copy:** brand-specific layouts, logos, crowns, color identities, or photography.

## 3. Folder structure

```
design-system/
├── README.md                ← you are here (principles + index)
├── foundations.md           ← color, type, space, elevation, motion, grid, RTL, a11y
├── components.md            ← component library spec (states, anatomy, RTL notes)
└── tokens/
    ├── tokens.css           ← SOURCE OF TRUTH. CSS custom properties (light/dark/RTL)
    ├── tokens.json          ← W3C DTCG — import to Figma via Tokens Studio plugin
    └── tailwind.preset.js   ← Tailwind theme mapping (bg-surface, text-muted, …)
```

## 4. How to consume the tokens

**In the React app**
```ts
// app entry (once)
import './design-system/tokens/tokens.css';
```
```js
// tailwind.config.js
module.exports = {
  presets: [require('./design-system/tokens/tailwind.preset.js')],
  content: ['./src/**/*.{ts,tsx}'],
};
```
```tsx
// then write semantic utilities
<article className="bg-surface text-text rounded-lg shadow-card p-6">…</article>
```

**Setting locale & theme** (drives fonts + direction + dark mode):
```html
<html lang="ar" dir="rtl" data-theme="light">          <!-- site, Arabic -->
<html lang="fa" dir="rtl" data-product="b2b">          <!-- B2B app -->
<html lang="en" dir="ltr" data-theme="light">          <!-- site, English -->
```

**In Figma** (for the visual library): open the Tokens Studio plugin → Import →
`tokens/tokens.json`. The `primitive` set feeds a `semantic` (light) set; duplicate
it as a `dark` set using the dark values in `tokens.css` §3, then publish as
Figma variables. Account: **hadibiuki**. See the roadmap below.

## 5. What's built vs. next

**Built now (this design system):**
- ✅ Token layer — primitives → semantic → dark theme → RTL/font binding
- ✅ Foundations — color/type/space/elevation/motion/grid/RTL/accessibility
- ✅ Component library spec — buttons, inputs, cards, badges, nav, tables, etc.

**Next (planned deliverables you asked for):**
- ⬜ **Figma library** — generate variables + core components from `tokens.json`
- ⬜ **User flows** — site (browse→product) & app (login→order→track)
- ⬜ **Edge cases & failure states** — empty/loading/error per screen
- ⬜ **Trade-offs log** — pagination vs. infinite scroll, SSR vs. CSR, i18n strategy, etc.
- ⬜ Component implementation in React

See the bottom of `components.md` for the per-screen documentation backlog.
