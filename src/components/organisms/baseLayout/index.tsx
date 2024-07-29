import React from "react";
import Navbar from "@/components/organisms/navBar";
import Header from "@/components/organisms/header";

type Props = {
  children: React.ReactNode;
};

function BaseLayout({ children }: Props) {
  return (
    <main className="min-h-screen w-screen max-w-full bg-gray-100">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Header />
        <div className="mt-[170px] md:mt-[130px]">{children}</div>
      </div>
      <div>footer</div>
    </main>
  );
}

export default BaseLayout;
