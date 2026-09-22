import Button from "./Button";
import Icon from "./Icon";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SideRail from "./SideRail";
import { storiesCta, storyCredentials, storyTiles } from "@/lib/stories";

export default function WorkSpeaks() {
  return (
    <section id="stories" className="relative py-20 md:py-28">
      <SideRail
        side="left"
        items={["People", "Progress", "Purpose", "Results"]}
      />
      <SideRail side="right" items={["Same Standard", "Different Game"]} />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <SectionHeading
            title="The Work Speaks."
            subtitle="Real Athletes. Real Stories. Real Results."
          />
        </SectionReveal>

        {/* Credential strip */}
        <SectionReveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 gap-6 border-y border-gray-600 py-6 md:mt-12 md:grid-cols-4">
            {storyCredentials.map((cred) => (
              <li key={cred.title} className="flex items-center gap-3">
                <Icon name={cred.icon} className="h-7 w-7 shrink-0 text-white" />
                <div>
                  <p className="font-heading font-bold uppercase tracking-label text-xs text-white">
                    {cred.title}
                  </p>
                  <p className="font-heading font-medium uppercase tracking-label text-[0.625rem] text-gray-400">
                    {cred.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>

        {/* Collage. Explicit spans on a 12-col grid at lg; stacks below. */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {storyTiles.map((tile, i) => (
            <SectionReveal
              key={tile.id}
              delay={(i % 3) * 0.08}
              className="lg:[grid-column:span_var(--span)/span_var(--span)]"
            >
              <div
                style={{ ["--span" as string]: tile.span }}
                className="relative isolate flex h-full min-h-[14rem] flex-col justify-end overflow-hidden border border-gray-600 p-5"
              >
                {"media" in tile && tile.media && (
                  <>
                    <MediaSlot
                      media={tile.media}
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0 -z-10"
                    />
                    <div className="absolute inset-0 -z-10 bg-black/60" />
                  </>
                )}

                {tile.kind === "quote" && (
                  <blockquote>
                    <p className="font-heading font-semibold uppercase tracking-label text-sm leading-relaxed text-white">
                      &ldquo;{tile.quote}&rdquo;
                    </p>
                    <footer className="mt-3 font-heading font-medium uppercase tracking-rail text-[0.625rem] text-gray-400">
                      — {tile.attribution}
                    </footer>
                  </blockquote>
                )}

                {tile.kind === "photo" && tile.script && (
                  <p className="font-script text-xl text-white/70">
                    {tile.script}
                  </p>
                )}

                {tile.kind === "logos" && (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <p className="font-heading font-bold uppercase tracking-rail text-[0.625rem] text-gray-300">
                      {tile.heading}
                    </p>
                    {tile.logos.length === 0 ? (
                      <p className="mt-4 font-heading text-[0.625rem] uppercase tracking-rail text-gray-500">
                        Logos to come
                      </p>
                    ) : (
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        {tile.logos.map((logo, n) => (
                          <MediaSlot
                            key={n}
                            media={logo}
                            sizes="80px"
                            className="h-12 w-12"
                          />
                        ))}
                      </div>
                    )}
                    {tile.footnote && (
                      <p className="mt-4 font-heading text-[0.625rem] uppercase tracking-rail text-gray-500">
                        {tile.footnote}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-heading font-semibold uppercase tracking-rail text-[0.6875rem] text-gray-400">
            Real Athletes. Real Development. Real Results.
          </p>
          <Button href={storiesCta.href} variant="outline" size="md" arrow className="mt-6">
            {storiesCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
