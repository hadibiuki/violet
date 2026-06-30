import React from 'react';

const PIPELINE = [
  ['submitted', 'Submitted'],
  ['reviewing', 'Reviewing'],
  ['approved', 'Approved'],
  ['shipped', 'Shipped'],
  ['completed', 'Completed'],
];

/**
 * OrderTimeline — the B2B order pipeline as a vertical (or horizontal) stepper.
 * `current` is the active stage key; earlier steps render done, later ones pending.
 * Rejected short-circuits the trail. `times` maps stage→timestamp string.
 * `labels` overrides stage labels (e.g. localized Persian).
 */
export function OrderTimeline({ current = 'submitted', rejected = false, times = {}, labels = {}, orientation = 'vertical', style, ...rest }) {
  const steps = rejected
    ? [...PIPELINE.slice(0, PIPELINE.findIndex((s) => s[0] === current) + 1 || 1), ['rejected', 'Rejected']]
    : PIPELINE;
  const curIdx = rejected ? steps.length - 1 : steps.findIndex((s) => s[0] === current);
  const vertical = orientation === 'vertical';

  return (
    <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', alignItems: vertical ? 'stretch' : 'flex-start', fontFamily: 'var(--vt-font-sans)', ...style }} {...rest}>
      {steps.map(([key, fallback], i) => {
        const done = i < curIdx;
        const cur = i === curIdx;
        const isReject = key === 'rejected';
        const dotColor = isReject ? 'var(--vt-color-danger)' : (done || cur ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)');
        const lineDone = i < curIdx;
        const last = i === steps.length - 1;
        const label = labels[key] || fallback;

        if (vertical) {
          return (
            <div key={key} style={{ display: 'flex', gap: 'var(--vt-space-3)', paddingBottom: last ? 0 : 'var(--vt-space-6)', position: 'relative' }}>
              {!last && <span style={{ position: 'absolute', insetInlineStart: 8, top: 18, bottom: 4, width: 2, background: lineDone ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)' }} />}
              <span style={{ position: 'relative', zIndex: 1, width: 18, height: 18, flex: 'none', marginTop: 1, borderRadius: '50%', border: `2px solid ${dotColor}`, background: (done || (cur && !isReject)) ? dotColor : 'var(--vt-color-surface)', display: 'grid', placeItems: 'center', boxShadow: cur ? `0 0 0 4px var(--vt-color-primary-subtle)` : 'none' }}>
                {done && <span style={{ color: '#fff', fontSize: 10, lineHeight: 1 }}>✓</span>}
                {isReject && cur && <span style={{ color: '#fff', fontSize: 10, lineHeight: 1 }}>×</span>}
                {cur && !isReject && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />}
              </span>
              <div>
                <div style={{ fontSize: 'var(--vt-text-sm)', fontWeight: done || cur ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-regular)', color: done || cur ? (isReject ? 'var(--vt-color-danger)' : 'var(--vt-color-text-strong)') : 'var(--vt-color-text-muted)' }}>{label}</div>
                {times[key] && <div style={{ fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-subtle)', marginTop: 2, fontFamily: 'var(--vt-font-mono)' }}>{times[key]}</div>}
              </div>
            </div>
          );
        }
        // horizontal
        return (
          <div key={key} style={{ display: 'flex', alignItems: 'center', flex: last ? '0 0 auto' : 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${dotColor}`, background: (done || (cur && !isReject)) ? dotColor : 'var(--vt-color-surface)', display: 'grid', placeItems: 'center' }}>
                {done && <span style={{ color: '#fff', fontSize: 10 }}>✓</span>}
                {cur && !isReject && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />}
              </span>
              <span style={{ fontSize: 'var(--vt-text-xs)', fontWeight: done || cur ? 'var(--vt-weight-semibold)' : 'var(--vt-weight-regular)', color: done || cur ? 'var(--vt-color-text)' : 'var(--vt-color-text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {!last && <span style={{ flex: 1, height: 2, marginInline: 8, marginBottom: 18, background: lineDone ? 'var(--vt-color-primary)' : 'var(--vt-color-divider)' }} />}
          </div>
        );
      })}
    </div>
  );
}
