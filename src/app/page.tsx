import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Android Developer & AI-Assisted Builder",
};

const cards = [
  {
    href: "/engineering",
    kicker: "Engineer",
    title: "Reliable Android engineering",
    desc: "Kotlin, Jetpack Compose, scalable architecture.",
  },
  {
    href: "/work",
    kicker: "Work",
    title: "Selected projects",
    desc: "Android apps and AI-assisted builds in one place.",
  },
  {
    href: "/builder",
    kicker: "Builder",
    title: "From idea to product",
    desc: "AI-assisted workflows for rapid prototyping.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionSection />
      <section className="border-t border-[var(--color-border-soft)] py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cards.map((c) => (
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
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
