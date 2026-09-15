import Image from "next/image";
import type { ImagePanel } from "@/types";

export function WebScreensGallery({
  panels,
  className,
}: {
  panels: ImagePanel[];
  className?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-5 sm:py-10 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(var(--color-ai-line, var(--color-border)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 15% 20%, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-[80px]"
        style={{ backgroundColor: "var(--color-ai)", opacity: 0.14 }}
      />

      <div className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-1 sm:gap-6 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {panels.map((panel, i) => (
          <div
            key={panel.src}
            className="flex shrink-0 snap-center flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-2xl shadow-black/50"
          >
            <div className="flex shrink-0 items-center gap-1.5 border-b border-black/10 bg-[#F5F6F8] px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-black/15" />
              <span className="h-2 w-2 rounded-full bg-black/15" />
              <span className="h-2 w-2 rounded-full bg-black/15" />
              {panel.label && (
                <span className="ms-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-black/50">
                  {panel.label}
                </span>
              )}
            </div>
            <Image
              src={panel.src}
              alt={i === 0 ? panel.alt : ""}
              aria-hidden={i !== 0}
              width={panel.width}
              height={panel.height}
              className="h-[210px] w-auto sm:h-[300px] lg:h-[380px]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[var(--color-bg-elevated)] to-transparent sm:w-12"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[var(--color-bg-elevated)] to-transparent sm:w-12"
      />
    </div>
  );
}
