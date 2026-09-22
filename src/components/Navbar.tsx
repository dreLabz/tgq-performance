"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll while the drawer is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:uppercase focus:text-black"
      >
        Skip to content
      </a>

      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${
          scrolled ? "bg-black/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a href="#home" className="block shrink-0">
          <Image
            src={site.brand.logo}
            alt={site.brand.name}
            width={120}
            height={118}
            priority
            className="h-10 w-auto md:h-12"
          />
        </a>

        <ul className="hidden gap-8 lg:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-heading font-semibold uppercase tracking-label text-xs text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button
            href={site.navCta.href}
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {site.navCta.label}
          </Button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[150] flex flex-col bg-black/95 px-6 py-6 lg:hidden">
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-6">
            {site.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-heading font-extrabold uppercase tracking-display text-3xl text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            href={site.navCta.href}
            variant="accent"
            size="md"
            onClick={() => setOpen(false)}
            className="mt-10 w-full"
          >
            {site.navCta.label}
          </Button>
        </div>
      )}
    </>
  );
}
