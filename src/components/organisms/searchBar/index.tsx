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
import { tList } from "./testData";

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
