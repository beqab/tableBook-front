import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/navigation";

export default createMiddleware({
  defaultLocale: locales[0],
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(ka|en)/:path*"],
};
