import React from 'react';
import { Select } from '../forms/Select.jsx';

/**
 * SortDropdown — a labelled "Sort" Select preset for catalog views.
 * Thin wrapper over Select with the brand's default Newest / A–Z options.
 */
export function SortDropdown({ value, onChange, options, style, ...rest }) {
  const opts = options || [
    { value: 'newest', label: 'Newest' },
    { value: 'az', label: 'A–Z' },
  ];
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--vt-space-2)', fontFamily: 'var(--vt-font-sans)', fontSize: 'var(--vt-text-sm)', color: 'var(--vt-color-text-muted)', ...style }} {...rest}>
      <span style={{ whiteSpace: 'nowrap' }}>Sort</span>
      <Select value={value} onChange={onChange} options={opts} style={{ height: 36 }} />
    </label>
  );
}
