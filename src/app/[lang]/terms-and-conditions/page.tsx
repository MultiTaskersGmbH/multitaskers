import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { terms } = await getDictionary(lang);

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1>{terms.termsConditions.heading}</h1>
      <p>{terms.termsConditions.procedure.description}</p>
      <ol>
        <li>{terms.termsConditions.procedure.completion}</li>
        <li>{terms.termsConditions.procedure.consultation}</li>
        <li>{terms.termsConditions.procedure.trialLesson}</li>
        <li>{terms.termsConditions.procedure.registration}</li>
        <li>{terms.termsConditions.procedure.participation}</li>
      </ol>

      <h2>{terms.generalConditions.heading}</h2>
      <ol>
        <li>
          <h3>{terms.scope_1.heading}</h3>
          <ol>
            <li>{terms.scope_1.p1_1}</li>
          </ol>
        </li>

        <li>
          <h3>{terms.registration_2.heading}</h3>
          <ol>
            <li>{terms.registration_2.p2_1}</li>
            <li>{terms.registration_2.p2_2}</li>
            <li>{terms.registration_2.p2_3}</li>
            <li>{terms.registration_2.p2_4}</li>
          </ol>
        </li>

        <li>
          <h3>{terms.provisions_3.heading}</h3>
          <ol>
            <li>{terms.provisions_3.p3_1}</li>
            <li>
              {terms.provisions_3.p3_2}
              <ul>
                <li>{terms.provisions_3.groupLesson.title}</li>
                <li>{terms.provisions_3.groupLesson.note}</li>
                <li>{terms.provisions_3.groupLesson.age4_5}</li>
                <li>{terms.provisions_3.groupLesson.age6_7}</li>
                <li>{terms.provisions_3.groupLesson.age8_10}</li>
                <li>{terms.provisions_3.groupLesson.age11_13}</li>
                <li>{terms.provisions_3.groupLesson.age14_16}</li>
                <li>{terms.provisions_3.groupLesson.age17}</li>
              </ul>
              <ul>
                <li>{terms.provisions_3.individualLesson.title}</li>
                <li>{terms.provisions_3.individualLesson.age4_5}</li>
                <li>{terms.provisions_3.individualLesson.age6_7}</li>
                <li>{terms.provisions_3.individualLesson.age8_10}</li>
                <li>{terms.provisions_3.individualLesson.age11_13}</li>
                <li>{terms.provisions_3.individualLesson.age14_16}</li>
                <li>{terms.provisions_3.individualLesson.age17}</li>
              </ul>
            </li>
            <li>{terms.provisions_3.p3_3}</li>
            <li>{terms.provisions_3.p3_4}</li>
            <li>{terms.provisions_3.p3_5}</li>
            <li>{terms.provisions_3.p3_6}</li>
            <li>{terms.provisions_3.p3_7}</li>
            <li>{terms.provisions_3.p3_8}</li>
            <li>{terms.provisions_3.p3_9}</li>
            <li>{terms.provisions_3.p3_10}</li>
            <li>{terms.provisions_3.p3_11}</li>
          </ol>
        </li>

        <li>
          <h3>{terms.regulations_4.heading}</h3>
          <ol>
            <li>{terms.regulations_4.p4_1}</li>
            <li>{terms.regulations_4.p4_2}</li>
            <li>{terms.regulations_4.p4_3}</li>
            <li>{terms.regulations_4.p4_4}</li>
            <li>{terms.regulations_4.p4_5}</li>
            <li>{terms.regulations_4.p4_6}</li>
            <li>{terms.regulations_4.p4_7}</li>
            <li>{terms.regulations_4.p4_8}</li>
            <li>{terms.regulations_4.p4_9}</li>
          </ol>
        </li>

        <li>
          <h3>{terms.material_5.heading}</h3>
          <ol>
            <li>{terms.material_5.p5_1}</li>
          </ol>
        </li>

        <li>
          <h3>{terms.price_6.heading}</h3>
          <ol>
            <li>{terms.price_6.p6_1}</li>
            <li>{terms.price_6.p6_2}</li>
            <li>{terms.price_6.p6_3}</li>
            <li>{terms.price_6.p6_4}</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}
