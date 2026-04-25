"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function Gallery() {
  const items = useMemo(
    () => [
      {
        src: "/images/IMG-20260424-WA0019.jpg",
        alt: "Cozy room interior at Jakadevi Homestay Malvan",
      },
      {
        src: "/images/IMG-20260424-WA0029.jpg",
        alt: "Comfortable stay spaces at Jakadevi Homestay in Malvan",
      },
      {
        src: "/images/IMG-20260424-WA0034.jpg",
        alt: "Family-friendly homestay moments in Malvan, Konkan",
      },
      {
        src: "/images/IMG-20260424-WA0031.jpg",
        alt: "Clean and simple room setup at Jakadevi Homestay Malvan",
      },
      {
        src: "/images/IMG-20260424-WA0032.jpg",
        alt: "Coastal stay vibes near Malvan beach at Jakadevi Homestay",
      },
      {
        src: "/images/IMG-20260424-WA0033.jpg",
        alt: "Malvan homestay experience at Jakadevi Homestay in Konkan",
      },
    ],
    [],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const gotoPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + items.length - 1) % items.length);
  };

  const gotoNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % items.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") gotoPrev();
      if (e.key === "ArrowRight") gotoNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const t = e.changedTouches[0];
    if (!t) return;

    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    // horizontal swipe only
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    if (dx > 0) gotoPrev();
    else gotoNext();
  };

  return (
    <section id="gallery" className="py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-sky-700">
                Moments
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Gallery
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenIndex(idx)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/35 bg-white/70 backdrop-blur-md shadow-lg shadow-black/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                aria-label={`Open image ${idx + 1} of ${items.length}`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-blue-600/12 via-transparent to-cyan-300/14 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
            aria-label="Close image viewer"
          />

          <div
            className="relative w-[min(1100px,92vw)] h-[min(76vh,680px)] sm:h-[min(80vh,720px)] rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl shadow-black/30"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 1100px, 92vw"
              priority
            />

            <div className="absolute inset-x-0 top-0 p-3 sm:p-4 flex items-center justify-between">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-3 py-2 text-white/90 text-sm font-semibold">
                {openIndex + 1} / {items.length}
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center size-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-colors cursor-pointer"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            <button
              type="button"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-11 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-colors cursor-pointer"
              onClick={gotoPrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-11 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-colors cursor-pointer"
              onClick={gotoNext}
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>

            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-center">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-3 py-2 text-white/80 text-xs sm:text-sm">
                Swipe left/right on mobile, or use ← → keys.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
