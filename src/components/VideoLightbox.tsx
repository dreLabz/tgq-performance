"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { VideoItem } from "@/lib/videos";

interface Props {
  video: VideoItem | null;
  onClose: () => void;
}

/**
 * Shared modal player. Handles Escape, backdrop click and body scroll lock.
 * Portrait clips are sized by height so a 9:16 video doesn't run off screen.
 */
export default function VideoLightbox({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  const isPortrait = video?.orientation === "portrait";

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={
              isPortrait
                ? "relative w-full max-w-[min(420px,92vw)]"
                : "relative w-full max-w-5xl"
            }
          >
            <video
              key={video.id}
              src={video.src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              className={
                isPortrait
                  ? "w-full aspect-[9/16] max-h-[78vh] bg-black"
                  : "w-full aspect-video bg-black"
              }
            />

            <div className="mt-4 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-heading font-bold uppercase tracking-[0.15em] text-xl text-white">
                  {video.title}
                </h3>
                <p className="mt-1 font-body text-sm text-gray-400">
                  {video.description}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                autoFocus
                aria-label="Close video"
                className="shrink-0 border-2 border-white/60 p-2 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
