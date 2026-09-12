"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import type { AndroidProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVisual } from "./AbstractVisual";
import { ScreensVisual } from "./ScreensVisual";
import { ScreensGallery } from "./ScreensGallery";
import { CaseStudyModal } from "./CaseStudyModal";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function FeaturedProjectCard({
  project,
  reverse = false,
}: {
  project: AndroidProject;
  reverse?: boolean;
}) {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const hasGallery = project.images && project.images.length >= 3;

  const header = (
    <>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[var(--color-text-tertiary)]">{project.index}</span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        {project.confidential && (
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
            <Lock size={11} />
            {t.android.limited}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {pick(lang, project.category, project.categoryAr).map((c) => (
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
          {pick(lang, project.context, project.contextAr)}
        </p>
      )}

      {(project.role || project.platform) && (
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
          {project.role && (
            <div className="flex items-baseline gap-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                {t.android.role}
              </dt>
              <dd className="text-sm text-[var(--color-text-primary)]">
                {pick(lang, project.role, project.roleAr)}
              </dd>
            </div>
          )}
          {project.platform && (
            <div className="flex items-baseline gap-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                {t.android.platform}
              </dt>
              <dd className="text-sm text-[var(--color-text-primary)]">
                {pick(lang, project.platform, project.platformAr)}
              </dd>
            </div>
          )}
        </dl>
      )}

      <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)]">
        {pick(lang, project.overview, project.overviewAr)}
      </p>

      <div className="mt-7">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
          {t.android.areas}
        </p>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {pick(lang, project.focusAreas, project.focusAreasAr).map((area) => (
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

      <div className="mt-7 flex flex-wrap gap-3">
        {project.caseStudyUrl ? (
          <Link
            href={project.caseStudyUrl}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
          >
            {t.android.viewCase}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </Link>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
          >
            {t.android.viewCase}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </button>
        )}
        {project.playUrl && (
          <a
            href={project.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
          >
            {t.android.viewPlay}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
        )}
      </div>
      {open && <CaseStudyModal project={project} onClose={() => setOpen(false)} />}
    </>
  );

  if (hasGallery) {
    return (
      <Reveal>
        <article className="rounded-3xl border border-[var(--color-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-android-line)]/60 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-8 lg:p-12">
          {header}

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.android.screens}
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
      <article className="grid grid-cols-1 gap-10 rounded-3xl border border-[var(--color-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-android-line)]/60 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
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
