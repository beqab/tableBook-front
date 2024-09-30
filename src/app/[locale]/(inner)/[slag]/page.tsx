import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  return <div>Page</div>;
};

export default Page;
