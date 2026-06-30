import React from 'react';

/**
 * Radio — single labelled radio. Group several with the same `name`.
 * Controlled via `checked`/`onChange`.
 */
export function Radio({ label, name, value, checked = false, disabled = false, onChange, id, style, ...rest }) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return (
    <label htmlFor={inputId} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--vt-space-2)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--vt-font-sans)', fontSize: 'var(--vt-text-sm)', color: 'var(--vt-color-text)', ...style }}>
      <span style={{ position: 'relative', width: 18, height: 18, flex: 'none' }}>
        <input
          id={inputId}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(value, e)}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }}
          {...rest}
        />
        <span aria-hidden="true" style={{
          display: 'grid', placeItems: 'center', width: 18, height: 18, borderRadius: '50%',
          border: `1.5px solid ${checked ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
          background: 'var(--vt-color-surface)', transition: 'all var(--vt-duration-fast)',
        }}>
          {checked && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--vt-color-primary)' }} />}
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
