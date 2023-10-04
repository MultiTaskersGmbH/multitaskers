import type { Metadata } from "next";
import "./globals.css";

import { getDictionary } from "@/lib/getDictionary";
import { type Locale, i18n } from "i18n.config";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - MultiTaskers Language School",
    default: "MultiTaskers Language School",
  },
  description:
    "MultiTaskers is a young and fast-growing online language school that offers a wide variety of language learning programmes, varying in type, time and frequency of lessons.",
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={`${inter.className} bg-slate-50`}>
        <Header lang={params.lang} dictionary={dictionary.navigation} />
        <main>{children}</main>
        <Footer lang={params.lang} dictionary={dictionary.navigation} />
      </body>
    </html>
  );
}
