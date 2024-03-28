import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-[22px] font-normal",
  s: "text-base font-normal",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_89 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
