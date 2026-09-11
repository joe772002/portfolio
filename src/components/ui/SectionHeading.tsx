import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionKicker({
  children,
  accent = "neutral",
}: {
  children: ReactNode;
  accent?: "neutral" | "android" | "ai";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]",
        accent === "android" && "text-[var(--color-android)]",
        accent === "ai" && "text-[var(--color-ai)]",
        accent === "neutral" && "text-[var(--color-text-tertiary)]",
      )}
    >
      <span
        className={cn(
          "h-[6px] w-[6px] rounded-full",
          accent === "android" && "bg-[var(--color-android)]",
          accent === "ai" && "bg-[var(--color-ai)]",
          accent === "neutral" && "bg-[var(--color-text-tertiary)]",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  kickerAccent = "neutral",
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  kickerAccent?: "neutral" | "android" | "ai";
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div className="flex flex-col gap-4">
          {kicker && <SectionKicker accent={kickerAccent}>{kicker}</SectionKicker>}
          <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-balance text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
