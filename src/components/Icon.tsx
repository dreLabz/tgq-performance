export type IconName =
  | "cap"
  | "football"
  | "softball"
  | "whistle"
  | "shield"
  | "trophy";

interface Props {
  name: IconName;
  className?: string;
}

/**
 * Local set rather than an icon package. Four of the glyphs the comps use
 * (NFL shield, whistle, football, softball) aren't in the usual libraries, so
 * a dependency would only cover half the set and leave the styles mismatched.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  cap: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M5 10v5.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V10" />
    </>
  ),
  football: (
    <>
      <path d="M3.5 20.5c-1.2-5 .8-12 5-16.2S18.5 1.3 20.5 3.5s1.4 8.8-2.8 13S8.5 21.7 3.5 20.5Z" />
      <path d="M9 15l6-6M10.5 11.5l2 2M13 9l2 2" />
    </>
  ),
  softball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M6 5.5c2.5 2 3.8 4.3 3.8 6.5S8.5 16.5 6 18.5M18 5.5c-2.5 2-3.8 4.3-3.8 6.5s1.3 4.5 3.8 6.5" />
    </>
  ),
  whistle: (
    <>
      <path d="M12.5 9H21v4.5a4.5 4.5 0 0 1-4.5 4.5h-3A5.5 5.5 0 1 1 12.5 9Z" />
      <circle cx="8" cy="13.5" r="1.6" />
      <path d="M13 9V6.5A1.5 1.5 0 0 1 14.5 5H17" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.2v6.4c0 4.6 3.2 8.6 7.5 9.9 4.3-1.3 7.5-5.3 7.5-9.9V5.2L12 2.5Z" />
      <path d="M9.5 9.5h1.8l1.4 3 1.4-3h1.8" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5.5H4.5v1A3.5 3.5 0 0 0 8 10M17 5.5h2.5v1A3.5 3.5 0 0 1 16 10" />
      <path d="M12 14v3.5M8.5 20.5h7" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
