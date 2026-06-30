import * as React from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Close handler — fired by Esc, backdrop click, and the × button. */
  onClose?: () => void;
  /** Display-face title. */
  title?: React.ReactNode;
  /** Sub-title line. */
  description?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer node — typically right-aligned Buttons. */
  footer?: React.ReactNode;
  /** Max width: sm 400 · md 520 · lg 720. @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Centered dialog over a scrim — Esc/backdrop close, scroll lock, animated entrance. Needs Lucide for ×. */
export function Modal(props: ModalProps): JSX.Element;
