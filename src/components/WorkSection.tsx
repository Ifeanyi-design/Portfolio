import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function WorkSection() {
  return (
    <section id="work" className="relative py-24">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              Selected Work
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Things I've{' '}
              <span className="text-gradient">Built</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-[1.8] text-ink/50">
              Projects across web platforms, developer tools and AI systems — each solving a real problem.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0 text-xs py-2.5">
            Start a Project <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
