import type * as React from "react";
import { VIOLET_MONOGRAM, VIOLET_WORDMARK } from "./brandmark-paths";

export interface BrandMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Layout. @default "lockup" */
  variant?: "lockup" | "horizontal" | "monogram" | "wordmark";
  /** "light" = aubergine on light · "ink" = gold on aubergine · "onDark" = gold + white. @default "light" */
  tone?: "light" | "ink" | "onDark";
  /** Overall size. @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** Wrap the monogram in a hairline gold medallion ring. @default false */
  framed?: boolean;
  /** Show the "COLLECTION 2026" kicker. @default false */
  tagline?: boolean;
}

/**
 * BrandMark — the Violet identity lockup, reconstructed from the brand card:
 * a calligraphic "V" monogram (Pinyon Script) over / beside the engraved
 * "VIOLET" Roman wordmark (Cinzel). Fully scalable (text in brand fonts) and
 * recolorable via the brand tokens — no raster.
 */
export function BrandMark({
  variant = "lockup",
  tone = "light",
  size = "md",
  framed = false,
  tagline = false,
  style,
  ...rest
}: BrandMarkProps) {
  void framed; // kept for API compatibility — the Violet mark draws no ring.
  const unit = { sm: 0.74, md: 1, lg: 1.5, xl: 2.3 }[size] || 1;

  const gold = "var(--vt-color-brand-gold)";
  const ink = "var(--vt-color-brand-ink)";
  const monoColor = tone === "light" ? ink : gold;
  const wordColor = tone === "light" ? ink : tone === "ink" ? gold : "#FFFFFF";
  const ruleColor = tone === "light" ? "var(--vt-color-border-strong)" : "rgba(230,180,83,.5)";
  const kickerColor = tone === "light" ? "var(--vt-color-accent-strong)" : gold;

  const monoSize = 64 * unit;
  const wordSize = 22 * unit;

  const Monogram = (
    <svg viewBox="0 0 109 74" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
      style={{ height: monoSize * 0.95, width: "auto", display: "inline-block", fill: monoColor }}
      dangerouslySetInnerHTML={{ __html: VIOLET_MONOGRAM }} />
  );

  // The Violet mark has no ring — the calligraphic V stands on its own.
  // `framed` is kept for API compatibility but no longer draws a circle.
  const FramedMonogram = Monogram;

  const Wordmark = (
    <svg viewBox="0 0 187 40" role="img" aria-label="VIOLET" xmlns="http://www.w3.org/2000/svg"
      style={{ height: wordSize * 1.18, width: "auto", display: "inline-block", fill: wordColor }}
      dangerouslySetInnerHTML={{ __html: VIOLET_WORDMARK }} />
  );

  const Kicker = tagline ? (
    <span
      style={{
        fontFamily: "var(--vt-font-sans)",
        fontWeight: 500,
        fontSize: 9.5 * unit,
        letterSpacing: `${0.42 * unit}em`,
        paddingInlineStart: `${0.42 * unit}em`,
        color: kickerColor,
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      Collection 2026
    </span>
  ) : null;

  if (variant === "monogram") {
    return (
      <span style={{ display: "inline-flex", ...style }} {...rest}>
        {FramedMonogram}
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span
        style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 * unit, ...style }}
        {...rest}
      >
        {Wordmark}
        {Kicker}
      </span>
    );
  }

  if (variant === "horizontal") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 14 * unit, ...style }} {...rest}>
        {FramedMonogram}
        <span style={{ display: "inline-flex", flexDirection: "column", gap: 4 * unit }}>
          {Wordmark}
          {Kicker}
        </span>
      </span>
    );
  }

  // default: 'lockup' — stacked medallion, like the card
  return (
    <span
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 * unit, ...style }}
      {...rest}
    >
      {FramedMonogram}
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 * unit }} aria-hidden={false}>
        <span style={{ width: 22 * unit, height: 1, background: ruleColor }} />
        {Wordmark}
        <span style={{ width: 22 * unit, height: 1, background: ruleColor }} />
      </span>
      {Kicker}
    </span>
  );
}
