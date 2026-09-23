import Image from "next/image";
import type { MediaRef } from "@/lib/types";

interface Props {
  media: MediaRef;
  /** Required, not optional — without it next/image downloads at full width. */
  sizes: string;
  className?: string;
  priority?: boolean;
}

/**
 * Every photo on the page goes through here so that "asset not delivered yet"
 * has exactly one visual treatment, and so real assets drop in by editing data
 * rather than components.
 */
export default function MediaSlot({
  media,
  sizes,
  className = "",
  priority,
}: Props) {
  return (
    // No `relative` here: callers pass `absolute inset-0`, and Tailwind
    // emits .relative after .absolute, so a base `relative` silently wins
    // and collapses this wrapper to zero height — which kills the fill image.
    // Callers that do not position it must pass `relative` themselves.
    <div className={`overflow-hidden bg-gray-900 ${className}`}>
      {media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={media.focus ? { objectPosition: media.focus } : undefined}
          className="object-cover grayscale contrast-[1.15]"
        />
      ) : (
        <Placeholder label={media.label} />
      )}
    </div>
  );
}

/**
 * Deliberately not a "broken image" state. The oversized low-opacity mark is
 * already a motif in Q's comps, so an empty slot reads as part of the design
 * rather than as something that failed to load.
 */
function Placeholder({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 isolate bg-gray-900">
      <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(135deg,transparent_0_11px,var(--color-white)_11px_12px)]" />
      <Image
        src="/brand/tgq-logo.png"
        alt=""
        width={400}
        height={394}
        className="absolute left-1/2 top-1/2 w-[62%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05] grayscale"
      />
      {label && (
        <span className="absolute inset-x-0 bottom-0 p-4 text-center font-heading font-bold uppercase tracking-rail text-[0.625rem] leading-relaxed text-gray-500">
          {label}
        </span>
      )}
    </div>
  );
}
