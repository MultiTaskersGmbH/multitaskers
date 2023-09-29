import Link from "next/link";
import Image from "next/image";

import { getDictionary } from "@/lib/getDictionary";
import { type Locale } from "i18n.config";

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/multitaskersschool",
    src: "/social-media/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/multi_taskers_school",
    src: "/social-media/instagram.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/4915209582603",
    src: "/social-media/whatsapp.png",
  },
  {
    name: "Telegram",
    href: "https://t.me/multitaskersmanager",
    src: "/social-media/telegram.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@multitaskerslanguages",
    src: "/social-media/youtube.png",
  },
];

export default async function Footer({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const currentYear = new Date().getFullYear();
  const { navigation } = await getDictionary(lang);

  return (
    <footer>
      <div>
        <nav aria-label="Footer">
          <Link href="/">{navigation.menu.home}</Link>
          <Link href="/faq">{navigation.menu.faq}</Link>
          <Link href="/team">{navigation.menu.team}</Link>
          <Link href="/courses">{navigation.menu.courses}</Link>
          <Link href="/legal-notice">{navigation.menu.legal}</Link>
          <Link href="/privacy-policy">{navigation.menu.privacy}</Link>
          <Link href="/terms-and-conditions">{navigation.menu.terms}</Link>
        </nav>
        <div>
          {social.map((item) => (
            <Link href={item.href} target="_blank" key={item.name}>
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
