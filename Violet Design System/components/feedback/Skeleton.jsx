import React from 'react';

/**
 * Skeleton — shimmering placeholder that holds layout while content loads.
 * The brand prefers skeletons over spinners for content. `variant` picks a shape.
 */
export function Skeleton({ variant = 'line', width, height, lines = 3, style, ...rest }) {
  const base = {
    background: 'linear-gradient(90deg, var(--vt-ink-100) 25%, var(--vt-ink-150) 37%, var(--vt-ink-100) 63%)',
    backgroundSize: '400% 100%', animation: 'vt-shimmer 1.4s ease infinite',
  };
  const css = <style>{`@keyframes vt-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}`}</style>;

  if (variant === 'card') {
    return (
      <div style={{ ...style }} {...rest}>
        {css}
        <div style={{ ...base, aspectRatio: 'var(--vt-aspect-product)', borderRadius: 'var(--vt-radius-lg)' }} />
        <div style={{ ...base, height: 14, borderRadius: 6, marginTop: 14, width: '80%' }} />
        <div style={{ ...base, height: 12, borderRadius: 6, marginTop: 8, width: '45%' }} />
      </div>
    );
  }
  if (variant === 'circle') {
    return <span style={{ ...base, display: 'inline-block', width: width || 40, height: height || width || 40, borderRadius: '50%', ...style }} {...rest}>{css}</span>;
  }
  if (variant === 'text') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }} {...rest}>
        {css}
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} style={{ ...base, height: 12, borderRadius: 6, width: i === lines - 1 ? '60%' : '100%' }} />
        ))}
      </div>
    );
  }
  // line / block
  return <span style={{ ...base, display: 'block', width: width || '100%', height: height || 16, borderRadius: 'var(--vt-radius-sm)', ...style }} {...rest}>{css}</span>;
}
