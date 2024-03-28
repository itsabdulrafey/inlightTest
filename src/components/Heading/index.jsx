import React from "react";

const sizes = {
  "3xl": "text-[22px] font-bold",
  "2xl": "text-xl font-bold",
  xl: "text-lg font-bold",
  "5xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  "4xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  s: "text-[13px] font-bold",
  md: "text-sm font-semibold",
  "6xl": "text-[56px] font-bold md:text-5xl sm:text-[42px]",
  xs: "text-[10px] font-bold",
  lg: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
