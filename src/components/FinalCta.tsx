import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import { finalCta } from "@/lib/site";
import { sports } from "@/lib/sports";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10 grid grid-cols-1 md:grid-cols-2">
        {sports.map((sport) => (
          <div key={sport.id} className="relative">
            <MediaSlot
              media={sport.media}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionReveal>
          <SectionHeading
            title={finalCta.title}
            subtitle={finalCta.subtitle}
          />

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#choose" variant="accent" size="lg" arrow>
              Football
            </Button>
            <Button href="#choose" variant="outline" size="lg" arrow>
              Softball
            </Button>
          </div>

          <p className="mt-8 font-heading font-semibold uppercase tracking-rail text-[0.625rem] text-gray-400">
            {finalCta.prompt}
          </p>
          <Button
            href={finalCta.contact.href}
            variant="ghost"
            size="sm"
            arrow
            className="mt-3"
          >
            {finalCta.contact.label}
          </Button>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <ul className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-600 pt-8 md:grid-cols-4">
            {finalCta.values.map((value) => (
              <li
                key={value.title}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon
                  name={value.icon as IconName}
                  className="h-7 w-7 text-white"
                />
                <p className="font-heading font-bold uppercase tracking-label text-xs text-white">
                  {value.title}
                </p>
                <p className="-mt-1 font-heading font-medium uppercase tracking-label text-[0.625rem] text-gray-400">
                  {value.detail}
                </p>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <p className="mt-10 font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400">
          Time. Grind. Quality.
        </p>
      </div>
    </section>
  );
}
