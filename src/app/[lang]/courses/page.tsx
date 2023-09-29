import Image from "next/image";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

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
      <div>
        <h1>{courses.heading}</h1>
        <p>{courses.description}</p>
      </div>
      {courses.list.map((course) => (
        <div key={course.heading}>
          <Image
            src={course.image}
            alt={course.imageAlt}
            width={300}
            height={200}
          />
          <div>
            <h2>{course.heading}</h2>
            <p>{course.scheduleTitle}</p>
            <ul>
              {course.scheduleContent.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
