import { useTranslations } from "next-intl";
import React from "react";
import Navbar from "@/components/organisms/navBar";
import { Link } from "@/navigation";
import Button from "@/components/atoms/button";

type Props = {};

const Header = (props: Props) => {
  const t = useTranslations("Index");

  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-brandBgColor">
      <Navbar />
      <div className="border border-solid border-[#E0E0E0]">
        <div className="container px-2 py-4 md:py-3">
          <div className="flex w-full items-center justify-between">
            <div className="w-[60%] px-3 lg:w-[100%]">categorySlider</div>
            <div className="mr-3 min-w-[200px] lg:hidden">select 1</div>
            <div className="mr-3 min-w-[200px] xl:mr-0 lg:hidden">select 2</div>
            <Link href={"/search"}>
              <Button className="w-40 xl:hidden">{t("search")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
