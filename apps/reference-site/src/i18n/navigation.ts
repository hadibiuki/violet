import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link / redirect / router that preserve the path prefix —
// used so switching language keeps the user in place (docs/i18n-rtl.md §1).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
