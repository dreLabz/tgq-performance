import type { MediaRef } from "./types";
import type { IconName } from "@/components/Icon";

export interface Pillar {
  id: string;
  icon: IconName;
  title: string;
  /** Two short lines in the comp — kept as an array so they break cleanly. */
  lines: string[];
  media: MediaRef;
}

export const pillars: Pillar[] = [
  {
    id: "time",
    icon: "clock",
    title: "Time",
    lines: ["Development takes time.", "Trust the process."],
    media: {
      src: null,
      alt: "",
      label: "Football — athlete driving out of a low start",
    },
  },
  {
    id: "grind",
    icon: "bars",
    title: "Grind",
    lines: ["Consistency and intentional", "work separate you."],
    media: {
      src: null,
      alt: "",
      // Q asked specifically for both sports represented on this one.
      label: "Football AND softball — conditioning work, both sports in frame",
    },
  },
  {
    id: "quality",
    icon: "diamond",
    title: "Quality",
    lines: ["It's not just how much you work.", "It's how well you work."],
    media: {
      src: null,
      alt: "",
      label: "Softball — fielder going low into the dirt",
    },
  },
];

export const foundationIntro =
  "TGQ Performance is built on three principles that apply to every athlete, every sport, and every level. Whether you step on the field or the diamond, our mission is the same — to help you reach your full potential.";
