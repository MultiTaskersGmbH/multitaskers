"use client";

import Link from "next/link";
import Image from "next/image";

import type { Locale } from "i18n.config";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import Button from "@/components/button";

type DictionaryType = Record<string, string>;

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: {
    logoImageAlt: string;
    menuOpenSrOnly: string;
    menuCloseSrOnly: string;
    menu: DictionaryType;
  };
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="border-b border-slate-300 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <Link href={`/${lang}`} className="-m-1.5 p-1.5">
          <Image
            className="h-10 w-auto"
            src="/images/logo.png"
            alt={dictionary.logoImageAlt}
            width={2221}
            height={520}
            priority
          />
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{dictionary.menuOpenSrOnly}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-12">
          <Link href={`/${lang}`} className="p-2 font-semibold">
            {dictionary.menu.home}
          </Link>
          <Link href={`/${lang}/faq`} className="p-2 font-semibold">
            {dictionary.menu.faq}
          </Link>
          <Link href={`/${lang}/team`} className="p-2 font-semibold">
            {dictionary.menu.team}
          </Link>
          <Button href={`/${lang}/courses`}>{dictionary.menu.courses}</Button>
          <LocaleSwitcher />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href={`/${lang}`} className="-m-1.5 p-1.5">
              <Image
                className="h-10 w-auto"
                src="/images/logo.png"
                alt={dictionary.logoImageAlt}
                width={2221}
                height={520}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{dictionary.menuCloseSrOnly}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={`/${lang}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionary.menu.home}
                </Link>
                <Link
                  href={`/${lang}/faq`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionary.menu.faq}
                </Link>
                <Link
                  href={`/${lang}/team`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {dictionary.menu.team}
                </Link>
              </div>
              <div>
                <Link
                  href={`/${lang}/courses`}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {dictionary.menu.courses}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
