import { notFound } from "next/navigation";

// Catch-all for unmatched paths under a locale (e.g. /en/wrongRoute).
// Without this, Next.js falls back to its default 404 instead of the
// localized not-found.tsx, because a nested not-found only renders for
// explicit notFound() calls — not for unmatched URLs. See next-intl docs.
export default function CatchAllNotFound() {
  notFound();
}
