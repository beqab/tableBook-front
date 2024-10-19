import { unstable_setRequestLocale } from "next-intl/server";

import Banner from "@/components/molecules/banner";
import PopularSlider from "@/components/organisms/popularSlider";
import NewItemsSlider from "@/components/organisms/newRestaurantSlider";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Set the locale for the current request to ensure correct translations
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Banner />
      <PopularSlider locale={locale} />
      <NewItemsSlider locale={locale} />
    </main>
  );
}
