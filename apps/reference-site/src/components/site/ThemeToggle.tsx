"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ onHero = false }: { onHero?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("violet-theme");
    const initial = stored === "dark" || stored === "light"
      ? stored
      : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("violet-theme", next);
  }

  return (
    <button
      type="button"
      className="vt-theme-toggle"
      aria-label={theme === "light" ? "Use dark theme" : "Use light theme"}
      aria-pressed={theme === "dark"}
      onClick={toggle}
      style={{
        width: 38,
        height: 38,
        border: `1px solid ${onHero ? "rgba(255,255,255,.24)" : "var(--vt-color-border)"}`,
        borderRadius: "var(--vt-radius-pill)",
        color: onHero ? "#fff" : "var(--vt-color-text)",
        background: onHero ? "rgba(255,255,255,.08)" : "var(--vt-color-surface)",
        cursor: "pointer",
      }}
    >
      <span aria-hidden="true">{theme === "light" ? "◐" : "○"}</span>
    </button>
  );
}
