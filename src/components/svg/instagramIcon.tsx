import React from "react";

type Props = {
  color?: string;
  className?: string;
};

function InstagramIcon({ color = "#ACB6BE", className = "" }: Props) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4C9.384 4 4 9.384 4 16C4 22.616 9.384 28 16 28C22.616 28 28 22.616 28 16C28 9.384 22.616 4 16 4ZM16 6C21.535 6 26 10.465 26 16C26.0024 18.394 25.144 20.709 23.5813 22.5226C22.0187 24.3362 19.856 25.5275 17.488 25.879V18.916H20.336L20.783 16.023H17.488V14.443C17.488 13.243 17.883 12.176 19.006 12.176H20.811V9.652C20.494 9.609 19.823 9.516 18.555 9.516C15.907 9.516 14.355 10.914 14.355 14.1V16.023H11.633V18.916H14.355V25.854C12.0198 25.4696 9.89724 24.2675 8.36669 22.4623C6.83615 20.6572 5.99729 18.3667 6 16C6 10.465 10.465 6 16 6Z"
        fill={color}
      />
    </svg>
  );
}

export default InstagramIcon;
