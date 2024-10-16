import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Banner from "@/components/molecules/banner";
import ContentSlider from "@/components/organisms/contentSlider";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Set the locale for the current request to ensure correct translations
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return (
    <main>
      <Banner />
      <ContentSlider locale={locale} />
    </main>
  );
}
