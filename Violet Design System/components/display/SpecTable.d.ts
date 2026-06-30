import * as React from 'react';

export interface SpecTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Ordered [label, value] pairs. Values may be any node. */
  rows: [React.ReactNode, React.ReactNode][];
}

/** Zebra label/value table for PDP specifications and dashboards. RTL-aware alignment. */
export function SpecTable(props: SpecTableProps): JSX.Element;
