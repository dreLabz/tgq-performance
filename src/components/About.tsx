"use client";

import SectionReveal from "./SectionReveal";

const credentials = [
  {
    title: "Collegiate Athlete",
    description:
      "Competed at the collegiate level, understanding the grind and discipline it takes to perform at the highest stages of amateur football.",
  },
  {
    title: "Power Five Coach",
    description:
      "Coached within a Power Five conference program, developing players who go on to compete at the next level.",
  },
  {
    title: "NFL Experience",
    description:
      "Coached at the NFL level, bringing professional-grade techniques, film study, and development strategies to every athlete.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading font-extrabold uppercase tracking-[0.15em] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            The Coach
          </h2>
          <div className="w-16 h-1 bg-accent mb-12" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Credential Cards */}
          <div className="space-y-6">
            {credentials.map((cred, i) => (
              <SectionReveal key={cred.title} delay={i * 0.15}>
                <div className="bg-gray-800 border border-gray-600 p-8">
                  <h3 className="font-heading font-bold uppercase tracking-[0.15em] text-xl text-white mb-3">
                    {cred.title}
                  </h3>
                  <p className="font-body text-gray-400 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Bio */}
          <SectionReveal delay={0.2}>
            <div>
              <p className="font-heading font-semibold text-2xl md:text-3xl text-white leading-snug mb-6">
                &ldquo;Time, Grind, Quality. The three pillars that separate
                good from elite.&rdquo;
              </p>
              <p className="font-body text-gray-400 leading-relaxed mb-4">
                TGQ Performance was built on the belief that every athlete,
                regardless of age or skill level, deserves access to
                professional-caliber coaching. With years of experience spanning
                collegiate athletics, Power Five programs, and the NFL, the
                training methodology is rooted in what actually works at the
                highest level.
              </p>
              <p className="font-body text-gray-400 leading-relaxed">
                From footwork fundamentals to game-speed situational training,
                every session is designed to push athletes beyond their limits
                while building the discipline and technique needed to compete
                when it matters most.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
