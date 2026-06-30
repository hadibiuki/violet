import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. @default 20 */
  size?: number;
  /** Ring thickness in px. @default 2 */
  thickness?: number;
  /** Accessible label. @default "Loading" */
  label?: string;
}

/** Indeterminate loading ring (violet by default; recolour via `style.color`). */
export function Spinner(props: SpinnerProps): JSX.Element;
