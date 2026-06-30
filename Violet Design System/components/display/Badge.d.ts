import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** NEW (violet) · LIMITED (gold) · neutral · soldout. @default "new" */
  variant?: 'new' | 'limited' | 'neutral' | 'soldout';
  /** Override the default label text. */
  children?: React.ReactNode;
}

/** Pill status label for product cards; positioned top-inline-start. Text always present (never color-only). */
export function Badge(props: BadgeProps): JSX.Element;
