import type { Cta, MediaRef, SportId } from "./types";
import type { IconName } from "@/components/Icon";

export interface Credential {
  icon: IconName;
  title: string;
  /** Institutions / teams. Transcribed from Q's mockup and confirmed by him. */
  detail: string;
}

export interface Coach {
  id: string;
  name: string;
  sport: SportId;
  sportLabel: string;
  /** Handwritten-style name over the portrait, as in the comp. */
  signature: string;
  credentials: Credential[];
  cta: Cta;
  railWords: string[];
  media: MediaRef;
}

export const coaches: Coach[] = [
  {
    id: "q",
    name: "Coach Q",
    sport: "football",
    sportLabel: "Football",
    signature: "Coach Q",
    credentials: [
      {
        icon: "cap",
        title: "Division I Football Player",
        detail: "4 Year Starter | Lehigh University",
      },
      {
        icon: "football",
        title: "Professional Football Player",
        detail: "Memphis Express (AAF) | Nojima Rise (Japan)",
      },
      {
        icon: "whistle",
        title: "Division I Defensive Backs Coach",
        detail: "Lehigh University | Georgia Tech",
      },
      {
        icon: "shield",
        title: "NFL Coaching Experience",
        detail: "49ers Bill Walsh Fellowship",
      },
    ],
    cta: { label: "Meet Coach Q", href: "#contact" },
    railWords: ["Football", "Builds", "Discipline"],
    media: {
      src: null,
      alt: "Coach Q",
      focus: "50% 25%",
      label: "Coach Q portrait — field, helmeted athlete in foreground",
    },
  },
  {
    id: "aeshia",
    name: "Coach Aeshia",
    sport: "softball",
    sportLabel: "Softball",
    signature: "Coach Aeshia",
    credentials: [
      {
        icon: "cap",
        title: "All-Conference Division I Softball Player",
        detail: "First Team All-MAC | Ball State University",
      },
      {
        icon: "softball",
        title: "Professional Softball Player",
        detail: "Professional Playing Experience",
      },
      {
        icon: "whistle",
        title: "Division I Softball Coach",
        detail: "Eastern Illinois University",
      },
      {
        icon: "trophy",
        title: "2× State Champion",
        detail: "Championship Experience",
      },
    ],
    cta: { label: "Meet Coach Aeshia", href: "#contact" },
    railWords: ["Softball", "Builds", "Confidence"],
    media: {
      src: null,
      alt: "Coach Aeshia",
      focus: "50% 25%",
      label: "Coach Aeshia portrait — cage, helmeted hitter in foreground",
    },
  },
];
