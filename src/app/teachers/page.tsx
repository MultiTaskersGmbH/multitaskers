import Image from "next/image";
import Link from "next/link";

import dictionarie from "@/dictionaries/teachers.json";

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div>
          <div>
            <div className="mb-20 max-w-xl">
              <h1 className="mb-6 text-6xl font-bold">
                {dictionarie.teachersTitle["en-GB"]}
              </h1>
              <p>{dictionarie.teachersDescription["en-GB"]}</p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {dictionarie.teachersList.map((teacher) => (
                <li key={teacher.id}>
                  <Image
                    className="aspect-square w-full rounded-md object-cover"
                    src={teacher.image}
                    alt={teacher.imageAlt["en-GB"]}
                    width={500}
                    height={500}
                  />
                  <h2 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {teacher.firstName}
                  </h2>
                  <p>{teacher.experience["en-GB"]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
