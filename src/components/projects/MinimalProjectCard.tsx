import type { AndroidProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function MinimalProjectCard({ project }: { project: AndroidProject }) {
  return (
    <Reveal>
      <article className="group flex h-full flex-col rounded-xl border border-[var(--color-border-soft)] p-6 transition-colors hover:border-[var(--color-border)] hover:bg-[var(--color-bg-elevated)]">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
          Personal Project
        </span>
        <h4 className="mt-3 font-display text-lg font-medium text-[var(--color-text-primary)]">
          {project.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {project.overview}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Tag key={tech} size="xs">
              {tech}
            </Tag>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
