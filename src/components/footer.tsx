import Link from "next/link";
import Image from "next/image";

import dictionarie from "@/dictionaries/navigation.json";

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/MultiTaskersSchool",
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
    href: "https://t.me/MultiTaskersManager",
    src: "/social-media/telegram.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@multitaskerslanguages",
    src: "/social-media/youtube.png",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-20">
          <nav
            className="flex flex-wrap justify-center gap-8"
            aria-label="Footer"
          >
            <Link
              key={dictionarie.navigation.homepage.name["en-GB"]}
              href={dictionarie.navigation.homepage.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.homepage.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.faq.name["en-GB"]}
              href={dictionarie.navigation.faq.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.faq.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.teachers.name["en-GB"]}
              href={dictionarie.navigation.teachers.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.teachers.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.onlineCourses.name["en-GB"]}
              href={dictionarie.navigation.onlineCourses.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.onlineCourses.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.imprint.name["en-GB"]}
              href={dictionarie.navigation.imprint.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.imprint.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.privacyPolicy.name["en-GB"]}
              href={dictionarie.navigation.privacyPolicy.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.privacyPolicy.name["en-GB"]}
            </Link>
            <Link
              key={dictionarie.navigation.termsAndConditions.name["en-GB"]}
              href={dictionarie.navigation.termsAndConditions.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {dictionarie.navigation.termsAndConditions.name["en-GB"]}
            </Link>
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="transform hover:scale-110"
              >
                <span className="sr-only">{item.name}</span>
                <Image
                  className="h-6 w-auto"
                  alt=""
                  src={item.src}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; {currentYear} MultiTaskers GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
