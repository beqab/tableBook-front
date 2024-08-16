"use client";

import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";

import { useClickOutside } from "@/components/hooks/useClickOutside";
import DefaultSelectIcon from "@/components/svg/DefaultSelectIcon";

import Style from "./select.module.css";

export type Option = {
  value: number;
  label: string;
  iconUrl?: string;
};

export type Props = {
  options: Option[];
  placeholder?: string;
  defaultValue?: Option | null;

  selectFullWrapper?: boolean;
  optionFullWidth?: boolean;
  selectRightPosition?: boolean;
  defaultIcon?: React.ReactNode | string;
  defaultOptionText?: string;
  renderOption: (option: Option, onSelect: () => void) => ReactNode;
};

function Select({
  options,
  placeholder = "select..",
  defaultValue = null,
  selectFullWrapper,
  optionFullWidth,
  selectRightPosition,
  defaultIcon = DefaultSelectIcon,
  defaultOptionText,
  renderOption,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("Index");

  const onClose = () => {
    setIsDropdownOpen(false);
  };

  const ref = useClickOutside<HTMLDivElement>(onClose);

  const selectHandler = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={classNames(`relative w-[172px]`, {
        ["min-w-full"]: selectFullWrapper,
      })}
      ref={ref}
    >
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex h-12 w-full cursor-pointer items-center justify-between rounded-full border border-solid border-brandStokeColor bg-white px-4"
      >
        <span className={classNames(Style.selectedItem, "flex items-center")}>
          {defaultIcon}
          <span className="text-brandTextSecondary">
            {selectedOption?.label || placeholder}
          </span>
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.29 9.31001C17.1975 9.2173 17.0876 9.14376 16.9666 9.09357C16.8456 9.04339 16.7159 9.01756 16.585 9.01756C16.454 9.01756 16.3243 9.04339 16.2034 9.09357C16.0824 9.14376 15.9725 9.2173 15.88 9.31001L12 13.19L8.11998 9.31001C7.933 9.12303 7.67941 9.01799 7.41498 9.01799C7.15055 9.01799 6.89695 9.12303 6.70998 9.31001C6.523 9.49698 6.41796 9.75058 6.41796 10.015C6.41796 10.2794 6.523 10.533 6.70998 10.72L11.3 15.31C11.3925 15.4027 11.5024 15.4763 11.6234 15.5264C11.7443 15.5766 11.874 15.6025 12.005 15.6025C12.1359 15.6025 12.2656 15.5766 12.3866 15.5264C12.5076 15.4763 12.6175 15.4027 12.71 15.31L17.3 10.72C17.68 10.34 17.68 9.70001 17.29 9.31001Z"
            fill="#ACB6BE"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <div
          className={classNames(
            `absolute top-14 max-h-[250px] w-full min-w-[220px] overflow-auto rounded-lg border border-solid border-brandStokeColor bg-white`,
            {
              ["right-0"]: selectRightPosition,
              ["left-0"]: !selectRightPosition,
              ["min-w-full"]: optionFullWidth,
            },
          )}
        >
          <div
            className={classNames(
              Style.selectOptions,
              "selectOptions flex cursor-pointer items-center px-4 py-2 text-tertiary hover:bg-brandBgColor",
            )}
          >
            {defaultIcon}
            <span> {defaultOptionText || t("all")}</span>
          </div>
          {options.map((option) =>
            renderOption(option, () => selectHandler(option)),
          )}
        </div>
      )}
    </div>
  );
}

export default Select;
