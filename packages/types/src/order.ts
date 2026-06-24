/**
 * B2B order lifecycle. The status union here is the single source of truth for
 * the pipeline — `@violet/ui`'s OrderStatusPill / OrderTimeline render exactly
 * these values, and the admin panel transitions between them.
 */

import type { ISODateString, Money } from "./primitives";
import type { Sku } from "./product";

/**
 * The happy-path pipeline, in order. `rejected` is a terminal off-ramp that can
 * follow `submitted` or `reviewing`, so it is not part of this array.
 */
export const ORDER_PIPELINE = [
  "submitted",
  "reviewing",
  "approved",
  "shipped",
  "completed",
] as const;
export type PipelineStatus = (typeof ORDER_PIPELINE)[number];

/** Every status an order can hold, including the rejected terminal state. */
export type OrderStatus = PipelineStatus | "rejected";

/** A frozen snapshot of one cart line at order-submission time. */
export interface OrderLine {
  sku: Sku;
  name: string;
  qty: number;
  /** Unit price captured at submit — orders never re-price after the fact. */
  unitPrice: Money;
  /** `unitPrice.amount * qty`, denormalized for invoices. */
  lineTotal: Money;
}

/** One transition in an order's history, for the timeline and audit trail. */
export interface OrderEvent {
  status: OrderStatus;
  at: ISODateString;
  /** Admin/actor note, e.g. a rejection reason. */
  note?: string;
}

/** A submitted wholesale order and its lifecycle. */
export interface Order {
  id: string;
  /** Human-facing reference, e.g. "VLT-O-10248". */
  reference: string;
  dealerId: string;
  status: OrderStatus;
  lines: OrderLine[];
  total: Money;
  submittedAt: ISODateString;
  /** Chronological status history; the latest entry matches `status`. */
  history: OrderEvent[];
  /** Set when `status === "rejected"`. */
  rejectionReason?: string;
}

/** A billing document derived from a completed/approved order. */
export interface Invoice {
  id: string;
  /** Human-facing number, e.g. "INV-2026-0248". */
  number: string;
  orderId: string;
  issuedAt: ISODateString;
  total: Money;
  status: "due" | "paid" | "overdue";
}

/** Whether a status sits on the happy-path pipeline (vs. rejected). */
export function isPipelineStatus(status: OrderStatus): status is PipelineStatus {
  return (ORDER_PIPELINE as readonly string[]).includes(status);
}
