import Button from "./Button";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { teamTraining, trainingOptions } from "@/lib/training";

function TagColumn({ items, side }: { items: string[]; side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`font-heading font-semibold uppercase tracking-rail text-[0.625rem] leading-[2] text-gray-400 ${
        side === "right" ? "text-right" : ""
      }`}
    >
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default function TrainWithTGQ() {
  return (
    <section id="train" className="relative py-20 md:py-28">
      <SideRail
        side="left"
        items={["Same Standard", "Different Game"]}
      />
      <SideRail
        side="right"
        items={["Football", "Softball", "Athletes For Life"]}
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <SectionHeading
            title="Train With TGQ."
            subtitle="Choose The Development Experience That Fits You."
          />
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {trainingOptions.map((option, i) => (
            <SectionReveal key={option.id} delay={i * 0.1}>
              <article className="group relative isolate flex min-h-[30rem] flex-col justify-between overflow-hidden border border-gray-600">
                <MediaSlot
                  media={option.media}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/30" />

                <div className="flex justify-between gap-4 p-6">
                  <TagColumn items={option.tagsLeft} side="left" />
                  <TagColumn items={option.tagsRight} side="right" />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-heading font-extrabold uppercase tracking-display text-white text-3xl md:text-4xl">
                    {option.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-gray-300">
                    {option.description}
                  </p>
                  <Button
                    href={option.cta.href}
                    variant="outline"
                    size="sm"
                    arrow
                    stretch
                    className="mt-6 w-full"
                  >
                    {option.cta.label}
                  </Button>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Full-width bar underneath, per the comp. */}
        <SectionReveal delay={0.1}>
          <article className="group relative isolate mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden border border-gray-600 p-6 md:flex-row md:items-center md:p-8">
            <MediaSlot
              media={teamTraining.media}
              sizes="100vw"
              className="absolute inset-0 -z-10"
            />
            <div className="absolute inset-0 -z-10 bg-black/70" />

            <div>
              <h3 className="font-heading font-extrabold uppercase tracking-display text-white text-2xl md:text-3xl">
                {teamTraining.title}
              </h3>
              <p className="mt-2 font-body text-sm text-gray-300">
                {teamTraining.description}
              </p>
            </div>

            <Button
              href={teamTraining.cta.href}
              variant="outline"
              size="sm"
              arrow
              stretch
              className="w-full md:w-auto"
            >
              {teamTraining.cta.label}
            </Button>
          </article>
        </SectionReveal>

        <p className="mt-12 text-center font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400 md:mt-16">
          In Person Or Online. The Standard Doesn&apos;t Change.
        </p>
      </div>
    </section>
  );
}
