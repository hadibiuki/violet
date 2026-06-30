import * as React from 'react';

/**
 * The Violet identity lockup — calligraphic "V" monogram (Pinyon Script) with
 * the engraved "VIOLET" Roman wordmark (Cinzel), reconstructed from the brand card.
 * Scalable + recolorable via brand tokens.
 */
export interface BrandMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Layout. @default "lockup" */
  variant?: 'lockup' | 'horizontal' | 'monogram' | 'wordmark';
  /** "light" = aubergine on light · "ink" = gold on aubergine · "onDark" = gold + white. @default "light" */
  tone?: 'light' | 'ink' | 'onDark';
  /** Overall size. @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Wrap the monogram in a hairline gold medallion ring. @default false */
  framed?: boolean;
  /** Show the "COLLECTION 2026" kicker. @default false */
  tagline?: boolean;
}

export function BrandMark(props: BrandMarkProps): JSX.Element;
