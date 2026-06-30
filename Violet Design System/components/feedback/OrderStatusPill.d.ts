import * as React from 'react';

export type OrderStatus = 'submitted' | 'reviewing' | 'approved' | 'shipped' | 'completed' | 'rejected';

/**
 * B2B order pipeline status pill — colored bg/fg per stage with a dot or icon and label.
 * Submitted → Reviewing → Approved → Shipped → Completed (+ Rejected).
 */
export interface OrderStatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pipeline stage. @default "submitted" */
  status?: OrderStatus;
  /** Override the default label text (e.g. localized Persian). */
  label?: string;
  /** Use a Lucide status icon instead of the dot. @default false */
  withIcon?: boolean;
}

export function OrderStatusPill(props: OrderStatusPillProps): JSX.Element;
