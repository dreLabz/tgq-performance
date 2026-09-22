import type { Cta, MediaRef } from "./types";

export interface TrainingOption {
  id: string;
  title: string;
  description: string;
  /** Tag columns sitting over the photo, left and right. */
  tagsLeft: string[];
  tagsRight: string[];
  cta: Cta;
  media: MediaRef;
}

export const trainingOptions: TrainingOption[] = [
  {
    id: "group",
    title: "Group Training",
    description:
      "Train in a competitive environment with athletes who are serious about development.",
    tagsLeft: ["Compete", "Learn", "Grow", "Together"],
    tagsRight: ["Football", "Softball", "One Standard"],
    cta: { label: "Learn More", href: "#contact" },
    media: {
      src: null,
      alt: "",
      label: "Split frame — football and softball group work side by side",
    },
  },
  {
    id: "private",
    title: "Private Training",
    description:
      "Individualized coaching focused specifically on your game and development needs.",
    tagsLeft: ["Details", "Technique", "Reps", "Results"],
    tagsRight: ["Your Game", "Our Focus"],
    cta: { label: "Learn More", href: "#contact" },
    media: {
      src: null,
      alt: "",
      label: "Coach one-on-one with an athlete, close crop",
    },
  },
  {
    id: "virtual",
    title: "Virtual Coaching",
    description: "Get TGQ coaching and development from anywhere.",
    tagsLeft: ["Film", "Feedback", "Gameplan", "Development"],
    tagsRight: ["Anywhere", "Anytime", "Same Standard"],
    cta: { label: "Learn More", href: "#contact" },
    media: {
      src: null,
      alt: "",
      label: "Laptop showing both coaches on a call",
    },
  },
];

export const teamTraining = {
  title: "Team Training",
  description: "Custom training for teams, programs & organizations.",
  cta: { label: "Learn More", href: "#contact" } satisfies Cta,
  media: {
    src: null,
    alt: "",
    label: "Team huddled in TGQ gear, backs to camera",
  } satisfies MediaRef,
};
