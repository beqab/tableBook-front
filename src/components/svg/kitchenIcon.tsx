import React from "react";

type Props = {
  color?: string;
};

const KitchenIcon = ({ color = "#ACB6BE" }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15C21 10.375 17.493 6.559 13 6.059V4H11V6.059C6.507 6.559 3 10.375 3 15V17H21V15ZM5 15C5 11.141 8.141 8 12 8C15.859 8 19 11.141 19 15H5ZM2 18H22V20H2V18Z"
        fill={color}
      />
    </svg>
  );
};

export default KitchenIcon;
