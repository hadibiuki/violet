/**
 * Authenticated app shell: fixed RTL sidebar (logical inset-inline-start) +
 * top bar (dealer identity, cart). All offsets use logical properties so the
 * layout mirrors correctly in RTL.
 */
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BrandMark } from "@violet/ui";
import {
  LayoutDashboard,
  Store,
  ShoppingCart,
  Package,
  FileText,
  ShieldCheck,
  LogOut,
} from "./icons";
import { useStore } from "../state/store";
import { fa } from "../lib/b2b-data";

const NAV = [
  { to: "/", label: "داشبورد", icon: LayoutDashboard, end: true },
  { to: "/catalog", label: "کاتالوگ عمده", icon: Store },
  { to: "/cart", label: "سبد سفارش", icon: ShoppingCart },
  { to: "/orders", label: "سفارش‌های من", icon: Package },
  { to: "/invoices", label: "فاکتورها", icon: FileText },
];

const SIDEBAR_W = 268;

export function AppShell() {
  const { user, logout, cartCount } = useStore();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  return (
    <div style={{ minHeight: "100vh", background: "var(--vt-color-bg)" }}>
      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          insetBlock: 0,
          insetInlineStart: 0,
          width: SIDEBAR_W,
          background: "var(--vt-color-brand-ink)",
          color: "var(--vt-color-on-brand-ink)",
          display: "flex",
          flexDirection: "column",
          padding: "var(--vt-space-6) var(--vt-space-4)",
          zIndex: 50,
        }}
      >
        <div style={{ paddingInline: "var(--vt-space-2)", marginBottom: "var(--vt-space-8)" }}>
          <BrandMark tone="onDark" />
          <p
            style={{
              margin: "var(--vt-space-2) 0 0",
              fontSize: "var(--vt-text-xs)",
              color: "var(--vt-gold-300)",
              letterSpacing: 0,
            }}
          >
            سامانهٔ سفارش عمده
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} style={sideLink}>
              {({ isActive }) => (
                <span style={sideLinkInner(isActive)}>
                  <Icon size={18} strokeWidth={1.5} />
                  <span style={{ flex: 1 }}>{label}</span>
                  {to === "/cart" && cartCount > 0 && (
                    <span style={badge}>{fa(cartCount)}</span>
                  )}
                </span>
              )}
            </NavLink>
          ))}

          {isAdmin && (
            <>
              <div style={navDivider}>مدیریت</div>
              <NavLink to="/admin" style={sideLink}>
                {({ isActive }) => (
                  <span style={sideLinkInner(isActive)}>
                    <ShieldCheck size={18} strokeWidth={1.5} />
                    <span style={{ flex: 1 }}>پنل فروش</span>
                  </span>
                )}
              </NavLink>
            </>
          )}
        </nav>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          style={{
            marginBlockStart: "auto",
            display: "flex",
            alignItems: "center",
            gap: "var(--vt-space-2)",
            background: "transparent",
            border: "1px solid rgba(230,180,83,.25)",
            color: "var(--vt-gold-300)",
            borderRadius: "var(--vt-radius-md)",
            padding: "10px 14px",
            cursor: "pointer",
            fontFamily: "var(--vt-font-fa)",
            fontSize: "var(--vt-text-sm)",
          }}
        >
          <LogOut size={16} strokeWidth={1.5} />
          خروج
        </button>
      </aside>

      {/* Main */}
      <div style={{ marginInlineStart: SIDEBAR_W, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header
          style={{
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "var(--vt-space-8)",
            background: "var(--vt-color-surface)",
            borderBottom: "1px solid var(--vt-color-divider)",
            position: "sticky",
            top: 0,
            zIndex: 40,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: "var(--vt-text-base)", color: "var(--vt-color-text-strong)" }}>
              {user?.company}
            </div>
            <div style={{ fontSize: "var(--vt-text-xs)", color: "var(--vt-color-text-muted)" }}>
              {user?.name}
            </div>
          </div>
          <NavLink
            to="/cart"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--vt-space-2)",
              textDecoration: "none",
              color: "var(--vt-color-text)",
              fontSize: "var(--vt-text-sm)",
            }}
          >
            <span style={{ position: "relative" }}>
              <ShoppingCart size={22} strokeWidth={1.5} />
              {cartCount > 0 && <span style={{ ...badge, position: "absolute", insetBlockStart: -8, insetInlineEnd: -10 }}>{fa(cartCount)}</span>}
            </span>
            سبد سفارش
          </NavLink>
        </header>

        <main style={{ flex: 1, padding: "var(--vt-space-8)" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const sideLink = { textDecoration: "none" } as const;

function sideLinkInner(active: boolean): React.CSSProperties {
  return {
    display: "flex",
    alignItems: "center",
    gap: "var(--vt-space-3)",
    padding: "11px 14px",
    borderRadius: "var(--vt-radius-md)",
    fontSize: "var(--vt-text-sm)",
    fontWeight: active ? 700 : 500,
    color: active ? "var(--vt-violet-900)" : "var(--vt-violet-100)",
    background: active ? "var(--vt-gold-400)" : "transparent",
    transition: "background var(--vt-duration-fast)",
  };
}

const navDivider: React.CSSProperties = {
  fontSize: "var(--vt-text-2xs)",
  color: "var(--vt-violet-400)",
  padding: "var(--vt-space-4) 14px var(--vt-space-1)",
};

const badge: React.CSSProperties = {
  minWidth: 20,
  height: 20,
  paddingInline: 6,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--vt-radius-pill)",
  background: "var(--vt-color-danger)",
  color: "#fff",
  fontSize: "var(--vt-text-2xs)",
  fontWeight: 700,
};
