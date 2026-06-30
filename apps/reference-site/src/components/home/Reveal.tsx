"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Adds `.in` (see globals.css `.reveal`) when the element
 * scrolls into view. Honors prefers-reduced-motion via the CSS media query.
 */
export function Reveal({
  children,
  delay = 0,
  style,
  className,
}: {
  children: ReactNode;
  /** Stagger in ms, applied as transition-delay. */
  delay?: number;
  style?: CSSProperties;
  /** Extra classes merged after the internal `reveal` class. */
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
