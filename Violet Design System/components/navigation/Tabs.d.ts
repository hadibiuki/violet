import * as React from 'react';

export type TabItem = string | { value: string; label: React.ReactNode };

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabs as strings or {value,label}. */
  tabs: TabItem[];
  /** Active tab value (controlled). */
  value: string;
  /** Called with the next tab value. */
  onChange?: (value: string) => void;
}

/** Underline tab bar with animated indicator + arrow-key nav (role=tablist). */
export function Tabs(props: TabsProps): JSX.Element;
