import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

function Offers({ params: { locale } }: { params: { locale: string } }) {
  // Set the locale for the current request to ensure correct translations
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return <main>Offers</main>;
}

export default Offers;
