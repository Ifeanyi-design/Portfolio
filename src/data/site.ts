import type { SiteConfig } from '../types';

/**
 * SINGLE source of truth for personal info.
 * DUMMY values marked with a comment — replace them here and the
 * whole site (header, hero, contact, footer) updates at once.
 */
export const site: SiteConfig = {
  name: 'Ifeanyi Agada',
  role: 'Full-Stack & AI Developer',
  availability: 'Open to Work — Available Now',
  headline: 'Websites, web apps and AI that grow your business.',
  valueProp:
    'I build modern websites, web applications, AI-powered systems and business automation.',
  about: [
    'I am a computer science student in Nigeria who builds real, working software: Flask backends, PostgreSQL databases, REST APIs with JWT auth, and React + TypeScript frontends.',
    'My recent work includes a movie streaming platform, a canvas-based comic editor, and AI agents with persistent memory — so I have shipped both business web apps and AI systems end to end.',
    'I like understanding how things work underneath, not just calling APIs — which means the systems I build for you are debuggable, documented and maintainable.',
  ],
  email: 'ifeanyiagada123@gmail.com',
  location: 'Nigeria (remote worldwide)',
  socials: [
    { label: 'GitHub',    href: 'https://github.com/Ifeanyi-design' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ifeanyi-agada-763215368/' },
    { label: 'WhatsApp',  href: 'https://wa.me/2347038039526' },
  ],
};
