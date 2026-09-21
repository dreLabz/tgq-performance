"use client";

import { motion } from "framer-motion";

type Variant = "primary" | "outline" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  /** Appends the → glyph the comps put on nearly every button. */
  arrow?: boolean;
  /**
   * Expands the click target over the nearest positioned ancestor, so a whole
   * card is clickable while staying a single link and a single tab stop.
   * The ancestor needs `relative`.
   */
  stretch?: boolean;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-gray-300",
  outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  accent: "bg-accent text-white hover:bg-white hover:text-black",
  ghost: "border border-white/25 text-white hover:border-white hover:bg-white/5",
};

const SIZES: Record<Size, string> = {
  sm: "px-6 py-2.5 text-[0.6875rem]",
  md: "px-9 py-3.5 text-xs",
  lg: "px-10 py-4 text-sm",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  arrow = false,
  stretch = false,
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-label transition-colors cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    VARIANTS[variant],
    SIZES[size],
    stretch ? "after:absolute after:inset-0 after:content-['']" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
