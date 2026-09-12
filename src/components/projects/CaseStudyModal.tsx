"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { AndroidProject } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: AndroidProject;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:rounded-3xl sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-[var(--color-text-tertiary)]">{project.index}</p>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label={t.android.close}
            className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/50 p-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.android.role}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-primary)]">
              {pick(lang, project.role ?? "Android Developer", project.roleAr)}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.android.platform}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-primary)]">
              {pick(lang, project.platform ?? "Android", project.platformAr)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
          {pick(lang, project.overview, project.overviewAr)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech} size="xs">
              {tech}
            </Tag>
          ))}
        </div>

        {project.challenges && (
          <div className="mt-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.android.challenges}
            </p>
            <ul className="flex flex-col gap-2.5">
              {pick(lang, project.challenges, project.challengesAr).map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-android)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(project.approach || project.approachAr) && (
          <div className="mt-8 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/50 p-4">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
              {t.android.approach}
            </p>
            <p dir="ltr" className="text-center font-mono text-xs leading-relaxed text-[var(--color-text-primary)]">
              {pick(lang, project.approach ?? "", project.approachAr)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
