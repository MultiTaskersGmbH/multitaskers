"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";

import { InformationCircleIcon } from "@heroicons/react/24/solid";

interface Course {
  image: string;
  imageAlt: string;
  heading: string;
  placementTest: string;
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
              <dt
                key={course.heading}
                className="grid gap-4 md:grid-cols-12 md:gap-8"
              >
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  width={600}
                  height={900}
                  className="aspect-square w-full rounded-md object-cover md:col-span-4 md:aspect-[4/5]"
                />
                <div className="grid gap-y-8 md:col-span-8">
                  <div>
                    <h2 className="text-xl font-semibold">{course.heading}</h2>
                    <p className="mb-4">{course.scheduleTitle}</p>
                    <ul className="mb-4 grid gap-y-1">
                      {course.scheduleContent.map((content: string) => (
                        <li key={content}>{content}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <InformationCircleIcon className="h-6 w-6 flex-shrink-0" />
                      <p>{course.placementTest}</p>
                    </div>
                  </div>
                  <Disclosure.Panel className="mt-2">
                    <p className="mb-1 font-semibold">{course.goalTitle}</p>
                    <ul className="grid gap-y-1">
                      {course.goalContent.map((content: string) => (
                        <li className="list-inside list-disc" key={content}>
                          {content}
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                  <Disclosure.Button>
                    <div className="text-right font-semibold uppercase underline">
                      {open ? "Close goals" : "See goals"}
                    </div>
                  </Disclosure.Button>
                </div>
              </dt>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
