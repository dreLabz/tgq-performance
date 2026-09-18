/**
 * Video library.
 *
 * Two buckets:
 *   - `sessionVideos`   — landscape field sessions, full coaching breakdowns
 *   - `shortFormVideos` — vertical short-form clips aimed at players at a position
 *
 * `src` is deliberately the only hosting-specific field. Today it points at
 * files in /public/video. To move to Cloudflare Stream (or Mux), swap each
 * `src` for the playback URL — no component changes required.
 *
 * TODO: `title` and `description` are placeholders on the session videos. Q
 * needs to supply the real ones — these clips have coaching audio describing
 * what's being taught, and inventing technique claims under his name isn't
 * something to guess at. The two short-form titles are read directly off the
 * on-screen text in each clip, so those are accurate.
 */

export type Level = "youth" | "high-school" | "college" | "pro";
export type Orientation = "landscape" | "portrait";

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  /** Runtime in seconds, used for the badge on each card. */
  duration: number;
  src: string;
  poster: string;
  orientation: Orientation;
  level?: Level;
}

export const sessionVideos: VideoItem[] = [
  {
    id: "tgq-vid3",
    title: "Session 01",
    description: "Coaching points delivered on the field.",
    duration: 7.6,
    src: "/video/instruction/tgq-vid3.mp4",
    poster: "/video/posters/tgq-vid3.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid5",
    title: "Session 02",
    description: "Coaching points delivered on the field.",
    duration: 60.3,
    src: "/video/instruction/tgq-vid5.mp4",
    poster: "/video/posters/tgq-vid5.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid6",
    title: "Session 03",
    description: "Coaching points delivered on the field.",
    duration: 19.9,
    src: "/video/instruction/tgq-vid6.mp4",
    poster: "/video/posters/tgq-vid6.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid7",
    title: "Session 04",
    description: "Coaching points delivered on the field.",
    duration: 18.3,
    src: "/video/instruction/tgq-vid7.mp4",
    poster: "/video/posters/tgq-vid7.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid8",
    title: "Session 05",
    description: "Coaching points delivered on the field.",
    duration: 48.0,
    src: "/video/instruction/tgq-vid8.mp4",
    poster: "/video/posters/tgq-vid8.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid9",
    title: "Session 06",
    description: "Coaching points delivered on the field.",
    duration: 64.7,
    src: "/video/instruction/tgq-vid9.mp4",
    poster: "/video/posters/tgq-vid9.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid11",
    title: "Session 07",
    description: "Coaching points delivered on the field.",
    duration: 42.8,
    src: "/video/instruction/tgq-vid11.mp4",
    poster: "/video/posters/tgq-vid11.jpg",
    orientation: "landscape",
  },
  {
    id: "tgq-vid12",
    title: "Session 08",
    description: "Coaching points delivered on the field.",
    duration: 27.4,
    src: "/video/instruction/tgq-vid12.mp4",
    poster: "/video/posters/tgq-vid12.jpg",
    orientation: "landscape",
  },
];

export const shortFormVideos: VideoItem[] = [
  {
    id: "tgq-vid13",
    title: "3 Things College Coaches Look For",
    description: "What shows up on film when they're evaluating QBs.",
    duration: 54.5,
    src: "/video/shorts/tgq-vid13.mp4",
    poster: "/video/posters/tgq-vid13.jpg",
    orientation: "portrait",
    level: "college",
  },
  {
    id: "tgq-vid14",
    title: "3 Things Pros Do In Practice",
    description: "Habits that translate into more plays on game day.",
    duration: 56.0,
    src: "/video/shorts/tgq-vid14.mp4",
    poster: "/video/posters/tgq-vid14.jpg",
    orientation: "portrait",
    level: "pro",
  },
];

/** 64.7 -> "1:05" */
export function formatDuration(seconds: number): string {
  const total = Math.round(seconds);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
