import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "@violet/tokens/tokens.css";
import "./index.css";
import { App } from "./App";
import { StoreProvider } from "./state/store";

// Server-state via TanStack Query (TD-9); client state (auth/cart) via StoreProvider.
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000 } },
});

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>,
);
