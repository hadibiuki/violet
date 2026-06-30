import * as React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** Placement relative to the trigger. @default "top" */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** The single trigger element. */
  children: React.ReactNode;
}

/** Hover/focus label bubble around a trigger (CSS-driven, RTL-aware sides). */
export function Tooltip(props: TooltipProps): JSX.Element;
