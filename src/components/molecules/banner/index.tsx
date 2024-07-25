import { useTranslations } from "next-intl";
import classNames from "classnames";

import Style from "./banner.module.css";

const Banner = () => {
  const t = useTranslations("Index");
  return (
    <div
      className={classNames(
        Style.banner,
        "banner flex h-80 items-center justify-center md:h-56",
      )}
    >
      <h1 className="w-full max-w-3xl text-center font-secondary text-[54px] leading-normal text-white md:max-w-[260px] md:text-[28px] md:italic">
        {t("bannerText")}
      </h1>
    </div>
  );
};

export default Banner;
