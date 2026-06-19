import { useId } from "react";
import type * as React from "react";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Text label beside the track. */
  label?: React.ReactNode;
  /** On/off state (controlled). */
  checked?: boolean;
  /** Called with (nextChecked, event). */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** On/off toggle for binary settings; the knob slides on the inline axis (RTL-safe). */
export function Switch({ label, checked = false, disabled = false, onChange, id, style, ...rest }: SwitchProps) {
  const reactId = useId();
  const inputId = id || reactId;
  return (
    <label htmlFor={inputId} style={{ display: "inline-flex", alignItems: "center", gap: "var(--vt-space-3)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--vt-font-sans)", fontSize: "var(--vt-text-sm)", color: "var(--vt-color-text)", ...style }}>
      <span style={{ position: "relative", width: 40, height: 24, flex: "none" }}>
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked, e)}
          style={{ position: "absolute", opacity: 0, width: "100%", height: "100%", margin: 0, cursor: "inherit" }}
        />
        <span aria-hidden="true" className="vt-switch" style={{
          display: "block", width: 40, height: 24, borderRadius: "var(--vt-radius-pill)",
          background: checked ? "var(--vt-color-primary)" : "var(--vt-color-border-strong)",
          transition: "background var(--vt-duration-base)",
        }}>
          <span style={{
            position: "absolute", top: 3, insetInlineStart: checked ? 19 : 3, width: 18, height: 18, borderRadius: "50%",
            background: "#fff", boxShadow: "var(--vt-shadow-sm)", transition: "inset-inline-start var(--vt-duration-base) var(--vt-ease-standard)",
          }} />
        </span>
      </span>
      {label && <span>{label}</span>}
      <style>{`input:focus-visible + .vt-switch{ box-shadow: var(--vt-shadow-focus); }`}</style>
    </label>
  );
}
