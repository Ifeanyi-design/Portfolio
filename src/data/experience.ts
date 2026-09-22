import type {
  ExperienceEntry,
  LeadershipEntry,
  TimelineMilestone,
} from '../types';

/**
 * Professional experience.
 *
 * ACCURACY RULE: no duty, metric, client name or technology is listed here
 * unless it is actually confirmed. HIIT PLC is kept deliberately concise —
 * add the real responsibilities to `points` once they are confirmed.
 */
export const experience: readonly ExperienceEntry[] = [
  {
    id: 'hiit',
    organisation: 'HIIT PLC',
    role: 'IT / Software Development Intern',
    period: 'May 25, 2026 – August 7, 2026',
    type: 'IT / SIWES Internship',
    summary:
      'A three-month practical IT and software development placement inside a professional engineering environment, from 25 May to 7 August 2026.',
    points: [
      'SIWES / IT placement — supervised industrial work experience completed as part of the degree programme.',
      // TODO(add): confirm the actual projects and responsibilities and list them here.
    ],
  },
];

/**
 * Team / leadership work. Titles are only used where they are actually
 * established — Community Innovation Core has no role attached on purpose.
 */
export const leadership: readonly LeadershipEntry[] = [
  {
    id: 'team-devions',
    organisation: 'Team Devions',
    role: 'Admin / Technical Contributor',
    period: 'Ongoing',
    summary:
      'A technology and product-building team. I help run the team and contribute to its engineering work — collaborative builds, hackathon entries and project experimentation, not just discussion.',
    themes: [
      'Collaborative product development',
      'AI and software projects',
      'Hackathon participation',
      'Technical problem solving',
      'Team collaboration',
    ],
  },
  {
    id: 'community-innovation-core',
    organisation: 'Community Innovation Core',
    period: 'Ongoing',
    summary:
      'Part of a technology-focused student community, taking part in its initiatives and collaborative work.',
    themes: ['Technology community', 'Student collaboration'],
  },
];

/**
 * Compact career progression. Periods are only as specific as the source
 * information allows — no invented dates.
 */
export const timeline: readonly TimelineMilestone[] = [
  {
    period: 'Current',
    title: 'B.Sc. Computer Science — University of Ibadan',
    detail: 'The fundamentals: algorithms, data structures and systems.',
  },
  {
    period: 'May – Aug 2026',
    title: 'IT / Software Development Internship — HIIT PLC',
    detail: 'Three-month SIWES placement in a professional engineering environment.',
  },
  {
    period: '2026',
    title: '1st Place — IESA Forge the Future Hackathon',
    detail: 'IntelliCT, a computer vision system for intelligent transportation, built with the team.',
  },
  {
    period: '2026',
    title: 'Top 15 in Africa — AFRETEC Inclusive Education Challenge',
    detail: 'PadeeSpace, an education platform developed with the team.',
  },
  {
    period: 'Ongoing',
    title: 'Team Devions',
    detail: 'Admin and technical contributor on collaborative product builds.',
  },
  {
    period: 'Ongoing',
    title: 'AI, backend and full-stack project work',
    detail: 'Personal and team projects across APIs, agents and computer vision.',
  },
];
