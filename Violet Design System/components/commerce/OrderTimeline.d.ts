import * as React from 'react';

export type OrderStage = 'submitted' | 'reviewing' | 'approved' | 'shipped' | 'completed';

export interface OrderTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Active stage key. @default "submitted" */
  current?: OrderStage;
  /** Rejected order — trail ends with a red "Rejected" node. @default false */
  rejected?: boolean;
  /** Map of stage→timestamp string to show under each label. */
  times?: Partial<Record<string, string>>;
  /** Override stage labels (e.g. localized Persian). */
  labels?: Partial<Record<string, React.ReactNode>>;
  /** Layout. @default "vertical" */
  orientation?: 'vertical' | 'horizontal';
}

/**
 * B2B order pipeline stepper: Submitted → Reviewing → Approved → Shipped → Completed (or Rejected).
 * Done steps show ✓, current is filled, future are muted.
 */
export function OrderTimeline(props: OrderTimelineProps): JSX.Element;
