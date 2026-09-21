interface Props {
  items: string[];
  side: "left" | "right";
  className?: string;
}

/**
 * The vertical uppercase word stacks that sit at the outer edges of nearly
 * every section in the comps. Hidden below lg — there is no horizontal room
 * for them on a phone and they carry no essential information.
 */
export default function SideRail({ items, side, className = "" }: Props) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-8 hidden lg:block ${
        isLeft ? "left-6 text-left" : "right-6 text-right"
      } ${className}`}
    >
      <ul className="font-heading font-semibold uppercase tracking-rail text-[0.6875rem] leading-[2] text-gray-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div
        className={`mt-3 h-px w-10 bg-accent ${isLeft ? "" : "ml-auto"}`}
      />
    </div>
  );
}
