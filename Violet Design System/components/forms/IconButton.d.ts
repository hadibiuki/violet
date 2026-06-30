import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. a Lucide <i data-lucide>). */
  icon: React.ReactNode;
  /** Square size: sm 32 · md 40 · lg 48. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "ghost" */
  variant?: 'ghost' | 'secondary' | 'primary';
  /** Required for accessibility — describes the action. */
  'aria-label': string;
}

/** Square, icon-only control. Ghost by default; aria-label required. */
export function IconButton(props: IconButtonProps): JSX.Element;
