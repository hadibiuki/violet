import React from 'react';
import { QuantityStepper } from '../forms/QuantityStepper.jsx';

/**
 * CartLineItem — a row in the B2B cart / request list: thumbnail, name + SKU,
 * quantity stepper (MOQ-aware), line total, and a remove action.
 * `editable` shows the stepper; otherwise quantity is read-only (order summaries).
 */
export function CartLineItem({ name, sku, image, price, qty, moq, currency = (n) => `$${n.toLocaleString()}`, editable = true, onQty, onRemove, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--vt-space-4)', alignItems: 'center', padding: 'var(--vt-space-4) 0', fontFamily: 'var(--vt-font-sans)', ...style }} {...rest}>
      <div style={{ width: 64, height: 64, flex: 'none', borderRadius: 'var(--vt-radius-md)', overflow: 'hidden', background: 'var(--vt-color-surface-sunken)' }}>
        {image && <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--vt-text-sm)', fontWeight: 'var(--vt-weight-medium)', color: 'var(--vt-color-text-strong)' }}><bdi>{name}</bdi></div>
        <div style={{ fontFamily: 'var(--vt-font-mono)', fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-muted)', marginTop: 2 }}><bdi>{sku}</bdi></div>
        <div style={{ fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-muted)', marginTop: 4 }}>{currency(price)} <span style={{ opacity: .7 }}>/ unit</span></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--vt-space-2)' }}>
        {editable
          ? <QuantityStepper value={qty} moq={moq} onChange={onQty} />
          : <span style={{ fontFamily: 'var(--vt-font-mono)', fontSize: 'var(--vt-text-sm)', color: 'var(--vt-color-text)' }}>× {qty}</span>}
        <div style={{ fontSize: 'var(--vt-text-base)', fontWeight: 'var(--vt-weight-semibold)', color: 'var(--vt-color-text-strong)' }}>{currency(price * qty)}</div>
      </div>
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove item" style={{ flex: 'none', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--vt-color-text-subtle)', display: 'inline-flex', padding: 4 }}>
          <i data-lucide="trash-2" style={{ width: 16, height: 16 }} />
        </button>
      )}
    </div>
  );
}
