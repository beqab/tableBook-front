import React from "react";
import { IRestaurant } from "../../../../service/restaurantEndpoints";
import { Endpoints } from "../../../../service/endpoints";
import fetchWithBaseUrl from "../../../../service/FetchWithBaseUrl";
import ItemSlider from "../contentSlider";
import NewCard from "../newCard";

const getRestaurantsByRating = async (
  query: string,
): Promise<IRestaurant[]> => {
  const data = await fetchWithBaseUrl(
    `${Endpoints.restaurant.getByParams}?${new URLSearchParams(query)}`,
    {
      next: {
        revalidate: 0,
      },
    },
  );

  return data;
};

const NewItemsSlider = async ({ locale }: { locale: string }) => {
  let data = await getRestaurantsByRating(`type=new&locale=${locale}`);

  return (
    <div className="mt-10 bg-brandBgColor pb-20 md:pb-14">
      <div className="placeholder: container flex flex-wrap justify-center px-2 py-3">
        <ItemSlider
          sectionTitle={"newOnTableBook"}
          renderSliderItems={
            <>
              <>
                {data?.map((el) => {
                  return <NewCard {...el} key={el.slag} />;
                })}
              </>
            </>
          }
        />
      </div>
    </div>
  );
};

export default NewItemsSlider;
