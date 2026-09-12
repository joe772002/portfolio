"use client";

import type { ComponentType } from "react";
import { Mail, ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { pick, useLanguage } from "@/i18n/LanguageContext";

interface ContactLink {
  label: string;
  value: string;
  href?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  download?: boolean;
}

export function ContactSection() {
  const { lang, t } = useLanguage();
  const contactLinks: ContactLink[] = [
    {
      label: "Email",
      value: profile.contact.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`,
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: profile.contact.phone,
      href: profile.contact.whatsapp,
      icon: WhatsappIcon,
    },
    {
      label: "LinkedIn",
      value: profile.contact.linkedinLabel,
      href: profile.contact.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: profile.contact.githubLabel,
      href: profile.contact.github,
      icon: GithubIcon,
    },
    {
      label: t.contact.downloadCv,
      value: "PDF",
      href: profile.cvPath,
      icon: FileDown,
      download: true,
    },
    {
      label: lang === "ar" ? "الموقع" : "Location",
      value: pick(lang, "Cairo, Egypt", "القاهرة، مصر"),
      icon: MapPin,
    },
  ];
  return (
    <section id="contact" className="relative border-t border-[var(--color-border-soft)] py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionKicker>{t.contact.kicker}</SectionKicker>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {t.contact.desc}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, i) => {
            const card = (
              <>
                <div className="flex items-center justify-between">
                  <link.icon size={18} className="text-[var(--color-text-secondary)]" />
                  {link.href && (
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--color-text-tertiary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ai)]"
                    />
                  )}
                </div>
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                    {link.label}
                  </p>
                  <p className="mt-1.5 break-all font-display text-sm text-[var(--color-text-primary)]">
                    {link.value}
                  </p>
                </div>
              </>
            );
            return (
              <Reveal key={link.label} delay={Math.min(i * 0.08, 0.2)}>
                {link.href ? (
                  <a
                    href={link.href}
                    {...(link.download
                      ? { download: true }
                      : link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-ai-line)]"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
                    {card}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
