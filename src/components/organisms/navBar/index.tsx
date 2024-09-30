"use client";
import { Suspense } from "react";
import Image from "next/image";

import LanguageSelector from "@/components/molecules/languageSelectore";
import { Link, locales } from "@/navigation";

export type Langs = (typeof locales)[number];

const Navbar = () => {
  return (
    <nav className="container flex justify-between bg-brandBgColor p-2 py-5 text-secondary md:w-full md:py-3">
      <Link href={"/"} className="ron text-2xl font-bold text-gray-700">
        <Image alt="logo" src="/logo (1).svg" height={40} width={115} />
      </Link>

      <div className="flex items-center">
        <div className="flex items-center md:w-full md:justify-between">
          <div className="flex items-center md:flex-row-reverse">
            <Suspense fallback={<>load..</>}>
              <LanguageSelector />
            </Suspense>

            {/* <UserMenu /> */}

            {/* <MobileFilterMenu /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
