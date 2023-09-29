import Link from "next/link";

import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "i18n.config";

export default async function Cta({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  return (
    <>
      <section>
        <h2>{common.cta.heading}</h2>
        <p>{common.cta.title}</p>
        <p>{common.cta.description}</p>
        <div>
          <Link href="/faq">{common.cta.linkButton}</Link>
        </div>
      </section>
    </>
  );
}
