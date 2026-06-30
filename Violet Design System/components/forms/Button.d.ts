import * as React from 'react';

/**
 * The primary action control — token-driven, RTL-safe, with the brand's
 * trailing-arrow hover slide. One primary per view.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger' | 'success' | 'danger-outline';
  /** Control height: sm 32 · md 40 · lg 48 (site CTA). @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node placed on the inline-start. */
  leadingIcon?: React.ReactNode;
  /** Icon node on the inline-end — slides on hover (use the brand → arrow). */
  trailingIcon?: React.ReactNode;
  /** Replaces the leading icon with a spinner; width stays locked. @default false */
  loading?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
