"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Mount-only sync with localStorage (client-only external system),
  // so the first client render matches the server HTML (no hydration mismatch).
  useEffect(() => {
    let initial: Theme = "dark";
    try {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") initial = stored;
    } catch {
      // ignore
    }
    document.documentElement.dataset.theme = initial;
    // Mount-only sync with localStorage (not a render cascade).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
      />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-ai-line)] hover:text-[var(--color-ai)]"
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
