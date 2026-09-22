import {
  ExternalLink, GitFork, Film, Palette, BrainCircuit, Zap, Printer, Clapperboard,
  Maximize2, CarFront, GraduationCap, Trophy,
} from 'lucide-react';
import type { Project } from '../types';
import type { ModalImageData } from './ImageModal';

interface Props {
  project: Project;
  onExpandImage?: (data: ModalImageData) => void;
}

/* Single consistent icon per project — no emoji */
function ProjectIcon({ id }: { id: string }) {
  const map: Record<string, React.ReactNode> = {
    'intellict':     <CarFront size={20} />,
    'maxcinema':     <Film size={20} />,
    'manga-forge':   <Palette size={20} />,
    'atlas':         <BrainCircuit size={20} />,
    'servicesync':   <Zap size={20} />,
    'gregbuk':       <Printer size={20} />,
    'zara-video':    <Clapperboard size={20} />,
    'padeespace':    <GraduationCap size={20} />,
  };
  return <>{map[id] ?? <Zap size={20} />}</>;
}

/** A link is real only when it exists and is not the '#' placeholder. */
function isRealLink(href: string | undefined): href is string {
  return typeof href === 'string' && href.length > 0 && href !== '#';
}

export default function ProjectCard({ project, onExpandImage }: Props) {
  const hasDemo = isRealLink(project.links.demo);
  const hasGithub = isRealLink(project.links.github);

  return (
    <article className="card group flex flex-col overflow-hidden hover:scale-[1.01]">

      {/* Accent top bar — single indigo for all cards */}
      <div className="h-[2px] w-full bg-gradient-to-r from-accent to-accent-light opacity-70" />

      {/* Header row */}
      <div className="flex items-start gap-4 p-6 pb-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent-light border border-accent/20">
          <ProjectIcon id={project.id} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold leading-snug text-ink">{project.outcomeTitle}</h3>
            {project.isConcept ? (
              <span className="shrink-0 rounded-md border border-white/10 bg-surface-elevated px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink/35">
                Concept
              </span>
            ) : hasDemo ? (
              <span className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-ok/30 bg-ok/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" />
                Live Project
              </span>
            ) : (
              <span className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-light">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                {project.statusLabel ?? 'Case Study'}
              </span>
            )}
          </div>

          {/* Role — makes collaborative work explicit instead of looking solo */}
          <p className="mt-1.5 text-[11px] font-semibold text-ink/40">
            Role · <span className="text-accent-light">{project.role}</span>
          </p>

          {/* What this card demonstrates, for a technical reader */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>

          {/* Verified recognition, when there is one */}
          {project.recognition && (
            <span className="mt-3 inline-flex items-start gap-1.5 rounded-lg border border-accent/25 bg-accent-muted px-2.5 py-1.5 text-[11px] font-semibold leading-snug text-accent-light">
              <Trophy size={12} className="mt-[1px] shrink-0" aria-hidden />
              {project.recognition}
            </span>
          )}
        </div>
      </div>

      {/* Screenshot / placeholder */}
      <div className="mx-6 mb-5 overflow-hidden rounded-xl border border-white/8 bg-surface-elevated">
        {project.image.desktop ? (
          <div
            onClick={() =>
              onExpandImage?.({
                src: project.image.desktop!,
                alt: project.image.alt,
                title: project.outcomeTitle,
                demo: project.links.demo,
                github: project.links.github,
              })
            }
            className="group/img relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
            title="Click to view full image"
          >
            <img
              src={project.image.desktop}
              alt={project.image.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-card/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-card/90 border border-white/20 px-3 py-1.5 text-xs font-semibold text-white shadow-xl transition-transform transform scale-95 group-hover/img:scale-100">
                <Maximize2 size={13} className="text-accent-light" /> Full View
              </span>
            </div>
          </div>
        ) : (
          <div className="relative flex aspect-[16/10] w-full items-center justify-center dot-grid overflow-hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-muted text-accent-light">
              <ProjectIcon id={project.id} />
            </div>
            <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-wider text-ink/35">
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>

      {/* Problem / Solution */}
      <div className="mx-6 mb-4 space-y-2 text-sm leading-[1.7] text-ink/55">
        <p><span className="font-semibold text-ink/75">Problem: </span>{project.problem}</p>
        <p><span className="font-semibold text-ink/75">Solution: </span>{project.solution}</p>
      </div>

      {/* Features */}
      <ul className="mx-6 mb-4 space-y-1.5 text-sm text-ink/60">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-light" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div className="mx-6 mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t}
            className="rounded-full border border-white/8 bg-surface-elevated px-2.5 py-0.5 text-[11px] font-medium text-ink/45">
            {t}
          </span>
        ))}
      </div>

      {/* Links — rendered honestly: only real URLs become buttons */}
      <div className="mt-auto flex gap-2.5 border-t border-surface-border p-6 pt-4">
        {hasDemo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
             className="btn-primary flex-1 justify-center py-2.5 text-xs">
            Live Demo <ExternalLink size={13} />
          </a>
        )}
        {hasGithub && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
             className={hasDemo
               ? 'btn-ghost flex-1 justify-center py-2.5 text-xs'
               : 'btn-primary flex-1 justify-center py-2.5 text-xs'}>
            <GitFork size={14} /> {hasDemo ? 'GitHub' : 'View GitHub Repository'}
            {!hasDemo && <ExternalLink size={13} />}
          </a>
        )}
        {!hasDemo && !hasGithub && (
          <p className="flex-1 text-center text-xs font-medium text-ink/40 py-2.5">
            Built with a team — details on request
          </p>
        )}
      </div>
    </article>
  );
}
