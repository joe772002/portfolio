import Image from "next/image";

export function WebVisual({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] ${className ?? ""}`}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-text-tertiary)]/40" />
        <span className="ms-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
          Web Platform
        </span>
      </div>
      <div className="relative min-h-[260px] flex-1">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 560px, 90vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] via-transparent to-transparent" />
      </div>
    </div>
  );
}
