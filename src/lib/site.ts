import type { Cta } from "./types";

export const site = {
  brand: {
    name: "TGQ Performance",
    tagline: "Time Grind Quality",
    logo: "/brand/tgq-logo.png",
  },
  /**
   * Homepage-only build, so these are on-page anchors. Never "#" — that jumps
   * to the top and reads as broken. Swap for real routes when they exist.
   */
  nav: [
    { label: "Home", href: "#home" },
    { label: "Football", href: "#choose" },
    { label: "Softball", href: "#choose" },
    { label: "Training", href: "#train" },
    { label: "About", href: "#coaches" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Book A Session", href: "#contact" } satisfies Cta,
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  footerTagline: "Developing elite athletes on and off the field.",
  footerWords: ["People", "Progress", "Purpose"],
};

export const heroContent = {
  title: "Elevate Your Game",
  subtitle: "Elite Football + Softball Development",
  tagline:
    "Intentional coaching. Competitive training. Complete athlete development.",
  closing: "Time. Grind. Quality.",
};

export const finalCta = {
  title: "Ready To Get To Work?",
  subtitle: "Your Development Starts Here.",
  prompt: "Not sure where to start?",
  contact: { label: "Contact TGQ", href: "#contact" } satisfies Cta,
  values: [
    { icon: "people", title: "Better", detail: "Athletes" },
    { icon: "bars", title: "Brighter", detail: "Futures" },
    { icon: "diamond", title: "Stronger", detail: "Community" },
    { icon: "infinity", title: "Same", detail: "Standard" },
  ] as const,
};
