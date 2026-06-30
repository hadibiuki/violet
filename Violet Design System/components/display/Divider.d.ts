import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Render a vertical rule for inline separation. @default false */
  vertical?: boolean;
  /** Optional centered label (e.g. "or") on a horizontal divider. */
  label?: React.ReactNode;
}

/** Hairline separator — horizontal, vertical, or with a centered label. */
export function Divider(props: DividerProps): JSX.Element;
