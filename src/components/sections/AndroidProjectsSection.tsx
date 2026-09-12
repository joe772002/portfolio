"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { CompactProjectCard } from "@/components/projects/CompactProjectCard";
import { MinimalProjectCard } from "@/components/projects/MinimalProjectCard";
import {
  featuredAndroidProjects,
  otherProfessionalProjects,
  personalAndroidProjects,
} from "@/data/androidProjects";
import { useLanguage } from "@/i18n/LanguageContext";

type Mode = "all" | "featured" | "personal";

export function AndroidProjectsSection({ mode = "all" }: { mode?: Mode } = {}) {
  const { t } = useLanguage();

  if (mode === "personal") {
    return (
      <section
        id="android-projects"
        className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32"
      >
        <Container>
          <SectionHeading
            kicker={t.android.personal}
            kickerAccent="android"
            title={t.android.personal}
            description={t.android.desc}
          />
          {personalAndroidProjects.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {personalAndroidProjects.map((project) => (
                <MinimalProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </Container>
      </section>
    );
  }

  if (mode === "featured") {
    return (
      <section
        id="projects"
        className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32"
      >
        <Container>
          <SectionHeading
            kicker={t.android.kicker}
            kickerAccent="android"
            title={t.android.title}
            description={t.android.desc}
          />

          <p className="mt-16 mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
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
    <section id="work" className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32">
      <Container>
        <SectionHeading
          kicker={t.android.kicker}
          kickerAccent="android"
          title={t.android.title}
          description={t.android.desc}
        />

        <p className="mt-16 mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
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

        {personalAndroidProjects.length > 0 && (
          <div className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              {t.android.personal}
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {personalAndroidProjects.map((project) => (
                <MinimalProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
