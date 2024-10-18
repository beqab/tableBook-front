import classNames from "classnames";
import React from "react";

type Props = {
  bgClass?: string;
  tagsArray: { value: number; label: string }[];
};

const Tags = ({ tagsArray, bgClass = "bg-white" }: Props) => {
  return (
    <div
      className={classNames(
        "flex h-6 max-w-[97%] items-center overflow-hidden whitespace-nowrap rounded-full px-2 text-xs text-brandTextSecondary",
        { [bgClass]: bgClass },
      )}
    >
      {tagsArray.map((el, i) => `#${el?.label} / `)}
    </div>
  );
};

export default Tags;
