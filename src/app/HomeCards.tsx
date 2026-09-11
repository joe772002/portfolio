"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageContext";

export function HomeCards() {
  const { lang, t } = useLanguage();
  return (
    <section className="border-t border-[var(--color-border-soft)] py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.homeCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 p-6 transition-colors hover:border-[var(--color-ai-line)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                {c.kicker}
              </p>
              <h2 className="mt-3 font-display text-xl font-medium">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {c.desc}
              </p>
              <span className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ai)]">
                {t.explore} {lang === "ar" ? "←" : "→"}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
