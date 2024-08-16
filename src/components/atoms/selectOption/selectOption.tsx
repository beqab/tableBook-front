"use client";

import classNames from "classnames";
import React from "react";
import Style from "./selectOption.module.css";
import { Option } from "../Select";
import { useGetSearchURL } from "@/components/hooks/useGetSearchURL";
import { useRouter } from "@/navigation";

type Props = {
  option: Option;
  defaultIcon?: React.ReactNode | string;
  cb: (option: Option) => void;
  fieldName: string;
};

const SelectOption = ({ option, cb, defaultIcon, fieldName }: Props) => {
  const url = useGetSearchURL({ [fieldName]: option.value?.toString() });
  const router = useRouter();

  return (
    <>
      <div
        key={option.value}
        className={classNames(
          Style.selectOptions,
          "selectOptions flex cursor-pointer items-center px-4 py-2 text-tertiary hover:bg-brandBgColor",
        )}
        onClick={() => {
          router.push(url);
          cb(option);
        }}
      >
        {defaultIcon}
        <span> {option.label}</span>
      </div>
    </>
  );
};

export default SelectOption;
