/**
 * Violet Tailwind preset — maps the `--vt-*` CSS variables (tokens.css) onto
 * Tailwind's theme so utilities resolve to tokens, keeping CSS vars the single
 * source of truth and themeable at runtime (docs/trade-offs.md TD-12).
 *
 * Consumed by each app's tailwind.config via `presets: [require(...)]`.
 * Every value references a token — never a raw hex/px — so `[data-theme="dark"]`
 * and `[lang]`/`[dir]` overrides in tokens.css flow through automatically.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // --- raw ramps (escape hatch; prefer semantic roles below) ---
        violet: {
          50: "var(--vt-violet-50)", 100: "var(--vt-violet-100)", 200: "var(--vt-violet-200)",
          300: "var(--vt-violet-300)", 400: "var(--vt-violet-400)", 500: "var(--vt-violet-500)",
          600: "var(--vt-violet-600)", 700: "var(--vt-violet-700)", 800: "var(--vt-violet-800)",
          900: "var(--vt-violet-900)", 950: "var(--vt-violet-950)",
        },
        gold: {
          50: "var(--vt-gold-50)", 100: "var(--vt-gold-100)", 200: "var(--vt-gold-200)",
          300: "var(--vt-gold-300)", 400: "var(--vt-gold-400)", 500: "var(--vt-gold-500)",
          600: "var(--vt-gold-600)",
        },
        ink: {
          50: "var(--vt-ink-50)", 100: "var(--vt-ink-100)", 150: "var(--vt-ink-150)",
          200: "var(--vt-ink-200)", 300: "var(--vt-ink-300)", 400: "var(--vt-ink-400)",
          500: "var(--vt-ink-500)", 600: "var(--vt-ink-600)", 700: "var(--vt-ink-700)",
          800: "var(--vt-ink-800)", 900: "var(--vt-ink-900)", 950: "var(--vt-ink-950)",
        },

        // --- semantic roles (use THESE in UI) ---
        bg: "var(--vt-color-bg)",
        surface: {
          DEFAULT: "var(--vt-color-surface)",
          sunken: "var(--vt-color-surface-sunken)",
          raised: "var(--vt-color-surface-raised)",
          inverse: "var(--vt-color-surface-inverse)",
        },
        content: {
          DEFAULT: "var(--vt-color-text)",
          strong: "var(--vt-color-text-strong)",
          muted: "var(--vt-color-text-muted)",
          subtle: "var(--vt-color-text-subtle)",
          "on-brand": "var(--vt-color-text-on-brand)",
        },
        link: "var(--vt-color-link)",
        border: {
          DEFAULT: "var(--vt-color-border)",
          strong: "var(--vt-color-border-strong)",
        },
        divider: "var(--vt-color-divider)",
        primary: {
          DEFAULT: "var(--vt-color-primary)",
          hover: "var(--vt-color-primary-hover)",
          active: "var(--vt-color-primary-active)",
          subtle: "var(--vt-color-primary-subtle)",
          on: "var(--vt-color-on-primary)",
        },
        brand: {
          ink: "var(--vt-color-brand-ink)",
          gold: "var(--vt-color-brand-gold)",
          "on-ink": "var(--vt-color-on-brand-ink)",
        },
        accent: {
          DEFAULT: "var(--vt-color-accent)",
          strong: "var(--vt-color-accent-strong)",
          on: "var(--vt-color-on-accent)",
        },
        success: { DEFAULT: "var(--vt-color-success)", bg: "var(--vt-color-success-bg)" },
        warning: { DEFAULT: "var(--vt-color-warning)", bg: "var(--vt-color-warning-bg)" },
        danger: { DEFAULT: "var(--vt-color-danger)", bg: "var(--vt-color-danger-bg)" },
        info: { DEFAULT: "var(--vt-color-info)", bg: "var(--vt-color-info-bg)" },

        // --- B2B order-pipeline status ---
        status: {
          submitted: "var(--vt-color-status-submitted)",
          "submitted-bg": "var(--vt-color-status-submitted-bg)",
          reviewing: "var(--vt-color-status-reviewing)",
          "reviewing-bg": "var(--vt-color-status-reviewing-bg)",
          approved: "var(--vt-color-status-approved)",
          "approved-bg": "var(--vt-color-status-approved-bg)",
          shipped: "var(--vt-color-status-shipped)",
          "shipped-bg": "var(--vt-color-status-shipped-bg)",
          completed: "var(--vt-color-status-completed)",
          "completed-bg": "var(--vt-color-status-completed-bg)",
          rejected: "var(--vt-color-status-rejected)",
          "rejected-bg": "var(--vt-color-status-rejected-bg)",
        },
        "badge-new": "var(--vt-color-badge-new)",
        "badge-limited": "var(--vt-color-badge-limited)",
      },

      ringColor: { DEFAULT: "var(--vt-color-focus-ring)" },

      fontFamily: {
        wordmark: "var(--vt-font-wordmark)",
        script: "var(--vt-font-script)",
        display: "var(--vt-font-display)",
        sans: "var(--vt-font-sans)",
        ui: "var(--vt-font-ui)",
        fa: "var(--vt-font-fa)",
        ar: "var(--vt-font-ar)",
        "ar-display": "var(--vt-font-ar-display)",
        mono: "var(--vt-font-mono)",
      },

      fontSize: {
        "2xs": "var(--vt-text-2xs)",
        xs: "var(--vt-text-xs)",
        sm: "var(--vt-text-sm)",
        base: "var(--vt-text-base)",
        lg: "var(--vt-text-lg)",
        xl: "var(--vt-text-xl)",
        "2xl": "var(--vt-text-2xl)",
        "3xl": "var(--vt-text-3xl)",
        "4xl": "var(--vt-text-4xl)",
        "5xl": "var(--vt-text-5xl)",
        "6xl": "var(--vt-text-6xl)",
      },

      lineHeight: {
        tight: "var(--vt-leading-tight)",
        snug: "var(--vt-leading-snug)",
        normal: "var(--vt-leading-normal)",
        loose: "var(--vt-leading-loose)",
      },

      fontWeight: {
        light: "var(--vt-weight-light)",
        normal: "var(--vt-weight-regular)",
        medium: "var(--vt-weight-medium)",
        semibold: "var(--vt-weight-semibold)",
      },

      letterSpacing: {
        display: "var(--vt-tracking-display)",
        normal: "var(--vt-tracking-normal)",
        wide: "var(--vt-tracking-wide)",
        wider: "var(--vt-tracking-wider)",
      },

      spacing: {
        0: "var(--vt-space-0)", 1: "var(--vt-space-1)", 2: "var(--vt-space-2)", 3: "var(--vt-space-3)",
        4: "var(--vt-space-4)", 5: "var(--vt-space-5)", 6: "var(--vt-space-6)", 8: "var(--vt-space-8)",
        10: "var(--vt-space-10)", 12: "var(--vt-space-12)", 16: "var(--vt-space-16)",
        20: "var(--vt-space-20)", 24: "var(--vt-space-24)", 32: "var(--vt-space-32)",
        // control + icon sizes (usable as h-/w-)
        "icon-sm": "var(--vt-size-icon-sm)", "icon-md": "var(--vt-size-icon-md)",
        "icon-lg": "var(--vt-size-icon-lg)", "icon-xl": "var(--vt-size-icon-xl)",
        "control-sm": "var(--vt-size-control-sm)", "control-md": "var(--vt-size-control-md)",
        "control-lg": "var(--vt-size-control-lg)",
      },

      borderRadius: {
        none: "var(--vt-radius-none)",
        sm: "var(--vt-radius-sm)",
        md: "var(--vt-radius-md)",
        lg: "var(--vt-radius-lg)",
        xl: "var(--vt-radius-xl)",
        "2xl": "var(--vt-radius-2xl)",
        pill: "var(--vt-radius-pill)",
        full: "var(--vt-radius-pill)",
      },

      borderWidth: {
        hairline: "var(--vt-border-hairline)",
        thin: "var(--vt-border-thin)",
        thick: "var(--vt-border-thick)",
      },

      maxWidth: {
        "container-sm": "var(--vt-container-sm)",
        "container-md": "var(--vt-container-md)",
        "container-lg": "var(--vt-container-lg)",
        "container-xl": "var(--vt-container-xl)",
        "container-2xl": "var(--vt-container-2xl)",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      boxShadow: {
        xs: "var(--vt-shadow-xs)",
        sm: "var(--vt-shadow-sm)",
        md: "var(--vt-shadow-md)",
        lg: "var(--vt-shadow-lg)",
        xl: "var(--vt-shadow-xl)",
        "2xl": "var(--vt-shadow-2xl)",
        focus: "var(--vt-shadow-focus)",
      },

      transitionDuration: {
        fast: "var(--vt-duration-fast)",
        base: "var(--vt-duration-base)",
        slow: "var(--vt-duration-slow)",
        slower: "var(--vt-duration-slower)",
      },

      transitionTimingFunction: {
        standard: "var(--vt-ease-standard)",
        emphasized: "var(--vt-ease-emphasized)",
        out: "var(--vt-ease-out)",
      },

      zIndex: {
        base: "var(--vt-z-base)",
        sticky: "var(--vt-z-sticky)",
        dropdown: "var(--vt-z-dropdown)",
        overlay: "var(--vt-z-overlay)",
        modal: "var(--vt-z-modal)",
        toast: "var(--vt-z-toast)",
        tooltip: "var(--vt-z-tooltip)",
      },

      aspectRatio: {
        product: "1 / 1",
        banner: "21 / 9",
        line: "3 / 4",
      },
    },
  },
};
