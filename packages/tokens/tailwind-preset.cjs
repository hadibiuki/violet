/* =============================================================================
   VIOLET · Tailwind preset
   -----------------------------------------------------------------------------
   Maps the semantic CSS variables from tokens.css onto Tailwind's theme so you
   can write `bg-surface text-muted rounded-lg shadow-card` etc.

   Usage (tailwind.config.js):
     module.exports = {
       presets: [require('./design-system/tokens/tailwind.preset.js')],
       content: ['./src/**/*.{ts,tsx}'],
     }

   Requirements:
     - import tokens.css once at the app root (it defines the CSS variables).
     - install `tailwindcss-logical` (or use Tailwind v3.3+ logical utilities)
       so `ps-4 / pe-4 / ms-2 / start-0` work for RTL. See foundations.md › RTL.
============================================================================= */
const v = (name) => `var(--vt-${name})`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // Override defaults so only the design-system scale is reachable.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: v('white'),
      black: v('black'),

      // Semantic (preferred in app code)
      bg:               v('color-bg'),
      surface:          v('color-surface'),
      'surface-sunken': v('color-surface-sunken'),
      'surface-raised': v('color-surface-raised'),
      'surface-inverse':v('color-surface-inverse'),

      text: {
        DEFAULT: v('color-text'),
        strong:  v('color-text-strong'),
        muted:   v('color-text-muted'),
        subtle:  v('color-text-subtle'),
        'on-brand': v('color-text-on-brand'),
        inverse: v('color-text-inverse'),
      },

      border: {
        DEFAULT: v('color-border'),
        strong:  v('color-border-strong'),
        brand:   v('color-border-brand'),
      },
      divider: v('color-divider'),
      link:    v('color-link'),

      primary: {
        DEFAULT: v('color-primary'),
        hover:   v('color-primary-hover'),
        active:  v('color-primary-active'),
        subtle:  v('color-primary-subtle'),
      },
      'on-primary': v('color-on-primary'),

      accent: {
        DEFAULT: v('color-accent'),
        strong:  v('color-accent-strong'),
        subtle:  v('color-accent-subtle'),
      },
      'on-accent': v('color-on-accent'),

      success: { DEFAULT: v('color-success'), bg: v('color-success-bg') },
      warning: { DEFAULT: v('color-warning'), bg: v('color-warning-bg') },
      danger:  { DEFAULT: v('color-danger'),  bg: v('color-danger-bg') },
      info:    { DEFAULT: v('color-info'),    bg: v('color-info-bg') },

      // Order-status (B2B)
      status: {
        submitted: v('color-status-submitted'),
        reviewing: v('color-status-reviewing'),
        approved:  v('color-status-approved'),
        shipped:   v('color-status-shipped'),
        completed: v('color-status-completed'),
        rejected:  v('color-status-rejected'),
      },

      // Raw violet/gold ramps — escape hatch for illustration/marketing only.
      violet: {
        50: v('violet-50'), 100: v('violet-100'), 200: v('violet-200'), 300: v('violet-300'),
        400: v('violet-400'), 500: v('violet-500'), 600: v('violet-600'), 700: v('violet-700'),
        800: v('violet-800'), 900: v('violet-900'), 950: v('violet-950'),
      },
      gold: {
        50: v('gold-50'), 100: v('gold-100'), 200: v('gold-200'), 300: v('gold-300'),
        400: v('gold-400'), 500: v('gold-500'), 600: v('gold-600'),
      },
      ink: {
        50: v('ink-50'), 100: v('ink-100'), 150: v('ink-150'), 200: v('ink-200'), 300: v('ink-300'),
        400: v('ink-400'), 500: v('ink-500'), 600: v('ink-600'), 700: v('ink-700'),
        800: v('ink-800'), 900: v('ink-900'), 950: v('ink-950'),
      },
    },

    fontFamily: {
      display: [v('font-display')],
      sans:    [v('font-ui')],   // resolves per-locale (Inter / Vazirmatn / IBM Plex Arabic)
      ui:      [v('font-ui')],
      mono:    [v('font-mono')],
    },

    fontSize: {
      '2xs':  [v('text-2xs'),  { lineHeight: v('leading-normal') }],
      xs:     [v('text-xs'),   { lineHeight: v('leading-normal') }],
      sm:     [v('text-sm'),   { lineHeight: v('leading-normal') }],
      base:   [v('text-base'), { lineHeight: v('leading-normal') }],
      lg:     [v('text-lg'),   { lineHeight: v('leading-snug') }],
      xl:     [v('text-xl'),   { lineHeight: v('leading-snug') }],
      '2xl':  [v('text-2xl'),  { lineHeight: v('leading-tight') }],
      '3xl':  [v('text-3xl'),  { lineHeight: v('leading-tight') }],
      '4xl':  [v('text-4xl'),  { lineHeight: v('leading-tight') }],
      '5xl':  [v('text-5xl'),  { lineHeight: v('leading-none') }],
      '6xl':  [v('text-6xl'),  { lineHeight: v('leading-none') }],
    },

    fontWeight: {
      light: v('weight-light'), normal: v('weight-regular'), medium: v('weight-medium'),
      semibold: v('weight-semibold'), bold: v('weight-bold'),
    },

    letterSpacing: {
      tighter: v('tracking-tighter'), tight: v('tracking-tight'), normal: v('tracking-normal'),
      wide: v('tracking-wide'), wider: v('tracking-wider'),
    },

    borderRadius: {
      none: v('radius-none'), sm: v('radius-sm'), md: v('radius-md'), lg: v('radius-lg'),
      xl: v('radius-xl'), '2xl': v('radius-2xl'), full: v('radius-pill'),
    },

    boxShadow: {
      xs: v('shadow-xs'), sm: v('shadow-sm'), md: v('shadow-md'), lg: v('shadow-lg'),
      xl: v('shadow-xl'), '2xl': v('shadow-2xl'),
      card: v('shadow-card'), 'card-hover': v('shadow-card-hover'),
      popover: v('shadow-popover'), focus: v('shadow-focus'), none: 'none',
    },

    zIndex: {
      base: v('z-base'), raised: v('z-raised'), sticky: v('z-sticky'), dropdown: v('z-dropdown'),
      overlay: v('z-overlay'), drawer: v('z-drawer'), modal: v('z-modal'),
      toast: v('z-toast'), tooltip: v('z-tooltip'),
    },

    transitionDuration: {
      instant: v('duration-instant'), fast: v('duration-fast'), base: v('duration-base'),
      slow: v('duration-slow'), slower: v('duration-slower'),
    },
    transitionTimingFunction: {
      standard: v('ease-standard'), out: v('ease-out'), in: v('ease-in'), spring: v('ease-spring'),
    },

    extend: {
      spacing: {
        1: v('space-1'), 2: v('space-2'), 3: v('space-3'), 4: v('space-4'), 5: v('space-5'),
        6: v('space-6'), 8: v('space-8'), 10: v('space-10'), 12: v('space-12'), 16: v('space-16'),
        20: v('space-20'), 24: v('space-24'), 32: v('space-32'),
      },
      maxWidth: {
        container: v('container-2xl'),
      },
      backgroundImage: {
        'gradient-brand': v('gradient-brand'),
        'gradient-hero':  v('gradient-hero'),
        'gradient-gold':  v('gradient-gold'),
      },
      screens: {
        sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
      },
    },
  },
};
