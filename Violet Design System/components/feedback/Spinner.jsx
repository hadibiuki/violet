import React from 'react';

/**
 * Spinner — indeterminate loading ring in `currentColor`. Inherits text color;
 * set `color` on a parent or pass `style={{color}}`.
 */
export function Spinner({ size = 20, thickness = 2, label = 'Loading', style, ...rest }) {
  return (
    <span role="status" aria-label={label} style={{ display: 'inline-flex', color: 'var(--vt-color-primary)', ...style }} {...rest}>
      <span style={{
        width: size, height: size, borderRadius: '50%', display: 'block',
        border: `${thickness}px solid currentColor`, borderTopColor: 'transparent',
        opacity: 0.9, animation: 'vt-spin 0.7s linear infinite',
      }} />
      <style>{`@keyframes vt-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
