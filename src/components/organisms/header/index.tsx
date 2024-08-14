import React from "react";
import { useTranslations } from "next-intl";

import Navbar from "@/components/organisms/navBar";
import { Link } from "@/navigation";
import Button from "@/components/atoms/button";
import CategorySlider from "../categorySlider";

const tList = {
  kitchens: [
    {
      value: 5,
      label: "შერეული",
      iconUrl: "mixed.svg",
    },
    {
      value: 1,
      label: "ქართული",
      iconUrl: "georgian.svg",
    },
    {
      value: 2,
      label: "ჩინური",
      iconUrl: "chines.svg",
    },
    {
      value: 3,
      label: "ინდური",
      iconUrl: "indian.svg",
    },
    {
      value: 4,
      label: "კორეული",
      iconUrl: "korean.svg",
    },
    {
      value: 6,
      label: "ტაილანდური",
      iconUrl: "Thai.svg",
    },
    {
      value: 7,
      label: "იტალიური",
      iconUrl: "Italian.svg",
    },
    {
      value: 8,
      label: "ვეგეტარიანული",
      iconUrl: "vegetarian.svg",
    },
    {
      value: 9,
      label: "სხვა",
      iconUrl: "other.svg",
    },
  ],
  types: [
    {
      value: 4,
      label: "პაბი/ბარი",
      iconUrl: "bearBar.svg",
    },
    {
      value: 2,
      label: " კაფე",
      iconUrl: "caffe.svg",
    },
    {
      value: 1,
      label: "რესტორანი",
      iconUrl: "restourantIcon.svg",
    },
    {
      value: 5,
      label: "ბურგერი",
      iconUrl: "burger.svg",
    },
    {
      value: 3,
      label: "პიცერია",
      iconUrl: "pizza.svg",
    },
    {
      value: 6,
      label: "სუში",
      iconUrl: "sush.svg",
    },
    {
      value: 7,
      label: "კარაოკე ბარი",
      iconUrl: "Karaoke.svg",
    },
  ],
  spaceTypes: [
    {
      value: 1,
      label: "კუპე",
      iconUrl: "Kupe.svg",
    },
    {
      value: 22,
      label: "ტერასა",
      iconUrl: "teerrace.svg",
    },
    {
      value: 2,
      label: "ღია ცის ქვეშ",
      iconUrl: "OpenEar.svg",
    },
  ],
};

type Props = {};

const Header = (props: Props) => {
  const t = useTranslations("Index");

  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-brandBgColor">
      <Navbar />
      <div className="border border-solid border-[#E0E0E0]">
        <div className="container px-2 py-4 md:py-3">
          <div className="flex w-full items-center justify-between">
            <div className="w-[60%] px-3 lg:w-[100%]">
              <CategorySlider categoriesList={tList.types} />
            </div>
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
