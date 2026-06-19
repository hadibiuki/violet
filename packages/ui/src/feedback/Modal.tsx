import { useEffect } from "react";
import type * as React from "react";

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Close handler — fired by Esc, backdrop click, and the × button. */
  onClose?: () => void;
  /** Display-face title. */
  title?: React.ReactNode;
  /** Sub-title line. */
  description?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer node — typically right-aligned Buttons. */
  footer?: React.ReactNode;
  /** Max width: sm 400 · md 520 · lg 720. @default "md" */
  size?: "sm" | "md" | "lg";
}

/**
 * Modal — centered dialog over a scrim. Controlled via `open`/`onClose`.
 * Closes on Esc and backdrop click; locks body scroll while open.
 */
export function Modal({ open, onClose, title, description, children, footer, size = "md", style, ...rest }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  if (!open) return null;
  const maxW = { sm: 400, md: 520, lg: 720 }[size] || 520;

  return (
    <div
      className="vt-modal__scrim"
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: 400, background: "var(--vt-scrim)", display: "grid", placeItems: "center", padding: "var(--vt-space-6)", animation: "vt-fade var(--vt-duration-base) ease" }}
    >
      <div
        role="dialog" aria-modal="true"
        className="vt-modal__panel"
        style={{
          width: "100%", maxWidth: maxW, maxHeight: "90vh", overflowY: "auto",
          background: "var(--vt-color-surface)", borderRadius: "var(--vt-radius-xl)",
          boxShadow: "var(--vt-shadow-2xl)", fontFamily: "var(--vt-font-sans)",
          animation: "vt-pop var(--vt-duration-slow) var(--vt-ease-standard)", ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--vt-space-4)", padding: "var(--vt-space-6) var(--vt-space-6) 0" }}>
          <div>
            {title && <h2 style={{ margin: 0, fontFamily: "var(--vt-font-display)", fontWeight: 400, fontSize: "var(--vt-text-2xl)", color: "var(--vt-color-text-strong)" }}>{title}</h2>}
            {description && <p style={{ margin: "6px 0 0", fontSize: "var(--vt-text-sm)", color: "var(--vt-color-text-muted)", lineHeight: 1.6 }}>{description}</p>}
          </div>
          {onClose && (
            <button onClick={onClose} aria-label="Close" style={{ flex: "none", border: "none", background: "none", cursor: "pointer", color: "var(--vt-color-text-muted)", display: "inline-flex", padding: 4, borderRadius: "var(--vt-radius-sm)" }}>
              <i data-lucide="x" style={{ width: 20, height: 20 }} />
            </button>
          )}
        </div>
        {children && <div style={{ padding: "var(--vt-space-4) var(--vt-space-6)", fontSize: "var(--vt-text-base)", color: "var(--vt-color-text)", lineHeight: 1.6 }}>{children}</div>}
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--vt-space-3)", padding: "0 var(--vt-space-6) var(--vt-space-6)" }}>{footer}</div>}
      </div>
      <style>{`@keyframes vt-fade{from{opacity:0}to{opacity:1}}@keyframes vt-pop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
