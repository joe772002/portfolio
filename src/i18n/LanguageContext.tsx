"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Dictionary, Lang } from "./dictionary";
import { en } from "./en";
import { ar } from "./ar";

const dictionaries: Record<Lang, Dictionary> = { en, ar };

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ar";
  try {
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "ar") return stored;
  } catch {
    // ignore
  }
  return "ar";
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ar",
  setLang: () => {},
  toggleLang: () => {},
  t: ar,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "ar" ? "en" : "ar")),
    [],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function pick<T>(lang: Lang, enValue: T, arValue?: T): T {
  return lang === "ar" && arValue !== undefined ? arValue : enValue;
}
