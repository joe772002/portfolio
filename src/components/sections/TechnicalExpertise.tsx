import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { androidSkills } from "@/data/skills";

export function TechnicalExpertise() {
  return (
    <section className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="sr-only">Technical Expertise</h2>
          <SectionKicker accent="android">Technical Expertise</SectionKicker>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border-soft)] sm:grid-cols-2 lg:grid-cols-4">
          {androidSkills.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="h-full bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-elevated)]">
                <h3 className="font-display text-sm font-medium text-[var(--color-text-primary)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
