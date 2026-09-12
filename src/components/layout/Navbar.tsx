"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { pick, useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["home", "experience", "projects", "ai-builds", "about", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  const { lang, t } = useLanguage();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active section detection (homepage anchors). Falls back to pathname.
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:h-16 sm:px-4",
          scrolled || open
            ? "border-[var(--color-border)] bg-[var(--color-bg)]/80 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/#home"
          className="max-w-[180px] shrink-0 truncate px-2 font-display text-sm font-medium tracking-tight whitespace-nowrap text-[var(--color-text-primary)] sm:max-w-none"
          onClick={() => setOpen(false)}
        >
          {pick(lang, profile.name, profile.nameAr)}
        </Link>

        {/* Floating pill nav — desktop */}
        <nav
          aria-label="Primary"
          className={cn(
            "absolute left-1/2 hidden items-center gap-0.5 rounded-full border p-1 whitespace-nowrap transition-all duration-300 lg:flex",
            scrolled
              ? "border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
          style={{ transform: "translateX(-50%)" }}
        >
          {navLinks.map((item) => {
            const id = item.href.split("#")[1] ?? "";
            const isActive =
              pathname === "/"
                ? active === id
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative shrink-0 rounded-full px-3 py-2 font-mono text-[11px] whitespace-nowrap uppercase tracking-[0.12em] transition-colors duration-200 xl:px-3.5",
                  isActive
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                    className="absolute inset-0 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated-2)]"
                  />
                )}
                <span className="relative z-10 block whitespace-nowrap">{t.nav[item.id]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((item, i) => {
                const id = item.href.split("#")[1] ?? "";
                const isActive = pathname === "/" ? active === id : pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={reduce ? undefined : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl px-4 py-3 font-mono text-sm whitespace-nowrap uppercase tracking-[0.12em] transition-colors",
                        isActive
                          ? "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]",
                      )}
                    >
                      <span className="truncate whitespace-nowrap">{t.nav[item.id]}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          isActive ? "bg-[var(--color-android)]" : "bg-transparent",
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
