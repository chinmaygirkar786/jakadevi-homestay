"use client";

import { lenisScrollTo } from "@/lib/lenis";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Rooms", href: "#rooms" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const navOffset = 0;

  const handleNav = (href: string) => {
    setIsOpen(false);
    // Wait a tick so the mobile menu can collapse before we measure/scroll.
    window.setTimeout(() => {
      lenisScrollTo(href, navOffset);
    }, 50);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={[
            "relative transition-all duration-300",
            scrolled
              ? "backdrop-blur-md bg-white/70 border-b border-white/40 shadow-lg shadow-black/5"
              : "bg-white/95 border-b border-slate-900/10",
          ].join(" ")}
        >
          <div className="px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNav("#home")}
                className={[
                  "cursor-pointer tracking-tight text-transparent bg-clip-text bg-linear-to-r text-lg sm:text-xl leading-none font-(--font-display)",
                  "from-sky-700 to-cyan-600",
                ].join(" ")}
                aria-label="Go to home"
              >
                Jakadevi Homestay
              </button>

              <nav
                className={[
                  "hidden md:flex items-center gap-7 text-sm font-semibold",
                  "text-slate-700",
                ].join(" ")}
              >
                {items.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className={[
                      "cursor-pointer transition-colors",
                      "hover:text-slate-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="md:hidden flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen((v) => !v)}
                  className={[
                    "inline-flex items-center justify-center size-10 rounded-xl backdrop-blur-md border",
                    scrolled
                      ? "bg-white/75 border-white/40 text-slate-900"
                      : "bg-white border-slate-900/10 text-slate-900",
                  ].join(" ")}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer (portal-like, outside navbar stacking context) */}
      <div
        className={[
          "md:hidden fixed inset-0 z-9999 isolate",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />

        <div
          className={[
            "absolute right-0 top-0 h-full w-[min(22rem,88vw)] bg-white border-l border-slate-900/10 shadow-2xl shadow-black/25 transition-transform duration-200",
            isOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-900/10">
            <p className="tracking-tight text-transparent bg-clip-text bg-linear-to-r from-sky-700 to-cyan-600 text-xl leading-none font-(--font-display)">
              Jakadevi Homestay
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center size-10 rounded-xl bg-white border border-slate-900/10 text-slate-900 cursor-pointer"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="h-[calc(100vh-4rem)] overflow-auto overscroll-contain px-4 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
            <div className="rounded-2xl border border-slate-900/10 bg-white shadow-sm shadow-black/5 p-2">
              {items.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className="w-full cursor-pointer text-left px-3 py-3 rounded-xl text-slate-800 hover:text-slate-900 hover:bg-slate-900/5 transition-colors font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href="tel:9404821656"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 text-white font-semibold px-5 py-3 shadow-lg shadow-black/15"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

