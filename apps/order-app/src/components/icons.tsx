/**
 * Inline Lucide-style line icons (1.5px stroke, currentColor) — bundled so the
 * app stays network-free (matches the reference-site approach). Each icon takes
 * the same `size`/`strokeWidth` shape as lucide-react for easy swapping later.
 */
type IconProps = { size?: number; strokeWidth?: number; style?: React.CSSProperties };

function Svg({ size = 20, strokeWidth = 1.5, style, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const LayoutDashboard = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></Svg>
);
export const Store = (p: IconProps) => (
  <Svg {...p}><path d="M4 9V5h16v4" /><path d="M3 9h18l-1 11H4L3 9Z" /><path d="M9 9v11M15 9v11" /></Svg>
);
export const ShoppingCart = (p: IconProps) => (
  <Svg {...p}><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21.5 7H6" /></Svg>
);
export const Package = (p: IconProps) => (
  <Svg {...p}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" /><path d="M3.3 7 12 12l8.7-5M12 12v9" /></Svg>
);
export const FileText = (p: IconProps) => (
  <Svg {...p}><path d="M14 3v5h5" /><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" /><path d="M9 13h6M9 17h6M9 9h1" /></Svg>
);
export const ShieldCheck = (p: IconProps) => (
  <Svg {...p}><path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Svg>
);
export const LogOut = (p: IconProps) => (
  <Svg {...p}><path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" /><path d="m16 17 5-5-5-5M21 12H9" /></Svg>
);
export const Plus = (p: IconProps) => (
  <Svg {...p}><path d="M12 5v14M5 12h14" /></Svg>
);
export const Trash = (p: IconProps) => (
  <Svg {...p}><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" /></Svg>
);
export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}><path d="M19 12H5M12 19l-7-7 7-7" /></Svg>
);
export const Check = (p: IconProps) => (
  <Svg {...p}><path d="M20 6 9 17l-5-5" /></Svg>
);
export const Truck = (p: IconProps) => (
  <Svg {...p}><path d="M14 17V5H2v12h2" /><path d="M14 9h4l3 3v5h-3" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></Svg>
);
export const Search = (p: IconProps) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Svg>
);
export const Users = (p: IconProps) => (
  <Svg {...p}><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3-5 7-5s7 1.7 7 5" /><path d="M16 5a3 3 0 0 1 0 6M22 20c0-2.5-1.5-4.2-4-4.8" /></Svg>
);
export const TrendingUp = (p: IconProps) => (
  <Svg {...p}><path d="m3 17 6-6 4 4 8-8" /><path d="M21 7v6h-6" /></Svg>
);
