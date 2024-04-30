import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
};
const variants = {
  outline: {
    indigo_900_02_indigo_500: "border-white-A700 border-2 border-solid bg-gradient text-white-A700",
    white_A700_b2: "border-white-A700_b2 border-2 border-solid",
  },
  fill: {
    white_A700_33: "bg-white-A700_33 text-white-A700_b2",
  },
};
const sizes = {
  sm: "h-[56px] pl-[30px] pr-[35px] text-xl",
  xs: "h-[50px] pl-6 pr-[35px]",
  md: "h-[60px] pl-4 pr-[35px] text-xl",
};

const AuthInput = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "white_A700_33",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center border-solid  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

AuthInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["indigo_900_02_indigo_500", "white_A700_b2", "white_A700_33"]),
};

export { AuthInput };
