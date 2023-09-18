import Image from "next/image";
import Link from "next/link";

import Cta from "@/components/cta";
import dictionarie from "@/dictionaries/home.json";

import placeholderImage from "public/placeholder.jpeg";
import teachersImage from "public/teachers.jpeg";

export default function Page() {
  return (
    <>
      {/* heroSection */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="mb-6 text-5xl font-bold">
              {dictionarie.heroSection.heading["en-GB"]}
            </h1>
            <p className="mb-12">
              {dictionarie.heroSection.description["en-GB"]}
            </p>
            <Link
              href="/online-courses"
              className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {dictionarie.heroSection.linkButton["en-GB"]}
            </Link>
          </div>
          <div className="lg:row-span-2">
            <Image
              className="top-8 w-full lg:sticky"
              src={placeholderImage}
              alt={dictionarie.heroSection.imageAlt["en-GB"]}
            />
          </div>
          <div className="max-w-xl pt-16 md:pt-52">
            <h2 className="mb-2">
              {dictionarie.onlineCoursesSection.heading["en-GB"]}
            </h2>
            <p className="mb-6 text-3xl font-bold">
              {dictionarie.onlineCoursesSection.title["en-GB"]}
            </p>
            <p className="mb-12">
              {dictionarie.onlineCoursesSection.description["en-GB"]}
            </p>
            <Link
              href="/online-courses"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {dictionarie.onlineCoursesSection.linkButton["en-GB"]}
            </Link>
          </div>
        </div>
      </section>
      {/* benefitsSection */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-2xl font-bold">
          {dictionarie.benefitsSection.title["en-GB"]}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dictionarie.benefitsSection.list.map((benefit) => (
            <div
              className="rounded-md border-4 border-teal-500 bg-white p-4 md:max-w-xl"
              key={benefit.title["en-GB"]}
            >
              <div className="mb-4 flex gap-x-2.5">
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
                <h4 className="text-lg font-bold">{benefit.title["en-GB"]}</h4>
              </div>
              <p>{benefit.description["en-GB"]}</p>
            </div>
          ))}
        </div>
      </section>
      {/* teachersSection */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-xl">
          <h2 className="mb-2">{dictionarie.teachersSection.title["en-GB"]}</h2>
          <p className="mb-6 text-3xl font-bold">
            {dictionarie.teachersSection.heading["en-GB"]}
          </p>
          <p>{dictionarie.teachersSection.description["en-GB"]}</p>
          <div className="mt-10">
            <Link
              href="/teachers"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              {dictionarie.teachersSection.linkButton["en-GB"]}
            </Link>
          </div>
        </div>
        <Image
          className="w-full rounded-md"
          src={teachersImage}
          alt={dictionarie.teachersSection.imageAlt["en-GB"]}
        />
      </section>
      <Cta />
    </>
  );
}
