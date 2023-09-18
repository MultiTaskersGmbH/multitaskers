"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import dictionarie from "@/dictionaries/navigation.json";

const logo = "/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-300 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">{dictionarie.logoSrOnly["en-GB"]}</span>
          <Image
            className="h-10 w-auto"
            src={logo}
            alt={dictionarie.logoImageAlt["en-GB"]}
            width={500}
            height={500}
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">
              {dictionarie.menuOpenSrOnly["en-GB"]}
            </span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link
            key={dictionarie.navigation.homepage.name["en-GB"]}
            href={dictionarie.navigation.homepage.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {dictionarie.navigation.homepage.name["en-GB"]}
          </Link>
          <Link
            key={dictionarie.navigation.faq.name["en-GB"]}
            href={dictionarie.navigation.faq.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {dictionarie.navigation.faq.name["en-GB"]}
          </Link>
          <Link
            key={dictionarie.navigation.teachers.name["en-GB"]}
            href={dictionarie.navigation.teachers.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {dictionarie.navigation.teachers.name["en-GB"]}
          </Link>
          <Link
            key={dictionarie.navigation.onlineCourses.name["en-GB"]}
            href={dictionarie.navigation.onlineCourses.href}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {dictionarie.navigation.onlineCourses.name["en-GB"]}
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{dictionarie.logoSrOnly["en-GB"]}</span>
              <Image
                className="h-10 w-auto"
                src={logo}
                alt={dictionarie.logoImageAlt["en-GB"]}
                width={500}
                height={500}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">
                {dictionarie.menuCloseSrOnly["en-GB"]}
              </span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  key={dictionarie.navigation.homepage.name["en-GB"]}
                  href={dictionarie.navigation.homepage.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionarie.navigation.homepage.name["en-GB"]}
                </Link>
                <Link
                  key={dictionarie.navigation.faq.name["en-GB"]}
                  href={dictionarie.navigation.faq.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionarie.navigation.faq.name["en-GB"]}
                </Link>
                <Link
                  key={dictionarie.navigation.teachers.name["en-GB"]}
                  href={dictionarie.navigation.teachers.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionarie.navigation.teachers.name["en-GB"]}
                </Link>
              </div>
              <div>
                <Link
                  key={dictionarie.navigation.onlineCourses.name["en-GB"]}
                  href={dictionarie.navigation.onlineCourses.href}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {dictionarie.navigation.onlineCourses.name["en-GB"]}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
