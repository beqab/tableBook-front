import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import LanguageSwitcher from "@/components/languageSwitcher";
import { Suspense } from "react";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Set the locale for the current request to ensure correct translations
  unstable_setRequestLocale(locale);

  // Fetch translations for the "Index" namespace
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen  p-8">
      <div>
        <header>
          <Suspense fallback="loading">
            <LanguageSwitcher />
          </Suspense>
        </header>
        <section>
          <h2>{t("pageTitle")}</h2>
        </section>
      </div>
    </main>
  );
}
