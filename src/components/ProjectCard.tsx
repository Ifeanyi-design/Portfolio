import { ExternalLink, GitFork, Film, Palette, BrainCircuit, Zap, Printer, Maximize2 } from 'lucide-react';
import type { Project } from '../types';
import type { ModalImageData } from './ImageModal';

interface Props {
  project: Project;
  onExpandImage?: (data: ModalImageData) => void;
}

/* Single consistent icon per project — no emoji */
function ProjectIcon({ id }: { id: string }) {
  const map: Record<string, React.ReactNode> = {
    'maxcinema':     <Film size={20} />,
    'manga-forge':   <Palette size={20} />,
    'atlas':         <BrainCircuit size={20} />,
    'servicesync':   <Zap size={20} />,
    'gregbuk':       <Printer size={20} />,
  };
  return <>{map[id] ?? <Zap size={20} />}</>;
}

export default function ProjectCard({ project, onExpandImage }: Props) {
  const hasDemo = project.links.demo && project.links.demo !== '#';

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
            ) : !hasDemo ? (
              <span className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-light">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                Open Source MCP
              </span>
            ) : (
              <span className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-ok/30 bg-ok/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse" />
                Live Project
              </span>
            )}
          </div>
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

      {/* Links */}
      <div className="mt-auto flex gap-2.5 border-t border-surface-border p-6 pt-4">
        {hasDemo ? (
          <>
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
               className="btn-primary flex-1 justify-center py-2.5 text-xs">
              Live Demo <ExternalLink size={13} />
            </a>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
               className="btn-ghost flex-1 justify-center py-2.5 text-xs">
              <GitFork size={14} /> GitHub
            </a>
          </>
        ) : (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
             className="btn-primary flex-1 justify-center py-2.5 text-xs">
            <GitFork size={14} /> View GitHub Repository <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
