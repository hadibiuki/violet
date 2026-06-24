/**
 * Responsive image contract (docs/trade-offs.md TD-7).
 *
 * The site serves 1000+ models / 4000+ frames, so images are the heaviest part
 * of the payload. The backend emits a set of pre-rendered sources per logical
 * image; the frontend picks one via `srcset`/`sizes`. A tiny inline LQIP covers
 * the load gap.
 */

export type ImageFormat = "avif" | "webp" | "jpeg";

/** One concrete rendered source: a URL at a known pixel width and format. */
export interface ImageSource {
  src: string;
  /** Intrinsic width in px — feeds the `srcset` width descriptor. */
  width: number;
  format: ImageFormat;
}

/**
 * A single logical image as a set of sources plus the metadata the frontend
 * needs to render it accessibly and without layout shift.
 */
export interface ResponsiveImage {
  /** Stable id so cart/order lines can reference an image without inlining it. */
  id: string;
  /** All rendered variants, smallest-to-largest. Used to build `srcset`. */
  sources: ImageSource[];
  /** Intrinsic aspect ratio, e.g. "1/1" for product shots, "21/9" for banners. */
  aspectRatio: string;
  /** Localized alt text. Required — never decorative for product photography. */
  alt: string;
  /** Low-quality image placeholder: a base64 data URI shown while loading. */
  lqip?: string;
}
