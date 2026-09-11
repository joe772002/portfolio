import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const strengths = [
  "3+ years of real Android development experience",
  "Strong Kotlin and Jetpack Compose knowledge",
  "Experience with professional enterprise applications",
  "Experience with government-related digital platforms",
  "Secure API and authentication workflows",
  "Vibe coding workflows for rapid prototyping and MVPs",
];

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="sr-only">About</h2>
              <SectionKicker>About</SectionKicker>
              <div className="mt-6 flex flex-col gap-5">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-balance font-display text-xl leading-relaxed text-[var(--color-text-primary)] sm:text-2xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                  Where mobile meets vibe coding
                </p>
                <ul className="flex flex-col gap-3.5">
                  {strengths.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? "var(--color-android)" : "var(--color-ai)",
                        }}
                      />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
