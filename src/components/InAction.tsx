import InActionGrid from "./InActionGrid";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { actionVideos } from "@/lib/showcase";

export default function InAction() {
  return (
    <section id="action" className="relative py-20 md:py-28">
      <SideRail
        side="left"
        items={["People", "Progress", "Purpose", "Results"]}
      />
      <SideRail side="right" items={["Discipline", "Builds", "Freedom"]} />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <SectionHeading
            title="See TGQ In Action."
            subtitle="Real Coaching. Real Work. Real Development."
            className="mb-12 md:mb-16"
          />
        </SectionReveal>

        <InActionGrid videos={actionVideos} />

        <p className="mt-12 text-center font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400 md:mt-16">
          The Work Looks Different. The Standard Stays The Same.
        </p>
      </div>
    </section>
  );
}
