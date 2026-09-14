interface ScreenshotPlaceholderProps {
  projectName: string;
  tall?: boolean;
}

/** Shown whenever a screenshot is missing — honest, no lorem, no fake image. */
export default function ScreenshotPlaceholder({ projectName, tall = false }: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border border-dashed border-white/25 bg-white/5 px-4 text-center ${
        tall ? 'aspect-[16/10]' : 'aspect-[9/16]'
      }`}
    >
      <p className="text-sm font-semibold text-white/80">{projectName}</p>
      <p className="mt-1 text-xs text-white/50">Screenshot coming soon</p>
    </div>
  );
}
