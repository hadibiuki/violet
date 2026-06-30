import * as React from 'react';

export interface CartLineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  sku: string;
  image?: string;
  /** Unit price (number). */
  price: number;
  /** Quantity. */
  qty: number;
  /** Minimum order quantity (clamps the stepper). */
  moq?: number;
  /** Format a number → currency string. @default `$1,234` */
  currency?: (n: number) => string;
  /** Show the quantity stepper (cart) vs read-only "× N" (summaries). @default true */
  editable?: boolean;
  /** Quantity change handler (editable). */
  onQty?: (n: number) => void;
  /** Remove handler — renders a trash button. */
  onRemove?: () => void;
}

/** A B2B cart / request-list row: thumb, name+SKU, MOQ stepper, line total, remove. Built on QuantityStepper. */
export function CartLineItem(props: CartLineItemProps): JSX.Element;
