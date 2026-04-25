"use client";

import { lenisScrollTo } from "@/lib/lenis";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <Image
        src="/images/IMG-20260424-WA0028.jpg"
        alt="Coastal homestay view"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/45 to-slate-950/70" />
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/35 via-cyan-300/10 to-orange-300/10" />

      <div className="relative h-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 p-6 sm:p-8">
            <p className="text-white/80 text-sm font-medium">
              Near Malvan Post Office, Behind of Swami Hotel
            </p>
            <h1 className="mt-3 text-5xl sm:text-6xl tracking-tight text-white font-(--font-display)">
              Jakadevi Homestay
            </h1>
            <p className="mt-4 text-white/85 text-lg leading-relaxed">
              Wake up to sea-breeze mornings and calm, vibrant coastal evenings.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9404821656"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-black/10 hover:bg-white/95 transition-colors"
              >
                Call Now
              </a>
              <button
                type="button"
                onClick={() => lenisScrollTo("#about", 88)}
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/15 transition-colors cursor-pointer"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
