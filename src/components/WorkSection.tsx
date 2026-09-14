import { useMemo, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import ImageModal, { type ModalImageData } from './ImageModal';

type FilterCategory = 'all' | Project['category'];

/** Tabs are derived from the data — counts can never drift out of sync again. */
const TABS: readonly { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai',  label: 'AI & Automation' },
  { id: 'web', label: 'Web Applications' },
];

export default function WorkSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [activeImage, setActiveImage] = useState<ModalImageData | null>(null);

  const counts = useMemo(
    () => ({
      all: projects.length,
      ai: projects.filter((p) => p.category === 'ai').length,
      web: projects.filter((p) => p.category === 'web').length,
    }),
    [],
  );

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              Selected Work
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-[1.8] text-ink/50">
              {counts.all} shipped applications across web platforms, AI systems and developer tools.
              Click any screenshot for an enlarged view.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0 text-xs py-2.5">
            Start a Project <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {TABS.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white shadow-glow-sm'
                    : 'border border-white/8 bg-surface-elevated text-ink/50 hover:border-accent/30 hover:text-ink'
                }`}
              >
                {tab.id === 'ai' && (
                  <Sparkles size={12} className={isActive ? 'text-white' : 'text-accent-light'} />
                )}
                {tab.label} ({counts[tab.id]})
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onExpandImage={setActiveImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Image Modal */}
      <ImageModal
        data={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
