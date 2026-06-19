import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@violet/tokens/tokens.css";
import "./index.css";
import { App } from "./App";
import { Gallery } from "./Gallery";

// Server-state via TanStack Query (TD-9); URL as source of truth via router.
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000 } },
});

const router = createBrowserRouter([
  { path: "/gallery", element: <Gallery /> },
  { path: "/*", element: <App /> },
]);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
