import React from 'react';

/**
 * IconButton — square, icon-only control. `aria-label` is required.
 * Ghost by default; matches Button states.
 */
export function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  style,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || dims.md;

  const variants = {
    ghost: { background: 'transparent', color: 'var(--vt-color-text)', border: '1.5px solid transparent' },
    secondary: { background: 'var(--vt-color-surface)', color: 'var(--vt-color-text)', border: '1.5px solid var(--vt-color-border-strong)' },
    primary: { background: 'var(--vt-color-primary)', color: 'var(--vt-color-on-primary)', border: '1.5px solid transparent' },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`vt-iconbtn vt-iconbtn--${variant}`}
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: d,
        height: d,
        borderRadius: 'var(--vt-radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--vt-duration-base), transform var(--vt-duration-base)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon}
      <style>{`
        .vt-iconbtn--ghost:hover:not(:disabled){ background: var(--vt-color-primary-subtle); }
        .vt-iconbtn--secondary:hover:not(:disabled){ background: var(--vt-color-surface-sunken); }
        .vt-iconbtn--primary:hover:not(:disabled){ background: var(--vt-color-primary-hover); }
        .vt-iconbtn:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }
      `}</style>
    </button>
  );
}
