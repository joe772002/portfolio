"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Lightbox } from "@/components/ui/Lightbox";
import { EASE } from "@/lib/motion";

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
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div
        className={`relative isolate overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-5 sm:py-10 ${className ?? ""}`}
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
            <motion.button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open screenshot ${i + 1} of ${images.length}`}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.35), ease: EASE }}
              className="group w-[46vw] max-w-[175px] shrink-0 snap-center overflow-hidden rounded-[1.6rem] border border-[var(--color-border)] text-left shadow-2xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-android-line)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] sm:w-[210px] sm:max-w-none"
            >
              <span className="block overflow-hidden">
                <Image
                  src={src}
                  alt={i === 0 ? alt : ""}
                  aria-hidden={i !== 0}
                  width={360}
                  height={740}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 640px) 210px, 64vw"
                  priority={i === 0}
                />
              </span>
            </motion.button>
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
      <Lightbox images={images} index={active} alt={alt} onClose={() => setActive(null)} onIndex={setActive} />
    </>
  );
}
