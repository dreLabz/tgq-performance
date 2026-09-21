import Button from "./Button";
import Icon from "./Icon";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { coaches } from "@/lib/coaches";

export default function MeetTheCoaches() {
  return (
    <section id="coaches" className="relative py-20 md:py-28">
      <SideRail
        side="left"
        items={["People", "Process", "Progress", "Purpose"]}
      />
      <SideRail
        side="right"
        items={["Same Standard", "Different Game"]}
      />

      <SectionReveal>
        <SectionHeading
          title="Meet The Coaches."
          subtitle="Experience Behind The Development."
          className="px-6 mb-12 md:mb-16"
        />
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {coaches.map((coach, i) => (
          <SectionReveal key={coach.id} delay={i * 0.12}>
            <article className="group relative isolate flex min-h-[78vh] flex-col justify-end overflow-hidden">
              <MediaSlot
                media={coach.media}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Heavier scrim than Choose Your Game — the credential list is
                  four lines of small text and needs a quieter ground. */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/20" />

              <div
                aria-hidden="true"
                className="absolute top-8 left-6 right-6 hidden font-heading font-semibold uppercase tracking-rail text-[0.6875rem] leading-[2] text-gray-400 md:block"
              >
                {coach.railWords.map((word) => (
                  <div key={word}>{word}</div>
                ))}
              </div>

              <div className="p-8 md:p-10 lg:p-12">
                <p className="font-script text-2xl text-white/70 md:text-3xl">
                  {coach.signature}
                </p>

                <h3 className="mt-1 font-heading font-extrabold uppercase tracking-display text-white text-[clamp(2.25rem,5.5vw,3.75rem)] leading-none">
                  {coach.name}
                </h3>
                <p className="mt-1 font-heading font-semibold uppercase tracking-rail text-sm text-gray-400">
                  {coach.sportLabel}
                </p>

                <ul className="mt-7 space-y-5">
                  {coach.credentials.map((cred) => (
                    <li key={cred.title} className="flex gap-4">
                      <Icon
                        name={cred.icon}
                        className="mt-0.5 h-6 w-6 shrink-0 text-white"
                      />
                      <div>
                        <p className="font-heading font-bold uppercase tracking-label text-sm text-white md:text-base">
                          {cred.title}
                        </p>
                        <p className="mt-0.5 font-heading font-medium uppercase tracking-label text-xs text-gray-400">
                          {cred.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  href={coach.cta.href}
                  variant="outline"
                  size="md"
                  arrow
                  stretch
                  className="mt-9 w-full md:w-auto"
                >
                  {coach.cta.label}
                </Button>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      <p className="mt-12 text-center font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400 md:mt-16">
        Two Coaches. Two Sports. One TGQ Standard.
      </p>
    </section>
  );
}
