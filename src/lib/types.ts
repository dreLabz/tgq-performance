/**
 * Shared shapes for the homepage content layer.
 *
 * The important one is MediaRef: `src: null` is a first-class state, not an
 * error. Q is still sending the real football and softball assets, and there
 * is currently no softball imagery at all — so every slot has to render as a
 * deliberate placeholder rather than a broken image. The `label` doubles as
 * the shot brief, which means a screenshot of the page is also the shot list.
 */

export interface MediaRef {
  /** Path under /public, or null when the asset hasn't been delivered yet. */
  src: string | null;
  /** Empty string for purely decorative photography, which most of these are. */
  alt: string;
  /** object-position, e.g. "50% 30%". Portraits usually need this. */
  focus?: string;
  /** Shown inside the placeholder. Write it as a description of the shot. */
  label?: string;
}

export type SportId = "football" | "softball";

export interface Cta {
  label: string;
  /**
   * Homepage-only build, so every CTA points at an on-page anchor. When real
   * routes land this is the one place that changes. Never "#" — that jumps to
   * the top of the page and reads as broken.
   */
  href: string;
}
