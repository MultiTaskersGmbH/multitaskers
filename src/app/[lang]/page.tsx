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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pt-24 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* hero-section */}
          <section className="pb-12 pt-24 md:max-w-md md:pb-0 md:pt-0 lg:max-w-xl">
            <h1 className="mb-4 text-5xl">{home.hero.heading}</h1>
            <p className="mb-8">{home.hero.description}</p>
            <Button href={`/${lang}/courses`}>{home.hero.linkButton}</Button>
          </section>
          <div className="pb-24 md:sticky md:top-4 md:pb-0">
            <Image
              className="w-full rounded-md"
              src="/images/hero-image.jpeg"
              alt={home.hero.imageAlt}
              width={618}
              height={500}
            />
          </div>

          {/* course-section */}
          <section className="pt-24  md:max-w-md md:pt-0 lg:max-w-xl">
            <h2 className="mb-2">{home.courses.heading}</h2>
            <p className="mb-4 text-4xl">{home.courses.title}</p>
            <p className="mb-8">{home.courses.description}</p>
            <Button href={`/${lang}/courses`}>{home.courses.linkButton}</Button>
          </section>
        </div>
      </div>

      {/* benefits-section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <h3 className="mb-2">{home.benefits.heading}</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {home.benefits.list.map((benefit) => (
            <div
              key={benefit.heading}
              className="rounded-md border border-teal-300 bg-white p-4 "
            >
              <div className="mb-2 flex gap-3">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-bold">{benefit.heading}</h4>
              </div>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team-section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="pb-12 md:max-w-md lg:max-w-xl">
          <h2 className="mb-2">{home.team.heading}</h2>
          <p className="mb-4 text-4xl">{home.team.title}</p>
          <p className="mb-8">{home.team.description}</p>
          <Button href={`/${lang}/team`} variant="secondary">
            {home.team.linkButton}
          </Button>
        </div>
        <Image
          className="w-full rounded-md"
          src="/images/team.jpeg"
          alt={home.team.imageAlt}
          width={2561}
          height={1275}
        />
      </section>
    </>
  );
}
