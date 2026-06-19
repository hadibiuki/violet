import type * as React from "react";

export interface BreadcrumbItem { label: React.ReactNode; href?: string; }

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Trail items; the last renders as the current page (no link). */
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb — trail of links ending in the current page. Separator mirrors in RTL.
 * `items`: [{label, href}] — the last item renders as current (no link).
 */
export function Breadcrumb({ items = [], style, ...rest }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-sm)", ...style }} {...rest}>
      <ol style={{ display: "flex", alignItems: "center", gap: "var(--vt-space-2)", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: "inline-flex", alignItems: "center", gap: "var(--vt-space-2)" }}>
              {last || !it.href ? (
                <span aria-current={last ? "page" : undefined} style={{ color: last ? "var(--vt-color-text)" : "var(--vt-color-text-muted)", fontWeight: last ? "var(--vt-weight-medium)" : 400 }}>{it.label}</span>
              ) : (
                <a href={it.href} style={{ color: "var(--vt-color-text-muted)", textDecoration: "none" }}>{it.label}</a>
              )}
              {!last && <span aria-hidden="true" style={{ color: "var(--vt-color-text-subtle)" }}>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
