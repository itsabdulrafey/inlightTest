import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[64px] font-normal md:text-5xl",
  s: "text-2xl font-normal md:text-[22px]",
  md: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
};

const AuthText = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_b2 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { AuthText };
