import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "next/navigation";
import classNames from "classnames";

import { useGetSearchURL } from "@/components/hooks/useGetSearchURL";
import { Link } from "@/navigation";

import Style from "./categoryItem.module.css";

export type Props = {
  iconUrl: string;
  label: string;
  value: number;
  activeItem: number | null;
  setActiveItem: Dispatch<SetStateAction<number | null>>;
};

function CategoryItem({ iconUrl, label, value }: Props) {
  const searchParams = useSearchParams();

  const SelectedCategory = Number(searchParams.get("type"));

  const path = useGetSearchURL({
    type: value.toString(),
  });

  return (
    <Link href={path}>
      <div
        className={classNames(
          "mx-2 mr-7 flex cursor-pointer flex-col items-center whitespace-nowrap",
          {
            [Style.active]: SelectedCategory === value,
          },
        )}
      >
        <Image
          width={24}
          height={24}
          alt={iconUrl?.split(".")[0]}
          src={"/icons/categories/types/" + iconUrl}
        />
        <span
          className={classNames(
            "pt-1 text-sm text-brandTextSecondary hover:text-[#AC9FBB] sm:pt-0 sm:text-xs",
            {
              "font-bold text-[#AC9FBB]": SelectedCategory === value,
            },
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

export default CategoryItem;
