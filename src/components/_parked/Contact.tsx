"use client";

import { useState } from "react";
import SectionReveal from "../SectionReveal";
import Button from "../Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading font-extrabold uppercase tracking-[0.15em] text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4">
            Let&apos;s Work
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12" />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white text-white placeholder-gray-400 py-3 font-body outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white text-white placeholder-gray-400 py-3 font-body outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white text-white placeholder-gray-400 py-3 font-body outline-none transition-colors resize-none"
              />
            </div>
            <div className="text-center">
              <Button>{submitted ? "Message Sent!" : "Send Message"}</Button>
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
