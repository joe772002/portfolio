"use client";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const DUR = {
  micro: 0.18,
  normal: 0.35,
  entrance: 0.55,
} as const;

export const fadeUp = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: DUR.normal, delay, ease: EASE },
});

export const staggerParent = (stagger = 0.07, delayChildren = 0) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.normal, ease: EASE },
  },
};
