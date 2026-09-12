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
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-32"
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          {/* Left: content */}
          <div className="min-w-0">
            <motion.div
              {...fadeUp(0)}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-secondary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-android)]" />
              {t.hero.badgeA}
              <span className="text-[var(--color-text-tertiary)]">/</span>
              <span className="font-normal normal-case tracking-normal text-[var(--color-text-tertiary)]">
                {t.hero.badgeB}
              </span>
            </motion.div>

            <div className="flex items-center gap-4 sm:gap-8">
              <h1 className={`min-w-0 flex-1 font-display font-medium tracking-tight text-[var(--color-text-primary)] text-[clamp(2rem,10vw,3.25rem)] sm:text-6xl lg:text-[5.5rem] ${lang === "ar" ? "leading-[1.15]" : "leading-[0.95]"}`}>
                <motion.span {...fadeUp(0.05)} className="block">
                  {pick(lang, profile.firstName, profile.firstNameAr)}
                </motion.span>
                <motion.span {...fadeUp(0.14)} className={`block text-[var(--color-text-secondary)] ${lang === "ar" ? "mt-3 sm:mt-4" : ""}`}>
                  {pick(lang, profile.lastName, profile.lastNameAr)}
                </motion.span>
              </h1>

              {/* Portrait next to name on <lg — shrinks fluidly with screen */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 justify-self-end lg:hidden"
              >
                <div className="relative aspect-square w-[clamp(96px,28vw,220px)] overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] sm:w-[clamp(160px,24vw,280px)]">
                  <Image
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    fill
                    priority
                    sizes="(min-width: 640px) 280px, 28vw"
                    className="object-cover grayscale-[12%]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/25 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </div>
              </motion.div>
            </div>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-7 text-balance font-display text-2xl font-semibold leading-snug text-[var(--color-text-primary)] sm:text-3xl"
            >
              <span className="text-[var(--color-android)]">{t.hero.roleA}</span>
            </motion.p>
            <motion.p
              {...fadeUp(0.26)}
              className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-secondary)] sm:text-sm"
            >
              Kotlin • Jetpack Compose • MVVM
            </motion.p>
            <motion.p
              {...fadeUp(0.28)}
              className="mt-2 text-balance font-display text-base font-medium leading-snug text-[var(--color-text-secondary)] sm:text-lg"
            >
              {t.hero.roleB}
            </motion.p>
            <motion.p
              {...fadeUp(0.3)}
              className="mt-3 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]"
            >
              <span className="text-[var(--color-android)]">
                {lang === "ar" ? "بناء برمجيات موثوقة." : "Building Reliable Software."}
              </span>{" "}
              <span className="text-[var(--color-text-secondary)]">
                {lang === "ar" ? "عبر كل المنصات." : "Across Every Platform."}
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 max-w-xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            >
              {pick(lang, profile.heroSupport, profile.heroSupportAr)}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-primary)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
              >
                {t.hero.viewWork}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                />
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
              >
                {t.hero.downloadCv}
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-android-line)] hover:text-[var(--color-android)]"
              >
                {t.hero.linkedin}
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-10 grid max-w-lg grid-cols-[1.2fr_0.8fr] gap-3 sm:gap-4"
            >
              <div className="rounded-2xl border border-[var(--color-android-line)] bg-[var(--color-bg-elevated)] p-4 sm:p-5">
                <span className="block font-display text-2xl font-semibold tracking-tight text-[var(--color-android)] sm:text-3xl">
                  {profile.androidExperience}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--color-text-secondary)]">
                  {pick(lang, profile.androidExperienceLabel, profile.androidExperienceLabelAr)}
                </span>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 p-4 opacity-90 sm:p-5">
                <span className="block font-display text-xl font-semibold tracking-tight text-[var(--color-ai)] sm:text-2xl">
                  {profile.aiExperience}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--color-text-secondary)]">
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

          {/* Right: portrait composition (desktop only — mobile version lives next to h1) */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto hidden w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:block lg:max-w-[330px] lg:justify-self-end"
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
