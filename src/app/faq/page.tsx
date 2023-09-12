"use client";

import dictionarie from "@/dictionaries/faq.json";

import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <div className="max-w-xl">
          <h1 className="mb-6 text-5xl font-bold">
            {dictionarie.ctaTitle["en-GB"]}
          </h1>
          <p className="mt-6 max-w-2xl">
            {dictionarie.ctaDescription["en-GB"]}
          </p>
        </div>
      </section>
      {/* FAQ Topic 1 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <h2 className="mb-6 max-w-xl text-2xl font-bold">
          {dictionarie.faqTopic1.title["en-GB"]}
        </h2>
        <dl className="grid gap-4 md:grid-cols-2">
          {/* Left Grid */}
          <div className="grid content-start gap-4">
            {/* Question 1.1 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q1.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q1.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q1.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.2 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q2.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q2.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q2.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q2.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q2.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.3 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q3.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q3.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q3.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.4 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q4.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q4.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q4.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q4.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.5 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q5.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q5.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q5.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.6 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q6.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q6.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q6.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q6.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q6.answer4["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q6.answer5["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.7 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q7.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p>{dictionarie.faqTopic1.Q7.answer1["en-GB"]}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Right Grid */}
          <div className="grid content-start gap-4">
            {/* Question 1.8 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q8.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q8.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q8.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q8.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q8.answer4["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q8.answer5["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q8.answer6["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer7["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer8["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer9["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer10["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer11["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer12["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer13["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer14["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic1.Q8.answer15["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer16["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer17["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer18["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer19["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer20["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer21["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer22["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer23["en-GB"]}
                      </li>
                      <li className="leading-7">
                        {dictionarie.faqTopic1.Q8.answer24["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q8.answer25["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.9 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q9.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q9.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.10 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q10.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q10.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.11 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q11.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q11.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q11.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q11.answer3["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic1.Q11.answer4["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q11.answer5["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.12 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q12.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic1.Q12.answer1["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q12.answer2["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer4["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q12.answer5["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer6["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q12.answer7["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer8["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q12.answer9["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer10["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q12.answer11["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic1.Q12.answer12["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.13 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q13.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q13.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q13.answer2["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic1.Q13.answer3["en-GB"]}
                    </p>
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q13.answer4["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q13.answer5["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 1.14 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic1.Q14.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer4["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer5["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic1.Q14.answer6["en-GB"]}
                    </p>
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer7["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic1.Q14.answer8["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </section>
      {/* FAQ Topic 2 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <h2 className="mb-6 max-w-xl text-2xl font-bold">
          {dictionarie.faqTopic2.title["en-GB"]}
        </h2>
        <dl className="grid gap-4 md:grid-cols-2">
          {/* Left Grid */}
          <div className="grid content-start gap-4">
            {/* Question 2.1 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q1.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q1.answer1["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q1.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q1.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q1.answer4["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q1.answer5["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.2 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q2.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q2.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q2.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q2.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q2.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.3 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q3.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q3.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.4 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q4.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic2.Q4.answer1["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q4.answer2["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.5 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q5.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q5.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Right Grid */}
          <div className="grid content-start gap-4">
            {/* Question 2.6 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q6.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q6.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q6.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.7 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q7.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q7.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q7.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q7.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic2.Q7.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.8 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q8.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q8.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 2.9 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic2.Q9.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic2.Q9.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </section>
      {/* FAQ Topic 3 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <h2 className="mb-6 max-w-xl text-2xl font-bold">
          {dictionarie.faqTopic3.title["en-GB"]}
        </h2>
        <dl className="grid gap-4 md:grid-cols-2">
          {/* Left Grid */}
          <div className="grid content-start gap-4">
            {/* Question 3.1 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q1.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q1.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q1.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q1.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q1.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.2 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q2.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q2.answer1["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic3.Q2.answer2["en-GB"]}
                    </p>
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer4["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer5["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer6["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer7["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer8["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer9["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer10["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer11["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer12["en-GB"]}
                      </li>
                      <li className="mb-4 ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer13["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q2.answer14["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.3 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q3.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q3.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q3.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q3.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.4 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q4.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q4.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q4.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.5 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q5.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q5.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q5.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q5.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.6 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q6.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q6.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q6.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q6.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.7 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q7.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q7.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q7.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.8 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q8.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q8.answer1["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.9 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q9.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q9.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q9.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.10 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q10.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q10.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q10.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q10.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.11 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q11.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q11.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q11.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.12 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q12.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q12.answer1["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic3.Q12.answer2["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.13 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q13.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q13.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q13.answer2["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q13.answer3["en-GB"]}
                    </p>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q13.answer4["en-GB"]}
                    </p>
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q13.answer5["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q13.answer6["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.14 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q14.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q14.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q14.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.15 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q15.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q15.answer1["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q15.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Right Grid */}
          <div className="grid content-start gap-4">
            {/* Question 3.16 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q16.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q16.answer1["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic3.Q16.answer2["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.17 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q17.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q17.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.18 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q18.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q18.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q18.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.19 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q19.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q19.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.20 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q20.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q20.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.21 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q21.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q21.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.22 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q22.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q22.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q22.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q22.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.23 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q23.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q23.answer1["en-GB"]}
                    </p>
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer4["en-GB"]}
                      </li>
                      <li className="mb-4 ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer5["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer6["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q23.answer7["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.24 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q24.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q24.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q24.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q24.answer3["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic3.Q24.answer4["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.25 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q25.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q25.answer1["en-GB"]}
                    </p>
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q25.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q25.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q25.answer4["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic3.Q25.answer5["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic3.Q25.answer6["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.26 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q26.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q26.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q26.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q26.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.27 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q27.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q27.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q27.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q27.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q27.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.28 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q28.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q28.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q28.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q28.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.29 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q29.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q29.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q29.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q29.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q29.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 3.30 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic3.Q30.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q30.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q30.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic3.Q30.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </section>
      {/* FAQ Topic 4 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <h2 className="mb-6 max-w-xl text-2xl font-bold">
          {dictionarie.faqTopic4.title["en-GB"]}
        </h2>
        <dl className="grid gap-4 md:grid-cols-2">
          {/* Left Grid */}
          <div className="grid content-start gap-4">
            {/* Question 4.1 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic4.Q1.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q1.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q1.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q1.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q1.answer4["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic4.Q1.answer5["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 4.2 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic4.Q2.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q2.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q2.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Right Grid */}
          <div className="grid content-start gap-4">
            {/* Question 4.3 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic4.Q3.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q3.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q3.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q3.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q3.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 4.4 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic4.Q4.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q4.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q4.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic4.Q4.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </section>
      {/* FAQ Topic 5 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <div className="mb-6 max-w-xl">
          <h2 className="mb-6 text-2xl font-bold">
            {dictionarie.faqTopic5.title["en-GB"]}
          </h2>
          <p className="leading-7">{dictionarie.faqTopic5.info["en-GB"]}</p>
        </div>
        <dl className="grid gap-4 md:grid-cols-2">
          {/* Left Grid */}
          <div className="grid content-start gap-4">
            {/* Question 5.1 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q1.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q1.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q1.answer2["en-GB"]}{" "}
                        <Link
                          href={dictionarie.faqTopic5.Q1.zoomLink["en-GB"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex gap-x-0.5 text-teal-600 underline underline-offset-4 visited:text-teal-800 hover:text-teal-500"
                        >
                          {dictionarie.faqTopic5.Q1.answer3["en-GB"]}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-3 w-3 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q1.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.2 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q2.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q2.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q2.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.3 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q3.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q3.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q3.answer2["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q3.answer3["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.4 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q4.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q4.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.5 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q5.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q5.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q5.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.6 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q6.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q6.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q6.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.7 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q7.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q7.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q7.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.8 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q8.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q8.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q8.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q8.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q8.answer4["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.9 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q9.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q9.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.10 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q10.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q10.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q10.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* Right Grid */}
          <div className="grid content-start gap-4">
            {" "}
            {/* Question 5.11 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q11.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q11.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.12 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q12.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q12.answer1["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.13 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q13.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q13.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q13.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q13.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.14 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q14.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q14.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q14.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q14.answer3["en-GB"]}
                      </li>
                    </ol>
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q14.answer4["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.15 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q15.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol className="mb-4">
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q15.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q15.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q15.answer3["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q15.answer4["en-GB"]}
                      </li>
                    </ol>
                    <p className="mb-4 leading-7">
                      {dictionarie.faqTopic5.Q15.answer5["en-GB"]}
                    </p>
                    <p className="leading-7">
                      {dictionarie.faqTopic5.Q15.answer6["en-GB"]}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.16 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q16.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q16.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q16.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q16.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.17 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q17.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q17.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q17.answer2["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q17.answer3["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.18 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q18.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q18.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q18.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Question 5.19 */}
            <Disclosure
              as="div"
              className="rounded-md border border-teal-600 bg-white p-4"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
                      <h3 className="text-base font-semibold leading-7">
                        {dictionarie.faqTopic5.Q19.question["en-GB"]}
                      </h3>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    <ol>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q19.answer1["en-GB"]}
                      </li>
                      <li className="ml-5 list-disc leading-7">
                        {dictionarie.faqTopic5.Q19.answer2["en-GB"]}
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </section>
      {/* CTA section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-lg">
          <h2 className="mb-6 text-3xl font-bold">
            {dictionarie.ctaTitle["en-GB"]}
          </h2>
          <p>{dictionarie.ctaDescription["en-GB"]}</p>
        </div>
        <div className="mt-10">
          <Link
            href="/faq"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {dictionarie.ctaLinkPrimary["en-GB"]}
          </Link>
        </div>
      </section>
    </>
  );
}
