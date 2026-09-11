"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { pick, useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { lang, t } = useLanguage();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48"
    >
      {/* ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[var(--color-android)] opacity-[0.05] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-[var(--color-ai)] opacity-[0.08] blur-[130px]"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          {/* Left: content */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-secondary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-android)]" />
              {t.hero.badgeA}
              <span className="text-[var(--color-text-tertiary)]">/</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ai)]" />
              {t.hero.badgeB}
            </motion.div>

            <h1 className={`font-display text-[15vw] font-medium tracking-tight text-[var(--color-text-primary)] sm:text-7xl lg:text-[5.5rem] ${lang === "ar" ? "leading-[1.15]" : "leading-[0.95]"}`}>
              <motion.span {...fadeUp(0.05)} className="block">
                {pick(lang, profile.firstName, profile.firstNameAr)}
              </motion.span>
              <motion.span {...fadeUp(0.14)} className={`block text-[var(--color-text-secondary)] ${lang === "ar" ? "mt-3 sm:mt-4" : ""}`}>
                {pick(lang, profile.lastName, profile.lastNameAr)}
              </motion.span>
            </h1>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-7 text-balance font-display text-xl font-medium leading-snug text-[var(--color-text-primary)] sm:text-2xl"
            >
              <span className="text-[var(--color-android)]">{t.hero.roleA}</span>
              <span className="text-[var(--color-text-tertiary)]"> &amp; </span>
              <span className="text-[var(--color-ai)]">{t.hero.roleB}</span>
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 max-w-lg text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            >
              {pick(lang, profile.heroSupport, profile.heroSupportAr)}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-primary)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
              >
                {t.hero.viewWork}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-ai-line)] hover:text-[var(--color-ai)]"
              >
                {t.hero.getInTouch}
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-10 flex items-center gap-8"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-semibold tracking-tight text-[var(--color-android)]">
                  {profile.androidExperience}
                </span>
                <span className="max-w-[110px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--color-text-secondary)]">
                  {pick(lang, profile.androidExperienceLabel, profile.androidExperienceLabelAr)}
                </span>
              </div>
              <span aria-hidden className="h-10 w-px bg-[var(--color-border)]" />
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-semibold tracking-tight text-[var(--color-ai)]">
                  {profile.aiExperience}
                </span>
                <span className="max-w-[110px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--color-text-secondary)]">
                  {pick(lang, profile.aiExperienceLabel, profile.aiExperienceLabelAr)}
                </span>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]"
            >
              <span>{t.trail[0]}</span>
              <ArrowRight size={12} className="rtl:rotate-180" />
              <span>{t.trail[1]}</span>
              <ArrowRight size={12} className="rtl:rotate-180" />
              <span>{t.trail[2]}</span>
            </motion.div>
          </div>

          {/* Right: portrait composition */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:max-w-[330px] lg:justify-self-end"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 330px, (min-width: 640px) 300px, 280px"
                className="object-cover grayscale-[12%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-20 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] sm:flex"
        >
          <ArrowDown size={12} />
          {t.hero.scroll}
        </motion.div>
      </Container>
    </section>
  );
}
