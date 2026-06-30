import React from 'react';
import { Badge } from './Badge.jsx';

/**
 * ProductCard — the catalog workhorse. Square reserved image, badge overlay,
 * model name + mono SKU, optional B2B price/MOQ. Whole card is a link; hover lifts.
 */
export function ProductCard({
  name,
  sku,
  image,
  hoverImage,
  badge,            // 'new' | 'limited' | null
  price,            // string e.g. "$1,250" — B2B/featured
  priceUnit = '/ unit',
  moq,              // number — B2B
  unavailable = false,
  href = '#',
  action,           // optional node (e.g. B2B "Add" button)
  style,
  ...rest
}) {
  return (
    <a
      href={href}
      className="vt-pcard"
      style={{
        display: 'block',
        background: 'var(--vt-color-surface)',
        border: '1px solid var(--vt-color-border)',
        borderRadius: 'var(--vt-radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: 'var(--vt-shadow-md)',
        transition: 'transform var(--vt-duration-slow) var(--vt-ease-standard), box-shadow var(--vt-duration-slow), border-color var(--vt-duration-slow)',
        opacity: unavailable ? 0.7 : 1,
        textAlign: 'start',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: 'var(--vt-aspect-product)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--vt-ink-100), var(--vt-violet-50))' }}>
        {badge && (
          <span style={{ position: 'absolute', top: 12, insetInlineStart: 12, zIndex: 2 }}>
            <Badge variant={badge} />
          </span>
        )}
        {unavailable && (
          <span style={{ position: 'absolute', top: 12, insetInlineEnd: 12, zIndex: 2 }}>
            <Badge variant="soldout">Out of stock</Badge>
          </span>
        )}
        {image && (
          <img
            className="vt-pcard__img vt-pcard__img--base"
            src={image}
            alt={name}
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--vt-duration-slower) var(--vt-ease-standard), opacity var(--vt-duration-base)' }}
          />
        )}
        {hoverImage && (
          <img
            className="vt-pcard__img vt-pcard__img--hover"
            src={hoverImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity var(--vt-duration-slow)' }}
          />
        )}
      </div>
      <div style={{ padding: 'var(--vt-space-4)' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--vt-font-sans)', fontSize: 'var(--vt-text-base)', fontWeight: 'var(--vt-weight-medium)', color: 'var(--vt-color-text-strong)' }}>{name}</h3>
        {sku && <div style={{ marginTop: 4, fontFamily: 'var(--vt-font-mono)', fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-muted)' }}>{sku}</div>}
        {(price || action) && (
          <div style={{ marginTop: 'var(--vt-space-3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--vt-space-2)' }}>
            {price && (
              <div style={{ fontSize: 'var(--vt-text-base)', fontWeight: 'var(--vt-weight-semibold)', color: 'var(--vt-color-primary)' }}>
                {price}{' '}
                <span style={{ color: 'var(--vt-color-text-muted)', fontWeight: 'var(--vt-weight-regular)', fontSize: 'var(--vt-text-xs)' }}>{priceUnit}</span>
              </div>
            )}
            {action}
          </div>
        )}
        {moq != null && <div style={{ marginTop: 6, fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-muted)' }}>MOQ {moq} units</div>}
      </div>
      <style>{`
        .vt-pcard:hover{ transform: translateY(-8px); box-shadow: var(--vt-shadow-xl); border-color: var(--vt-violet-200); }
        .vt-pcard:hover .vt-pcard__img--base{ transform: scale(1.08); }
        .vt-pcard:hover .vt-pcard__img--hover{ opacity: 1; }
        .vt-pcard:focus-visible{ outline:none; box-shadow: var(--vt-shadow-focus); }
      `}</style>
    </a>
  );
}
