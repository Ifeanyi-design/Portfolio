import type { RecognitionEntry } from '../types';

/**
 * Competitions and recognition.
 *
 * Team results are attributed to the team, never to me alone — the wording is
 * deliberately factual. `projectId` links an award back to its project card.
 */
export const recognitions: readonly RecognitionEntry[] = [
  {
    id: 'iesa-2026',
    event: 'IESA Forge the Future Hackathon',
    year: '2026',
    award: 'Winner — 1st Place',
    project: 'IntelliCT',
    projectId: 'intellict',
    context:
      'A team competition build: an intelligent transportation system applying computer vision to traffic and vehicle analysis. I contributed on the AI/ML side.',
  },
  {
    id: 'afretec-2026',
    event: 'AFRETEC Inclusive Education Challenge',
    year: '2026',
    award: 'Top 15 in Africa',
    project: 'PadeeSpace',
    projectId: 'padeespace',
    context:
      'An education and inclusive-technology challenge. The team was selected among the Top 15 teams in Africa with PadeeSpace.',
  },
];
