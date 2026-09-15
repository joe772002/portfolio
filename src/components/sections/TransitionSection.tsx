"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function TransitionSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-border-soft)] py-16 sm:py-24 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.06), transparent 70%)",
        }}
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              {t.transition.kicker}
            </p>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              <span className="text-[var(--color-android)]">{t.transition.aAccent}</span>
              <span className="text-[var(--color-text-primary)]">{t.transition.aRest}</span>
              <br />
              <span className="text-[var(--color-ai)]">{t.transition.bAccent}</span>
              <span className="text-[var(--color-text-primary)]">{t.transition.bRest}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {t.transition.para}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
