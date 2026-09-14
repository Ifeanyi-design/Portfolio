import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ImageModal, { type ModalImageData } from './ImageModal';

type FilterCategory = 'all' | 'ai' | 'web';

export default function WorkSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [activeImage, setActiveImage] = useState<ModalImageData | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ai') return p.id === 'servicesync' || p.id === 'atlas';
    if (filter === 'web') return p.id === 'maxcinema' || p.id === 'manga-forge' || p.id === 'gregbuk';
    return true;
  });

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
              5 production-grade applications across web platforms, developer tools, and AI systems.
              Click any project screenshot for an enlarged view.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0 text-xs py-2.5">
            Start a Project <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-accent text-white shadow-glow-sm'
                : 'border border-white/8 bg-surface-elevated text-ink/50 hover:border-accent/30 hover:text-ink'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === 'ai'
                ? 'bg-accent text-white shadow-glow-sm'
                : 'border border-white/8 bg-surface-elevated text-ink/50 hover:border-accent/30 hover:text-ink'
            }`}
          >
            <Sparkles size={12} className="text-accent-light" /> AI & Automation (2)
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === 'web'
                ? 'bg-accent text-white shadow-glow-sm'
                : 'border border-white/8 bg-surface-elevated text-ink/50 hover:border-accent/30 hover:text-ink'
            }`}
          >
            Web Applications (3)
          </button>
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
