import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tone — sets the accent bar + icon. @default "success" */
  tone?: 'success' | 'error' | 'warning' | 'info';
  /** Bold first line. */
  title?: React.ReactNode;
  /** Secondary line. */
  description?: React.ReactNode;
  /** When set, shows a dismiss ×. */
  onClose?: () => void;
  /** Override the tone's default Lucide icon. */
  icon?: React.ReactNode;
}

export interface ToastViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Anchor corner. @default "bottom-end" */
  position?: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
  children?: React.ReactNode;
}

/** Transient notice with a tone accent bar + icon (never colour-only). */
export function Toast(props: ToastProps): JSX.Element;
/** Fixed stack that positions toasts; mount once near the root. */
export function ToastViewport(props: ToastViewportProps): JSX.Element;
