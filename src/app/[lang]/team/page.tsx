import Image from "next/image";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

import type { Metadata } from "next";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Team",
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { team } = await getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="md:max-w-lg lg:max-w-xl">
          <h1 className="mb-4 text-5xl lg:text-6xl">{team.heading}</h1>
          <p className="mb-8">{team.description}</p>
          <Button href={`/${lang}/courses`}>{team.linkButton}</Button>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <ul
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          role="list"
        >
          {team.list.map((member) => (
            <li
              key={member.firstName}
              className="rounded-[14px] border border-black bg-white p-2"
            >
              <Image
                className="mb-6 aspect-square w-full rounded-md object-cover"
                src={member.image}
                alt={member.imageAlt}
                width={500}
                height={500}
              />
              <h2 className="text-3xl">{member.firstName}</h2>
              <p className="mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
