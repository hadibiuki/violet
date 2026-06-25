"use client";

import { useState } from "react";
import { Reveal } from "../home/Reveal";
import { Button, ProductCard } from "@violet/ui";
import type { SiteProductCard, FacetKey } from "../../lib/catalog-data";
import { useRouter } from "../../i18n/navigation";

const QUICK_FACETS = ["gender", "strap", "dialColor", "movement"] as const;
type QuickFacet = (typeof QUICK_FACETS)[number];

const FACET_LABEL: Record<QuickFacet, string> = {
  gender: "Gender",
  strap: "Strap",
  dialColor: "Color",
  movement: "Movement",
};

type FacetDef = { key: FacetKey; labelKey: string; options: readonly string[] };

type Props = {
  products: SiteProductCard[];
  facets: readonly FacetDef[];
};

export function NewModelsClient({ products, facets }: Props) {
  const [filters, setFilters] = useState<Partial<Record<QuickFacet, string>>>({});
  const router = useRouter();

  const toggle = (facet: QuickFacet, value: string) =>
    setFilters((f) => ({ ...f, [facet]: f[facet] === value ? undefined : value }));

  const clearAll = () => setFilters({});

  const items = products.filter((p) =>
    QUICK_FACETS.every((q) => !filters[q] || p[q] === filters[q]),
  );

  const activeCount = QUICK_FACETS.filter((q) => filters[q]).length;

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-24 pt-10 md:px-10">
      {/* Quick filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 22,
          alignItems: "flex-start",
          paddingBottom: 22,
          borderBottom: "1px solid var(--vt-color-divider)",
        }}
      >
        {QUICK_FACETS.map((facet) => {
          const facetDef = facets.find((f) => f.key === facet);
          if (!facetDef) return null;
          return (
            <div key={facet} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--vt-color-text-subtle)",
                }}
              >
                {FACET_LABEL[facet]}
              </span>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {facetDef.options.map((opt) => {
                  const on = filters[facet] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => toggle(facet, opt)}
                      style={{
                        cursor: "pointer",
                        fontFamily: "var(--vt-font-sans)",
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "7px 14px",
                        borderRadius: "var(--vt-radius-pill)",
                        border: `1.5px solid ${on ? "var(--vt-color-primary)" : "var(--vt-color-border-strong)"}`,
                        background: on ? "var(--vt-color-primary)" : "var(--vt-color-surface)",
                        color: on ? "#fff" : "var(--vt-color-text)",
                        transition: "all var(--vt-duration-fast)",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Result count + clear */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "22px 0 26px",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span aria-live="polite" style={{ fontSize: 14, color: "var(--vt-color-text-muted)" }}>
          <b style={{ color: "var(--vt-color-text-strong)" }}>{items.length}</b>{" "}
          new {items.length === 1 ? "model" : "models"}
          {activeCount > 0 && (
            <span>
              {" "}· {activeCount} {activeCount === 1 ? "filter" : "filters"} applied
            </span>
          )}
        </span>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              background: "none",
              border: "none",
              fontFamily: "var(--vt-font-sans)",
              fontSize: 13.5,
              color: "var(--vt-color-text-muted)",
              textDecoration: "underline",
            }}
          >
            ✕ Clear filters
          </button>
        )}
      </div>

      {/* Grid or empty state */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.sku} delay={(i % 4) * 60}>
              <ProductCard
                name={p.name}
                sku={p.sku}
                badge="new"
                image={p.image}
                hoverImage={p.hoverImage}
                href={`/product?sku=${p.sku}`}
              />
            </Reveal>
          ))}
        </div>
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
            No new models match those filters
          </h3>
          <p style={{ fontSize: 15, color: "var(--vt-color-text-muted)", margin: "0 0 22px" }}>
            Try relaxing a filter, or browse the full collection.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Button variant="secondary" onClick={clearAll}>
              Clear filters
            </Button>
            <Button variant="primary" onClick={() => router.push("/products")}>
              Browse all products →
            </Button>
          </div>
        </div>
      )}

      {/* Tail CTA */}
      {items.length > 0 && (
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Button variant="secondary" onClick={() => router.push("/products")}>
            View all products →
          </Button>
        </div>
      )}
    </section>
  );
}
