"use client";

import Image from "next/image";
import { formatDuration, type VideoItem } from "@/lib/videos";

interface Props {
  video: VideoItem;
  onSelect: (video: VideoItem, opener: HTMLButtonElement) => void;
  /** Sizes hint for next/image — differs between the two grid layouts. */
  sizes: string;
}

export default function VideoCard({ video, onSelect, sizes }: Props) {
  const isPortrait = video.orientation === "portrait";

  return (
    <button
      type="button"
      onClick={(e) => onSelect(video, e.currentTarget)}
      className="group w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Play ${video.title}`}
    >
      <div
        className={`relative overflow-hidden bg-gray-800 border border-gray-600 ${
          isPortrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <Image
          src={video.poster}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />

        {/* Play affordance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-6 w-6 text-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 font-body text-xs text-white tabular-nums">
          {formatDuration(video.duration)}
        </span>
      </div>

      <h3 className="mt-4 font-heading font-bold uppercase tracking-[0.15em] text-lg text-white">
        {video.title}
      </h3>
      <p className="mt-1 font-body text-sm text-gray-400">
        {video.description}
      </p>
    </button>
  );
}
