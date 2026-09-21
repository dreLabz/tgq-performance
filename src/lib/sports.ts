import type { Cta, MediaRef, SportId } from "./types";

export interface Sport {
  id: SportId;
  /** Big word over the photo. */
  name: string;
  /** Hero edge label. */
  heroLabel: string;
  /** The three lines under the big word in "Choose Your Game". */
  offerings: string[];
  cta: Cta;
  /** Words burned into the outer edge of each half in the comp. */
  railWords: string[];
  media: MediaRef;
}

export const sports: Sport[] = [
  {
    id: "football",
    name: "Football",
    heroLabel: "Football Development",
    offerings: [
      "Defensive Back Development",
      "In Person Training",
      "Virtual Coaching",
    ],
    cta: { label: "Explore Football", href: "#coaches" },
    railWords: ["Detail", "Discipline", "Dominate"],
    media: {
      src: null,
      alt: "",
      focus: "60% 40%",
      label: "Football — coach mirroring a DB, TGQ banner behind",
    },
  },
  {
    id: "softball",
    name: "Softball",
    heroLabel: "Softball Development",
    offerings: [
      "Softball Development",
      "In Person Training",
      "Virtual Coaching",
    ],
    cta: { label: "Explore Softball", href: "#coaches" },
    railWords: ["Work", "Develop", "Compete", "Grow"],
    media: {
      src: null,
      alt: "",
      focus: "50% 35%",
      label: "Softball — coach crouched coaching a helmeted hitter",
    },
  },
];
