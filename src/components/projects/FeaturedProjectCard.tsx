import { Lock } from "lucide-react";
import type { AndroidProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVisual } from "./AbstractVisual";
import { ScreensVisual } from "./ScreensVisual";
import { ScreensGallery } from "./ScreensGallery";

export function FeaturedProjectCard({
  project,
  reverse = false,
}: {
  project: AndroidProject;
  reverse?: boolean;
}) {
  const hasGallery = project.images && project.images.length >= 3;

  const header = (
    <>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[var(--color-text-tertiary)]">{project.index}</span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        {project.confidential && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
            <Lock size={11} />
            Details limited
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.category.map((c) => (
          <Tag key={c} accent="android">
            {c}
          </Tag>
        ))}
      </div>

      <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
        {project.title}
      </h3>

      {project.context && (
        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
          {project.context}
        </p>
      )}

      <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)]">
        {project.overview}
      </p>

      <div className="mt-7">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
          Areas of work
        </p>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {project.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-android)]" />
              {area}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech} size="xs">
            {tech}
          </Tag>
        ))}
      </div>
    </>
  );

  if (hasGallery) {
    return (
      <Reveal>
        <article className="rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:p-12">
          {header}

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              App screens
            </p>
            <ScreensGallery
              images={project.images!}
              alt={project.imageAlt ?? `${project.title} app screens`}
            />
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <article className="grid grid-cols-1 gap-10 rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
        <div className={reverse ? "lg:order-2" : ""}>
          {project.images && project.images.length > 0 ? (
            <ScreensVisual
              images={project.images}
              alt={project.imageAlt ?? `${project.title} app screens`}
              className="h-full"
            />
          ) : (
            <AbstractVisual accent="android" labels={project.technologies} className="h-full" />
          )}
        </div>

        <div className={reverse ? "lg:order-1" : ""}>{header}</div>
      </article>
    </Reveal>
  );
}
