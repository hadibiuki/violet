import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> {
  /** Persistent label above the control. */
  label?: string;
  /** Helper text below. */
  hint?: string;
  /** Error message — red border + aria-invalid. */
  error?: string;
  /** Options as strings or {value,label}. */
  options?: SelectOption[];
  /** Placeholder shown as a disabled-looking empty option. */
  placeholder?: string;
  /** Controlled value. */
  value?: string;
  /** Called with (value, event). */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Control height: md 40 · lg 48. @default "md" */
  size?: 'md' | 'lg';
}

/** Native dropdown styled to match Input — label/hint/error, focus ring, chevron. */
export function Select(props: SelectProps): JSX.Element;
