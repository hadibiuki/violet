"use client";

import { useId, useState } from "react";
import type * as React from "react";

export interface UploadedImage {
  id: string;
  url: string;
  name?: string;
}

export interface ImageUploaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: string;
  hint?: string;
  value?: UploadedImage[];
  onChange?: (images: UploadedImage[]) => void;
  multiple?: boolean;
  max?: number;
  accept?: string;
  thumbSize?: number;
  addLabel?: string;
  removeLabel?: string;
  id?: string;
}

/** Controlled click-or-drop image field with previews, removal, and a maximum cap. */
export function ImageUploader({
  label,
  hint,
  value = [],
  onChange,
  multiple = true,
  max = 8,
  accept = "image/*",
  thumbSize = 74,
  addLabel = "Add",
  removeLabel = "Remove image",
  id,
  style,
  ...rest
}: ImageUploaderProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [dragging, setDragging] = useState(false);
  const atMax = value.length >= max;

  function readFiles(files: FileList | null) {
    if (!files?.length || !onChange) return;
    const available = multiple ? Math.max(0, max - value.length) : 1;
    const accepted = Array.from(files).slice(0, available);
    if (!accepted.length) return;

    Promise.all(
      accepted.map(
        (file) =>
          new Promise<UploadedImage>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                id: `${Date.now()}-${crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)}`,
                url: String(reader.result),
                name: file.name,
              });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
      ),
    ).then((images) => onChange(multiple ? [...value, ...images] : images));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--vt-space-2)",
        fontFamily: "var(--vt-font-sans)",
        textAlign: "start",
        ...style,
      }}
      {...rest}
    >
      {label && (
        <label
          htmlFor={inputId}
          style={{
            color: "var(--vt-color-text)",
            fontSize: "var(--vt-text-sm)",
            fontWeight: "var(--vt-weight-medium)",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--vt-space-3)" }}>
        {value.map((image) => (
          <div
            key={image.id}
            style={{
              position: "relative",
              width: thumbSize,
              height: thumbSize,
              flex: "none",
              overflow: "hidden",
              border: "var(--vt-border-hairline) solid var(--vt-color-border)",
              borderRadius: "var(--vt-radius-sm)",
            }}
          >
            {/* Consumer-provided local/remote preview; framework image optimization is not applicable. */}
            <img
              src={image.url}
              alt={image.name ?? ""}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
            />
            <button
              type="button"
              aria-label={removeLabel}
              onClick={() => onChange?.(value.filter((item) => item.id !== image.id))}
              style={{
                position: "absolute",
                insetBlockStart: 3,
                insetInlineEnd: 3,
                display: "grid",
                width: 24,
                height: 24,
                placeItems: "center",
                border: 0,
                borderRadius: "var(--vt-radius-pill)",
                color: "var(--vt-color-on-primary)",
                background: "var(--vt-scrim)",
                cursor: "pointer",
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        ))}
        {!atMax && (
          <label
            htmlFor={inputId}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              readFiles(event.dataTransfer.files);
            }}
            style={{
              display: "flex",
              width: thumbSize,
              height: thumbSize,
              flex: "none",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
              border: `var(--vt-border-thin) dashed ${
                dragging ? "var(--vt-color-primary)" : "var(--vt-color-border-strong)"
              }`,
              borderRadius: "var(--vt-radius-sm)",
              color: dragging ? "var(--vt-color-primary)" : "var(--vt-color-text-muted)",
              background: dragging ? "var(--vt-color-primary-subtle)" : "transparent",
              cursor: "pointer",
              transition: "all var(--vt-duration-base) var(--vt-ease-standard)",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 20 }}>＋</span>
            <span style={{ fontSize: "var(--vt-text-xs)" }}>{addLabel}</span>
          </label>
        )}
        <input
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(event) => {
            readFiles(event.currentTarget.files);
            event.currentTarget.value = "";
          }}
          style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}
        />
      </div>
      {hint && (
        <span style={{ color: "var(--vt-color-text-muted)", fontSize: "var(--vt-text-xs)" }}>
          {hint}
        </span>
      )}
    </div>
  );
}
