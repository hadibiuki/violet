import type { Config } from "tailwindcss";
// @ts-expect-error — token preset is a plain CommonJS module (no types).
import preset from "@violet/tokens/preset";

export default {
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
