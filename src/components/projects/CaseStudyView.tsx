"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { ScreensGallery } from "./ScreensGallery";
import type { CaseStudy } from "@/data/caseStudies";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const { lang, t } = useLanguage();
  const title = pick(lang, study.title, study.titleAr);
  const context = pick(lang, study.contextEn, study.contextAr);
  const label = (key: string): string => {
    const cs = t.caseStudy as unknown as Record<string, string>;
    return cs[key] ?? key;
  };
  return (
    <div className="pt-24 pb-20 sm:pt-28">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          <ArrowLeft size={14} className="rtl:rotate-180" />
          {t.caseStudy.back}
        </Link>
        <div className="mt-6 max-w-3xl">
          <SectionKicker accent="android">{t.android.featured}</SectionKicker>
          <h1 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">{context}</p>
          <p className="mt-5 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/50 p-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {t.android.confidentialNote}
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-10">
          {study.sections.map((s) => (
            <section key={s.key} className="max-w-3xl">
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-android)]">{label(s.key)}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {pick(lang, s.bodyEn, s.bodyAr).map((p) => (
                  <p key={p} className="text-base leading-relaxed text-[var(--color-text-secondary)]">{p}</p>
                ))}
              </div>
              {s.listEn && (
                <ul className="mt-4 flex flex-col gap-2">
                  {pick(lang, s.listEn, s.listAr ?? s.listEn).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-android)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        {study.images && study.images.length > 0 && (
          <div className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">{t.caseStudy.screens}</h2>
            <div className="mt-5">
              <ScreensGallery images={study.images} alt={study.imageAlt ?? title} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
