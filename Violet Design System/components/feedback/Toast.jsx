import React from 'react';

const TONES = {
  success: { icon: 'check-circle', color: 'var(--vt-color-success)' },
  error: { icon: 'alert-circle', color: 'var(--vt-color-danger)' },
  warning: { icon: 'alert-triangle', color: 'var(--vt-color-warning)' },
  info: { icon: 'info', color: 'var(--vt-color-info)' },
};

/**
 * Toast — transient confirmation/notice. Render one inside <ToastViewport>.
 * A left accent bar carries the tone colour; status is never colour-only (icon + text).
 */
export function Toast({ tone = 'success', title, description, onClose, icon, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{
      display: 'flex', gap: 'var(--vt-space-3)', alignItems: 'flex-start',
      width: 340, maxWidth: '90vw', padding: 'var(--vt-space-4)',
      background: 'var(--vt-color-surface)', borderRadius: 'var(--vt-radius-md)',
      boxShadow: 'var(--vt-shadow-xl)', borderInlineStart: `3px solid ${t.color}`,
      fontFamily: 'var(--vt-font-sans)', ...style,
    }} {...rest}>
      <span style={{ color: t.color, display: 'inline-flex', flex: 'none', marginTop: 1 }}>
        {icon || <i data-lucide={t.icon} style={{ width: 20, height: 20 }} />}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: 'var(--vt-text-sm)', fontWeight: 'var(--vt-weight-semibold)', color: 'var(--vt-color-text-strong)' }}>{title}</div>}
        {description && <div style={{ fontSize: 'var(--vt-text-sm)', color: 'var(--vt-color-text-muted)', marginTop: 2, lineHeight: 1.5 }}>{description}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{ flex: 'none', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--vt-color-text-subtle)', display: 'inline-flex', padding: 2 }}>
          <i data-lucide="x" style={{ width: 16, height: 16 }} />
        </button>
      )}
    </div>
  );
}

/** Fixed stack for toasts — place once near the root. */
export function ToastViewport({ position = 'bottom-end', children, style, ...rest }) {
  const [v, h] = position.split('-');
  return (
    <div style={{
      position: 'fixed', zIndex: 500, display: 'flex', flexDirection: 'column', gap: 'var(--vt-space-2)',
      [v === 'top' ? 'top' : 'bottom']: 'var(--vt-space-6)',
      [h === 'start' ? 'insetInlineStart' : h === 'center' ? 'insetInlineStart' : 'insetInlineEnd']: h === 'center' ? '50%' : 'var(--vt-space-6)',
      transform: h === 'center' ? 'translateX(-50%)' : 'none',
      ...style,
    }} {...rest}>{children}</div>
  );
}
