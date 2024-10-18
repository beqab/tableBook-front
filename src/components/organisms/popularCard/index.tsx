import React from "react";
import Image from "next/image";
import Styles from "./card.module.css";

import Tags from "@/components/atoms/tags";
import { Link } from "@/navigation";
import { IRestaurant } from "../../../../service/restaurantEndpoints";
import LocationIcon from "@/components/svg/locationIcon";

export type Types = { value: number; label: string };

const PopularCard = ({
  images,
  address,
  restaurantName,
  description,
  slag,
  type,
  kitchens,
}: IRestaurant) => {
  return (
    <div className="mr-10 max-w-[287px]">
      <Link href={"/" + `${slag}`} className={Styles.card}>
        <div className="">
          <Image
            alt="restaurant"
            src={`${
              images && images.length
                ? images[0]
                : "/forDevelop/Rectangle 52.png"
            }`}
            style={{
              maxHeight: 200,
            }}
            width={297}
            height={200}
            className="min-h-[200px] min-w-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex h-9 w-full items-center justify-between">
            <h2 className="max-w-[168px] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-normal text-brandText">
              {restaurantName}
            </h2>
            {/* <Rating /> */}
          </div>
          <div className="flex items-center border-b border-solid border-white pb-2">
            <LocationIcon />
            <div className="ml-2 max-w-[90%] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal text-brandText">
              {address}
            </div>
          </div>
          <p className="mb-4 mt-2 h-16 overflow-hidden overflow-ellipsis text-sm font-normal text-brandTextSecondary">
            {description}
          </p>
          <Tags
            bgClass={"  bg-brandBgColor"}
            tagsArray={[...type, ...kitchens]}
          />
        </div>
      </Link>
    </div>
  );
};

export default PopularCard;
