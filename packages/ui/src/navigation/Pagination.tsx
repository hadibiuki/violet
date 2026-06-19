import type * as React from "react";

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** Current page (1-based). */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  /** Called with the next page number. */
  onChange?: (page: number) => void;
  /** Page numbers shown either side of the current page. @default 1 */
  siblings?: number;
}

/**
 * Pagination — page navigation with prev/next and truncated page numbers.
 * Controlled via `page`/`onChange`. Arrows mirror in RTL.
 */
export function Pagination({ page = 1, pageCount = 1, onChange, siblings = 1, style, ...rest }: PaginationProps) {
  if (pageCount <= 1) return null;
  const go = (p: number) => p >= 1 && p <= pageCount && p !== page && onChange && onChange(p);

  // build page list with ellipses
  const pages: (number | "…")[] = [];
  const add = (p: number | "…") => pages.push(p);
  const lo = Math.max(2, page - siblings);
  const hi = Math.min(pageCount - 1, page + siblings);
  add(1);
  if (lo > 2) add("…");
  for (let p = lo; p <= hi; p++) add(p);
  if (hi < pageCount - 1) add("…");
  if (pageCount > 1) add(pageCount);

  const cell = (active: boolean): React.CSSProperties => ({
    minWidth: 36, height: 36, paddingInline: 8, display: "grid", placeItems: "center",
    borderRadius: "var(--vt-radius-sm)", fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-sm)",
    fontWeight: active ? "var(--vt-weight-semibold)" : "var(--vt-weight-medium)", cursor: "pointer",
    border: `1.5px solid ${active ? "var(--vt-color-primary)" : "var(--vt-color-border-strong)"}`,
    background: active ? "var(--vt-color-primary)" : "var(--vt-color-surface)",
    color: active ? "#fff" : "var(--vt-color-text)",
  });
  const arrow = (disabled: boolean): React.CSSProperties => ({ ...cell(false), cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1 });

  return (
    <nav aria-label="Pagination" style={{ display: "flex", alignItems: "center", gap: "var(--vt-space-2)", ...style }} {...rest}>
      <button aria-label="Previous page" disabled={page <= 1} onClick={() => go(page - 1)} style={arrow(page <= 1)}>
        <span style={{ display: "inline-block", transform: "scaleX(1)" }}>‹</span>
      </button>
      {pages.map((p, i) => p === "…"
        ? <span key={`e${i}`} style={{ minWidth: 24, textAlign: "center", color: "var(--vt-color-text-subtle)" }}>…</span>
        : <button key={p} aria-current={p === page ? "page" : undefined} onClick={() => go(p)} style={cell(p === page)}>{p}</button>
      )}
      <button aria-label="Next page" disabled={page >= pageCount} onClick={() => go(page + 1)} style={arrow(page >= pageCount)}>
        <span style={{ display: "inline-block" }}>›</span>
      </button>
    </nav>
  );
}
