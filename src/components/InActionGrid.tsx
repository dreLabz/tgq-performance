"use client";

import { useCallback, useRef, useState } from "react";
import MediaSlot from "./MediaSlot";
import SectionReveal from "./SectionReveal";
import VideoLightbox from "./VideoLightbox";
import type { ActionVideo } from "@/lib/showcase";
import type { VideoItem } from "@/lib/videos";

function toPlayable(v: ActionVideo): VideoItem | null {
  if (!v.clip || !v.poster.src) return null;
  return {
    id: v.id,
    title: v.title,
    description: v.subtitle,
    duration: 0,
    src: v.clip.src,
    poster: v.poster.src,
    orientation: v.clip.orientation,
  };
}

export default function InActionGrid({ videos }: { videos: ActionVideo[] }) {
  const [active, setActive] = useState<VideoItem | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video, i) => {
          const playable = toPlayable(video);

          return (
            <SectionReveal key={video.id} delay={(i % 4) * 0.1}>
              <article className="group relative isolate flex min-h-[28rem] flex-col justify-between overflow-hidden border border-gray-600">
                <MediaSlot
                  media={video.poster}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/65 to-black/25" />

                <div
                  aria-hidden="true"
                  className="p-6 font-heading font-semibold uppercase tracking-rail text-[0.625rem] leading-[2] text-gray-400"
                >
                  {video.tags.map((tag) => (
                    <div key={tag}>{tag}</div>
                  ))}
                </div>

                {/* Play ring only when there's something to play. */}
                {playable && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-white" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-heading font-extrabold uppercase tracking-display text-white text-2xl md:text-3xl">
                    {video.title}
                  </h3>
                  <p className="mt-2 font-heading font-semibold uppercase tracking-label text-xs text-gray-300">
                    {video.subtitle}
                  </p>

                  {playable ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        openerRef.current = e.currentTarget;
                        setActive(playable);
                      }}
                      className="mt-6 inline-flex w-full items-center justify-center gap-3 border-2 border-white px-6 py-2.5 font-heading text-[0.6875rem] font-bold uppercase tracking-label text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent after:absolute after:inset-0 after:content-['']"
                    >
                      {video.cta.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  ) : (
                    <p className="mt-6 font-heading text-[0.625rem] font-semibold uppercase tracking-rail text-gray-500">
                      Footage coming soon
                    </p>
                  )}
                </div>
              </article>
            </SectionReveal>
          );
        })}
      </div>

      <VideoLightbox video={active} onClose={close} />
    </>
  );
}
