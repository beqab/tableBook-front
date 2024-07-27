import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  unstable_setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { Gelasio, Courgette } from "next/font/google";

import { locales } from "@/navigation";

import "./globals.css";

const GelasioFont = Gelasio({
  subsets: ["latin"],
  display: "swap",
  variable: "--brand-font",
});

const CourgetteFont = Courgette({
  subsets: ["latin"],
  display: "swap",
  variable: "--brand-secondary-font",
  weight: "400",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("title"),
    describe: t("aboutUs"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GelasioFont.variable} ${CourgetteFont.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
