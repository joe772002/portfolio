import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { aiSkills, aiTools } from "@/data/skills";

export function AISkillsSection() {
  return (
    <section className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="sr-only">Vibe Coding Toolkit</h2>
          <SectionKicker accent="ai">Vibe Coding Toolkit</SectionKicker>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {aiSkills.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.06, 0.24)}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7">
                <h3 className="font-display text-base font-medium text-[var(--color-text-primary)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
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

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-[var(--color-border-soft)] p-7">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              Tools &amp; evolving toolkit
            </p>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <Tag key={tool} accent="ai">
                  {tool}
                </Tag>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
