import * as React from 'react';

/**
 * The catalog product card — square reserved image, badge, name + mono SKU, optional
 * B2B price/MOQ. Whole card links to the PDP; hover lifts and swaps image.
 */
export interface ProductCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Model name, e.g. "Chronograph Classic 42". */
  name: string;
  /** Mono model code, e.g. "VLT-2601". */
  sku?: string;
  /** Square product image URL (reserved 1/1). */
  image?: string;
  /** Second image revealed on hover (site catalog behaviour). */
  hoverImage?: string;
  /** Corner badge. */
  badge?: 'new' | 'limited' | null;
  /** Price string for B2B / featured cards, e.g. "$1,250". */
  price?: string;
  /** Unit suffix after price. @default "/ unit" */
  priceUnit?: string;
  /** Minimum order quantity (B2B). */
  moq?: number;
  /** Dim + show an "Out of stock" chip (B2B). @default false */
  unavailable?: boolean;
  /** Optional nested action node (e.g. a B2B "Add" Button/IconButton). */
  action?: React.ReactNode;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
