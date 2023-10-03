import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { home } = await getDictionary(lang);

  return (
    <>
      {/* hero-section */}
      <section>
        <div>
          <div>
            <h1>{home.hero.heading}</h1>
            <p>{home.hero.description}</p>
            <Link href={`/${lang}/courses`}>{home.hero.linkButton}</Link>
          </div>
          <div>
            <Image
              src="/placeholder.jpeg"
              alt={home.hero.imageAlt}
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2>{home.courses.heading}</h2>
            <p>{home.courses.title}</p>
            <p>{home.courses.description}</p>
            <Link href={`/${lang}/courses`}>{home.courses.linkButton}</Link>
          </div>
        </div>
      </section>

      {/* benefits-section */}
      <section>
        <h3>{home.benefits.heading}</h3>
        <div>
          {home.benefits.list.map((benefit) => (
            <div key={benefit.heading}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4>{benefit.heading}</h4>
              </div>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team-section */}
      <section>
        <div>
          <h2>{home.team.heading}</h2>
          <p>{home.team.title}</p>
          <p>{home.team.description}</p>
          <div>
            <Link href={`/${lang}/team`}>{home.team.linkButton}</Link>
          </div>
        </div>
        <Image
          src="/team.jpeg"
          alt={home.team.imageAlt}
          width={500}
          height={500}
        />
      </section>
    </>
  );
}
