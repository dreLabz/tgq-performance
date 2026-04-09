"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay (adjust opacity as needed) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Glow behind logo */}
          <motion.div
            className="absolute inset-0 blur-2xl rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          {/* Floating idle animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image
              src="/tgq_logo.png"
              alt="TGQ Performance"
              width={300}
              height={100}
              priority
              className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            />
          </motion.div>
        </motion.div>

        {/* Tagline Line 1 */}
        <motion.h1
          className="font-heading font-extrabold uppercase tracking-[0.15em] text-5xl md:text-6xl lg:text-8xl text-white leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Elevate Your Game
        </motion.h1>

        {/* Tagline Line 2 */}
        <motion.p
          className="font-heading font-semibold uppercase tracking-[0.15em] text-2xl md:text-3xl lg:text-4xl text-gray-400 mt-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          Train Like a Pro
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="font-body text-gray-400 text-base md:text-lg max-w-md mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
        >
          Elite football training for all ages, from youth development to the
          professional level.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-10"
        >
          <Button href="#contact">Start Training</Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
