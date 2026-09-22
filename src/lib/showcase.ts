import type { Cta, MediaRef, SportId } from "./types";

export interface ActionVideo {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  poster: MediaRef;
  /**
   * Full clip for the lightbox. null suppresses the play ring and the
   * WATCH NOW button rather than opening an empty modal.
   */
  clip: { src: string; orientation: "landscape" | "portrait" } | null;
  /** 3-5s silent loop for hover. null means poster only. */
  preview: string | null;
  cta: Cta;
  sport?: SportId;
}

export const actionVideos: ActionVideo[] = [
  {
    id: "football-training",
    title: "Football Training",
    subtitle: "Details Create Difference",
    tags: ["Defensive Backs", "Technique", "Football IQ", "Compete"],
    poster: { src: null, alt: "", label: "Coach Q working a DB through a drill" },
    clip: null,
    preview: null,
    cta: { label: "Watch Now", href: "#action" },
    sport: "football",
  },
  {
    id: "softball-training",
    title: "Softball Training",
    subtitle: "Skills Build Confidence",
    tags: ["Hitting", "Fielding", "Pitching", "Mentality"],
    poster: { src: null, alt: "", label: "Coach Aeshia coaching a hitter at the cage" },
    clip: null,
    preview: null,
    cta: { label: "Watch Now", href: "#action" },
    sport: "softball",
  },
  {
    id: "coaching",
    title: "Coaching",
    subtitle: "Teach. Develop. Elevate.",
    tags: ["Film", "Teach", "Develop", "Elevate"],
    poster: { src: null, alt: "", label: "Film session — coach at the board with athletes" },
    clip: null,
    preview: null,
    cta: { label: "Watch Now", href: "#action" },
  },
  {
    id: "the-standard",
    title: "The Standard",
    subtitle: "Two Sports. One Mindset.",
    tags: ["Discipline", "Work Ethic", "Growth", "Results"],
    poster: { src: null, alt: "", label: "Split frame — football and softball athlete" },
    clip: null,
    preview: null,
    cta: { label: "Watch Now", href: "#action" },
  },
];
