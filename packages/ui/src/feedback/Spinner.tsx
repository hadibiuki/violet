import type * as React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. @default 20 */
  size?: number;
  /** Ring thickness in px. @default 2 */
  thickness?: number;
  /** Accessible label. @default "Loading" */
  label?: string;
}

/**
 * Spinner — indeterminate loading ring in `currentColor`. Inherits text color;
 * set `color` on a parent or pass `style={{color}}`.
 */
export function Spinner({ size = 20, thickness = 2, label = "Loading", style, ...rest }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} style={{ display: "inline-flex", color: "var(--vt-color-primary)", ...style }} {...rest}>
      <span style={{
        width: size, height: size, borderRadius: "50%", display: "block",
        border: `${thickness}px solid currentColor`, borderTopColor: "transparent",
        opacity: 0.9, animation: "vt-spin 0.7s linear infinite",
      }} />
      <style>{`@keyframes vt-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
