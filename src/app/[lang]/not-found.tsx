import Link from "next/link";

import type { Locale } from "i18n.config";

export default function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
