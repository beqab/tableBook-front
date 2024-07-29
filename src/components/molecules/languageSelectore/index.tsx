import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { locales, usePathname, useRouter } from "@/navigation";
import Button from "@/components/atoms/button";

export type Langs = (typeof locales)[number];

const LanguageSelector = () => {
  // Get the current locale
  const locale = useLocale() as Langs;

  // Get the search parameters from the URL
  const params = useSearchParams();

  // Get the current pathname
  const pathname = usePathname();

  // Get the router instance to navigate programmatically
  const router = useRouter();

  // Handle switching languages
  const handleLanguageSwitch = (lng: Langs) => {
    // Build the new URL with the query parameters
    const query = params.toString();
    const newUrl = `${pathname}${query ? "?" + query : ""}`;

    // Navigate to the new URL with the selected locale
    router.push(newUrl, {
      locale: lng,
      scroll: false,
    });
  };

  return (
    <>
      {locale !== "en" ? (
        <Button
          type="light"
          onlyIcon
          className="ml-4 md:ml-2 md:max-h-[40px] md:max-w-[40px]"
          onClick={() => handleLanguageSwitch("en")}
          icon={"Eng"}
        />
      ) : (
        <Button
          type="light"
          onClick={() => handleLanguageSwitch("ka")}
          onlyIcon
          className="ml-4 md:ml-2 md:max-h-[40px] md:max-w-[40px]"
          icon={"Geo"}
        />
      )}
    </>
  );
};

export default LanguageSelector;
