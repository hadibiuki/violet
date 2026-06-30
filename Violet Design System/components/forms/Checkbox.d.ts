import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Text label beside the box. */
  label?: React.ReactNode;
  /** Checked state (controlled). */
  checked?: boolean;
  /** Partial state — renders a dash, e.g. a "select all" parent. */
  indeterminate?: boolean;
  /** Called with (nextChecked, event). */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Labelled checkbox with violet fill, check glyph, and indeterminate dash. */
export function Checkbox(props: CheckboxProps): JSX.Element;
