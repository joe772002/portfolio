import type { ProjectStatus } from "@/types";

export type Lang = "ar" | "en";

export type NavKey =
  | "home"
  | "projects"
  | "experience"
  | "stack"
  | "aiBuilds"
  | "about"
  | "contact";

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
    downloadCv: string;
    getInTouch: string;
    linkedin: string;
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
  expertise: { kicker: string; title: string; desc: string };
  experience: {
    kicker: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
    independent: {
      role: string;
      period: string;
      type: string;
      desc: string;
      bullets: string[];
    };
    timeline: {
      role: string;
      company: string;
      period: string;
      type: string;
      bullets: string[];
    };
    software: {
      role: string;
      period: string;
      type: string;
      desc: string;
      bullets: string[];
    };
  };
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
    featured: string;
    selected: string;
    role: string;
    platform: string;
    challenges: string;
    approach: string;
    viewCase: string;
    viewPlay: string;
    confidentialNote: string;
    close: string;
  };
  how: { kicker: string; title: string; desc: string; items: { title: string; desc: string }[] };
  ai: {
    kicker: string;
    title: string;
    desc: string;
    focus: string;
    screens: string;
    status: Record<ProjectStatus, string>;
  };
  about: { kicker: string; strengthsTitle: string; strengths: string[] };
  contact: { kicker: string; title: string; desc: string; email: string; downloadCv: string };
  caseStudy: {
    back: string;
    overview: string;
    context: string;
    role: string;
    responsibilities: string;
    architecture: string;
    dataflow: string;
    auth: string;
    api: string;
    documents: string;
    workflows: string;
    offline: string;
    localization: string;
    screens: string;
    challenges: string;
    decisions: string;
    takeaways: string;
    outcome: string;
    confidentiality: string;
    confidential: string;
  };
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
