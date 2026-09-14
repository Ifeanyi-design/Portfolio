import type { Project } from '../types';

/**
 * SINGLE source of truth for project cards.
 * Links marked DUMMY — replace '#' with real URLs.
 * Images are null until you add files to public/screenshots/ —
 * then set image.desktop / image.mobile to e.g. 'screenshots/maxcinema-desktop.jpg'.
 */
export const projects: readonly Project[] = [
  {
    id: 'maxcinema',
    outcomeTitle: 'Movie streaming platform that updates itself',
    problem:
      'Running a streaming site means uploading content, organizing categories and serving video files — repetitive work that eats hours.',
    solution:
      'A Flask web app where a Telegram bot fetches and publishes movies automatically, with fast delivery through Cloudflare.',
    features: [
      'Telegram bot auto-publishes new movies to the site',
      'Fast, reliable streaming via Cloudflare CDN',
      'Admin dashboard for managing the whole library',
    ],
    stack: ['Python', 'Flask', 'Jinja', 'Tailwind', 'PostgreSQL', 'Supabase', 'Cloudflare', 'Pyrogram'],
    image: {
      desktop: '/screenshots/maxcinema-desktop.png',
      mobile: null,
      alt: 'MaxCinema movie streaming platform featuring latest releases and category filters',
    },
    links: { demo: 'https://maxcinema.name.ng', github: 'https://github.com/Ifeanyi-design/maxcinema' },
    isConcept: false,
  },
  {
    id: 'manga-forge',
    outcomeTitle: 'Browser-based manga & comic creation studio',
    problem:
      'Comic creators juggle heavy desktop tools just to lay out panels, arrange speech bubbles, and manage multi-page storyboards.',
    solution:
      'A browser-based studio for creating manga and comics with customizable panels, characters, speech bubbles, SFX, and canvas layer controls.',
    features: [
      'Interactive canvas for customizable panel layouts, bubbles, and text',
      'Multi-page story management with offline saving (IndexedDB)',
      'Export polished comic pages ready to publish or share',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'react-konva', 'Zustand', 'IndexedDB'],
    image: {
      desktop: '/screenshots/manga-studio-desktop.png',
      mobile: null,
      alt: 'PageForge Manga Studio browser editor with interactive comic page canvas and layer controls',
    },
    links: {
      demo: 'https://mangastudio-4rc6.onrender.com',
      github: 'https://github.com/Ifeanyi-design/mangaStudio',
    },
    isConcept: false,
  },
  {
    id: 'atlas',
    outcomeTitle: 'Atlas — Memory & decision guardrails MCP for AI agents',
    problem:
      'AI coding agents start fresh tasks without prior context, silently reversing architecture decisions or repeating settled engineering debates.',
    solution:
      'An MCP server with a FastAPI backend and live dashboard that preserves engineering intent, detects conflicting instructions, and prevents token bloat.',
    features: [
      'MCP server with decision logging, semantic search, and conflict detection',
      'Dual storage support: local SQLite or production PostgreSQL + pgvector',
      'Live audit dashboard with decision timelines and token-avoided metrics',
    ],
    stack: ['Python', 'FastAPI', 'MCP', 'PostgreSQL', 'pgvector', 'SQLite', 'Docker'],
    image: {
      desktop: '/screenshots/atlas-dashboard.png',
      mobile: null,
      alt: 'Atlas engineering context dashboard showing decision summary and token metrics',
    },
    links: { demo: '#', github: 'https://github.com/Ifeanyi-design/ATLAS' },
    isConcept: false,
  },
  {
    id: 'servicesync',
    outcomeTitle: 'AI-native home service marketplace with escrow payments',
    problem:
      'Homeowners face slow responses and opaque pricing, while contractors waste hours triaging inquiries, writing quotes, and chasing payments.',
    solution:
      'An AI operating system & marketplace featuring Gemini AI triage, automated contractor dispatch, upfront escrow protection, and live contractor portfolios.',
    features: [
      'Gemini AI conversational triage diagnosing issues and auto-matching local pros',
      'Contractor dispatch dashboard with live workload, capacity, and reputation tracking',
      'Upfront escrow payment infrastructure with Stripe payouts and wallet management',
    ],
    stack: ['FastAPI', 'Python', 'Google Gemini AI', 'PostgreSQL', 'SQLModel', 'Stripe', 'Alembic'],
    image: {
      desktop: '/screenshots/servicesync-landing.png',
      mobile: null,
      alt: 'ServiceSync AI triage interface matching homeowners with verified local pros',
    },
    links: {
      demo: 'https://servicesync-2lct.onrender.com/',
      github: 'https://github.com/Ifeanyi-design/ServiceSync',
    },
    isConcept: false,
  },
];
