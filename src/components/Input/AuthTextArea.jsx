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
  sm: "h-[150px] pl-[30px] pr-[35px] text-xl", // Increased height
  xs: "h-[140px] pl-6 pr-[35px]",              // Increased height
  md: "h-[160px] pl-4 pr-[35px] text-xl",      // Increased height
};

const AuthTextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "white_A700_33",
      rows = 10, // default number of rows
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex flex-col items-center justify-center border-solid ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && <label htmlFor={name} className="mb-2">{label}</label>}
          {!!prefix && <div className="self-stretch">{prefix}</div>}
          <textarea
            ref={ref}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows}
            className="w-full"
            {...restProps}
          />
          {!!suffix && <div className="self-stretch">{suffix}</div>}
        </div>
      </>
    );
  },
);

AuthTextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["indigo_900_02_indigo_500", "white_A700_b2", "white_A700_33"]),
  rows: PropTypes.number, // Added rows prop to control the height of the textarea
};

export { AuthTextArea };
