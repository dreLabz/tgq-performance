"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a href="#" className="block">
        <Image
          src="/tgq_logo.png"
          alt="TGQ Performance"
          width={120}
          height={40}
          priority
          className="w-24 md:w-32 h-auto"
        />
      </a>
      <Button href="#contact" variant="outline" className="text-xs px-6 py-2">
        Get Started
      </Button>
    </nav>
  );
}
