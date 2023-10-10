import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

import FaqDisclosure from "@/components/faq-disclosure";

import type { Metadata } from "next";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ",
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { faq } = await getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="md:max-w-lg lg:max-w-xl">
          <h1 className="mb-4 text-5xl lg:text-6xl">{faq.heading}</h1>
          <p className="mb-8">{faq.description}</p>
          <Button href={`/${lang}/courses`}>{faq.linkButton}</Button>
        </div>
      </div>

      {/* FAQ Topic 1 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <h2 className="text-xl md:sticky md:top-4 md:self-start">
            {faq.faqTopic1.heading}
          </h2>
          <dl className="grid gap-y-6">
            {/* Question 1.1 */}
            <FaqDisclosure question={faq.faqTopic1.Q1.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q1.answer1}</li>
                <li>{faq.faqTopic1.Q1.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.2 */}
            <FaqDisclosure question={faq.faqTopic1.Q2.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q2.answer1}</li>
                <li>{faq.faqTopic1.Q2.answer2}</li>
                <li>{faq.faqTopic1.Q2.answer3}</li>
                <li>{faq.faqTopic1.Q2.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.3 */}
            <FaqDisclosure question={faq.faqTopic1.Q3.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q3.answer1}</li>
                <li>{faq.faqTopic1.Q3.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.4 */}
            <FaqDisclosure question={faq.faqTopic1.Q4.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q4.answer1}</li>
                <li>{faq.faqTopic1.Q4.answer2}</li>
                <li>{faq.faqTopic1.Q4.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.5 */}
            <FaqDisclosure question={faq.faqTopic1.Q5.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q5.answer1}</li>
                <li>{faq.faqTopic1.Q5.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.6 */}
            <FaqDisclosure question={faq.faqTopic1.Q6.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q6.answer1}</li>
                <li>{faq.faqTopic1.Q6.answer2}</li>
                <li>{faq.faqTopic1.Q6.answer3}</li>
                <li>{faq.faqTopic1.Q6.answer4}</li>
                <li>{faq.faqTopic1.Q6.answer5}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.7 */}
            <FaqDisclosure question={faq.faqTopic1.Q7.question}>
              <p>{faq.faqTopic1.Q7.answer1}</p>
            </FaqDisclosure>

            {/* Question 1.8 */}
            <FaqDisclosure question={faq.faqTopic1.Q8.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q8.answer1}</li>
                <li>{faq.faqTopic1.Q8.answer2}</li>
                <li>{faq.faqTopic1.Q8.answer3}</li>
                <li>{faq.faqTopic1.Q8.answer4}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic1.Q8.answer5}</p>
              <p className="mb-2">{faq.faqTopic1.Q8.answer6}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q8.answer7}</li>
                <li>{faq.faqTopic1.Q8.answer8}</li>
                <li>{faq.faqTopic1.Q8.answer9}</li>
                <li>{faq.faqTopic1.Q8.answer10}</li>
                <li>{faq.faqTopic1.Q8.answer11}</li>
                <li>{faq.faqTopic1.Q8.answer12}</li>
                <li>{faq.faqTopic1.Q8.answer13}</li>
                <li>{faq.faqTopic1.Q8.answer14}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic1.Q8.answer15}</p>
              <p className="mb-2">{faq.faqTopic1.Q8.answer16}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q8.answer17}</li>
                <li>{faq.faqTopic1.Q8.answer18}</li>
                <li>{faq.faqTopic1.Q8.answer19}</li>
                <li>{faq.faqTopic1.Q8.answer20}</li>
                <li>{faq.faqTopic1.Q8.answer21}</li>
                <li>{faq.faqTopic1.Q8.answer22}</li>
                <li>{faq.faqTopic1.Q8.answer23}</li>
                <li>{faq.faqTopic1.Q8.answer24}</li>
              </ol>
              <p>{faq.faqTopic1.Q8.answer25}</p>
            </FaqDisclosure>

            {/* Question 1.9 */}
            <FaqDisclosure question={faq.faqTopic1.Q9.question}>
              <p>{faq.faqTopic1.Q9.answer1}</p>
            </FaqDisclosure>

            {/* Question 1.10 */}
            <FaqDisclosure question={faq.faqTopic1.Q10.question}>
              <p>{faq.faqTopic1.Q10.answer1}</p>
            </FaqDisclosure>

            {/* Question 1.11 */}
            <FaqDisclosure question={faq.faqTopic1.Q11.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q11.answer1}</li>
                <li>{faq.faqTopic1.Q11.answer2}</li>
                <li>{faq.faqTopic1.Q11.answer3}</li>
              </ol>
              <p className="mb-6">{faq.faqTopic1.Q11.answer4}</p>
              <p>{faq.faqTopic1.Q11.answer5}</p>
            </FaqDisclosure>

            {/* Question 1.12 */}
            <FaqDisclosure question={faq.faqTopic1.Q12.question}>
              <p className="mb-6">{faq.faqTopic1.Q12.answer1}</p>
              <p className="mb-2">{faq.faqTopic1.Q12.answer2}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q12.answer3}</li>
                <li>{faq.faqTopic1.Q12.answer4}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic1.Q12.answer5}</p>
              <ol className="mb-6 list-inside list-disc">
                <li>{faq.faqTopic1.Q12.answer6}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic1.Q12.answer7}</p>
              <ol className="mb-6 list-inside list-disc">
                <li>{faq.faqTopic1.Q12.answer8}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic1.Q12.answer9}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q12.answer10}</li>
                <li>{faq.faqTopic1.Q12.answer11}</li>
              </ol>
              <p>{faq.faqTopic1.Q12.answer12}</p>
            </FaqDisclosure>

            {/* Question 1.13 */}
            <FaqDisclosure question={faq.faqTopic1.Q13.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q13.answer1}</li>
                <li>{faq.faqTopic1.Q13.answer2}</li>
              </ol>
              <p className="mb-6">{faq.faqTopic1.Q13.answer3}</p>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q13.answer4}</li>
                <li>{faq.faqTopic1.Q13.answer5}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 1.14 */}
            <FaqDisclosure question={faq.faqTopic1.Q14.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q14.answer1}</li>
                <li>{faq.faqTopic1.Q14.answer2}</li>
                <li>{faq.faqTopic1.Q14.answer3}</li>
                <li>{faq.faqTopic1.Q14.answer4}</li>
                <li>{faq.faqTopic1.Q14.answer5}</li>
              </ol>
              <p className="mb-6">{faq.faqTopic1.Q14.answer6}</p>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic1.Q14.answer7}</li>
                <li>{faq.faqTopic1.Q14.answer8}</li>
              </ol>
            </FaqDisclosure>
          </dl>
        </div>
      </section>

      {/* FAQ Topic 2 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <h2 className="text-xl md:sticky md:top-4 md:self-start">
            {faq.faqTopic2.heading}
          </h2>
          <dl className="grid gap-6">
            {/* Question 2.1 */}
            <FaqDisclosure question={faq.faqTopic2.Q1.question}>
              <p className="mb-2">{faq.faqTopic2.Q1.answer1}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic2.Q1.answer2}</li>
                <li>{faq.faqTopic2.Q1.answer3}</li>
                <li>{faq.faqTopic2.Q1.answer4}</li>
              </ol>
              <p>{faq.faqTopic2.Q1.answer5}</p>
            </FaqDisclosure>

            {/* Question 2.2 */}
            <FaqDisclosure question={faq.faqTopic2.Q2.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic2.Q2.answer1}</li>
                <li>{faq.faqTopic2.Q2.answer2}</li>
                <li>{faq.faqTopic2.Q2.answer3}</li>
                <li>{faq.faqTopic2.Q2.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 2.3 */}
            <FaqDisclosure question={faq.faqTopic2.Q3.question}>
              <p>{faq.faqTopic2.Q3.answer1}</p>
            </FaqDisclosure>

            {/* Question 2.4 */}
            <FaqDisclosure question={faq.faqTopic2.Q4.question}>
              <p className="mb-6">{faq.faqTopic2.Q4.answer1}</p>
              <p>{faq.faqTopic2.Q4.answer2}</p>
            </FaqDisclosure>

            {/* Question 2.5 */}
            <FaqDisclosure question={faq.faqTopic2.Q5.question}>
              <p>{faq.faqTopic2.Q5.answer1}</p>
            </FaqDisclosure>

            {/* Question 2.6 */}
            <FaqDisclosure question={faq.faqTopic2.Q6.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic2.Q6.answer1}</li>
                <li>{faq.faqTopic2.Q6.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 2.7 */}
            <FaqDisclosure question={faq.faqTopic2.Q7.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic2.Q7.answer1}</li>
                <li>{faq.faqTopic2.Q7.answer2}</li>
                <li>{faq.faqTopic2.Q7.answer3}</li>
                <li>{faq.faqTopic2.Q7.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 2.8 */}
            <FaqDisclosure question={faq.faqTopic2.Q8.question}>
              <p>{faq.faqTopic2.Q8.answer1}</p>
            </FaqDisclosure>

            {/* Question 2.9 */}
            <FaqDisclosure question={faq.faqTopic2.Q9.question}>
              <p>{faq.faqTopic2.Q9.answer1}</p>
            </FaqDisclosure>
          </dl>
        </div>
      </section>

      {/* FAQ Topic 3 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <h2 className="text-xl md:sticky md:top-4 md:self-start">
            {faq.faqTopic3.heading}
          </h2>
          <dl className="grid gap-6">
            {/* Question 3.1 */}
            <FaqDisclosure question={faq.faqTopic3.Q1.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q1.answer1}</li>
                <li>{faq.faqTopic3.Q1.answer2}</li>
                <li>{faq.faqTopic3.Q1.answer3}</li>
                <li>{faq.faqTopic3.Q1.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.2 */}
            <FaqDisclosure question={faq.faqTopic3.Q2.question}>
              <p className="mb-6">{faq.faqTopic3.Q2.answer1}</p>
              <p className="mb-2">{faq.faqTopic3.Q2.answer2}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q2.answer3}</li>
                <li>{faq.faqTopic3.Q2.answer4}</li>
                <li>{faq.faqTopic3.Q2.answer5}</li>
                <li>{faq.faqTopic3.Q2.answer6}</li>
                <li>{faq.faqTopic3.Q2.answer7}</li>
                <li>{faq.faqTopic3.Q2.answer8}</li>
                <li>{faq.faqTopic3.Q2.answer9}</li>
                <li>{faq.faqTopic3.Q2.answer10}</li>
                <li>{faq.faqTopic3.Q2.answer11}</li>
                <li>{faq.faqTopic3.Q2.answer12}</li>
                <li>{faq.faqTopic3.Q2.answer13}</li>
              </ol>
              <p>{faq.faqTopic3.Q2.answer14}</p>
            </FaqDisclosure>

            {/* Question 3.3 */}
            <FaqDisclosure question={faq.faqTopic3.Q3.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q3.answer1}</li>
                <li>{faq.faqTopic3.Q3.answer2}</li>
                <li>{faq.faqTopic3.Q3.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.4 */}
            <FaqDisclosure question={faq.faqTopic3.Q4.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q4.answer1}</li>
                <li>{faq.faqTopic3.Q4.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.5 */}
            <FaqDisclosure question={faq.faqTopic3.Q5.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q5.answer1}</li>
                <li>{faq.faqTopic3.Q5.answer2}</li>
                <li>{faq.faqTopic3.Q5.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.6 */}
            <FaqDisclosure question={faq.faqTopic3.Q6.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q6.answer1}</li>
                <li>{faq.faqTopic3.Q6.answer2}</li>
                <li>{faq.faqTopic3.Q6.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.7 */}
            <FaqDisclosure question={faq.faqTopic3.Q7.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q7.answer1}</li>
                <li>{faq.faqTopic3.Q7.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.8 */}
            <FaqDisclosure question={faq.faqTopic3.Q8.question}>
              <ol className="list-inside list-disc">
                <li>{faq.faqTopic3.Q8.answer1}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.9 */}
            <FaqDisclosure question={faq.faqTopic3.Q9.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q9.answer1}</li>
                <li>{faq.faqTopic3.Q9.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.10 */}
            <FaqDisclosure question={faq.faqTopic3.Q10.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q10.answer1}</li>
                <li>{faq.faqTopic3.Q10.answer2}</li>
                <li>{faq.faqTopic3.Q10.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.11 */}
            <FaqDisclosure question={faq.faqTopic3.Q11.question}>
              <ol className="list-inside list-disc">
                <li>{faq.faqTopic3.Q11.answer1}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.12 */}
            <FaqDisclosure question={faq.faqTopic3.Q12.question}>
              <ol className="mb-6 list-inside list-disc">
                <li>{faq.faqTopic3.Q12.answer1}</li>
              </ol>
              <p>{faq.faqTopic3.Q12.answer2}</p>
            </FaqDisclosure>

            {/* Question 3.13 */}
            <FaqDisclosure question={faq.faqTopic3.Q13.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q13.answer1}</li>
                <li>{faq.faqTopic3.Q13.answer2}</li>
              </ol>
              <p className="mb-6">{faq.faqTopic3.Q13.answer3}</p>
              <p className="mb-2">{faq.faqTopic3.Q13.answer4}</p>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q13.answer5}</li>
                <li>{faq.faqTopic3.Q13.answer6}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.14 */}
            <FaqDisclosure question={faq.faqTopic3.Q14.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q14.answer1}</li>
                <li>{faq.faqTopic3.Q14.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.15 */}
            <FaqDisclosure question={faq.faqTopic3.Q15.question}>
              <ol className="mb-6 list-inside list-disc">
                <li>{faq.faqTopic3.Q15.answer1}</li>
              </ol>
              <p>{faq.faqTopic3.Q15.answer2}</p>
            </FaqDisclosure>

            {/* Question 3.16 */}
            <FaqDisclosure question={faq.faqTopic3.Q16.question}>
              <p className="mb-6">{faq.faqTopic3.Q16.answer1}</p>
              <p>{faq.faqTopic3.Q16.answer2}</p>
            </FaqDisclosure>

            {/* Question 3.17 */}
            <FaqDisclosure question={faq.faqTopic3.Q17.question}>
              <p>{faq.faqTopic3.Q17.answer1}</p>
            </FaqDisclosure>

            {/* Question 3.18 */}
            <FaqDisclosure question={faq.faqTopic3.Q18.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q18.answer1}</li>
                <li>{faq.faqTopic3.Q18.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.19 */}
            <FaqDisclosure question={faq.faqTopic3.Q19.question}>
              <p>{faq.faqTopic3.Q19.answer1}</p>
            </FaqDisclosure>

            {/* Question 3.20 */}
            <FaqDisclosure question={faq.faqTopic3.Q20.question}>
              <p>{faq.faqTopic3.Q20.answer1}</p>
            </FaqDisclosure>

            {/* Question 3.21 */}
            <FaqDisclosure question={faq.faqTopic3.Q21.question}>
              <p>{faq.faqTopic3.Q21.answer1}</p>
            </FaqDisclosure>

            {/* Question 3.22 */}
            <FaqDisclosure question={faq.faqTopic3.Q22.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q22.answer1}</li>
                <li>{faq.faqTopic3.Q22.answer2}</li>
                <li>{faq.faqTopic3.Q22.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.23 */}
            <FaqDisclosure question={faq.faqTopic3.Q23.question}>
              <p className="mb-2">{faq.faqTopic3.Q23.answer1}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q23.answer2}</li>
                <li>{faq.faqTopic3.Q23.answer3}</li>
                <li>{faq.faqTopic3.Q23.answer4}</li>
                <li>{faq.faqTopic3.Q23.answer5}</li>
                <li>{faq.faqTopic3.Q23.answer6}</li>
              </ol>
              <p>{faq.faqTopic3.Q23.answer7}</p>
            </FaqDisclosure>

            {/* Question 3.24 */}
            <FaqDisclosure question={faq.faqTopic3.Q24.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q24.answer1}</li>
                <li>{faq.faqTopic3.Q24.answer2}</li>
                <li>{faq.faqTopic3.Q24.answer3}</li>
              </ol>
              <p>{faq.faqTopic3.Q24.answer4}</p>
            </FaqDisclosure>

            {/* Question 3.25 */}
            <FaqDisclosure question={faq.faqTopic3.Q25.question}>
              <p className="mb-2">{faq.faqTopic3.Q25.answer1}</p>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q25.answer2}</li>
                <li>{faq.faqTopic3.Q25.answer3}</li>
                <li>{faq.faqTopic3.Q25.answer4}</li>
              </ol>
              <p className="mb-2">{faq.faqTopic3.Q25.answer5}</p>
              <p>{faq.faqTopic3.Q25.answer6}</p>
            </FaqDisclosure>

            {/* Question 3.26 */}
            <FaqDisclosure question={faq.faqTopic3.Q26.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q26.answer1}</li>
                <li>{faq.faqTopic3.Q26.answer2}</li>
                <li>{faq.faqTopic3.Q26.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.27 */}
            <FaqDisclosure question={faq.faqTopic3.Q27.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q27.answer1}</li>
                <li>{faq.faqTopic3.Q27.answer2}</li>
                <li>{faq.faqTopic3.Q27.answer3}</li>
                <li>{faq.faqTopic3.Q27.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.28 */}
            <FaqDisclosure question={faq.faqTopic3.Q28.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q28.answer1}</li>
                <li>{faq.faqTopic3.Q28.answer2}</li>
                <li>{faq.faqTopic3.Q28.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.29 */}
            <FaqDisclosure question={faq.faqTopic3.Q29.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q29.answer1}</li>
                <li>{faq.faqTopic3.Q29.answer2}</li>
                <li>{faq.faqTopic3.Q29.answer3}</li>
                <li>{faq.faqTopic3.Q29.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 3.30 */}
            <FaqDisclosure question={faq.faqTopic3.Q30.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic3.Q30.answer1}</li>
                <li>{faq.faqTopic3.Q30.answer2}</li>
                <li>{faq.faqTopic3.Q30.answer3}</li>
              </ol>
            </FaqDisclosure>
          </dl>
        </div>
      </section>

      {/* FAQ Topic 4 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <h2 className="text-xl md:sticky md:top-4 md:self-start">
            {faq.faqTopic4.heading}
          </h2>
          <dl className="grid gap-6">
            {/* Question 4.1 */}
            <FaqDisclosure question={faq.faqTopic4.Q1.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic4.Q1.answer1}</li>
                <li>{faq.faqTopic4.Q1.answer2}</li>
                <li>{faq.faqTopic4.Q1.answer3}</li>
                <li>{faq.faqTopic4.Q1.answer4}</li>
              </ol>
              <p>{faq.faqTopic4.Q1.answer5}</p>
            </FaqDisclosure>

            {/* Question 4.2 */}
            <FaqDisclosure question={faq.faqTopic4.Q2.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic4.Q2.answer1}</li>
                <li>{faq.faqTopic4.Q2.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 4.3 */}
            <FaqDisclosure question={faq.faqTopic4.Q3.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic4.Q3.answer1}</li>
                <li>{faq.faqTopic4.Q3.answer2}</li>
                <li>{faq.faqTopic4.Q3.answer3}</li>
                <li>{faq.faqTopic4.Q3.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 4.4 */}
            <FaqDisclosure question={faq.faqTopic4.Q4.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic4.Q4.answer1}</li>
                <li>{faq.faqTopic4.Q4.answer2}</li>
                <li>{faq.faqTopic4.Q4.answer3}</li>
              </ol>
            </FaqDisclosure>
          </dl>
        </div>
      </section>

      {/* FAQ Topic 5 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="md:sticky md:top-4 md:self-start">
            <h2 className="mb-6 text-xl">{faq.faqTopic5.heading}</h2>
            <p>{faq.faqTopic5.info}</p>
          </div>
          <dl className="grid gap-y-6">
            {/* Question 5.1 */}
            <FaqDisclosure question={faq.faqTopic5.Q1.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q1.answer1}</li>
                <li>
                  {faq.faqTopic5.Q1.answer2}{" "}
                  <a
                    className="font-semibold underline visited:text-purple-600"
                    href={faq.faqTopic5.Q1.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {faq.faqTopic5.Q1.answer3}
                  </a>
                </li>
                <li>{faq.faqTopic5.Q1.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.2 */}
            <FaqDisclosure question={faq.faqTopic5.Q2.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q2.answer1}</li>
                <li>{faq.faqTopic5.Q2.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.3 */}
            <FaqDisclosure question={faq.faqTopic5.Q3.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q3.answer1}</li>
                <li>{faq.faqTopic5.Q3.answer2}</li>
              </ol>
              <p className="text-lg font-bold">{faq.faqTopic5.Q3.answer3}</p>
            </FaqDisclosure>

            {/* Question 5.4 */}
            <FaqDisclosure question={faq.faqTopic5.Q4.question}>
              <p>{faq.faqTopic5.Q4.answer1}</p>
            </FaqDisclosure>

            {/* Question 5.5 */}
            <FaqDisclosure question={faq.faqTopic5.Q5.question}>
              <p className="mb-2">{faq.faqTopic5.Q5.answer1}</p>
              <p>
                {faq.faqTopic5.Q5.answer2} {}{" "}
                <a
                  className="font-semibold underline visited:text-purple-600"
                  href="https://www.timeanddate.com/worldclock/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.timeanddate.com/worldclock
                </a>
              </p>
            </FaqDisclosure>

            {/* Question 5.6 */}
            <FaqDisclosure question={faq.faqTopic5.Q6.question}>
              <p className="mb-6">{faq.faqTopic5.Q6.answer1}</p>
              <p>{faq.faqTopic5.Q6.answer2}</p>
            </FaqDisclosure>

            {/* Question 5.7 */}
            <FaqDisclosure question={faq.faqTopic5.Q7.question}>
              <p className="mb-6">{faq.faqTopic5.Q7.answer1}</p>
              <p>{faq.faqTopic5.Q7.answer2}</p>
            </FaqDisclosure>

            {/* Question 5.8 */}
            <FaqDisclosure question={faq.faqTopic5.Q8.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q8.answer1}</li>
                <li>{faq.faqTopic5.Q8.answer2}</li>
                <li>{faq.faqTopic5.Q8.answer3}</li>
                <li>{faq.faqTopic5.Q8.answer4}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.9 */}
            <FaqDisclosure question={faq.faqTopic5.Q9.question}>
              <p>{faq.faqTopic5.Q9.answer1}</p>
            </FaqDisclosure>

            {/* Question 5.10 */}
            <FaqDisclosure question={faq.faqTopic5.Q10.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q10.answer1}</li>
                <li>{faq.faqTopic5.Q10.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.11 */}
            <FaqDisclosure question={faq.faqTopic5.Q11.question}>
              <p>{faq.faqTopic5.Q11.answer1}</p>
            </FaqDisclosure>

            {/* Question 5.12 */}
            <FaqDisclosure question={faq.faqTopic5.Q12.question}>
              <p>{faq.faqTopic5.Q12.answer1}</p>
            </FaqDisclosure>

            {/* Question 5.13 */}
            <FaqDisclosure question={faq.faqTopic5.Q13.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q13.answer1}</li>
                <li>{faq.faqTopic5.Q13.answer2}</li>
                <li>{faq.faqTopic5.Q13.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.14 */}
            <FaqDisclosure question={faq.faqTopic5.Q14.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q14.answer1}</li>
                <li>{faq.faqTopic5.Q14.answer2}</li>
                <li>{faq.faqTopic5.Q14.answer3}</li>
              </ol>
              <p>{faq.faqTopic5.Q14.answer4}</p>
            </FaqDisclosure>

            {/* Question 5.15 */}
            <FaqDisclosure question={faq.faqTopic5.Q15.question}>
              <ol className="mb-6 grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q15.answer1}</li>
                <li>{faq.faqTopic5.Q15.answer2}</li>
                <li>{faq.faqTopic5.Q15.answer3}</li>
                <li>{faq.faqTopic5.Q15.answer4}</li>
              </ol>
              <p className="mb-6">{faq.faqTopic5.Q15.answer5}</p>
              <p>{faq.faqTopic5.Q15.answer6}</p>
            </FaqDisclosure>

            {/* Question 5.16 */}
            <FaqDisclosure question={faq.faqTopic5.Q16.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q16.answer1}</li>
                <li>{faq.faqTopic5.Q16.answer2}</li>
                <li>{faq.faqTopic5.Q16.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.17 */}
            <FaqDisclosure question={faq.faqTopic5.Q17.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q17.answer1}</li>
                <li>{faq.faqTopic5.Q17.answer2}</li>
                <li>{faq.faqTopic5.Q17.answer3}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.18 */}
            <FaqDisclosure question={faq.faqTopic5.Q18.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q18.answer1}</li>
                <li>{faq.faqTopic5.Q18.answer2}</li>
              </ol>
            </FaqDisclosure>

            {/* Question 5.19 */}
            <FaqDisclosure question={faq.faqTopic5.Q19.question}>
              <ol className="grid list-inside list-disc gap-y-2">
                <li>{faq.faqTopic5.Q19.answer1}</li>
                <li>{faq.faqTopic5.Q19.answer2}</li>
              </ol>
            </FaqDisclosure>
          </dl>
        </div>
      </section>
    </>
  );
}
