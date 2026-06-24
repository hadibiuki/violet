"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Checkbox, Chip, ProductCard, SortDropdown } from "@violet/ui";
import {
  CATALOG_FACETS,
  filterCatalog,
  type CatalogFilters,
  type CatalogSort,
  type FacetKey,
} from "../../lib/catalog-data";

const PAGE = 9; // load-more increment (3 rows of 3 on desktop)

export function CatalogBrowser({ locale }: { locale: string }) {
  const t = useTranslations("Catalog");

  const [filters, setFilters] = useState<CatalogFilters>({});
  const [newOnly, setNewOnly] = useState(false);
  const [sort, setSort] = useState<CatalogSort>("newest");
  const [shown, setShown] = useState(PAGE);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = useMemo(
    () => filterCatalog(filters, newOnly, sort),
    [filters, newOnly, sort],
  );
  const visible = items.slice(0, shown);

  // Reset paging whenever the result set changes.
  useEffect(() => {
    setShown(PAGE);
  }, [filters, newOnly, sort]);

  // The drawer is a mobile-only affordance: once the viewport reaches lg the
  // desktop rail takes over, so force the drawer shut there. This keeps its
  // state (and the body scroll-lock below) from ever lingering on large screens.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => mq.matches && setDrawerOpen(false);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Lock body scroll + close on Escape while the mobile drawer is open.
  // Drive overflow directly from state (no captured "previous" value, which
  // could get stuck as "hidden" and leave the page permanently unscrollable),
  // and always clear it on cleanup/unmount.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const toggle = (key: FacetKey, value: string) =>
    setFilters((f) => {
      const cur = f[key] ?? [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      return { ...f, [key]: next };
    });

  const clearAll = () => {
    setFilters({});
    setNewOnly(false);
  };

  const activeCount =
    (newOnly ? 1 : 0) + CATALOG_FACETS.reduce((n, f) => n + (filters[f.key]?.length ?? 0), 0);

  const pdp = (sku: string) => `/${locale}/products/${sku}`;

  // Active-filter chips, in facet order.
  const chips: Array<{ label: string; onRemove: () => void }> = [];
  if (newOnly) chips.push({ label: t("newChip"), onRemove: () => setNewOnly(false) });
  for (const f of CATALOG_FACETS) {
    for (const v of filters[f.key] ?? []) {
      chips.push({ label: v, onRemove: () => toggle(f.key, v) });
    }
  }

  // Shared facet controls — rendered in both the desktop rail and the drawer.
  const filterControls = (
    <>
      <div style={{ borderBottom: "1px solid var(--vt-color-divider)", padding: "16px 0" }}>
        <Checkbox
          label={t("newOnly")}
          checked={newOnly}
          onChange={(checked) => setNewOnly(checked)}
        />
      </div>
      {CATALOG_FACETS.map((f) => (
        <div
          key={f.key}
          style={{ borderBottom: "1px solid var(--vt-color-divider)", padding: "16px 0" }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".04em",
              color: "var(--vt-color-text-muted)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {t(`facets.${f.labelKey}`)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {f.options.map((opt) => (
              <Checkbox
                key={opt}
                label={opt}
                checked={(filters[f.key] ?? []).includes(opt)}
                onChange={() => toggle(f.key, opt)}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-10 md:px-10">
      {/* Mobile filter trigger — opens the drawer. */}
      <button
        type="button"
        className="mb-4 lg:hidden"
        aria-haspopup="dialog"
        aria-expanded={drawerOpen}
        onClick={() => {
          // No-op outside mobile view — the drawer is a sub-lg affordance only.
          if (window.matchMedia("(min-width: 1024px)").matches) return;
          setDrawerOpen(true);
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: "var(--vt-radius-md)",
          border: "1.5px solid var(--vt-color-border-strong)",
          background: "var(--vt-color-surface)",
          color: "var(--vt-color-text)",
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        ☰ {t("filtersToggle")}
        {activeCount > 0 && <CountBadge n={activeCount} />}
      </button>

      <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[256px_1fr]">
        {/* Desktop filter rail — persistent sidebar. Offsets below the live
            header height (published as --vt-header-height by SiteHeader) and
            scrolls internally so a tall facet list never slides under the
            header. The fallback covers the moment before hydration measures it.
            top/max-height only take effect at lg (the rail is hidden on mobile). */}
        <aside
          className="hidden lg:sticky lg:block lg:self-start lg:overflow-y-auto"
          style={{
            top: "calc(var(--vt-header-height, 120px) + 16px)",
            maxHeight: "calc(100dvh - var(--vt-header-height, 120px) - 32px)",
            background: "var(--vt-color-surface-sunken)",
            borderRadius: "var(--vt-radius-lg)",
            padding: "6px 20px 16px",
          }}
        >
          {filterControls}
        </aside>

        {/* Results column */}
        <div>
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <span aria-live="polite" style={{ fontSize: 14, color: "var(--vt-color-text-muted)" }}>
                <b style={{ color: "var(--vt-color-text-strong)" }}>{items.length}</b>{" "}
                {t("resultsLabel")}
              </span>
              {chips.map((chip, i) => (
                <Chip key={`${chip.label}-${i}`} onRemove={chip.onRemove}>
                  {chip.label}
                </Chip>
              ))}
              {chips.length > 0 && (
                <button
                  onClick={clearAll}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontFamily: "var(--vt-font-sans)",
                    fontSize: 13,
                    color: "var(--vt-color-text-muted)",
                    textDecoration: "underline",
                  }}
                >
                  {t("clearAll")}
                </button>
              )}
            </div>

            <SortDropdown
              value={sort}
              onChange={(value) => setSort(value as CatalogSort)}
              options={[
                { value: "newest", label: t("sort.newest") },
                { value: "name-asc", label: t("sort.nameAsc") },
              ]}
            />
          </div>

          {/* Grid or empty state */}
          {items.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3">
                {visible.map((p) => (
                  <ProductCard
                    key={p.sku}
                    name={p.name}
                    sku={p.sku}
                    badge={p.isNew ? "new" : null}
                    image={p.image}
                    hoverImage={p.hoverImage}
                    href={pdp(p.sku)}
                  />
                ))}
              </div>
              {shown < items.length && (
                <div style={{ textAlign: "center", marginTop: 44 }}>
                  <Button variant="secondary" onClick={() => setShown((s) => s + PAGE)}>
                    {t("loadMore", { count: items.length - shown })}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "72px 20px",
                background: "var(--vt-color-surface-sunken)",
                borderRadius: "var(--vt-radius-xl)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--vt-font-display)",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "var(--vt-color-text-strong)",
                  margin: "0 0 8px",
                }}
              >
                {t("empty.title")}
              </h3>
              <p style={{ fontSize: 15, color: "var(--vt-color-text-muted)", margin: "0 0 22px" }}>
                {t("empty.body")}
              </p>
              <Button variant="primary" onClick={clearAll}>
                {t("empty.cta")}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile filter drawer (lg:hidden) ─────────────────────────────── */}
      <div className="lg:hidden">
        {/* Backdrop */}
        <button
          type="button"
          aria-hidden={!drawerOpen}
          tabIndex={-1}
          onClick={() => setDrawerOpen(false)}
          className={`vt-drawer-backdrop${drawerOpen ? " is-open" : ""}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            border: "none",
            background: "var(--vt-color-overlay, rgba(13,10,30,.5))",
          }}
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label={t("filtersToggle")}
          className={`vt-filter-drawer${drawerOpen ? " is-open" : ""}`}
          style={{
            position: "fixed",
            insetBlock: 0,
            insetInlineStart: 0,
            zIndex: 201,
            width: "min(360px, 86vw)",
            display: "flex",
            flexDirection: "column",
            background: "var(--vt-color-surface)",
            boxShadow: "var(--vt-shadow-lg)",
          }}
        >
          {/* Drawer header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid var(--vt-color-divider)",
            }}
          >
            <strong style={{ fontSize: 16, color: "var(--vt-color-text-strong)" }}>
              {t("filtersToggle")}
              {activeCount > 0 && <CountBadge n={activeCount} />}
            </strong>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setDrawerOpen(false)}
              style={{
                width: 36,
                height: 36,
                display: "grid",
                placeItems: "center",
                borderRadius: 8,
                border: "none",
                background: "transparent",
                color: "var(--vt-color-text)",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Scrollable facets */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>{filterControls}</div>

          {/* Sticky footer */}
          <div
            style={{
              display: "flex",
              gap: 12,
              padding: 16,
              borderTop: "1px solid var(--vt-color-divider)",
            }}
          >
            <Button
              variant="ghost"
              onClick={clearAll}
              disabled={activeCount === 0}
              style={{ flex: "0 0 auto" }}
            >
              {t("clearAll")}
            </Button>
            <Button
              variant="primary"
              onClick={() => setDrawerOpen(false)}
              style={{ flex: 1 }}
            >
              {t("showResults", { count: items.length })}
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}

/** Small filled count pill used on the trigger and drawer header. */
function CountBadge({ n }: { n: number }) {
  return (
    <span
      style={{
        marginInlineStart: 8,
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        display: "inline-grid",
        placeItems: "center",
        borderRadius: 999,
        background: "var(--vt-color-primary)",
        color: "#fff",
        fontSize: 12,
        verticalAlign: "middle",
      }}
    >
      {n}
    </span>
  );
}
