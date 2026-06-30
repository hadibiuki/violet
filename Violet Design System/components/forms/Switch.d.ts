import * as React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Text label beside the track. */
  label?: React.ReactNode;
  /** On/off state (controlled). */
  checked?: boolean;
  /** Called with (nextChecked, event). */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** On/off toggle for binary settings; the knob slides on the inline axis (RTL-safe). */
export function Switch(props: SwitchProps): JSX.Element;
