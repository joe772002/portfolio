"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();
  const tl = t.experience.timeline;
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
        <Reveal>
          <article className="mt-10 rounded-3xl border border-[var(--color-border)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-medium text-[var(--color-text-primary)] sm:text-2xl">
                  {tl.role} — {tl.company}
                </h3>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                  {tl.period} · {tl.type}
                </p>
              </div>
              <span className="h-2 w-2 rounded-full bg-[var(--color-android)]" aria-hidden />
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {tl.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-android)]" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
