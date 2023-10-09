import type { Metadata } from "next";

import {
  PhoneIcon,
  PrinterIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <h1 className="mb-6 text-5xl lg:text-6xl">Legal Notice</h1>
        <div>
          <div className="pb-12">
            <h2 className="mb-6">
              Information pursuant to Sect. 5 German Telemedia Act (TMG)
            </h2>
            <ol className="mb-6 grid gap-y-2">
              <li>MultiTaskers GmbH</li>
              <li>Lautenschlagerstraße 23a</li>
              <li>70173 Stuttgart</li>
              <li className="uppercase">Germany</li>
            </ol>

            <ol className="mb-6 grid gap-y-2">
              <li>Commercial Register: HRB 602147</li>
              <li>Registration court: Stuttgart</li>
            </ol>

            <p>
              <span className="font-semibold">Represented by:</span> Kristina
              Tsybriy
            </p>
          </div>

          <div className="pb-12">
            <h2 className="mb-4 text-3xl lg:text-4xl">Contact</h2>
            <ol className="grid gap-y-2">
              <li className="flex gap-2">
                <PhoneIcon className="h-6 w-6" /> Phone: +49 711 12578811
              </li>
              <li className="flex gap-2">
                <PrinterIcon className="h-6 w-6" />
                Telefax: -
              </li>
              <li className="flex gap-2">
                <EnvelopeIcon className="h-6 w-6" />
                E-mail: info@multi-taskers.de
              </li>
            </ol>
          </div>

          <div className="pb-12">
            <h2 className="mb-4 text-3xl lg:text-4xl">VAT ID</h2>
            <p>
              Sales tax identification number according to Sect. 27 a of the
              Sales Tax Law: DE331075002
            </p>
          </div>

          <div className="pb-12">
            <h2 className="mb-4 text-3xl lg:text-4xl">EU dispute resolution</h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br /> Our e-mail address can be found above in the site notice.
            </p>
          </div>

          <h2 className="mb-4 text-3xl lg:text-4xl">
            Dispute resolution proceedings in front of a consumer arbitration
            board
          </h2>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings in front of a consumer arbitration board.
          </p>
        </div>
      </div>
    </section>
  );
}
