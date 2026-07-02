/**
 * Violet B2B — client app store (auth + cart + locally-created orders).
 *
 * No real backend yet (docs: site-first, backend swap later). Auth is a mock
 * gate; the cart and any orders the dealer creates live in React state for the
 * session. Seed orders come from lib/b2b-data.
 */
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { UserRole, OrderStatus } from "@violet/types";
import {
  byId,
  orders as seedOrders,
  type B2BOrder,
  type B2BProduct,
} from "../lib/b2b-data";

export interface AuthUser {
  name: string;
  role: UserRole;
  company: string;
}

export interface CartLine {
  id: string; // product id
  qty: number;
}

interface StoreValue {
  // auth
  user: AuthUser | null;
  login: (role: UserRole) => void;
  logout: () => void;
  // cart
  cart: CartLine[];
  cartCount: number;
  cartUnits: number;
  cartSubtotal: number;
  addToCart: (productId: string, qty: number) => void;
  setQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  // orders (seed + locally created)
  orders: B2BOrder[];
  submitOrder: () => B2BOrder;
  getOrder: (id: string) => B2BOrder | undefined;
  // admin: advance an order's status
  setOrderStatus: (id: string, status: OrderStatus) => void;
}

const StoreContext = createContext<StoreValue | null>(null);

let orderSeq = 4822;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [allOrders, setAllOrders] = useState<B2BOrder[]>(seedOrders);

  const value = useMemo<StoreValue>(() => {
    const cartUnits = cart.reduce((s, l) => s + l.qty, 0);
    const cartSubtotal = cart.reduce(
      (s, l) => s + (byId(l.id)?.price ?? 0) * l.qty,
      0,
    );

    return {
      user,
      login: (role) =>
        setUser({
          name: role === "admin" ? "مدیر فروش ویولت" : "رضا کریمی",
          role,
          company: role === "admin" ? "ویولت" : "نمایندگی ساعت پارس",
        }),
      logout: () => {
        setUser(null);
        setCart([]);
      },

      cart,
      cartCount: cart.length,
      cartUnits,
      cartSubtotal,
      addToCart: (productId, qty) =>
        setCart((prev) => {
          const found = prev.find((l) => l.id === productId);
          if (found)
            return prev.map((l) =>
              l.id === productId ? { ...l, qty: l.qty + qty } : l,
            );
          return [...prev, { id: productId, qty }];
        }),
      setQty: (productId, qty) =>
        setCart((prev) =>
          prev.map((l) => (l.id === productId ? { ...l, qty } : l)),
        ),
      removeFromCart: (productId) =>
        setCart((prev) => prev.filter((l) => l.id !== productId)),
      clearCart: () => setCart([]),

      orders: allOrders,
      submitOrder: () => {
        const id = `ORD-${orderSeq++}`;
        const now = new Date();
        const stamp = `${toFa(now.getHours())}:${toFa(now.getMinutes()).padStart(2, "۰")}`;
        const order: B2BOrder = {
          id,
          date: "۱۴۰۵/۰۳/۲۵",
          status: "submitted",
          lines: cart.map((l) => ({ id: l.id, qty: l.qty })),
          times: { submitted: `امروز ${stamp}` },
          ship: "—",
          track: "—",
        };
        setAllOrders((prev) => [order, ...prev]);
        setCart([]);
        return order;
      },
      getOrder: (id) => allOrders.find((o) => o.id === id),
      setOrderStatus: (id, status) =>
        setAllOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status } : o)),
        ),
    };
  }, [user, cart, allOrders]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

function toFa(n: number): string {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

export type { B2BProduct };
