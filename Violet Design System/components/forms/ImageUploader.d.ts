import * as React from 'react';

export interface UploadedImage {
  /** Stable id for the preview (used as React key + for removal). */
  id: string;
  /** Data URL (or remote URL) of the image. */
  url: string;
  /** Original file name, when read from disk. */
  name?: string;
}

export interface ImageUploaderProps {
  /** Persistent label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Current images (controlled). */
  value?: UploadedImage[];
  /** Called with the next image array on add/remove. */
  onChange?: (images: UploadedImage[]) => void;
  /** Allow selecting/holding more than one image. @default true */
  multiple?: boolean;
  /** Maximum number of images. @default 8 */
  max?: number;
  /** Accepted file types (input `accept`). @default "image/*" */
  accept?: string;
  /** Thumbnail / dropzone square size in px. @default 74 */
  thumbSize?: number;
  /** Caption under the add tile. @default "Add" */
  addLabel?: string;
  /** Field id for the underlying file input. */
  id?: string;
  style?: React.CSSProperties;
}

/** Click-or-drag image input with thumbnail previews, removal, and a max cap. RTL-safe. */
export function ImageUploader(props: ImageUploaderProps): JSX.Element;
