import * as React from 'react';

export interface InvoiceRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Line description / product name (or the label on a total row). */
  description?: React.ReactNode;
  /** Mono SKU under the description. */
  sku?: string;
  /** Quantity. */
  qty?: React.ReactNode;
  /** Unit price (number). */
  unitPrice?: number;
  /** Line amount, or grand total (number). */
  amount?: number;
  /** Number → currency string. @default `$1,234` */
  currency?: (n: number) => string;
  /** Render the column header row. @default false */
  header?: boolean;
  /** Render a bold total row (description + amount only). @default false */
  total?: boolean;
}

/** One line of a proforma / invoice — description, qty, unit price, amount; plus header & total variants. */
export function InvoiceRow(props: InvoiceRowProps): JSX.Element;
