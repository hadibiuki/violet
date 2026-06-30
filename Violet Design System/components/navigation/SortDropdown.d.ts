import * as React from 'react';
import { SelectOption } from '../forms/Select';

export interface SortDropdownProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** Current sort value. */
  value?: string;
  /** Called with (value, event). */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Override options. Defaults to Newest / A–Z. */
  options?: SelectOption[];
}

/** "Sort" label + Select preset for catalog toolbars (Newest / A–Z by default). */
export function SortDropdown(props: SortDropdownProps): JSX.Element;
