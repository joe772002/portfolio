"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
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
  const [focusExpanded, setFocusExpanded] = useState(false);
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const hasGallery = project.images && project.images.length >= 3;
  const allFocus = project.focus ? pick(lang, project.focus, project.focusAr) : [];
  const FOCUS_COLLAPSE_AT = 5;
  const focusCanCollapse = allFocus.length > FOCUS_COLLAPSE_AT;
  const visibleFocus = focusCanCollapse && !focusExpanded ? allFocus.slice(0, FOCUS_COLLAPSE_AT) : allFocus;

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

      <p
        className={`mt-4 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-5 ${
          overviewExpanded ? "" : "line-clamp-3 sm:line-clamp-none"
        }`}
      >
        {pick(lang, project.overview, project.overviewAr)}
      </p>
      <button
        type="button"
        onClick={() => setOverviewExpanded((v) => !v)}
        className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-ai)] sm:hidden"
      >
        {overviewExpanded ? t.android.showLess : t.android.showMore}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${overviewExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {project.focus && (
        <div className="mt-5 sm:mt-7">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
            {t.ai.focus}
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {visibleFocus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ai)]" />
                {item}
              </li>
            ))}
          </ul>
          {focusCanCollapse && (
            <button
              type="button"
              onClick={() => setFocusExpanded((v) => !v)}
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-ai)]"
            >
              {focusExpanded ? t.android.showLess : t.android.showMore}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${focusExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      )}

      {project.technicalDirection && (
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
          {project.technicalDirection.map((tech) => (
            <Tag key={tech} size="xs">
              {tech}
            </Tag>
          ))}
        </div>
      )}

      {project.liveUrl && (
        <div className="mt-5 flex flex-wrap gap-3 sm:mt-7">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-ai-line)] hover:text-[var(--color-ai)]"
          >
            {t.ai.viewLive}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>
      )}
    </>
  );

  if (hasGallery || (project.phoneImages && project.phoneImages.length > 0)) {
    return (
      <Reveal delay={delay}>
        <article className="rounded-3xl border border-[var(--color-border)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-ai-line)]/70 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-8 lg:p-12">
          {header}

          {hasGallery && (
            <div className="mt-7 sm:mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                {lang === "ar" ? "شاشات منصة الويب" : "Web Platform — Product screens"}
              </p>
              <WebScreensGallery panels={project.images!} />
            </div>
          )}

          {project.phoneImages && project.phoneImages.length > 0 && (
            <div className="mt-7 sm:mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                {lang === "ar"
                  ? (project.phoneSectionLabelAr ?? "تطبيق الأندرويد")
                  : (project.phoneSectionLabel ?? "Android Client — Product screens")}
              </p>
              <ScreensGallery
                images={project.phoneImages}
                alt={project.imageAlt ?? project.title}
                accent="ai"
              />
            </div>
          )}
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <article className="grid grid-cols-1 gap-10 rounded-3xl border border-[var(--color-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-ai-line)]/70 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
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
