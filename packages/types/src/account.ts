/**
 * B2B accounts. The order app is authenticated wholesale-only: every user is a
 * dealer or an admin (docs/user-flows.md). The reference site is anonymous and
 * needs none of this.
 */

import type { CurrencyCode, ISODateString } from "./primitives";

export const USER_ROLES = ["dealer", "admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];

/** A dealer account approval/activity state, gating catalog and ordering. */
export type AccountStatus = "pending" | "active" | "suspended";

/** An authenticated order-app user. */
export interface User {
  id: string;
  role: UserRole;
  /** Display name of the contact person. */
  name: string;
  email: string;
  status: AccountStatus;
  /** Wholesale company this user orders on behalf of (absent for admins). */
  dealerId?: string;
}

/** A wholesale customer organization. */
export interface Dealer {
  id: string;
  companyName: string;
  /** Settlement currency for this dealer's pricing and invoices. */
  currency: CurrencyCode;
  status: AccountStatus;
  createdAt: ISODateString;
}
