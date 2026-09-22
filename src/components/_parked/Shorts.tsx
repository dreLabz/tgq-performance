"use client";

import { useCallback, useRef, useState } from "react";
import SectionReveal from "../SectionReveal";
import VideoCard from "./VideoCard";
import VideoLightbox from "../VideoLightbox";
import { shortFormVideos, type VideoItem } from "@/lib/videos";

export default function Shorts() {
  const [active, setActive] = useState<VideoItem | null>(null);
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
    <section
      id="film-room"
      className="px-6 md:px-12 py-20 md:py-32 bg-gray-800/40"
    >
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading font-extrabold uppercase tracking-[0.15em] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Film Room
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="font-body text-gray-400 leading-relaxed max-w-2xl mb-12">
            Quick-hit breakdowns for players who want to know what evaluators
            are actually looking for at their position.
          </p>
        </SectionReveal>

        {/* Portrait cards — capped at 4 across so they don't stretch wide on
            desktop with only a couple of clips in the bucket. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shortFormVideos.map((video, i) => (
            <SectionReveal key={video.id} delay={(i % 4) * 0.1}>
              <VideoCard
                video={video}
                onSelect={handleSelect}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      <VideoLightbox video={active} onClose={close} />
    </section>
  );
}
