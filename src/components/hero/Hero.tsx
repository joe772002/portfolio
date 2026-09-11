"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
              Engineer
              <span className="text-[var(--color-text-tertiary)]">/</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ai)]" />
              Builder
            </motion.div>

            <h1 className="font-display text-[15vw] leading-[0.95] font-medium tracking-tight text-[var(--color-text-primary)] sm:text-7xl lg:text-[5.5rem]">
              <motion.span {...fadeUp(0.05)} className="block">
                {profile.firstName}
              </motion.span>
              <motion.span {...fadeUp(0.14)} className="block text-[var(--color-text-secondary)]">
                {profile.lastName}
              </motion.span>
            </h1>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-7 text-balance font-display text-xl font-medium leading-snug text-[var(--color-text-primary)] sm:text-2xl"
            >
              <span className="text-[var(--color-android)]">Android Developer</span>
              <span className="text-[var(--color-text-tertiary)]"> &amp; </span>
              <span className="text-[var(--color-ai)]">AI-Assisted Builder</span>
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 max-w-lg text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            >
              {profile.heroSupport}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-primary)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
              >
                View Work
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-ai-line)] hover:text-[var(--color-ai)]"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-14 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]"
            >
              <span>Engineering</span>
              <ArrowRight size={12} />
              <span>Building</span>
              <ArrowRight size={12} />
              <span>Shipping</span>
            </motion.div>
          </div>

          {/* Right: portrait composition */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[360px] lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
                className="object-cover grayscale-[12%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/50 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>

            {/* corner accent */}
            <div
              aria-hidden
              className="absolute -top-3 -right-3 h-14 w-14 rounded-xl border border-[var(--color-android-line)] sm:h-16 sm:w-16"
            />

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/95 px-4 py-3 backdrop-blur-sm sm:flex sm:flex-col sm:gap-0.5">
              <span className="font-display text-lg font-semibold text-[var(--color-android)]">
                {profile.androidExperience}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                Years Android
              </span>
            </div>

            <div className="absolute -top-6 -left-6 hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/95 px-4 py-3 backdrop-blur-sm sm:flex sm:flex-col sm:gap-0.5">
              <span className="font-display text-lg font-semibold text-[var(--color-ai)]">
                {profile.aiExperience}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                Year AI-Assisted
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-20 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] sm:flex"
        >
          <ArrowDown size={12} />
          Scroll to explore
        </motion.div>
      </Container>
    </section>
  );
}
