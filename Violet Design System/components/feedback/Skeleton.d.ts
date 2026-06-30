import * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {
  /** Shape: line · text (multi-line) · card (product) · circle. @default "line" */
  variant?: 'line' | 'text' | 'card' | 'circle';
  /** Width (line/circle). */
  width?: number | string;
  /** Height (line/circle). */
  height?: number | string;
  /** Number of rows for variant="text". @default 3 */
  lines?: number;
}

/** Shimmering placeholder that reserves layout while content loads (brand prefers this over spinners). */
export function Skeleton(props: SkeletonProps): JSX.Element;
