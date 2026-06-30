import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Persistent label rendered above the field (never a placeholder). */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the border red and sets aria-invalid. */
  error?: string;
  /** Leading affix node (icon or unit) on the inline-start. */
  leadingAffix?: React.ReactNode;
  /** Lucide icon name for the leading affix (string form, e.g. "user"). Ignored if leadingAffix is set. */
  icon?: string;
  /** Field height: md 40 · lg 44/48. @default "md" */
  size?: 'md' | 'lg';
}

/** Labelled text field with hint/error and focus ring. RTL-safe (text-align: start). */
export function Input(props: InputProps): JSX.Element;
