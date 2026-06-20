import type { Preview } from "@storybook/react-vite";
// The single source of truth — fonts, color/spacing/type tokens, dark theme, RTL.
import "@violet/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      options: {
        canvas: { name: "Canvas", value: "var(--vt-color-bg)" },
        surface: { name: "Surface", value: "var(--vt-color-surface)" },
        ink: { name: "Brand ink", value: "var(--vt-color-brand-ink)" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "canvas" },
  },
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    dir: {
      description: "Text direction",
      toolbar: {
        title: "Dir",
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme, dir } = context.globals;
      const root = document.documentElement;
      if (theme === "dark") root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
      root.setAttribute("dir", dir || "ltr");
      return Story();
    },
  ],
};

export default preview;
