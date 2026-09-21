interface Props {
  /** Small red caps line above the title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** The hero is the only h1 on the page. */
  as?: "h1" | "h2";
  /** The short red rule. Off by default — the comps use it sparingly. */
  rule?: boolean;
  className?: string;
}

/**
 * Replaces the h2 + accent-rule block that was copy-pasted verbatim into
 * About, Instruction, Shorts and Contact.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  rule = false,
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <header className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="font-heading font-bold uppercase tracking-rail text-xs text-accent mb-3">
          {eyebrow}
        </p>
      )}

      <Tag className="font-heading font-extrabold uppercase tracking-display text-white text-[clamp(2.25rem,6vw,5rem)] leading-[0.92]">
        {title}
      </Tag>

      {subtitle && (
        <p className="mt-3 font-heading font-semibold uppercase tracking-label text-gray-300 text-[clamp(0.875rem,1.6vw,1.35rem)]">
          {subtitle}
        </p>
      )}

      {rule && (
        <div className={`mt-6 h-1 w-16 bg-accent ${centered ? "mx-auto" : ""}`} />
      )}
    </header>
  );
}
