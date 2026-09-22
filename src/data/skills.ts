import type { FocusArea, SkillGroup } from '../types';

/**
 * Grouped skills — replaces the repeated technology marquees.
 *
 * `level` is intentionally coarse (Core / Applied / Working Knowledge /
 * Exploring). There are no star ratings here: a 4/5 says nothing, cannot be
 * verified, and reads as padding to the engineers who read this page.
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend / Software Engineering',
    level: 'Core',
    note: 'Where I am strongest — APIs, data modelling, authentication and background work.',
    skills: [
      'Python', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL',
      'SQLAlchemy', 'SQLModel', 'JWT Authentication', 'Redis', 'Celery',
    ],
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    level: 'Applied',
    note: 'Shipped systems: agents with persistent memory, tool-calling and semantic retrieval.',
    skills: [
      'LLMs', 'RAG', 'AI Agents', 'Tool Calling', 'LangGraph',
      'MCP', 'Semantic Search', 'pgvector',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend / Application Development',
    level: 'Applied',
    note: 'Typed, responsive interfaces — including a canvas editor built on react-konva.',
    skills: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS',
      'React Native', 'Zustand', 'JavaScript',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    level: 'Working Knowledge',
    note: 'Coursework plus hands-on experimentation — models, data handling and evaluation.',
    skills: [
      'Python', 'scikit-learn', 'PyTorch', 'TensorFlow',
      'Computer Vision', 'OpenCV', 'YOLO', 'NumPy', 'Pandas',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure / Services',
    level: 'Working Knowledge',
    note: 'Deployment and third-party services used across the projects above.',
    skills: [
      'Supabase', 'Cloudflare', 'Stripe', 'Render', 'Vercel', 'Git',
    ],
  },
];

/** "Current focus" — what I am actively building, in plain language. */
export const focusAreas: readonly FocusArea[] = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    desc: 'AI-powered systems that do real work rather than demos — agents, RAG workflows, tool-calling and MCP servers.',
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    desc: 'Python APIs with FastAPI and Flask, PostgreSQL data modelling, JWT authentication and Celery background work.',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    desc: 'React and TypeScript applications with typed data layers and responsive, accessible interfaces.',
  },
  {
    id: 'vision',
    title: 'AI / Computer Vision',
    desc: 'Computer vision experimentation — detection and recognition pipelines applied to problems like traffic analysis.',
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    desc: 'Designing applications that stay maintainable: explicit interfaces, tests, documentation and honest trade-offs.',
  },
];
