import * as React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /** Text label beside the dot. */
  label?: React.ReactNode;
  /** Shared group name. */
  name: string;
  /** This option's value. */
  value: string;
  /** Whether this option is selected (controlled). */
  checked?: boolean;
  /** Called with (value, event) when chosen. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Single radio option — group several with the same `name`. */
export function Radio(props: RadioProps): JSX.Element;
