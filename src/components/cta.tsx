import Link from "next/link";
import dictionarie from "@/dictionaries/cta.json";

export default function Cta() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {dictionarie.heading["en-GB"]}
        </h2>
        <p className="mt-6 text-xl text-gray-500">
          {dictionarie.title["en-GB"]}
        </p>
        <p className="mt-6 text-xl text-gray-500">
          {dictionarie.description["en-GB"]}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/faq"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {dictionarie.linkButton["en-GB"]}
          </Link>
        </div>
      </section>
    </>
  );
}
