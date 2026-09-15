"use client";

import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function AboutSection() {
  const { lang, t } = useLanguage();
  const strengths = t.about.strengths;
  return (
    <section id="about" className="relative border-t border-[var(--color-border-soft)] py-14 sm:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="sr-only">{t.about.kicker}</h2>
              <SectionKicker>{t.about.kicker}</SectionKicker>
              <div className="mt-6 flex flex-col gap-5">
                {pick(lang, profile.about, profile.aboutAr).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-balance font-display text-xl leading-relaxed text-[var(--color-text-primary)] sm:text-2xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                  {t.about.strengthsTitle}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {strengths.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? "var(--color-android)" : "var(--color-ai)",
                        }}
                      />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
