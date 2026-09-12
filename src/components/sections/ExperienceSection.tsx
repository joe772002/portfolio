"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSection() {
  const { lang, t } = useLanguage();
  const ind = t.experience.independent;
  const tl = t.experience.timeline;
  const sw = t.experience.software;
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
        <Reveal delay={0.05}>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.experience.metrics.map((m, i) => (
              <div
                key={m.label}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-8"
              >
                <span
                  className={
                    i === 0
                      ? "font-display text-5xl font-semibold tracking-tight text-[var(--color-android)] sm:text-6xl"
                      : "font-display text-5xl font-semibold tracking-tight text-[var(--color-ai)] sm:text-6xl"
                  }
                >
                  {m.value}
                </span>
                <p className="mt-2 font-display text-base text-[var(--color-text-primary)] sm:text-lg">
                  {m.label}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                  {m.hint}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 font-display text-base leading-relaxed text-[var(--color-text-primary)] sm:p-8 sm:text-lg">
            {t.experience.foundation}
          </p>
        </Reveal>
        <div className="relative mt-6 flex flex-col gap-6">
          <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--color-border)] sm:left-[7px]" />
          <Reveal>
            <article className="relative ps-8">
              <span aria-hidden className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg)]" />
              <div className="rounded-3xl border border-[var(--color-border)] p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                      01
                    </span>
                    <h3 className="mt-2 font-display text-lg font-medium text-[var(--color-text-primary)] sm:text-xl">
                      {ind.role}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                      {ind.period} · {ind.type}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  {ind.desc}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-tertiary)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="relative ps-8">
              <span aria-hidden className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full bg-[var(--color-android)]" />
              <div className="rounded-3xl border border-[var(--color-android-line)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-android)]">
                      02
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-[var(--color-text-primary)] sm:text-2xl">
                      {tl.role} — {tl.company}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                      {tl.period} · {tl.type}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--color-android-line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-android)]">
                    {lang === "ar" ? "الحالية" : "Current"}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {tl.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-android)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="relative ps-8">
              <span aria-hidden className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full bg-[var(--color-ai)]" />
              <div className="rounded-3xl border border-[var(--color-border)] p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ai)]">
                      03
                    </span>
                    <h3 className="mt-2 font-display text-lg font-medium text-[var(--color-text-primary)] sm:text-xl">
                      {sw.role}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                      {sw.period} · {sw.type}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                    {sw.scopeLabel}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  {sw.desc}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {sw.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-tertiary)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-[var(--color-border-soft)] pt-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {sw.aiNote}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
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
