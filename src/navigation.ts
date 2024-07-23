import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["ka", "en"] as const;
export const localePrefix = "always";

const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export { Link, redirect, usePathname, useRouter };
