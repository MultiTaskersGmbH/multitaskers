import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

import CoursesDisclosure from "@/components/courses-disclosure";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { courses } = await getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center md:max-w-xl">
          <h1 className="mb-4 text-5xl lg:text-6xl">{courses.heading}</h1>
          <p>{courses.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CoursesDisclosure dictionary={courses} />
      </div>
    </>
  );
}
