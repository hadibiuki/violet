import * as React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected state — fills violet. @default false */
  selected?: boolean;
  /** When provided, renders an × button; called on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Optional leading icon node. */
  leadingIcon?: React.ReactNode;
  /** Disable interaction. */
  disabled?: boolean;
}

/** Compact selectable/removable token for filters, tags, and quick-pick facets. */
export function Chip(props: ChipProps): JSX.Element;
