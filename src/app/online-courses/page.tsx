import dictionarie from "@/dictionaries/online-courses.json";
import { Content } from "next/font/google";

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8">
      <div>
        <div className="mb-12">
          <h1>{dictionarie.heroTitle["en-GB"]}</h1>
          <p>{dictionarie.heroDescription["en-GB"]}</p>
        </div>
        <div className="flex flex-col gap-y-10">
          {dictionarie.onlineCoursesList.map((course) => (
            <div key={course.id} className="grid gap-10 md:grid-cols-5">
              <Image
                className="col-span-2"
                src={course.image}
                alt={course.imageAlt["en-GB"]}
                width={300}
                height={200}
              />
              <div className="col-span-3">
                <h2>{course.title["en-GB"]}</h2>
                <p>{course.scheduleTitle["en-GB"]}</p>
                <ul>
                  {course.scheduleContent["en-GB"].map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
