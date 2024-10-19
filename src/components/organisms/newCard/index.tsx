import React from "react";
import Image from "next/image";

import { Link } from "@/navigation";
import Tags from "@/components/atoms/tags";
import { IRestaurant } from "../../../../service/restaurantEndpoints";
import LocationIcon from "@/components/svg/locationIcon";

export type Props = IRestaurant;

const NewCard = ({
  images,
  restaurantName,
  address,
  description,
  slag,
  kitchens,
  type,
}: Props) => {
  return (
    <Link
      href={"/" + slag}
      className="mr-12 flex h-[224px] max-h-[472px] min-w-[630px] overflow-hidden rounded-lg bg-white xxl:w-[580px] xl:h-full xl:w-[310px] xl:flex-col md:w-[280px] sm:w-[310px]"
    >
      <div className="min-w-[321px] xxl:min-w-[268px] md:h-[220px]">
        <Image
          alt="restaurant"
          src={`${
            images && images.length ? images[0] : "/forDevelop/Rectangle 52.png"
          }`}
          width={321}
          height={224}
          className="max-h-[230px] min-h-full object-cover sm:min-h-[220px]"
        />
      </div>
      <div className="relative max-w-[320px] p-4">
        <div className="absolute right-6 top-[0px] rounded-b-lg bg-secondary p-[10px] font-serif text-sm font-normal text-white">
          New
        </div>
        <div className="mb-2 flex h-9 w-full items-center justify-between">
          <h2 className="max-w-[168px] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-normal text-brandText">
            {restaurantName}
          </h2>
        </div>
        <div className="flex items-center border-b border-solid border-brandStokeColor pb-2">
          <LocationIcon />
          <div className="ml-2 max-w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal italic text-brandText">
            {address}
          </div>
        </div>
        <p className="mb-4 mt-2 h-16 overflow-hidden overflow-ellipsis text-sm font-normal text-brandTextSecondary">
          {description}
        </p>

        <Tags bgClass="bg-brandBgColor" tagsArray={[...type, ...kitchens]} />
      </div>
    </Link>
  );
};

export default NewCard;
