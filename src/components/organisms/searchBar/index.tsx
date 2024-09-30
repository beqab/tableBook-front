"use client";
import React from "react";
import CategorySlider from "../categorySlider";
import RestaurantFeatures from "@/components/svg/RestaurantFeatures";
import KitchenIcon from "@/components/svg/kitchenIcon";
import { Link } from "@/navigation";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/button";
import SelectOption from "@/components/atoms/selectOption/selectOption";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

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

const SearchBar = (props: Props) => {
  const t = useTranslations("Index");
  const searchparams = useSearchParams();

  return (
    <div className="border border-solid border-[#E0E0E0]">
      <div className="container px-2 py-4 md:py-3">
        <div className="flex w-full items-center justify-between">
          <div className="w-[60%] px-3 lg:w-[100%]">
            <CategorySlider categoriesList={tList.types} />
          </div>
          <div className="mr-3 min-w-[200px] lg:hidden">
            <Select
              options={tList?.spaceTypes}
              selectFullWrapper
              renderOption={(option, onSelect) => (
                <SelectOption
                  fieldName="spaceTypes"
                  cb={onSelect}
                  option={option}
                />
              )}
              defaultValue={tList?.spaceTypes.find(
                (el) => el.value.toString() === searchparams.get("spaceTypes"),
              )}
              placeholder={t("features")}
              defaultIcon={<RestaurantFeatures />}
            />
          </div>
          <div className="mr-3 min-w-[200px] xl:mr-0 lg:hidden">
            <Select
              options={tList?.kitchens}
              selectFullWrapper
              renderOption={(option, onSelect) => (
                <SelectOption
                  fieldName="kitchen"
                  cb={onSelect}
                  option={option}
                />
              )}
              defaultValue={tList?.kitchens.find(
                (el) => el.value.toString() === searchparams.get("kitchen"),
              )}
              placeholder={t("kitchen")}
              defaultIcon={<KitchenIcon />}
            />
          </div>
          <Link href={"/search"}>
            <Button className="w-40 xl:hidden">{t("search")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
