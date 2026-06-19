import type * as React from "react";

export type OrderStatus = "submitted" | "reviewing" | "approved" | "shipped" | "completed" | "rejected";

export interface OrderStatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pipeline stage. @default "submitted" */
  status?: OrderStatus;
  /** Override the default label text (e.g. localized Persian). */
  label?: string;
  /** Use a Lucide status icon instead of the dot. @default false */
  withIcon?: boolean;
}

const STATUS: Record<OrderStatus, { label: string; fg: string; bg: string; icon: string }> = {
  submitted: { label: "Submitted", fg: "var(--vt-color-status-submitted)", bg: "var(--vt-color-status-submitted-bg)", icon: "inbox" },
  reviewing: { label: "Reviewing", fg: "var(--vt-color-status-reviewing)", bg: "var(--vt-color-status-reviewing-bg)", icon: "search" },
  approved: { label: "Approved", fg: "var(--vt-color-status-approved)", bg: "var(--vt-color-status-approved-bg)", icon: "check" },
  shipped: { label: "Shipped", fg: "var(--vt-color-status-shipped)", bg: "var(--vt-color-status-shipped-bg)", icon: "truck" },
  completed: { label: "Completed", fg: "var(--vt-color-status-completed)", bg: "var(--vt-color-status-completed-bg)", icon: "check-check" },
  rejected: { label: "Rejected", fg: "var(--vt-color-status-rejected)", bg: "var(--vt-color-status-rejected-bg)", icon: "x" },
};

/**
 * OrderStatusPill — the B2B order pipeline status as a colored pill with a dot
 * (or Lucide icon) and a text label. Status never communicates by color alone.
 */
export function OrderStatusPill({ status = "submitted", label, withIcon = false, style, ...rest }: OrderStatusPillProps) {
  const s = STATUS[status] || STATUS.submitted;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--vt-space-2)",
        padding: "6px 12px",
        borderRadius: "var(--vt-radius-pill)",
        background: s.bg,
        color: s.fg,
        fontFamily: "var(--vt-font-sans)",
        fontSize: "var(--vt-text-xs)",
        fontWeight: "var(--vt-weight-semibold)",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {withIcon ? (
        <i data-lucide={s.icon} style={{ width: 14, height: 14 }} />
      ) : (
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor" }} />
      )}
      {label || s.label}
    </span>
  );
}
