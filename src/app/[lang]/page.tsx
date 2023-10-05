import Image from "next/image";

import { getDictionary } from "@/lib/getDictionary";
import Button from "@/components/ui/button";

import type { Locale } from "i18n.config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { home } = await getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          {/* hero-section */}
          <section className="py-24">
            <h1 className="mb-4 text-5xl">{home.hero.heading}</h1>
            <p className="mb-8">{home.hero.description}</p>
            <Button href={`/${lang}/courses`}>{home.hero.linkButton}</Button>
          </section>
          <div className="md:sticky md:top-4">
            <Image
              className="w-full"
              src="/images/placeholder.jpeg"
              alt={home.hero.imageAlt}
              width={618}
              height={500}
            />
          </div>

          {/* course-section */}
          <section className="pt-24">
            <h2>{home.courses.heading}</h2>
            <p>{home.courses.title}</p>
            <p>{home.courses.description}</p>
            <Button href={`/${lang}/courses`}>{home.courses.linkButton}</Button>
          </section>
        </div>
      </div>

      {/* benefits-section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
          <Button href={`/${lang}/team`}>{home.team.linkButton}</Button>
        </div>
        <Image
          src="/images/team.jpeg"
          alt={home.team.imageAlt}
          width={2561}
          height={1275}
        />
      </section>
    </>
  );
}
