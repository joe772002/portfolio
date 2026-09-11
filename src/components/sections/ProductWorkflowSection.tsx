import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { productWorkflow } from "@/data/workflow";

export function ProductWorkflowSection() {
  return (
    <section className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker accent="ai">Vibe Coding Workflow</SectionKicker>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
            From idea to working product.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productWorkflow.map((step, i) => (
            <Reveal key={step.index} delay={Math.min(i * 0.06, 0.3)}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-ai-line)]">
                <span className="font-mono text-xs text-[var(--color-ai)]">{step.index}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
                {step.items && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-[var(--color-border-soft)] px-2 py-1 font-mono text-[10px] text-[var(--color-text-tertiary)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
