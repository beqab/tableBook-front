'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { locales, usePathname, useRouter } from '@/navigation';

export type Langs = (typeof locales)[number];

const LanguageSwitcher = () => {
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
    const newUrl = `${pathname}${query ? '?' + query : ''}`;

    // Navigate to the new URL with the selected locale
    router.push(newUrl, {
      locale: lng,
      scroll: false,
    });
  };

  return (
    <div className="flex w-full">
      {/* Render the language options */}
      {locales.map((el) => {
        return (
          <div
            key={el}
            onClick={() => handleLanguageSwitch(el)}
            className={`m-2 uppercase cursor-pointer ${
              el === locale && 'active font-bold'
            }`}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
