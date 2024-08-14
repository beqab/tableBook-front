"use client";
import React from "react";
import Image from "next/image";
import { Link, usePathname } from "@/navigation";

type Props = {};

const Switch = (props: Props) => {
  const pathname = usePathname();
  const isOfferPage = pathname === "/search/offers";

  return (
    <Link href={isOfferPage ? "/search" : "/search/offers"}>
      <div className="mb-1 mr-3 flex flex-col items-center justify-center">
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchChecked"
        >
          <Image
            src="/icons/categories/types/special-offer3.png"
            alt="offer"
            height={30}
            width={36}
          />
        </label>

        <input
          checked={isOfferPage}
          className="checked:focus:border-primary mt-[0.3rem] h-2.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-2.5 before:w-2.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.0875rem] after:h-3 after:w-3 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-brand checked:after:absolute checked:after:z-[2] checked:after:-mt-[1px] checked:after:ml-[1.225rem] checked:after:h-3 checked:after:w-3 checked:after:rounded-full checked:after:border-none checked:after:bg-brand checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-3 focus:after:w-3 focus:after:rounded-full focus:after:content-[''] checked:focus:bg-brand checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-brand dark:checked:after:bg-brand"
          type="checkbox"
          role="switch"
          id="flexSwitchChecked"
          readOnly
        />
      </div>
    </Link>
  );
};

export default Switch;
