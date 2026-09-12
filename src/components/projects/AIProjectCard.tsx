"use client";

import type { AIProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVisual } from "./AbstractVisual";
import { WebVisual } from "./WebVisual";
import { WebScreensGallery } from "./WebScreensGallery";
import { ScreensGallery } from "./ScreensGallery";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function AIProjectCard({
  project,
  reverse = false,
  delay = 0,
}: {
  project: AIProject;
  reverse?: boolean;
  delay?: number;
}) {
  const { lang, t } = useLanguage();
  const hasGallery = project.images && project.images.length >= 3;

  const header = (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-2xl font-medium tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
          {pick(lang, project.title, project.titleAr)}
        </h3>
        <Tag accent="ai">{t.ai.status[project.status]}</Tag>
      </div>

      {project.context && (
        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
          {pick(lang, project.context, project.contextAr)}
        </p>
      )}

      <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)]">
        {pick(lang, project.overview, project.overviewAr)}
      </p>

      {project.focus && (
        <div className="mt-7">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
            {t.ai.focus}
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {pick(lang, project.focus, project.focusAr).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ai)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.technicalDirection && (
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technicalDirection.map((tech) => (
            <Tag key={tech} size="xs">
              {tech}
            </Tag>
          ))}
        </div>
      )}
    </>
  );

  if (hasGallery) {
    return (
      <Reveal delay={delay}>
        <article className="rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:p-12">
          {header}

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.ai.screens}
            </p>
            <WebScreensGallery panels={project.images!} />
          </div>
        </article>
      </Reveal>
    );
  }

  if (project.phoneImages && project.phoneImages.length > 0) {
    return (
      <Reveal delay={delay}>
        <article className="rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:p-12">
          {header}

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.ai.screens}
            </p>
            <ScreensGallery
              images={project.phoneImages}
              alt={project.imageAlt ?? project.title}
              accent="ai"
            />
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <article className="grid grid-cols-1 gap-10 rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
        <div className={reverse ? "lg:order-2" : ""}>
          {project.image ? (
            <WebVisual image={project.image} alt={project.imageAlt ?? project.title} className="h-full" />
          ) : (
            <AbstractVisual accent="ai" labels={project.technicalDirection ?? []} className="h-full" />
          )}
        </div>

        <div className={reverse ? "lg:order-1" : ""}>{header}</div>
      </article>
    </Reveal>
  );
}
