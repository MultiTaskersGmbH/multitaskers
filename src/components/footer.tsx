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
    <footer>
      <div>
        <nav aria-label="Footer">
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
        <div>
          {social.map((item) => (
            <Link
              href={item.href}
              target="_blank"
              key={item.name}
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <Image alt="" src={item.src} width={50} height={50} />
            </Link>
          ))}
        </div>
        <p>&copy; {currentYear} MultiTaskers GmbH. All rights reserved.</p>
      </div>
    </footer>
  );
}
