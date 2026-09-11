import Image from "next/image";
import type { ImagePanel } from "@/types";

export function WebGallery({
  panels,
  className,
}: {
  panels: ImagePanel[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 items-start gap-5 sm:grid-cols-2 ${className ?? ""}`}>
      {panels.map((panel) => (
        <div
          key={panel.src}
          className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
        >
          {panel.label && (
            <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
              <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                {panel.label}
              </span>
            </div>
          )}
          <div className="w-full bg-white">
            <Image
              src={panel.src}
              alt={panel.alt}
              width={panel.width}
              height={panel.height}
              className="h-auto w-full"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
