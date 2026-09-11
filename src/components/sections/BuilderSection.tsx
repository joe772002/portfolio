import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const aiFocusAreas = [
  "Rapid prototyping",
  "MVP development",
  "Feature experimentation",
  "AI-assisted debugging",
  "AI-assisted refactoring",
  "Architecture exploration",
];

export function BuilderSection() {
  return (
    <section id="builder" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          kicker="Vibe Coding"
          kickerAccent="ai"
          title="Turning ideas into prototypes and products with vibe coding."
          description={profile.aiPhilosophy}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 sm:p-10">
              <div>
                <span className="font-display text-6xl font-semibold tracking-tight text-[var(--color-ai)] sm:text-7xl">
                  {profile.aiExperience}
                </span>
                <p className="mt-2 font-display text-lg text-[var(--color-text-primary)]">
                  {profile.aiExperienceLabel}
                </p>
              </div>
              <p className="mt-10 border-t border-[var(--color-border-soft)] pt-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                I use vibe coding — modern AI-powered tools and coding agents — to accelerate
                development, explore solutions, and move faster from concept to working software.
                My engineering knowledge remains the foundation — AI is a productivity multiplier,
                not a replacement for judgment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-[var(--color-border)] p-8 sm:p-10">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                What vibe coding accelerates
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aiFocusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/40 px-4 py-3.5 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ai)]" />
                    <span className="text-[var(--color-text-primary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
