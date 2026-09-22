/** Shared, strict types for the whole site. No `any`, ever. */

export interface ProjectLinks {
  /** Live demo URL. '#' = DUMMY — replace in src/data/projects.ts */
  demo: string;
  /** GitHub repo URL. '#' = DUMMY — replace in src/data/projects.ts */
  github: string;
}

export interface ProjectImage {
  /** Public path, e.g. '/screenshots/maxcinema-desktop.png'. null → placeholder renders */
  desktop: string | null;
  mobile: string | null;
  /** Alt text describing what the screenshot shows */
  alt: string;
}

export interface Project {
  id: string;
  /** Outcome title (what it does for the business), never a tech title */
  outcomeTitle: string;
  /**
   * What the card demonstrates to a technical reader — max 3, no filler.
   * Recruiters scan these; they are not a second stack list.
   */
  tags: readonly string[];
  /**
   * My real role on the project. Collaborative work says so explicitly —
   * this is never upgraded beyond what actually happened.
   */
  role: string;
  /** Verified award or placement. Omit the key entirely when there is none. */
  recognition?: string;
  /** Drives the Work-section filter tabs */
  category: 'web' | 'ai';
  problem: string;
  solution: string;
  /** Exactly 3 key features */
  features: readonly [string, string, string];
  stack: readonly string[];
  image: ProjectImage;
  links: ProjectLinks;
  /** true → renders "Concept project" label */
  isConcept: boolean;
  /**
   * Optional badge shown when the project has no live demo link
   * (e.g. 'Open Source MCP', 'Personal Series'). Falls back to 'Case Study'.
   */
  statusLabel?: string;
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
  /** Primary professional title, shown in the hero */
  role: string;
  /** Condensed title for tight spaces (header pill, cards) */
  shortRole: string;
  /** Availability badge text */
  availability: string;
  /** Condensed availability for the persistent header beacon */
  availabilityShort: string;
  /** One line placing me as a student — the first thing a recruiter should read */
  intro: string;
  valueProp: string;
  about: readonly string[];
  /** Direction-of-travel chips, not a second skills list */
  interests: readonly string[];
  email: string; // DUMMY until replaced
  location: string;
  socials: readonly SiteLink[];
}

/* ────────────────────────────────────────────────────────────────────────────
   Career depth: experience, education, leadership, recognition, skills.
   Everything here is data-driven so sections stay in sync automatically.
   ──────────────────────────────────────────────────────────────────────────── */

/**
 * Deliberately coarse. There are no 1–5 star ratings anywhere on this site —
 * a visitor cannot verify a star, and inventing one is dishonest.
 */
export type Proficiency = 'Core' | 'Applied' | 'Working Knowledge' | 'Exploring';

export interface SkillGroup {
  id: string;
  title: string;
  level: Proficiency;
  /** One line on how these skills were actually used. */
  note: string;
  skills: readonly string[];
}

export interface FocusArea {
  id: string;
  title: string;
  desc: string;
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  role: string;
  /** Human-readable period, e.g. 'May 25, 2026 – August 7, 2026' */
  period: string;
  /** e.g. 'IT / SIWES Internship' */
  type: string;
  summary: string;
  /** Only points that are actually confirmed. Omit rather than invent. */
  points?: readonly string[];
  stack?: readonly string[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  /** e.g. 'Current student' — no graduation year is claimed. */
  status: string;
  areas: readonly string[];
  note: string;
}

export interface LeadershipEntry {
  id: string;
  organisation: string;
  /** Omit when the actual role is not established — never invent a title. */
  role?: string;
  period: string;
  summary: string;
  themes: readonly string[];
}

export interface RecognitionEntry {
  id: string;
  event: string;
  year: string;
  award: string;
  project: string;
  /** Links the award to its project card in the Work section. */
  projectId?: string;
  context: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  detail: string;
}

export interface OpportunityKind {
  label: string;
  desc: string;
}
