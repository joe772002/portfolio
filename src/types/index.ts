export type ProjectDomain = "android" | "ai";

export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Modernization"
  | "Concept / Upcoming MVP"
  | "Coming Soon"
  | "Product Experiment";

export interface SkillGroup {
  title: string;
  titleAr?: string;
  skills: string[];
}

export interface AndroidProject {
  id: string;
  index: string;
  title: string;
  category: string[];
  context?: string;
  platform?: string;
  platformAr?: string;
  role?: string;
  roleAr?: string;
  overview: string;
  technologies: string[];
  focusAreas: string[];
  portfolioFocus: string[];
  challenges?: string[];
  challengesAr?: string[];
  approach?: string;
  approachAr?: string;
  confidential?: boolean;
  featured?: boolean;
  personal?: boolean;
  playUrl?: string;
  caseStudyUrl?: string;
  /** Real product screenshots (when available and not confidential) shown instead of the abstract conceptual visual. */
  images?: string[];
  imageAlt?: string;
  overviewAr?: string;
  focusAreasAr?: string[];
  portfolioFocusAr?: string[];
  categoryAr?: string[];
  contextAr?: string;
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
  titleAr?: string;
  status: ProjectStatus;
  context?: string;
  overview: string;
  focus?: string[];
  technicalDirection?: string[];
  placeholder?: boolean;
  /** Real product screenshot (when available) shown instead of the abstract conceptual visual. */
  image?: string;
  imageAlt?: string;
  /** Phone screenshots rendered in phone frames (e.g. Android client galleries). */
  phoneImages?: string[];
  /** Multiple labeled screenshots/panels (e.g. design-system sections) shown as a gallery instead of a single image. */
  images?: ImagePanel[];
  /** Overrides the default "Android Client — Product screens" heading above phoneImages (e.g. for a responsive web project). */
  phoneSectionLabel?: string;
  phoneSectionLabelAr?: string;
  /** Link to a live/hosted deployment of the project, shown as a "View Live Site" CTA. */
  liveUrl?: string;
  overviewAr?: string;
  focusAr?: string[];
  contextAr?: string;
}

export interface WorkflowStep {
  index: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  items?: string[];
  itemsAr?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
