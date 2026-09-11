import type { ProjectStatus } from "@/types";

export type Lang = "ar" | "en";

export type NavKey = "home" | "mobile" | "projects" | "vibe" | "about" | "contact";

export interface HomeCard {
  href: string;
  kicker: string;
  title: string;
  desc: string;
}

export interface Dictionary {
  nav: Record<NavKey, string>;
  cta: string;
  explore: string;
  hero: {
    badgeA: string;
    badgeB: string;
    roleA: string;
    roleB: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
  };
  trail: [string, string, string];
  transition: {
    kicker: string;
    aAccent: string;
    aRest: string;
    bAccent: string;
    bRest: string;
    para: string;
  };
  homeCards: HomeCard[];
  engineer: {
    kicker: string;
    title: string;
    workingOn: string;
    cares: string;
    context: string[];
    focus: string[];
  };
  expertise: { kicker: string };
  builder: {
    kicker: string;
    title: string;
    paragraph: string;
    accelerates: string;
    focus: string[];
  };
  workflow: { kicker: string; title: string };
  skills: { kicker: string; toolsTitle: string };
  android: {
    kicker: string;
    title: string;
    desc: string;
    areas: string;
    screens: string;
    personal: string;
    personalOne: string;
    limited: string;
  };
  ai: {
    kicker: string;
    title: string;
    desc: string;
    focus: string;
    screens: string;
    status: Record<ProjectStatus, string>;
  };
  about: { kicker: string; strengthsTitle: string; strengths: string[] };
  contact: { kicker: string; title: string; desc: string; email: string };
  footer: { tagline: string };
  a11y: {
    openMenu: string;
    closeMenu: string;
    toDark: string;
    toLight: string;
    switchToEnglish: string;
    switchToArabic: string;
  };
}
