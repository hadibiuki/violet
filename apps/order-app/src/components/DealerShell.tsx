import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Avatar, BrandMark } from "@violet/ui";
import {
  FileText,
  LayoutDashboard,
  Package,
  Search,
  ShoppingCart,
  Store,
} from "./icons";
import { useStore } from "../state/store";
import { dealer, fa } from "../lib/b2b-data";

const NAV = [
  { to: "/", label: "داشبورد", icon: LayoutDashboard, end: true },
  { to: "/catalog", label: "محصولات", icon: Store },
  { to: "/orders", label: "سفارش‌های من", icon: Package },
  { to: "/invoices", label: "فاکتورها", icon: FileText },
  { to: "/support", label: "پشتیبانی", icon: SupportIcon },
];

export function DealerShell() {
  const { cartCount } = useStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="dealer-shell">
      <aside className={`dealer-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="dealer-brand"><BrandMark variant="horizontal" size="sm" /></div>
        <nav className="dealer-nav" aria-label="ناوبری اصلی">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <>
                  <Icon size={18} />
                  <span>{label}</span>
                  {to === "/orders" && <span className="dealer-nav-badge">{fa(2)}</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button className="dealer-tier" type="button" onClick={() => navigate("/profile")}>
          <span>✦ {dealer.tier}</span>
          نمایندگی <strong>{dealer.company}</strong>
          <small>کد فروشنده <bdi>{dealer.code}</bdi></small>
        </button>
      </aside>

      {menuOpen && <button type="button" className="dealer-backdrop" aria-label="بستن منو" onClick={() => setMenuOpen(false)} />}

      <section className="dealer-workspace">
        <header className="dealer-header">
          <button type="button" className="dealer-menu" aria-label="باز کردن منو" onClick={() => setMenuOpen(true)}>☰</button>
          <label className="dealer-search">
            <Search size={16} />
            <input
              value={search}
              onFocus={() => navigate("/catalog")}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="جستجوی مدل یا کد…"
            />
          </label>
          <div className="dealer-actions">
            <button type="button" aria-label="سبد سفارش" onClick={() => navigate("/cart")}>
              <ShoppingCart size={18} />
              {cartCount > 0 && <span>{fa(cartCount)}</span>}
            </button>
            <button type="button" aria-label="اعلان‌ها" onClick={() => navigate("/support")}>
              <BellIcon size={18} />
            </button>
            <button type="button" className="dealer-user" onClick={() => navigate("/profile")}>
              <Avatar name={dealer.name} size="sm" />
              <span><strong>{dealer.name}</strong><small>{dealer.role}</small></span>
            </button>
          </div>
        </header>
        <main id="vtMain" className="dealer-main"><Outlet /></main>
      </section>
    </div>
  );
}

function BellIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>;
}

function SupportIcon({ size = 18 }: { size?: number; strokeWidth?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v5h3v-6H4m16 1v5h-3v-6h3"/><path d="M17 18c0 2-2 3-5 3"/></svg>;
}
