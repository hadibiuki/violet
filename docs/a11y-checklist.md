# Violet · Accessibility Checklist (WCAG 2.1 AA)

The accessibility contract for both products. Target is **WCAG 2.1 AA** (per
`trade-offs.md` TD-13), modern evergreen browsers + iOS Safari, graceful no-JS
degradation for site content. "Accessible by default" is design principle #6.

Use this as a per-screen and per-PR gate. Items map to WCAG success criteria (SC).

---

## 0. The non-negotiables (every screen, both apps)

- [ ] **Keyboard:** everything operable by keyboard alone; logical tab order; no traps
      (SC 2.1.1, 2.1.2). Skip-to-content link first in tab order.
- [ ] **Focus visible:** `:focus-visible` shows `--vt-color-focus-ring` ring on every
      interactive element; never `outline:none` without a replacement (SC 2.4.7).
- [ ] **Contrast:** text ≥ **4.5:1**, large text (≥24px or ≥19px bold) ≥ **3:1**,
      UI components/focus indicators ≥ **3:1** (SC 1.4.3, 1.4.11). See §contrast.
- [ ] **Not by color alone:** status/errors/badges pair color with icon + text
      (SC 1.4.1).
- [ ] **Labels:** every control has an accessible name (visible label, `aria-label`,
      or `aria-labelledby`); placeholder is **never** the label (SC 1.3.1, 4.1.2).
- [ ] **Images:** meaningful images have `alt`; decorative images `alt=""`; product
      photos describe the model (SC 1.1.1).
- [ ] **Language:** `<html lang>` set per locale; inline language changes get `lang`
      (SC 3.1.1, 3.1.2). RTL via `dir` (see `i18n-rtl.md`).
- [ ] **Targets:** ≥ 44×44px touch targets on mobile (SC 2.5.5 AAA-aligned, our floor).
- [ ] **Motion:** honor `prefers-reduced-motion` — disable the hero/marquee/slider
      animations, keep content (SC 2.3.3). No flashing > 3×/s (SC 2.3.1).
- [ ] **Zoom/reflow:** usable at 200% zoom and 320px width with no loss/horizontal
      scroll (SC 1.4.4, 1.4.10).
- [ ] **Heading order:** one `<h1>` per page, no skipped levels (SC 1.3.1, 2.4.6).
- [ ] **Landmarks:** `header/nav/main/footer` + `aria-label` on repeated landmarks.

## 1. Contrast — token guidance

Verify the actual pairs used in UI against the WCAG ratios:

| Pair | Use | Note |
|---|---|---|
| `text` / `bg`, `text` / `surface` | body | dark ink on light — passes comfortably |
| `text-muted` (`ink-500`) / `surface` | secondary text | **verify ≥ 4.5:1**; ok for ≥19px, check at small sizes |
| `text-subtle` (`ink-400`) | hints only | likely **fails** body contrast → use only for large/decorative, never essential small text |
| `on-primary` (white) / `primary` (violet-600) | buttons | passes |
| **`accent` `gold-400` / white** | ⚠️ **fails AA for text** | for gold **text** use `accent-strong` (`gold-600`); reserve `gold-400` for large/decorative/borders. (Flagged in handbook §8.) |
| `on-accent` (`ink-950`) / `gold-400` | dark-on-gold | passes; prefer this for gold buttons |
| Focus ring `violet-600` / light bg | focus indicator | ≥ 3:1 ✓ |
| Dark theme pairs | `violet-100` text on `ink-950` etc. | re-verify the full dark set independently |

**Action:** never use `gold-400` for small body text on white. Run automated
contrast checks on both themes; the dark theme is a separate audit.

## 2. Keyboard & focus management

- [ ] Visible focus order matches DOM/reading order (and mirrors correctly in RTL).
- [ ] **Modals/drawers:** focus moves in on open, is **trapped**, returns to the
      trigger on close; `Esc` closes; background `inert`/`aria-hidden` (SC 2.4.3).
- [ ] **Dropdowns/selects/menus:** arrow-key navigation, `Home/End`, type-ahead,
      `Esc` to close, roving tabindex.
- [ ] **Filters (AJAX):** applying a filter doesn't steal/lose focus; result count
      announced via live region (SC 4.1.3).
- [ ] **Forms:** on submit, focus moves to the first error (see validation-rules).
- [ ] **Carousels/slider:** keyboard prev/next, pause control, no focus on offscreen
      slides.
- [ ] **Quantity stepper (B2B):** +/- buttons are real buttons with labels; the field
      is directly editable; arrow keys adjust.

## 3. Screen-reader semantics (ARIA — use native first)

- [ ] Prefer native elements (`<button>`, `<a href>`, `<nav>`, `<table>`) over ARIA.
- [ ] **Live regions:** async results (filter counts, search), toasts, and form
      errors announce via `aria-live`/`role="status"`/`role="alert"` (SC 4.1.3).
- [ ] **State:** `aria-expanded`, `aria-selected`, `aria-current` (page/step),
      `aria-pressed` where applicable.
- [ ] **Order timeline (B2B):** expose current step with `aria-current="step"` and a
      text status, not just color.
- [ ] **Tables** (orders, specs, admin): real `<th scope>`, caption, sortable headers
      announce sort state.
- [ ] **Loading:** skeletons are `aria-hidden`; expose a polite "loading" status;
      don't strand SR users on silent spinners.
- [ ] **Icon-only buttons:** `aria-label` required (already a component rule).
- [ ] **Badges/status pills:** include visually-hidden text if the color/short label
      isn't self-describing.

## 4. Forms (with validation-rules.md)

- [ ] Persistent visible labels above fields; required state announced (not just `*`).
- [ ] Errors: `aria-invalid="true"` + `aria-describedby` → error text; `role="alert"`
      on appearance; focus to first error on submit (SC 3.3.1, 3.3.3).
- [ ] Inputs have correct `type`, `inputmode`, `autocomplete` (email, tel, name…).
- [ ] Group related fields with `<fieldset>`/`<legend>` (e.g. shipping).
- [ ] Don't disable submit silently — if disabled, explain why nearby (MOQ message).
- [ ] Success confirmations announced.

## 5. Media & performance-as-a11y

- [ ] Product images: descriptive `alt` (model name + key trait); gallery thumbs
      labelled; zoom operable by keyboard; missing image → placeholder + alt, never
      an empty hole (R2 in failure matrix).
- [ ] `aspect-ratio` reservations prevent layout shift (CLS) — also helps SR/low-vision
      users by keeping a stable page.
- [ ] Lazy-loaded content still reachable + announced when it arrives.
- [ ] No autoplay audio; any motion respects reduced-motion.

## 6. RTL & bidi a11y (with i18n-rtl.md)

- [ ] `dir` correct on root; mirrored layout keeps a sane tab/reading order.
- [ ] Latin-in-RTL (SKU/email) wrapped in `<bdi>` so SR pronounces/orders correctly.
- [ ] Directional affordances (back/next) mirror but keep correct accessible names
      ("Next" stays "Next" semantically).
- [ ] Persian digits/Jalali dates have an accessible, unambiguous reading.

## 7. Global / system states

- [ ] **404 / error pages** are reachable, titled, and offer a way back (also SEO).
- [ ] **403** (dealer→admin) is a real page, not a redirect loop, with a clear message.
- [ ] **Session expiry** returns to login without dumping the user into a broken state.
- [ ] **Offline banner** is announced politely; doesn't trap focus.
- [ ] Toasts are dismissible, don't auto-dismiss critical info too fast, and are
      announced (`role="status"`/`alert` by severity).

## 8. Tooling & process

- **Automated** (catch ~40%): `axe-core` / Lighthouse a11y in CI on key routes,
  both locales/themes; ESLint `jsx-a11y`; contrast script over token pairs.
- **Manual** (the other ~60%): keyboard-only pass; screen-reader pass (VoiceOver iOS +
  NVDA/JAWS for the app; test Arabic/Persian SR behavior); 200% zoom; reduced-motion.
- **Per-PR gate:** new/changed UI runs the checklist §0 minimum + relevant section.
- **Headless primitives** (Radix per TD-12) give focus/keyboard/ARIA for menus,
  dialogs, tabs — prefer them over hand-rolled widgets.

> Scope note: AA is the target. A few items above (44px targets) align with AAA but
> are adopted as our floor for touch/mobile-heavy markets.
