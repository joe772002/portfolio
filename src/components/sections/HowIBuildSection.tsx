"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading, SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function HowIBuildSection() {
  const { t } = useLanguage();
  return (
    <section className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker={t.how.kicker}
          kickerAccent="android"
          title={t.how.title}
          description={t.how.desc}
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.how.items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-elevated)]">
                <SectionKicker accent="android">0{i + 1}</SectionKicker>
                <h3 className="mt-3 font-display text-base font-medium text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
                {i === 0 && (
                  <p dir="ltr" className="mt-4 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/50 p-3 text-center font-mono text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                    UI → ViewModel → UseCase → Repository → API / DB
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
