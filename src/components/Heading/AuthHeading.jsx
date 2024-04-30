import React from "react";

const sizes = {
  xl: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  s: "text-lg font-bold",
  md: "text-xl font-bold",
  xs: "text-base font-bold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const AuthHeading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { AuthHeading };
