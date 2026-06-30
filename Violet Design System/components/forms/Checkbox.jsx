import React from 'react';

/**
 * Checkbox — labelled, token-driven. Controlled via `checked`/`onChange`.
 * Supports `indeterminate` (e.g. "select all" partial state).
 */
export function Checkbox({ label, checked = false, indeterminate = false, disabled = false, onChange, id, style, ...rest }) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  const on = checked || indeterminate;

  return (
    <label htmlFor={inputId} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--vt-space-2)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--vt-font-sans)', fontSize: 'var(--vt-text-sm)', color: 'var(--vt-color-text)', ...style }}>
      <span style={{ position: 'relative', width: 18, height: 18, flex: 'none' }}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked, e)}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }}
          {...rest}
        />
        <span aria-hidden="true" className="vt-cbx" style={{
          display: 'grid', placeItems: 'center', width: 18, height: 18, borderRadius: 'var(--vt-radius-sm)',
          border: `1.5px solid ${on ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
          background: on ? 'var(--vt-color-primary)' : 'var(--vt-color-surface)',
          color: '#fff', transition: 'all var(--vt-duration-fast)',
        }}>
          {indeterminate ? (
            <span style={{ width: 9, height: 2, background: '#fff', borderRadius: 1 }} />
          ) : checked ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ) : null}
        </span>
      </span>
      {label && <span>{label}</span>}
      <style>{`.vt-cbx:focus-within,input:focus-visible + .vt-cbx{ box-shadow: var(--vt-shadow-focus); }`}</style>
    </label>
  );
}
