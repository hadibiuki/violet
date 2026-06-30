import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials fallback and the aria-label. */
  name?: string;
  /** Image URL; when absent, initials render on a violet gradient. */
  src?: string;
  /** sm 28 · md 36 · lg 48. @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Circular user/dealer avatar — image, or initials on the brand gradient. */
export function Avatar(props: AvatarProps): JSX.Element;
