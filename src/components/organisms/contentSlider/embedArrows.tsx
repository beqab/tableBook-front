"use client";

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { type EmblaCarouselType as CarouselApi } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: CarouselApi | undefined,
  onButtonClick?: (emblaApi: CarouselApi) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        className={
          "group mr-2 h-full cursor-pointer transition-all hover:scale-110"
        }
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="19.5"
          transform="matrix(1 0 0 -1 0 40)"
          stroke="#AC9FBB"
          className="group-hover:fill-[#AC9FBB]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6648 15.1989L12.7272 19.5199C12.4243 19.785 12.4243 20.215 12.7272 20.4801L17.6648 24.8011C17.9678 25.0663 18.459 25.0663 18.762 24.8011C19.065 24.536 19.065 24.1061 18.762 23.8409L15.149 20.679H26.7241C27.1526 20.679 27.5 20.375 27.5 20C27.5 19.625 27.1526 19.321 26.7241 19.321H15.149L18.762 16.1591C19.065 15.8939 19.065 15.464 18.762 15.1989C18.459 14.9337 17.9678 14.9337 17.6648 15.1989Z"
          fill="#AC9FBB"
          className="group-hover:fill-[#fff]"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg
        className="group cursor-pointer transition-all hover:scale-110"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="19.5"
          transform="matrix(-1 8.74228e-08 8.74228e-08 1 40 0)"
          stroke="#AC9FBB"
          className="group-hover:fill-[#AC9FBB]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.3352 24.8011L27.2728 20.4801C27.5757 20.215 27.5757 19.785 27.2728 19.5199L22.3352 15.1989C22.0322 14.9337 21.541 14.9337 21.238 15.1989C20.935 15.464 20.935 15.8939 21.238 16.1591L24.851 19.321L13.2759 19.321C12.8474 19.321 12.5 19.625 12.5 20C12.5 20.375 12.8474 20.679 13.2759 20.679L24.851 20.679L21.238 23.8409C20.935 24.1061 20.935 24.536 21.238 24.8011C21.541 25.0663 22.0322 25.0663 22.3352 24.8011Z"
          fill="#AC9FBB"
          className="group-hover:fill-[#fff]"
        />
      </svg>
      {children}
    </button>
  );
};
