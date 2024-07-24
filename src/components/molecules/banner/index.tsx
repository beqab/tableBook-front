import { useTranslations } from "next-intl";
import classNames from "classnames";

import Style from "./banner.module.css";

const Banner = () => {
  const t = useTranslations("Index");
  return (
    <div
      className={classNames(
        Style.banner,
        "banner flex items-center justify-center h-80  md:h-56",
      )}
    >
      <h1 className=" font-secondary  max-w-3xl leading-normal text-center text-white w-full  text-[54px] md:text-[28px] md:italic md:max-w-[260px]">
        {t("bannerText")}
      </h1>
    </div>
  );
};

export default Banner;
