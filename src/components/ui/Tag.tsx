import { cn } from "@/lib/utils";

export function Tag({
  children,
  accent = "neutral",
  size = "sm",
}: {
  children: string;
  accent?: "neutral" | "android" | "ai";
  size?: "sm" | "xs";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-mono tracking-tight",
        size === "sm" ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[11px]",
        accent === "neutral" &&
          "border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]",
        accent === "android" &&
          "border-[var(--color-android-line)] bg-[var(--color-android-dim)] text-[var(--color-android)]",
        accent === "ai" &&
          "border-[var(--color-ai-line)] bg-[var(--color-ai-dim)] text-[var(--color-ai)]",
      )}
    >
      {children}
    </span>
  );
}
