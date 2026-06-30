import * as React from 'react';

export interface QuantityStepperProps {
  /** Current quantity (controlled). */
  value: number;
  /** Called with the clamped next value. */
  onChange?: (next: number) => void;
  /** Hard minimum. @default 1 */
  min?: number;
  /** Hard maximum. @default 9999 */
  max?: number;
  /** Increment. @default 1 */
  step?: number;
  /** Minimum order quantity — clamps the low bound and shows "Minimum N units". */
  moq?: number;
  style?: React.CSSProperties;
}

/** [−] value [+] stepper for the B2B PDP & cart; enforces MOQ so orders stay valid. */
export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
