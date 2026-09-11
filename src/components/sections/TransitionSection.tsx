import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TransitionSection() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-border-soft)] py-28 sm:py-36">
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
              From Mobile to Vibe Coding
            </p>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              <span className="text-[var(--color-android)]">Mobile</span>
              <span className="text-[var(--color-text-primary)]"> gives me the foundation.</span>
              <br />
              <span className="text-[var(--color-ai)]">Vibe coding</span>
              <span className="text-[var(--color-text-primary)]"> changes how quickly I can build.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              The foundation is mobile engineering discipline. The accelerator is vibe coding.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
