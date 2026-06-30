import * as React from 'react';

export interface BreadcrumbItem { label: React.ReactNode; href?: string; }

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Trail items; the last renders as the current page (no link). */
  items: BreadcrumbItem[];
}

/** Breadcrumb trail — `Home › Products › {Model}`. Chevron mirrors in RTL. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
