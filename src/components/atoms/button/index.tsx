import React from "react";
import style from "./button.module.css";
import classnames from "classnames";

export type Props = {
  type?: "primary" | "secondary" | "light";
  className?: string;
  onlyIcon?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "sm" | "xsm" | "md";
  isSubmit?: boolean;
};

interface IBtnContent {
  onlyIcon?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  iconRight?: boolean;
  loading?: boolean;
}

const BtnContent = ({
  icon,
  children,
  loading,
  onlyIcon,
  iconRight,
}: IBtnContent) => {
  if (loading) return "loading...";

  if (onlyIcon && icon) return icon;

  if (iconRight && icon)
    return (
      <>
        <span>{children}</span> {icon}
      </>
    );

  return icon ? (
    <>
      {icon} <span>{children}</span>
    </>
  ) : (
    children
  );
};

function Button({
  children,
  type = "primary",
  loading = false,
  className = "",
  onClick,
  onlyIcon = false,
  iconRight,
  icon,
  size = "md",
  isSubmit = true,
}: Props) {
  return (
    <button
      className={classnames(style.btn, {
        [style[type]]: type,
        [className]: className,
        [style.iconBtn]: onlyIcon,
        [style.withIcon]: icon && !onlyIcon,
        [style.iconRight]: iconRight,
        [style[size]]: size,
      })}
      disabled={!!loading}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      <BtnContent
        loading={loading}
        onlyIcon={onlyIcon}
        iconRight={iconRight}
        icon={icon}
      >
        {children}
      </BtnContent>
    </button>
  );
}

export default Button;
