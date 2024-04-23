import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    orange_600: "bg-orange-600 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
};
const sizes = {
  xs: "h-[56px] pl-[30px] pr-6 text-xl",
  lg: "h-[70px] px-[35px] text-2xl",
  sm: "h-[56px] px-[35px] text-base",
  md: "h-[60px] px-[35px] text-xl",
};

const ButtonSecound = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "md",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-bold border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

ButtonSecound.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["orange_600", "white_A700", "black_900"]),
};

export { ButtonSecound };
