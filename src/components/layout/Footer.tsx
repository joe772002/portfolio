"use client";

import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--color-border-soft)] py-8">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
          {t.footer.tagline}
        </p>
      </Container>
    </footer>
  );
}
