"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import MediaSlot from "./MediaSlot";
import { heroContent, site } from "@/lib/site";
import { sports } from "@/lib/sports";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Split background: football left, softball right. Stacks to a single
          column below md, where two half-width frames are unreadable. */}
      <div className="absolute inset-0 -z-10 grid grid-cols-1 md:grid-cols-2">
        {sports.map((sport) => (
          <div key={sport.id} className="relative">
            <MediaSlot
              media={sport.media}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={sport.id === "football"}
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Edge labels */}
      {sports.map((sport, i) => (
        <span
          key={sport.id}
          aria-hidden="true"
          className={`absolute top-28 hidden font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-300 lg:block ${
            i === 0 ? "left-8 text-left" : "right-8 text-right"
          }`}
        >
          {sport.heroLabel}
        </span>
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8"
        >
          <Image
            src={site.brand.logo}
            alt={site.brand.name}
            width={320}
            height={315}
            priority
            className="h-24 w-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.6)] md:h-32 lg:h-40"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-4 font-heading font-extrabold uppercase tracking-display text-white text-[clamp(3rem,10vw,8rem)] leading-[0.88]"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-4 font-heading font-semibold uppercase tracking-label text-gray-300 text-[clamp(1rem,2.4vw,1.75rem)]"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-4 max-w-2xl font-body text-sm text-gray-300 md:text-base"
        >
          {heroContent.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#choose" variant="accent" size="lg" arrow>
            Football Training
          </Button>
          <Button href="#choose" variant="outline" size="lg" arrow>
            Softball Training
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 font-heading font-semibold uppercase tracking-rail text-xs text-gray-300"
        >
          {heroContent.closing}
        </motion.p>
      </div>

      <motion.a
        href="#foundation"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-300 hover:text-white"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
