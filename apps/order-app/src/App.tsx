import { Navigate, Route, Routes } from "react-router-dom";
import type { JSX } from "react";
import { useStore } from "./state/store";
import { AppShell } from "./components/AppShell";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Orders } from "./pages/Orders";
import { OrderDetail } from "./pages/OrderDetail";
import { Invoices } from "./pages/Invoices";
import { Admin } from "./pages/Admin";
import { ProductDetail } from "./pages/ProductDetail";
import { Profile } from "./pages/Profile";
import { Support } from "./pages/Support";
import { ForgotPassword } from "./pages/ForgotPassword";
import { AccessDenied } from "./pages/AccessDenied";
import { Gallery } from "./Gallery";

function RequireAuth({ children, admin }: { children: JSX.Element; admin?: boolean }) {
  const { user } = useStore();
  if (!user) return <Navigate to="/login" replace />;
  if (admin && user.role !== "admin") return <Navigate to="/forbidden" replace />;
  return children;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forbidden" element={<AccessDenied />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="profile" element={<Profile />} />
        <Route path="support" element={<Support />} />
        <Route
          path="admin"
          element={
            <RequireAuth admin>
              <Admin />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
