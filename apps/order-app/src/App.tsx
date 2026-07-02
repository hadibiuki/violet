import { Navigate, Route, Routes } from "react-router-dom";
import type { JSX } from "react";
import { useStore } from "./state/store";
import { DealerShell } from "./components/DealerShell";
import { DealerLogin } from "./pages/DealerLogin";
import { Dashboard } from "./pages/Dashboard";
import { DealerCatalog } from "./pages/DealerCatalog";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Orders } from "./pages/Orders";
import { OrderDetail } from "./pages/OrderDetail";
import { DealerInvoices } from "./pages/DealerInvoices";
import { DealerProduct } from "./pages/DealerProduct";
import { DealerProfile } from "./pages/DealerProfile";
import { DealerSupport } from "./pages/DealerSupport";
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
      <Route path="/login" element={<DealerLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forbidden" element={<AccessDenied />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route
        element={
          <RequireAuth>
          <DealerShell />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="catalog" element={<DealerCatalog />} />
        <Route path="catalog/:id" element={<DealerProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="invoices" element={<DealerInvoices />} />
        <Route path="profile" element={<DealerProfile />} />
        <Route path="support" element={<DealerSupport />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
