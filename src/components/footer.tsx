import Link from "next/link";
import Image from "next/image";

import type { Locale } from "i18n.config";

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/multitaskersschool",
    src: "/images/social-media/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/multi_taskers_school",
    src: "/images/social-media/instagram.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/4915209582603",
    src: "/images/social-media/whatsapp.png",
  },
  {
    name: "Telegram",
    href: "https://t.me/multitaskersmanager",
    src: "/images/social-media/telegram.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@multitaskerslanguages",
    src: "/images/social-media/youtube.png",
  },
];

type DictionaryType = Record<string, string>;

export default function Footer({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: {
    menu: DictionaryType;
  };
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 md:pt-24 lg:px-8">
      <div className="py-12">
        <nav
          aria-label="Footer"
          className="mb-10 flex flex-wrap justify-center gap-6"
        >
          <Link href={`/${lang}`}>{dictionary.menu.home}</Link>
          <Link href={`/${lang}/faq`}>{dictionary.menu.faq}</Link>
          <Link href={`/${lang}/team`}>{dictionary.menu.team}</Link>
          <Link href={`/${lang}/courses`}>{dictionary.menu.courses}</Link>
          <Link href={`/${lang}/legal-notice`}>{dictionary.menu.legal}</Link>
          <Link href={`/${lang}/privacy-policy`}>
            {dictionary.menu.privacy}
          </Link>
          <Link href={`/${lang}/terms-and-conditions`}>
            {dictionary.menu.terms}
          </Link>
        </nav>
        <div className="mb-10 flex items-center justify-center gap-6">
          {social.map((item) => (
            <Link
              href={item.href}
              target="_blank"
              key={item.name}
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-90"
            >
              <Image
                alt={`${item.name} logo`}
                src={item.src}
                width={50}
                height={50}
                className="h-9 w-full"
              />
            </Link>
          ))}
        </div>
        <p className="text-center">
          &copy; {currentYear} MultiTaskers GmbH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
