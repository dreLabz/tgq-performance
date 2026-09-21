import Button from "./Button";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { sports } from "@/lib/sports";

export default function ChooseYourGame() {
  return (
    <section id="choose" className="relative py-20 md:py-28">
      <SideRail
        side="left"
        items={["Athletes", "Better People", "Brighter Futures"]}
      />
      <SideRail side="right" items={["Discipline", "Develops", "Freedom"]} />

      <SectionReveal>
        <SectionHeading
          title="Choose Your Game."
          subtitle="Same Standard. Different Game."
          className="px-6 mb-12 md:mb-16"
        />
      </SectionReveal>

      {/* Full-bleed 50/50. Stacks on mobile — two half-width panes of
          portrait photography are unreadable on a phone. */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {sports.map((sport, i) => (
          <SectionReveal key={sport.id} delay={i * 0.12}>
            {/* `relative` anchors the stretched link on the CTA below. */}
            <article className="group relative isolate min-h-[70vh] md:min-h-[78vh] flex flex-col justify-end overflow-hidden">
              <MediaSlot
                media={sport.media}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim. The photography is dark already, but the offering
                  list sits low where the frame is busiest. */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/15" />

              <div
                aria-hidden="true"
                className="absolute top-8 left-6 right-6 hidden font-heading font-semibold uppercase tracking-rail text-[0.6875rem] leading-[2] text-gray-400 md:block"
              >
                {sport.railWords.map((word) => (
                  <div key={word}>{word}</div>
                ))}
              </div>

              {/* Not `relative`: the stretched link on the CTA must resolve
                  against the <article>, not against this block, or only the
                  text becomes clickable instead of the whole half. */}
              <div className="p-8 md:p-10 lg:p-12">
                <h3 className="font-heading font-extrabold uppercase tracking-display text-white text-[clamp(2.5rem,7vw,4.5rem)] leading-none">
                  {sport.name}
                </h3>

                <ul className="mt-4 space-y-1 font-heading font-semibold uppercase tracking-label text-sm text-gray-300 md:text-base">
                  {sport.offerings.map((offering) => (
                    <li key={offering}>{offering}</li>
                  ))}
                </ul>

                <Button
                  href={sport.cta.href}
                  variant="outline"
                  size="md"
                  arrow
                  stretch
                  className="mt-8"
                >
                  {sport.cta.label}
                </Button>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      <p className="mt-12 text-center font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400 md:mt-16">
        Built Different. Developed With Purpose.
      </p>
    </section>
  );
}
