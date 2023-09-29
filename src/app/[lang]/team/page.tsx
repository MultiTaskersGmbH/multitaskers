import Image from "next/image";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

import type { Metadata } from "next";

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
      <section>
        <div>
          <h1>{team.heading}</h1>
          <p>{team.description}</p>
        </div>
        <ul>
          {team.list.map((member) => (
            <li key={member.firstName}>
              <Image
                src={member.image}
                alt={member.imageAlt}
                width={500}
                height={500}
              />
              <h2>{member.firstName}</h2>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
