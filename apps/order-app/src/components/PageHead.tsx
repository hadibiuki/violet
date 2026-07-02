/** Shared page heading: eyebrow + title + optional action slot. */
export function PageHead({
  eyebrow,
  title,
  sub,
  action,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "var(--vt-space-4)",
        marginBlockEnd: "var(--vt-space-6)",
        flexWrap: "wrap",
      }}
    >
      <div>
        {eyebrow && (
          <div style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-accent-strong)", fontWeight: 700, marginBlockEnd: 6 }}>
            {eyebrow}
          </div>
        )}
        <h1 style={{ margin: 0, fontSize: "var(--vt-text-3xl)", fontWeight: 800, color: "var(--vt-color-text-strong)" }}>
          {title}
        </h1>
        {sub && (
          <p style={{ margin: "var(--vt-space-2) 0 0", color: "var(--vt-color-text-muted)", fontSize: "var(--vt-text-sm)" }}>
            {sub}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/** Latin run (SKU / order ref / tracking) isolated LTR + mono. */
export function Code({ children }: { children: React.ReactNode }) {
  return <bdi className="vt-code">{children}</bdi>;
}
