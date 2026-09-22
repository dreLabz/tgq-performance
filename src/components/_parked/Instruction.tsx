"use client";

import { useCallback, useRef, useState } from "react";
import SectionReveal from "../SectionReveal";
import VideoCard from "./VideoCard";
import VideoLightbox from "../VideoLightbox";
import { sessionVideos, type VideoItem } from "@/lib/videos";

export default function Instruction() {
  const [active, setActive] = useState<VideoItem | null>(null);
  // Where focus was before the lightbox opened, so it can be restored on close.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const handleSelect = useCallback(
    (video: VideoItem, opener: HTMLButtonElement) => {
      openerRef.current = opener;
      setActive(video);
    },
    [],
  );

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  return (
    <section id="instruction" className="px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading font-extrabold uppercase tracking-[0.15em] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Instruction
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="font-body text-gray-400 leading-relaxed max-w-2xl mb-12">
            Breakdowns straight from the field — the same coaching points
            athletes get in a session.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessionVideos.map((video, i) => (
            <SectionReveal key={video.id} delay={(i % 3) * 0.1}>
              <VideoCard
                video={video}
                onSelect={handleSelect}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      <VideoLightbox video={active} onClose={close} />
    </section>
  );
}
