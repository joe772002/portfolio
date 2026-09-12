"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({
  images,
  index,
  alt = "",
  onClose,
  onIndex,
}: {
  images: string[];
  index: number | null;
  alt?: string;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onIndex((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndex]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndex((index + 1) % images.length);
  }, [index, images.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt || "Screenshot viewer"}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close viewer"
            onClick={onClose}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X size={18} />
          </button>
          <div
            className="relative flex w-full max-w-3xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-0 z-10 inline-flex h-10 w-10 -translate-x-1 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:-translate-x-12"
            >
              <ChevronLeft size={18} />
            </button>
            <motion.div
              key={images[index]}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[78vh] w-auto overflow-hidden rounded-2xl border border-white/15 bg-black"
            >
              <Image
                src={images[index]}
                alt={alt}
                width={700}
                height={1400}
                className="h-auto max-h-[78vh] w-auto max-w-[86vw] object-contain"
                priority
              />
            </motion.div>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-0 z-10 inline-flex h-10 w-10 translate-x-1 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:translate-x-12"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <p className="absolute bottom-5 font-mono text-xs tracking-[0.16em] text-white/70">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
