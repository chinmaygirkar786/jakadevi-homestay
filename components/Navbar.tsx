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

  const navOffset = 88;

  const handleNav = (href: string) => {
    setIsOpen(false);
    lenisScrollTo(href, navOffset);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "transition-all duration-300",
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
                {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="px-6 md:px-12 lg:px-20 pb-4">
            <div className="max-w-7xl mx-auto rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md p-3 shadow-lg shadow-black/10">
              <div className="flex flex-col">
                {items.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className="cursor-pointer text-left px-3 py-3 rounded-xl text-slate-800 hover:text-slate-900 hover:bg-slate-900/5 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="tel:9404821656"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-semibold px-4 py-3"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

