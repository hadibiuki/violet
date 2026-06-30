import React from 'react';

/**
 * ImageUploader — click-or-drag image field with thumbnail previews.
 * Controlled via `value` (array of {id, url, name?}) / `onChange`. Reads the
 * selected files to data URLs internally, enforces `max`, and supports single
 * or multiple selection. Matches Input/Select (label above, hint below, RTL-safe).
 */
export function ImageUploader({
  label,
  hint,
  value = [],
  onChange,
  multiple = true,
  max = 8,
  accept = 'image/*',
  thumbSize = 74,
  addLabel = 'Add',
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [drag, setDrag] = React.useState(false);
  const atMax = value.length >= max;

  const readFiles = (fileList) => {
    const files = Array.from(fileList || []);
    if (!files.length || !onChange) return;
    const room = multiple ? Math.max(0, max - value.length) : 1;
    const slice = files.slice(0, room);
    if (!slice.length) return;
    let pending = slice.length;
    const added = [];
    slice.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        added.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, url: ev.target.result, name: file.name });
        if (--pending === 0) onChange(multiple ? [...value, ...added] : added);
      };
      reader.readAsDataURL(file);
    });
  };

  const remove = (rid) => onChange && onChange(value.filter((x) => x.id !== rid));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vt-space-2)', fontFamily: 'var(--vt-font-sans)', textAlign: 'start', ...style }} {...rest}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--vt-text-sm)', fontWeight: 'var(--vt-weight-medium)', color: 'var(--vt-color-text)' }}>{label}</label>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--vt-space-3)' }}>
        {value.map((img) => (
          <div key={img.id} style={{ position: 'relative', width: thumbSize, height: thumbSize, flex: 'none', borderRadius: 'var(--vt-radius-sm)', overflow: 'hidden', border: '1px solid var(--vt-color-border)' }}>
            <img src={img.url} alt={img.name || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <button
              type="button" onClick={() => remove(img.id)} aria-label="Remove image"
              style={{ position: 'absolute', top: 3, insetInlineEnd: 3, width: 20, height: 20, border: 'none', borderRadius: '50%', background: 'rgba(13,10,30,.62)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', lineHeight: 0 }}
            >
              <i data-lucide="x" style={{ width: 12, height: 12 }} />
            </button>
          </div>
        ))}
        {!atMax && (
          <label
            htmlFor={inputId}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); readFiles(e.dataTransfer.files); }}
            style={{
              width: thumbSize, height: thumbSize, flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, cursor: 'pointer',
              color: drag ? 'var(--vt-color-primary)' : 'var(--vt-color-text-muted)',
              border: `1.5px dashed ${drag ? 'var(--vt-color-primary)' : 'var(--vt-color-border-strong)'}`,
              borderRadius: 'var(--vt-radius-sm)', background: drag ? 'var(--vt-color-primary-subtle)' : 'transparent',
              transition: 'border-color var(--vt-duration-base), background var(--vt-duration-base), color var(--vt-duration-base)',
            }}
          >
            <i data-lucide="image-plus" style={{ width: 19, height: 19 }} />
            <span style={{ fontSize: 'var(--vt-text-xs)' }}>{addLabel}</span>
          </label>
        )}
        <input
          id={inputId} type="file" accept={accept} multiple={multiple}
          onChange={(e) => { readFiles(e.target.files); e.target.value = ''; }}
          style={{ display: 'none' }}
        />
      </div>
      {hint && <span style={{ fontSize: 'var(--vt-text-xs)', color: 'var(--vt-color-text-muted)' }}>{hint}</span>}
    </div>
  );
}
