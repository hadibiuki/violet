import * as React from 'react';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Current page (1-based). */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  /** Called with the next page number. */
  onChange?: (page: number) => void;
  /** Page numbers shown either side of the current page. @default 1 */
  siblings?: number;
}

/** Page navigation with prev/next + truncated page numbers (alternative to Load-more). Arrows mirror in RTL. */
export function Pagination(props: PaginationProps): JSX.Element;
