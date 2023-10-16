"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, i18n } from "i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-2">
      {i18n.locales.map((locale: Locale) => (
        <li key={locale}>
          <Link
            className="rounded-md bg-black px-3 py-2 text-white"
            href={redirectedPathName(locale)}
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
