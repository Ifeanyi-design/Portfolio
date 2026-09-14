import type { Service } from '../types';

/**
 * Service titles sell outcomes to non-technical owners;
 * the tech list (proof for technical readers) hides in the expandable detail.
 */
export const services: readonly Service[] = [
  {
    id: 'websites',
    title: 'Business Websites',
    pitch: 'A fast, professional site that makes your business look trustworthy and brings in enquiries.',
    tech: ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'SCSS', 'JavaScript', 'SEO setup'],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    pitch: 'Custom web software for your workflow — bookings, dashboards, inventory — built to fit how you work.',
    tech: ['Python', 'Flask', 'REST APIs', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'JWT auth', 'Redis', 'Celery', 'React', 'TypeScript'],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Integrations',
    pitch: 'AI assistants and automations that handle repetitive tasks — answering customers, organizing data, saving you hours.',
    tech: ['AI agents', 'Tool-calling', 'RAG', 'LangGraph', 'MCP', 'OpenRouter', 'Local models', 'Python'],
  },
  {
    id: 'ai-video',
    title: 'AI Video Content',
    pitch: 'Branded AI video series with consistent characters and voiceover — content your audience recognizes.',
    tech: ['Flow', 'Hailuo', 'ElevenLabs', 'CapCut', 'Scripting', 'Character design'],
  },
];
