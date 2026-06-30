import * as React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Gold uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Display-face headline (may include <em> for the violet accent word). */
  title?: React.ReactNode;
  /** Supporting lead paragraph. */
  lead?: React.ReactNode;
  /** Action nodes (Buttons) row. */
  actions?: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: 'left' | 'center';
  /** Minimum height in px. @default 520 */
  minHeight?: number;
  /** Extra content below the lead (e.g. a hero image/motif). */
  children?: React.ReactNode;
}

/**
 * Celestial brand hero — ink-950 gradient + drifting aurora, eyebrow/title/lead/actions.
 */
export function Hero(props: HeroProps): JSX.Element;
