"use client";
import React, { useState } from "react";

import CategoryItem from "@/components/atoms/catgoryItem";

import useEmblaCarousel from "embla-carousel-react";
import Switch from "@/components/atoms/switch";

type Props = {
  categoriesList: { value: number; label: string; iconUrl: string }[];
};

const options: any = {
  align: "start",
  dragFree: true,
  containScroll: "trimSnaps",
};

function CategorySlider({ categoriesList = [] }: Props) {
  const [activeItem, setActiveItem] = useState<null | number>(null);
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="relative mr-8 md:mr-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <Switch />

          {categoriesList?.map((item, i) => {
            return (
              <CategoryItem
                key={item.value}
                value={item.value}
                label={item.label}
                iconUrl={item.iconUrl}
                setActiveItem={setActiveItem}
                activeItem={activeItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategorySlider;
