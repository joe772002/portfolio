import type { NavKey } from "@/i18n/dictionary";

export interface NavLink {
  id: NavKey;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "home", href: "/#home" },
  { id: "experience", href: "/#experience" },
  { id: "projects", href: "/#projects" },
  { id: "stack", href: "/#stack" },
  { id: "aiBuilds", href: "/#ai-builds" },
  { id: "about", href: "/#about" },
  { id: "contact", href: "/#contact" },
];
