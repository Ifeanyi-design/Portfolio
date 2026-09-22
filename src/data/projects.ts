import type { Project } from '../types';

/**
 * SINGLE source of truth for project cards.
 * Screenshots live in public/screenshots/ — reference them as '/screenshots/<file>.png'.
 * Set image.desktop to null and a "Screenshot coming soon" placeholder renders instead.
 *
 * ORDER IS DELIBERATE: it leads with the work that best demonstrates engineering
 * relevance for internships and IT placements, not with the most recent work.
 * `role` is never upgraded — collaborative projects say so explicitly.
 */
export const projects: readonly Project[] = [
  {
    id: 'intellict',
    outcomeTitle: 'IntelliCT — computer vision for intelligent transportation',
    tags: ['Computer Vision', 'AI Engineering', 'Team Project'],
    role: 'AI/ML Contributor',
    recognition: 'Winner — IESA Forge the Future Hackathon 2026',
    category: 'ai',
    problem:
      'Traffic monitoring is still largely manual: reading plates, classifying vehicles and spotting congestion takes people, and it does not scale to a whole road network.',
    solution:
      'A team-built intelligent transportation system that applies computer vision to traffic and vehicle analysis, developed collaboratively for the IESA Forge the Future Hackathon 2026.',
    features: [
      'Computer vision pipeline for traffic and vehicle analysis',
      'Automatic number plate recognition and vehicle classification',
      'Built with the team — I contributed on the AI/ML side, not alone',
    ],
    // TODO(verify): confirm this stack against the team repo before publishing.
    stack: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'PostgreSQL'],
    image: {
      // TODO: drop a screenshot in public/screenshots/ then set the path here.
      desktop: null,
      mobile: null,
      alt: 'IntelliCT intelligent transportation system showing traffic and vehicle detection',
    },
    links: { demo: '#', github: '#' },
    isConcept: false,
    statusLabel: 'Hackathon Winner',
  },
  {
    id: 'atlas',
    outcomeTitle: 'Atlas — memory & decision guardrails MCP for AI agents',
    tags: ['AI Engineering', 'Backend', 'Developer Tools'],
    role: 'Solo Developer',
    category: 'ai',
    problem:
      'AI coding agents start fresh tasks without prior context, silently reversing architecture decisions or repeating settled engineering debates.',
    solution:
      'An MCP server with a FastAPI backend and live dashboard that preserves engineering intent, detects conflicting instructions, and prevents token bloat.',
    features: [
      'MCP server with decision logging, semantic search, and conflict detection',
      'Dual storage support: local SQLite or production PostgreSQL + pgvector',
      'Live audit dashboard with decision timelines and token-avoided metrics',
    ],
    stack: ['Python', 'FastAPI', 'MCP', 'PostgreSQL', 'pgvector', 'SQLite'],
    image: {
      desktop: '/screenshots/atlas-dashboard.png',
      mobile: null,
      alt: 'Atlas engineering context dashboard showing decision summary and token metrics',
    },
    links: { demo: '#', github: 'https://github.com/Ifeanyi-design/ATLAS' },
    isConcept: false,
    statusLabel: 'Open Source MCP',
  },
  {
    id: 'servicesync',
    outcomeTitle: 'AI-native home service marketplace with escrow payments',
    tags: ['Backend', 'AI Engineering', 'Product Engineering'],
    role: 'Solo Developer',
    category: 'ai',
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
  {
    id: 'maxcinema',
    outcomeTitle: 'Movie streaming platform that updates itself',
    tags: ['Backend', 'Full-Stack', 'Automation'],
    role: 'Solo Developer',
    category: 'web',
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
    tags: ['Full-Stack', 'Developer Tools', 'Product Engineering'],
    role: 'Solo Developer',
    category: 'web',
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
    id: 'padeespace',
    outcomeTitle: 'PadeeSpace — an inclusive education platform for students',
    tags: ['Product Engineering', 'EdTech', 'Team Project'],
    role: 'Team Contributor',
    recognition: 'Top 15 in Africa — AFRETEC Inclusive Education Challenge 2026',
    category: 'web',
    problem:
      'Access to education technology is uneven — students are often left out by tools that were built without their context in mind.',
    solution:
      'A student-facing education platform developed with the team for the AFRETEC Inclusive Education Challenge 2026, where the project was selected among the Top 15 teams in Africa.',
    features: [
      'Education platform aimed at inclusive access for students',
      'Selected among the Top 15 teams in Africa in the AFRETEC challenge',
      'Developed collaboratively as a team — product, design and engineering',
    ],
    // TODO(verify): add the real stack once confirmed with the team.
    stack: ['Product Development', 'Web Platform', 'Team Collaboration'],
    image: {
      // TODO: drop a screenshot in public/screenshots/ then set the path here.
      desktop: null,
      mobile: null,
      alt: 'PadeeSpace inclusive education platform interface',
    },
    links: { demo: '#', github: '#' },
    isConcept: false,
    statusLabel: 'Top 15 in Africa',
  },
  {
    id: 'zara-video',
    outcomeTitle: 'AI video series where the characters stay the same',
    tags: ['AI Engineering', 'Creative Pipeline'],
    role: 'Solo Developer',
    category: 'ai',
    problem:
      'AI-generated video breaks the moment a story needs more than one clip — faces, outfits and style drift, so the final cut looks accidental instead of intentional.',
    solution:
      'A repeatable pipeline for a multi-episode Pidgin-language children\u2019s series: script and storyboard first, then generate, stitch, voice and format so the same characters hold across every clip.',
    features: [
      'Multi-episode series with the same characters consistent across every clip',
      'Storyboard-first workflow so each shot generates predictably before stitching',
      'Finished episodes with voiceover, music and platform-ready aspect ratios',
    ],
    stack: ['Google Flow', 'Hailuo / MiniMax', 'ElevenLabs', 'CapCut', 'Storyboarding'],
    image: {
      desktop: null, // TODO: add public/screenshots/zara-still.png then set this path
      mobile: null,
      alt: 'Stills from the Zara AI video series showing the same characters across multiple clips',
    },
    links: { demo: '#', github: '#' }, // TODO: paste the YouTube/series link here
    isConcept: false,
    statusLabel: 'Personal Series',
  },
  {
    id: 'gregbuk',
    outcomeTitle: 'Enterprise web portal for commercial printing & digital ID firm',
    tags: ['Backend', 'Full-Stack', 'Product Engineering'],
    role: 'Solo Developer',
    category: 'web',
    problem:
      'Established corporate service firms struggle with outdated web presence that fails to represent multi-division scale, machinery, and digital ID workflows.',
    solution:
      'A multi-service corporate portal showcasing digital ID solutions, printing consumables, machinery, and consultation workflows with asynchronous task management.',
    features: [
      'Multi-division corporate showcase covering digital ID printing, consumables, and machinery',
      'Interactive consultation and quote request pipeline with Celery background tasks',
      'Modern corporate web portal with dark/light mode and PostgreSQL backend',
    ],
    stack: ['Python', 'HTML5', 'CSS3', 'Bootstrap', 'Celery', 'PostgreSQL'],
    image: {
      desktop: '/screenshots/gregbuk-services.png',
      mobile: null,
      alt: 'Gregbuk International Company corporate services and printing machinery portal',
    },
    links: {
      demo: 'https://gregbuk.onrender.com/',
      github: 'https://github.com/Ifeanyi-design/Gregbuk',
    },
    isConcept: false,
  },
];
