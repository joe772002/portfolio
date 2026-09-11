import type { NavKey } from "@/i18n/dictionary";

export interface NavLink {
  id: NavKey;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "home", href: "/" },
  { id: "mobile", href: "/engineering" },
  { id: "projects", href: "/work" },
  { id: "vibe", href: "/builder" },
  { id: "about", href: "/about" },
  { id: "contact", href: "/contact" },
];
