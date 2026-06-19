# Violet

Monorepo for the two Violet watch-brand products (full context in [`docs/`](docs/README.md)):

- **`apps/reference-site`** — international vitrine, **EN/RU/AR** (LTR + RTL for Arabic).
  Next.js (App Router), SSG + ISR, `next-intl`. _(TD-2, TD-5)_
- **`apps/order-app`** — Persian **B2B** wholesale order app, **FA** (RTL).
  Vite + React, CSR SPA behind auth. _(TD-3)_

Shared packages (kept in sync, runtime-decoupled — TD-4):

- **`@violet/tokens`** — CSS-variable design tokens + Tailwind preset _(TD-12)_.
- **`@violet/ui`** — shared, accessible component library (headless primitives) _(TD-12)_.
- **`@violet/types`** — versioned product-data contract (`Product`, `Variant`,
  `SpecSheet`, `Category`, responsive image variants) — the source of truth the
  to-be-built backends implement to _(TD-7, TD-8)_.

## Stack

pnpm workspaces + Turborepo · TypeScript (strict) · React · Tailwind (consuming the
token CSS vars) · TanStack Query (server state) · `next-intl` (site i18n). Targets
modern evergreen browsers only _(TD-13)_.

## Getting started

```bash
pnpm install
pnpm dev        # all apps via turbo
pnpm typecheck
pnpm build
```

Per-app dev: `pnpm --filter @violet/reference-site dev` / `pnpm --filter @violet/order-app dev`.

> This is the Phase 5 scaffold — structure and dependency wiring only. Design tokens
> and components land on top of this skeleton next.
