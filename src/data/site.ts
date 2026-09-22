import type { SiteConfig } from '../types';

/**
 * SINGLE source of truth for personal info.
 * DUMMY values marked with a comment — replace them here and the
 * whole site (header, hero, contact, footer) updates at once.
 *
 * Positioning: this site leads with professional credibility (student, engineer,
 * internship-ready) and keeps the freelance offer as a secondary path. Keep the
 * wording factual — no superlatives, no invented metrics.
 */
export const site: SiteConfig = {
  name: 'Ifeanyi Agada',
  role: 'AI Engineer • Backend / Full-Stack Developer',
  shortRole: 'AI Engineer / Backend & Full-Stack',
  availability: 'Open to IT / Internship Opportunities',
  availabilityShort: 'Open to IT & Internships',
  intro: 'Computer Science student at the University of Ibadan.',
  valueProp:
    'I build backend services, full-stack web applications and AI-powered systems — from REST APIs and database design through to computer vision and tool-calling agents.',
  about: [
    'I am a Computer Science student at the University of Ibadan. I build software and AI systems, and my strongest practical ground is Python: backend services, REST APIs, database design, and the AI layer that sits on top of them.',
    'That work has been hands-on rather than theoretical — a Flask streaming platform with an automated publishing bot, a FastAPI marketplace with AI triage and escrow payments, an MCP server that gives coding agents persistent engineering memory, and a browser-based canvas editor in React and TypeScript.',
    'Most of what I build now happens with other people. I contributed to IntelliCT, a computer vision system for intelligent transportation that took first place at the IESA Forge the Future Hackathon 2026, and I build alongside Team Devions. I care about systems that stay debuggable and documented, and I am still learning — deliberately, and in public.',
  ],
  interests: [
    'AI Engineering',
    'Computer Vision',
    'Backend Systems',
    'AI Agents',
    'RAG',
    'MCP',
    'Full-Stack Development',
    'Software Engineering',
  ],
  email: 'ifeanyiagada123@gmail.com',
  location: 'Nigeria (remote worldwide)',
  socials: [
    { label: 'GitHub',    href: 'https://github.com/Ifeanyi-design' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ifeanyi-agada-763215368/' },
    { label: 'WhatsApp',  href: 'https://wa.me/2347038039526' },
  ],
};
