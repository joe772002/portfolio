"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { CompactProjectCard } from "@/components/projects/CompactProjectCard";
import {
  featuredAndroidProjects,
  otherProfessionalProjects,
} from "@/data/androidProjects";
import { useLanguage } from "@/i18n/LanguageContext";

type Mode = "all" | "featured";

export function AndroidProjectsSection({ mode = "all" }: { mode?: Mode } = {}) {
  const { t } = useLanguage();

  if (mode === "featured") {
    return (
      <section
        id="projects"
        className="relative border-t border-[var(--color-border-soft)] py-14 sm:py-24 lg:py-32"
      >
        <Container>
          <SectionHeading
            kicker={t.android.kicker}
            kickerAccent="android"
            title={t.android.title}
            description={t.android.desc}
          />

          <p className="mt-10 mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] sm:mt-16">
            {t.android.featured}
          </p>
          <div className="flex flex-col gap-8">
            {featuredAndroidProjects
              .filter((p) => !p.personal)
              .map((project, i) => (
                <FeaturedProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
              ))}
          </div>

          {otherProfessionalProjects.length > 0 && (
            <div className="mt-14">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                {t.android.selected}
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {otherProfessionalProjects.map((project) => (
                  <CompactProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section id="work" className="relative border-t border-[var(--color-border-soft)] py-14 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          kicker={t.android.kicker}
          kickerAccent="android"
          title={t.android.title}
          description={t.android.desc}
        />

        <p className="mt-10 mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] sm:mt-16">
          {t.android.featured}
        </p>
        <div className="flex flex-col gap-8">
          {featuredAndroidProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {otherProfessionalProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherProfessionalProjects.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
