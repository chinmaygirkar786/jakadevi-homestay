"use client";

import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisInit() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.25,
    });

    window.__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) window.__lenis = undefined;
    };
  }, []);

  return null;
}

export function lenisScrollTo(target: string, offset = 0) {
  if (typeof window === "undefined") return;
  const el = document.querySelector(target);
  if (!el) return;

  const scrollTarget =
    el instanceof HTMLElement && el.tagName === "SECTION"
      ? (el.querySelector("h2") as HTMLElement | null) ?? el
      : (el as HTMLElement);

  const lenis = window.__lenis;
  if (!lenis) {
    scrollTarget.scrollIntoView({ block: "start" });
    return;
  }

  lenis.scrollTo(scrollTarget as unknown as HTMLElement, {
    offset: -offset,
    duration: 1.1,
  });
}

