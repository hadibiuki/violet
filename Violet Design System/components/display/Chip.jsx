import React from 'react';

/**
 * Chip — compact selectable/removable token. Used for active filters, tags,
 * quick-pick facets. `selected` fills violet; `onRemove` adds an × button.
 */
export function Chip({ children, selected = false, onRemove, onClick, leadingIcon, disabled = false, style, ...rest }) {
  const interactive = Boolean(onClick) && !onRemove;
  return (
    <span
      onClick={!disabled ? onClick : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--vt-space-1)',
        paddingInline: 'var(--vt-space-3)', paddingBlock: 6,
        fontFamily: 'var(--vt-font-sans)', fontSize: 'var(--vt-text-xs)', fontWeight: 'var(--vt-weight-medium)',
        borderRadius: 'var(--vt-radius-pill)', lineHeight: 1.4, whiteSpace: 'nowrap',
        cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
        opacity: disabled ? 0.5 : 1,
        border: `1.5px solid ${selected ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
        background: selected ? 'var(--vt-color-primary)' : 'var(--vt-color-surface)',
        color: selected ? '#fff' : 'var(--vt-color-text)',
        transition: 'all var(--vt-duration-fast)',
        ...style,
      }}
      {...rest}
    >
      {leadingIcon && <span style={{ display: 'inline-flex' }}>{leadingIcon}</span>}
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove(e); }} aria-label="Remove" style={{
          display: 'grid', placeItems: 'center', width: 16, height: 16, marginInlineStart: 2,
          border: 'none', borderRadius: '50%', cursor: 'pointer', fontSize: 12, lineHeight: 1,
          background: selected ? 'rgba(255,255,255,.25)' : 'var(--vt-color-surface-sunken)',
          color: 'inherit',
        }}>×</button>
      )}
    </span>
  );
}
