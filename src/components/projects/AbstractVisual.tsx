import { cn } from "@/lib/utils";

export function AbstractVisual({
  accent = "android",
  labels = [],
  className,
}: {
  accent?: "android" | "ai";
  labels?: string[];
  className?: string;
}) {
  const accentColor = accent === "android" ? "var(--color-android)" : "var(--color-ai)";
  const accentLine = accent === "android" ? "var(--color-android-line)" : "var(--color-ai-line)";

  return (
    <div
      className={cn(
        "relative isolate flex h-full min-h-[220px] w-full flex-col justify-between overflow-hidden rounded-2xl border p-6",
        className,
      )}
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-elevated)",
      }}
      aria-hidden
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(${accentLine} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 30% 30%, black, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px]"
        style={{ backgroundColor: accentColor, opacity: 0.16 }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: accentColor }}
        >
          Conceptual Architecture
        </span>
        <span
          className="h-8 w-8 rounded-lg border"
          style={{ borderColor: accentLine }}
        />
      </div>

      <div className="relative flex flex-wrap gap-2">
        {labels.slice(0, 6).map((label) => (
          <span
            key={label}
            className="rounded-md border px-2.5 py-1 font-mono text-[10px] tracking-tight backdrop-blur-sm"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg)",
              color: "var(--color-text-secondary)",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
