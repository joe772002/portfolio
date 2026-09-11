"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage();
  const next: "ar" | "en" = lang === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      aria-label={next === "en" ? t.a11y.switchToEnglish : t.a11y.switchToArabic}
      onClick={toggleLang}
      className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-border)] px-3.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-ai-line)] hover:text-[var(--color-ai)]"
    >
      {next === "en" ? "EN" : "عربي"}
    </button>
  );
}
