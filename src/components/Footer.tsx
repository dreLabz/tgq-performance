import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-600 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src={site.brand.logo}
            alt={site.brand.name}
            width={120}
            height={118}
            className="h-12 w-auto"
          />
          <p className="mt-3 font-heading font-bold uppercase tracking-rail text-[0.625rem] text-gray-400">
            Performance
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {site.nav
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-heading font-semibold uppercase tracking-label text-xs text-gray-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <ul className="flex gap-5 md:justify-end">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-heading font-semibold uppercase tracking-label text-xs text-gray-300 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-xs font-body text-xs leading-relaxed text-gray-400 md:ml-auto">
            {site.footerTagline}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-3 border-t border-gray-600 pt-6 text-center md:flex-row md:justify-between">
        <p className="font-heading font-medium uppercase tracking-label text-[0.625rem] text-gray-500">
          &copy; {new Date().getFullYear()} {site.brand.name}. All rights reserved.
        </p>
        <p className="font-heading font-semibold uppercase tracking-rail text-[0.625rem] text-gray-400">
          {site.footerWords.join("  ·  ")}
        </p>
      </div>
    </footer>
  );
}
