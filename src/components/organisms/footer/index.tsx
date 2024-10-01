import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Link } from "@/navigation";

import FooterMenuList from "@/components/molecules/footerMenuList";
import { tList } from "../searchBar/testData";
import PhoneIcon from "@/components/svg/phoneIcon";
import EmailIcon from "@/components/svg/emailIcon";
import InstagramIcon from "@/components/svg/instagramIcon";
import FbIcon from "@/components/svg/fbIcon";

const Footer = () => {
  const t = useTranslations("Index");
  const categories = tList;

  return (
    <footer className="border-b-8 border-solid border-brand bg-secondary py-12">
      <div className="container px-2">
        <div className="flex justify-between md:m-auto md:max-w-[280px] md:flex-col">
          <div className="flex md:flex-col">
            <div className="ml-5 hidden md:ml-0 md:block">
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("home")}</Link>
              </h5>
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("aboutUs")}</Link>
              </h5>
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("contact")}</Link>
              </h5>
            </div>
            <FooterMenuList
              title={t("category")}
              href="/search?type="
              list={categories?.types}
            />
            <FooterMenuList
              title={t("kitchens")}
              href="/search?kitchen="
              list={categories?.kitchens}
            />
            <div className="ml-5 md:hidden">
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("home")}</Link>
              </h5>
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("aboutUs")}</Link>
              </h5>
              <h5 className="mb-4 font-serif text-brand">
                <Link href={"/"}>{t("contact")}</Link>
              </h5>
            </div>
          </div>

          <div className="md:mt-10">
            <Link href={"/"}>
              <Image alt="" src={"/logo.png"} width={115} height={40} />
            </Link>
            <div className="mb-5 mt-6 flex items-center">
              <PhoneIcon className="mr-4" />

              <span className="text-sm text-white"> 599 123 456</span>
            </div>

            <div className="mb-5 flex items-center">
              <EmailIcon className="mr-4" />
              <span className="text-sm text-white">
                infotablebook@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-end md:m-auto md:mt-5 md:max-w-[280px] md:flex-col md:items-start">
          <div className="flex items-end md:items-start">
            <Link className="mr-6" href={"/"}>
              <InstagramIcon />
            </Link>
            <Link href={"/"}>
              <FbIcon />
            </Link>
          </div>
          <Link
            className="ml-8 text-sm text-brandIconColor md:ml-0 md:mt-5"
            href={"/"}
          >
            terms & copyright and so
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
