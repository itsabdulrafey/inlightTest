import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    blue_gray_600: "bg-blue_gray-600 text-white-A700",
    orange_A200: "bg-orange-A200 text-white-A700",
    indigo_A700: "bg-indigo-A700 text-white-A700",
  },
  outline: {
    blue_gray_600: "border-blue_gray-600 border-2 border-solid shadow-xs text-blue_gray-600",
    blue_gray_900_01: "border-blue_gray-900_01 border-2 border-solid text-blue_gray-900_01",
  },
};
const sizes = {
  xl: "h-[74px] px-[30px] text-xl",
  "2xl": "h-[120px] px-[35px] text-[32px]",
  xs: "h-[40px] px-2.5 text-xl",
  sm: "h-[50px] px-[35px] text-base",
  md: "h-[60px] px-[30px] text-xl",
  lg: "h-[60px] px-[25px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "blue_gray_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-bold ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xl", "2xl", "xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["blue_gray_600", "orange_A200", "indigo_A700", "blue_gray_900_01"]),
};

export { Button };
