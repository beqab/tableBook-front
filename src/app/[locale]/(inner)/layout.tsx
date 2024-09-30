import BaseLayout from "@/components/organisms/baseLayout";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navBar";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const Layout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return <BaseLayout header={<Navbar />}>{children}</BaseLayout>;
};

export default Layout;
