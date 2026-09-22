import type { OpportunityKind } from '../types';

/**
 * "What I'm looking for" — a statement of availability, not a list of demands.
 * The closing line in the component makes clear nothing here is exclusive.
 */
export const opportunities: readonly OpportunityKind[] = [
  {
    label: 'IT / SIWES Placements',
    desc: 'Industrial work experience attachments as part of my degree programme.',
  },
  {
    label: 'Software Engineering Internships',
    desc: 'Product teams building and maintaining real software.',
  },
  {
    label: 'Backend Engineering Internships',
    desc: 'APIs, services, data modelling and infrastructure.',
  },
  {
    label: 'AI / ML Engineering Internships',
    desc: 'Applied machine learning and intelligent systems.',
  },
  {
    label: 'AI Engineering Internships',
    desc: 'LLM applications, agents, RAG and tool-calling systems.',
  },
  {
    label: 'Computer Vision Opportunities',
    desc: 'Detection, recognition and image-based systems.',
  },
  {
    label: 'Full-Stack Engineering Opportunities',
    desc: 'React and TypeScript on the front, Python APIs behind.',
  },
];
