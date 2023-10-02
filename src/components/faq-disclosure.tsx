"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FaqDisclosure({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <Disclosure
      as="div"
      className="rounded-md border border-teal-600 bg-white p-4"
    >
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="mb-2 flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">{question}</h3>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd">{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
