"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Sport-first booking. Q wants the athlete to pick football or softball
 * before being routed to a scheduler, since the two go to different coaches.
 * Destinations live in site.booking and are placeholders until the real
 * scheduling links exist.
 */
export default function BookingChooser({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              id="booking-title"
              className="font-heading font-extrabold uppercase tracking-display text-white text-3xl md:text-4xl"
            >
              Book A Session
            </h2>
            <p className="mt-2 font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400">
              Choose your sport to get started.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="shrink-0 border-2 border-white/60 p-2 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {site.booking.map((option) => (
            <a
              key={option.sport}
              href={option.href}
              onClick={onClose}
              className="group flex min-h-[13rem] flex-col justify-between border-2 border-gray-600 p-6 transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div>
                <h3 className="font-heading font-extrabold uppercase tracking-display text-white text-3xl">
                  {option.label}
                </h3>
                <p className="mt-1 font-heading font-semibold uppercase tracking-rail text-[0.625rem] text-gray-400">
                  {option.coach}
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-gray-300">
                  {option.blurb}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-label text-xs text-white">
                {/* Honest label until the scheduler is wired up. */}
                {option.ready ? "Continue" : "Scheduling coming soon"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
