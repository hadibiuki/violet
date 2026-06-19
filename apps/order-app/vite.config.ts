import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// CSR SPA behind auth — no SEO concern (docs/trade-offs.md TD-3).
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
