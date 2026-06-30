import React from 'react';

/**
 * SpecTable — zebra-striped label/value table for PDP specs and dashboards.
 * Label column muted, value column strong; fully translatable, right-aligns in RTL.
 */
export function SpecTable({ rows = [], style, ...rest }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--vt-font-sans)',
        fontSize: 'var(--vt-text-sm)',
        textAlign: 'start',
        ...style,
      }}
      {...rest}
    >
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} style={{ background: i % 2 ? 'var(--vt-color-surface-sunken)' : 'transparent' }}>
            <td style={{ padding: '13px var(--vt-space-4)', color: 'var(--vt-color-text-muted)', width: '42%', textAlign: 'start' }}>{label}</td>
            <td style={{ padding: '13px var(--vt-space-4)', color: 'var(--vt-color-text-strong)', fontWeight: 'var(--vt-weight-medium)', textAlign: 'start' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
