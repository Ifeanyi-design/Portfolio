import { useEffect } from 'react';
import { X, ExternalLink, GitFork } from 'lucide-react';

export interface ModalImageData {
  src: string;
  alt: string;
  title: string;
  demo?: string;
  github?: string;
}

interface Props {
  data: ModalImageData | null;
  onClose: () => void;
}

export default function ImageModal({ data, onClose }: Props) {
  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  const hasDemo = data.demo && data.demo !== '#';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md transition-all duration-300 animate-fade-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-surface-card shadow-2xl"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-surface-border bg-surface-elevated/95 px-5 py-3.5 backdrop-blur">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shrink-0" />
            <h4 className="truncate text-sm font-bold text-ink sm:text-base">
              {data.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {hasDemo && (
              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-1.5 px-3.5 text-xs hidden sm:inline-flex"
              >
                Live Demo <ExternalLink size={12} />
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost py-1.5 px-3.5 text-xs hidden sm:inline-flex"
              >
                <GitFork size={13} /> Repo
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-ink/60 transition-colors hover:border-accent/40 hover:bg-white/10 hover:text-ink cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="relative flex items-center justify-center overflow-auto bg-black/60 p-2 sm:p-4">
          <img
            src={data.src}
            alt={data.alt}
            className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>

        {/* Mobile footer info bar */}
        <div className="flex items-center justify-between border-t border-surface-border bg-surface-elevated px-4 py-2.5 text-xs text-ink/50 sm:hidden">
          <span className="truncate pr-2">{data.alt}</span>
          <div className="flex gap-3 shrink-0">
            {hasDemo && (
              <a href={data.demo} target="_blank" rel="noopener noreferrer" className="text-accent-light font-semibold">
                Demo ↗
              </a>
            )}
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-ink/70">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
