"use client";

import { ArrowRight } from "lucide-react";
import type { AndroidProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function CompactProjectCard({ project }: { project: AndroidProject }) {
  const { lang, t } = useLanguage();
  return (
    <Reveal>
      <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
            {project.index}
          </span>
          <div className="h-px flex-1 bg-[var(--color-border-soft)]" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {pick(lang, project.category, project.categoryAr).map((c) => (
            <Tag key={c} accent="android" size="xs">
              {c}
            </Tag>
          ))}
        </div>

        <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-[var(--color-text-primary)]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {pick(lang, project.overview, project.overviewAr)}
        </p>

        <p className="mt-5 text-balance text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
          {pick(lang, project.portfolioFocus, project.portfolioFocusAr)[0]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech} size="xs">
              {tech}
            </Tag>
          ))}
        </div>
        {project.playUrl && (
          <a
            href={project.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-android)]"
          >
            {t.android.viewPlay}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </a>
        )}
      </article>
    </Reveal>
  );
}
