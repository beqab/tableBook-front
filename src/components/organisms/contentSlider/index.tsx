"use client";

import React from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import { Link } from "@/navigation";
import { PrevButton, NextButton, usePrevNextButtons } from "./embedArrows";

import "./slick.css";
import "./slickThem.css";

type IProps = {
  renderSliderItems: React.ReactNode;
  sectionTitle: any;
  seeMore?: string;
};

const options: any = {
  align: "start",
  dragFree: true,
  containScroll: "trimSnaps",
  loop: true,
};

const ItemSlider = ({
  sectionTitle,
  seeMore,
  renderSliderItems,
}: IProps & { children?: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const t = useTranslations("Index");

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="relative mt-12 min-w-full md:mt-9">
        <div className="flex items-center justify-between">
          <h2 className="font-7 font-serif text-5xl font-extrabold italic text-brand md:text-3xl">
            <span className="inline-block sm:hidden">{t(sectionTitle)}</span>
            <span className="hidden sm:inline-block">
              {sectionTitle.split(" ")[0]}
            </span>
            <div></div>
          </h2>

          {seeMore && (
            <Link
              className="mr-28 text-2xl font-normal text-brand md:mr-24 md:text-base"
              href={seeMore}
            >
              {t("seeMore")}
            </Link>
          )}
        </div>
        <div className="mt-5 border-t border-solid border-[#E0E0E0] pt-6">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex pb-3">
              {renderSliderItems}
            </div>
          </div>
          <div className="carousel-button-group absolute right-0 top-[4px] flex sm:top-[0px]">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSlider;
