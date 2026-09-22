import type { Cta, MediaRef } from "./types";
import type { IconName } from "@/components/Icon";

export interface StoryCredential {
  icon: IconName;
  title: string;
  detail: string;
}

/**
 * Collage tiles. Spans are explicit rather than masonry — the comp is a
 * deterministic grid, and a masonry library would fight it.
 */
export type StoryTile =
  | { kind: "photo"; id: string; span: number; media: MediaRef; script?: string }
  | {
      kind: "quote";
      id: string;
      span: number;
      quote: string;
      attribution: string;
      media?: MediaRef;
    }
  | {
      kind: "logos";
      id: string;
      span: number;
      heading: string;
      logos: MediaRef[];
      footnote?: string;
    };

export const storyCredentials: StoryCredential[] = [
  { icon: "cap", title: "D1 + Professional", detail: "Playing Experience" },
  { icon: "whistle", title: "D1 Coaching", detail: "Experience" },
  { icon: "shield", title: "NFL Coaching", detail: "Experience" },
  { icon: "trophy", title: "Championship", detail: "Experience" },
];

/**
 * Every quote below is a PLACEHOLDER from the mockup. Q is sending the real
 * athlete testimonials, names and results — do not publish these as-is.
 */
export const storyTiles: StoryTile[] = [
  {
    kind: "quote",
    id: "college-db",
    span: 4,
    quote:
      "Coach Q helped me see the game different. My confidence took another level.",
    attribution: "College DB",
    media: { src: null, alt: "", label: "Football athlete, back of jersey" },
  },
  {
    kind: "quote",
    id: "college-softball",
    span: 4,
    quote:
      "Coach Aeshia pushes me to be a better player and person. She cares about the details.",
    attribution: "College Softball Player",
    media: { src: null, alt: "", label: "Softball athlete fielding" },
  },
  {
    kind: "photo",
    id: "discipline",
    span: 4,
    media: { src: null, alt: "", label: "Back of TGQ tee — Discipline Builds Freedom" },
  },
  {
    kind: "quote",
    id: "high-school",
    span: 4,
    quote:
      "TGQ made me a more complete athlete. On the field, in the classroom, and in life.",
    attribution: "High School Athlete",
  },
  {
    kind: "quote",
    id: "parent",
    span: 4,
    quote:
      "The best investment we've made. TGQ developed our son on and off the field.",
    attribution: "Parent",
    media: { src: null, alt: "", label: "Coach talking with a young athlete" },
  },
  {
    kind: "logos",
    id: "commitments",
    span: 4,
    heading: "College Commitments",
    logos: [],
    footnote: "And more...",
  },
  {
    kind: "quote",
    id: "college-athlete",
    span: 4,
    quote:
      "TGQ taught me how to prepare, compete and handle adversity. That's real development.",
    attribution: "College Athlete",
    media: { src: null, alt: "", label: "Softball athlete, back of jersey" },
  },
  {
    kind: "photo",
    id: "same-standard",
    span: 4,
    media: { src: null, alt: "", label: "Both coaches, backs to camera, TGQ gear" },
    script: "Same Standard. Different Game.",
  },
];

export const storiesCta: Cta = { label: "See More Stories", href: "#contact" };
