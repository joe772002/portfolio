import Image from "next/image";

export function ScreensVisual({
  images,
  alt = "",
  className,
}: {
  images: string[];
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-10 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(var(--color-android-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 30% 20%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px]"
        style={{ backgroundColor: "var(--color-android)", opacity: 0.16 }}
      />

      <div className="relative flex items-end gap-4">
        {images[1] && (
          <div className="hidden w-[40%] -mb-8 rotate-[-5deg] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-2xl shadow-black/40 sm:block">
            <Image
              src={images[1]}
              alt=""
              aria-hidden
              width={360}
              height={740}
              className="h-auto w-full"
            />
          </div>
        )}
        <div className="w-[62%] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-2xl shadow-black/50 sm:w-[52%]">
          <Image
            src={images[0]}
            alt={alt}
            width={360}
            height={740}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 320px, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
