/** Shared, strict types for the whole site. No `any`, ever. */

export interface ProjectLinks {
  /** Live demo URL. '#' = DUMMY — replace in src/data/projects.ts */
  demo: string;
  /** GitHub repo URL. '#' = DUMMY — replace in src/data/projects.ts */
  github: string;
}

export interface ProjectImage {
  /** Path under src/assets/projects, or null → placeholder renders */
  desktop: string | null;
  mobile: string | null;
  /** Alt text describing what the screenshot shows */
  alt: string;
}

export interface Project {
  id: string;
  /** Outcome title (what it does for the business), never a tech title */
  outcomeTitle: string;
  problem: string;
  solution: string;
  /** Exactly 3 key features */
  features: readonly [string, string, string];
  stack: readonly string[];
  image: ProjectImage;
  links: ProjectLinks;
  /** true → renders "Concept project" label */
  isConcept: boolean;
}

export interface Service {
  id: string;
  /** Outcome-phrased title */
  title: string;
  /** 1-line pitch for a non-technical owner */
  pitch: string;
  /** Shown only inside the expandable <details> */
  tech: readonly string[];
}

export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  /** Availability badge text */
  availability: string;
  headline: string;
  valueProp: string;
  about: readonly string[];
  email: string; // DUMMY until replaced
  location: string;
  socials: readonly SiteLink[];
}
