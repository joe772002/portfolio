"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <section
      id="experience"
      className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          kicker={t.experience.kicker}
          kickerAccent="android"
          title={t.experience.title}
          description={t.experience.desc}
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-elevated)]">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-android)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-medium text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
