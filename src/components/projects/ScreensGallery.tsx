import Image from "next/image";

export function ScreensGallery({
  images,
  alt = "",
  className,
  accent = "android",
}: {
  images: string[];
  alt?: string;
  className?: string;
  accent?: "android" | "ai";
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-8 sm:py-10 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(var(--color-${accent}-line) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 15% 20%, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-[80px]"
        style={{ backgroundColor: `var(--color-${accent})`, opacity: 0.14 }}
      />

      <div className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-1 sm:gap-6 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className="w-[64vw] max-w-[230px] shrink-0 snap-center overflow-hidden rounded-[1.6rem] border border-[var(--color-border)] shadow-2xl shadow-black/50 sm:w-[210px]"
          >
            <Image
              src={src}
              alt={i === 0 ? alt : ""}
              aria-hidden={i !== 0}
              width={360}
              height={740}
              className="h-auto w-full"
              sizes="(min-width: 640px) 210px, 64vw"
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
