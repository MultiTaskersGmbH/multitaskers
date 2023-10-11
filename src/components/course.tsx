"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";

interface Course {
  heading: string;
  image: string;
  imageAlt: string;
  scheduleTitle: string;
  scheduleContent: string[];
  goalTitle: string;
  goalContent: string[];
}

interface Dictionary {
  list: Course[];
}

export default function Course({ dictionary }: { dictionary: Dictionary }) {
  return (
    <dl className="space-y-6 divide-y divide-gray-900/10">
      {dictionary.list.map((course: Course) => (
        <Disclosure as="div" key={course.heading} className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="w-full text-left">
                  <div
                    key={course.heading}
                    className="md:grid md:grid-cols-5 md:gap-8"
                  >
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      width={900}
                      height={600}
                      className=" aspect-[3/2] w-full rounded-md object-cover md:col-span-2"
                    />
                    <div className="grid gap-y-8 md:col-span-3">
                      <div>
                        <h2 className="text-xl font-semibold">
                          {course.heading}
                        </h2>
                        <p className="mb-2">{course.scheduleTitle}</p>
                        <ul className="grid gap-y-1">
                          {course.scheduleContent.map((content: string) => (
                            <li key={content}>{content}</li>
                          ))}
                        </ul>
                      </div>
                      <div>{open ? <p>Close goals</p> : <p>See goals</p>}</div>
                    </div>
                  </div>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel className="mt-2">
                <p>{course.goalTitle}</p>
                <ul className="grid gap-y-1">
                  {course.goalContent.map((content: string) => (
                    <li className="list-inside list-disc" key={content}>
                      {content}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
