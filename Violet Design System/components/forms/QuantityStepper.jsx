import React from 'react';

/**
 * QuantityStepper — [−] [value] [+] used on the B2B PDP and cart. Enforces MOQ:
 * the value clamps at min (MOQ) and max; below-MOQ is impossible so submit stays valid.
 */
export function QuantityStepper({ value, onChange, min = 1, max = 9999, step = 1, moq, style, ...rest }) {
  const lo = moq ?? min;
  const clamp = (n) => Math.max(lo, Math.min(max, n));
  const set = (n) => onChange && onChange(clamp(n));

  const btn = {
    width: 36,
    height: 36,
    display: 'grid',
    placeItems: 'center',
    border: 'none',
    background: 'transparent',
    color: 'var(--vt-color-text)',
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: 'var(--vt-font-sans)',
    transition: 'background var(--vt-duration-fast)',
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--vt-font-sans)', ...style }} {...rest}>
      <div
        className="vt-stepper"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '1.5px solid var(--vt-color-border-strong)',
          borderRadius: 'var(--vt-radius-sm)',
          overflow: 'hidden',
          width: 'max-content',
        }}
      >
        <button type="button" aria-label="Decrease quantity" className="vt-step" disabled={value <= lo} style={{ ...btn, opacity: value <= lo ? 0.4 : 1 }} onClick={() => set(value - step)}>−</button>
        <input
          aria-label="Quantity"
          inputMode="numeric"
          value={value}
          onChange={(e) => set(parseInt(e.target.value.replace(/\D/g, ''), 10) || lo)}
          style={{
            width: 52,
            height: 36,
            border: 'none',
            borderInline: '1.5px solid var(--vt-color-border)',
            textAlign: 'center',
            font: '500 14px var(--vt-font-mono)',
            color: 'var(--vt-color-text-strong)',
            outline: 'none',
            background: 'var(--vt-color-surface)',
          }}
        />
        <button type="button" aria-label="Increase quantity" className="vt-step" disabled={value >= max} style={{ ...btn, opacity: value >= max ? 0.4 : 1 }} onClick={() => set(value + step)}>+</button>
      </div>
      {moq != null && (
        <span style={{ fontSize: 'var(--vt-text-xs)', color: value < moq ? 'var(--vt-color-danger)' : 'var(--vt-color-text-muted)' }}>
          Minimum {moq} units
        </span>
      )}
      <style>{`.vt-step:hover:not(:disabled){ background: var(--vt-color-primary-subtle); } .vt-step:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }`}</style>
    </div>
  );
}
