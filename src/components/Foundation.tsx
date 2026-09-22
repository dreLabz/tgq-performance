import Icon from "./Icon";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { foundationIntro, pillars } from "@/lib/foundation";

export default function Foundation() {
  return (
    <section id="foundation" className="relative overflow-hidden py-20 md:py-28">
      {/* Oversized mark bleeding off the top-left, as in the comp. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-16 hidden select-none font-heading text-[18rem] font-extrabold leading-none text-white/[0.02] lg:block"
      >
        TGQ
      </div>

      <SideRail
        side="left"
        items={["Athletes", "Better People", "Brighter Futures"]}
      />
      <SideRail side="right" items={["Football", "Softball", "Life"]} />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <SectionHeading
            eyebrow="Our Foundation"
            title="Time. Grind. Quality."
            subtitle="More Than A Name. It's How We Develop."
          />
          <p className="mx-auto mt-6 max-w-3xl text-center font-body leading-relaxed text-gray-400">
            {foundationIntro}
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.id} delay={i * 0.12}>
              <article className="group relative isolate flex min-h-[22rem] flex-col items-center justify-center overflow-hidden border border-gray-600 p-8 text-center">
                <MediaSlot
                  media={pillar.media}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-black/60" />

                <Icon name={pillar.icon} className="h-8 w-8 text-white" />

                <h3 className="mt-4 font-heading font-extrabold uppercase tracking-display text-white text-4xl md:text-5xl">
                  {pillar.title}
                </h3>
                <div className="mt-3 h-1 w-12 bg-white" />

                <p className="mt-4 font-body text-sm leading-relaxed text-gray-300">
                  {pillar.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <p className="mt-12 text-center font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400 md:mt-16">
          Built Different. Developed With Purpose.
        </p>
      </div>
    </section>
  );
}
