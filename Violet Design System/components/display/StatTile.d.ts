import * as React from 'react';

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric value, e.g. "1000+" or "۴٫۵ میلیارد". */
  value: React.ReactNode;
  /** Caption under/over the value. */
  label: React.ReactNode;
  /** Optional icon node (top-inline-end). */
  icon?: React.ReactNode;
  /** Optional delta text, e.g. "12%". */
  delta?: React.ReactNode;
  /** Delta direction → colour + arrow. @default "up" */
  deltaDir?: 'up' | 'down';
  /** Use the Cormorant display face for the value (marketing stat band). @default false */
  display?: boolean;
}

/** A single metric tile — big value, label, optional icon + delta. Dashboard & stat bands. */
export function StatTile(props: StatTileProps): JSX.Element;
