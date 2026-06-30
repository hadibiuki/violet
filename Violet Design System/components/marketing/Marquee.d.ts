import * as React from 'react';

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Words or nodes to scroll. */
  items: React.ReactNode[];
  /** Seconds per loop (lower = faster). @default 28 */
  speed?: number;
  /** Glyph between items. @default "✦" */
  separator?: React.ReactNode;
}

/** Seamless scrolling band of words separated by the gold sparkle; pauses on hover, halts under reduced-motion. */
export function Marquee(props: MarqueeProps): JSX.Element;
