import React from "react";

import fetchWithBaseUrl from "../../../../service/FetchWithBaseUrl";
import { Endpoints } from "../../../../service/endpoints";
import { IRestaurant } from "../../../../service/restaurantEndpoints";
import PopularCard from "../popularCard";
import ItemSlider from "../contentSlider";

type Props = { locale: any };

const getRestaurantsByRating = async (
  query: string,
): Promise<IRestaurant[]> => {
  const data = await fetchWithBaseUrl(
    `${Endpoints.restaurant.getByParams}?${new URLSearchParams(query)}`,
  );

  return data;
};

async function PopularSlider({ locale }: Props) {
  let data = await getRestaurantsByRating(`locale=${locale}`);

  return (
    <div className="bg-white">
      <div className="placeholder: container mt-10 flex flex-wrap justify-center px-2 py-3 md:mt-0">
        <ItemSlider
          sectionTitle={"pageTitle"}
          renderSliderItems={
            <>
              {data?.map((el) => {
                return <PopularCard {...el} key={el.slag} />;
              })}
            </>
          }
        />
      </div>
    </div>
  );
}

export default PopularSlider;
