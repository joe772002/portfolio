export type ProjectDomain = "android" | "ai";

export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Modernization"
  | "Concept / Upcoming MVP"
  | "Coming Soon";

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface AndroidProject {
  id: string;
  index: string;
  title: string;
  category: string[];
  context?: string;
  overview: string;
  technologies: string[];
  focusAreas: string[];
  portfolioFocus: string[];
  confidential?: boolean;
  featured?: boolean;
  personal?: boolean;
  /** Real product screenshots (when available and not confidential) shown instead of the abstract conceptual visual. */
  images?: string[];
  imageAlt?: string;
}

export interface ImagePanel {
  src: string;
  alt: string;
  label?: string;
  width: number;
  height: number;
}

export interface AIProject {
  id: string;
  title: string;
  status: ProjectStatus;
  context?: string;
  overview: string;
  focus?: string[];
  technicalDirection?: string[];
  placeholder?: boolean;
  /** Real product screenshot (when available) shown instead of the abstract conceptual visual. */
  image?: string;
  imageAlt?: string;
  /** Multiple labeled screenshots/panels (e.g. design-system sections) shown as a gallery instead of a single image. */
  images?: ImagePanel[];
}

export interface WorkflowStep {
  index: string;
  title: string;
  description: string;
  items?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
