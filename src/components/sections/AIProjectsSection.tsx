"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AIProjectCard } from "@/components/projects/AIProjectCard";
import { aiProjects } from "@/data/aiProjects";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function AIProjectsSection() {
  const { lang, t } = useLanguage();
  const majors = aiProjects.filter((p) => !p.placeholder);
  const placeholders = aiProjects.filter((p) => p.placeholder);

  return (
    <section className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32">
      <Container>
        <SectionHeading
          kicker={t.ai.kicker}
          kickerAccent="ai"
          title={t.ai.title}
          description={t.ai.desc}
        />

        {majors.length > 0 && (
          <div className="mt-14 flex flex-col gap-8">
            {majors.map((project, i) => (
              <AIProjectCard
                key={project.id}
                project={project}
                reverse={i % 2 === 1}
                delay={Math.min(i * 0.08, 0.2)}
              />
            ))}
          </div>
        )}

        {placeholders.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {placeholders.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i * 0.08, 0.2)}>
                <div className="flex h-full min-h-[160px] flex-col justify-between rounded-2xl border border-dashed border-[var(--color-border)] p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                      {t.ai.status[project.status]}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--color-ai)] opacity-60" />
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {pick(lang, project.overview, project.overviewAr)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
