"use client";

import type { ComponentType } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageContext";

interface ContactLink {
  labelKey: "email" | "social";
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

const contactLinks: ContactLink[] = [
  {
    labelKey: "email",
    label: "Email",
    value: profile.contact.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`,
    icon: Mail,
  },
  {
    labelKey: "social",
    label: "WhatsApp",
    value: profile.contact.phone,
    href: profile.contact.whatsapp,
    icon: WhatsappIcon,
  },
  {
    labelKey: "social",
    label: "LinkedIn",
    value: profile.contact.linkedinLabel,
    href: profile.contact.linkedin,
    icon: LinkedinIcon,
  },
  {
    labelKey: "social",
    label: "GitHub",
    value: profile.contact.githubLabel,
    href: profile.contact.github,
    icon: GithubIcon,
  },
  {
    labelKey: "social",
    label: "Facebook",
    value: profile.contact.facebookLabel,
    href: profile.contact.facebook,
    icon: FacebookIcon,
  },
  {
    labelKey: "social",
    label: "Instagram",
    value: profile.contact.instagramLabel,
    href: profile.contact.instagram,
    icon: InstagramIcon,
  },
];

export function ContactSection() {
  const { t } = useLanguage();
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
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={Math.min(i * 0.08, 0.2)}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-ai-line)]"
              >
                <div className="flex items-center justify-between">
                  <link.icon size={18} className="text-[var(--color-text-secondary)]" />
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--color-text-tertiary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ai)]"
                  />
                </div>
                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                    {link.labelKey === "email" ? t.contact.email : link.label}
                  </p>
                  <p className="mt-1.5 break-all font-display text-sm text-[var(--color-text-primary)]">
                    {link.value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
