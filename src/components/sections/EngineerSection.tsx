import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const focusAreas = [
  "Maintainable code",
  "Scalable architecture",
  "Clean separation of responsibilities",
  "Secure API integrations",
  "Reliable user experiences",
  "Clear state management",
];

const experienceContext = [
  "Enterprise applications",
  "Government digital platforms",
  "Modern Android applications",
  "Kotlin and Jetpack Compose",
  "Application modernization",
  "Complex workflows",
];

export function EngineerSection() {
  return (
    <section id="engineer" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          kicker="Mobile"
          kickerAccent="android"
          title="Building reliable, scalable, and modern mobile applications."
          description={profile.philosophy}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Experience stat block */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 sm:p-10">
              <div>
                <span className="font-display text-6xl font-semibold tracking-tight text-[var(--color-android)] sm:text-7xl">
                  {profile.androidExperience}
                </span>
                <p className="mt-2 font-display text-lg text-[var(--color-text-primary)]">
                  {profile.androidExperienceLabel}
                </p>
              </div>
              <div className="mt-10 border-t border-[var(--color-border-soft)] pt-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                  Working on
                </p>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {experienceContext.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-android)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Philosophy / what I care about */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-[var(--color-border)] p-8 sm:p-10">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                What I care about
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-elevated)]/40 px-4 py-3.5 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-android)]" />
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
