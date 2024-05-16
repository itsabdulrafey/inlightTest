import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const shapes = {
     square: "rounded-[0px]",
     round: "rounded-lg",
   };
   const variants = {
     fill: {
       orange_600: "bg-orange-600 text-white-A700",
       white_A700_33: "bg-white-A700_33 text-white-A700_b2",
     },
   };
   const sizes = {
     xs: "h-[56px] pl-[30px] pr-[35px] text-xl",
     sm: "h-[60px] pl-4 pr-[35px] text-xl",
   };

const AuthSelect = React.forwardRef(
  (
    {
      className = "",
      name = "",
      options = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = 'round',
      variant = "fill",
      size = "md",
      color = "white_A700_33",
      ...restProps
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
      if (ref) {
        ref.current = selectRef.current;
      }
    }, [ref]);

    const handleChange = (e) => {
      if (onChange) onChange(e.target.value);
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleBlur = () => {
      setIsOpen(false);
    };

    const selectStyle = {
      textAlignLast: "center",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
     //  backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%227%22%20viewBox%3D%220%200%2012%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.41%200.293967L6%204.88297L10.59%200.293967L12%201.70797L6%7.70797L0%1.70797L1.41%200.293967Z%22%20fill%3D%22%23${isOpen ? '000000' : 'FFFFFF'}%22%3E%3C/path%3E%3C/svg%3E')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 10px center",
      cursor: "pointer",
      padding: "10px",
      border: "none",
      borderRadius: "0.5rem",
      backgroundColor: "#ffffff33",
      color: "gray",
      width: "100%",
      paddingBottom: 19,
      paddingTop: 19
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center tracking-[0.40px] text-xl border-solid  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
          style={{ width: "100%", backgroundColor: 'transparent',paddingBottom:40 }}
        >
          {/* {!!label && <label className="mr-2 text-white" style={{ flex: 'none' }}>{label}</label>}
          {!!prefix && <span className="mr-2">{prefix}</span>} */}
          <select
            ref={selectRef}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={toggleDropdown}
            style={selectStyle}
            {...restProps}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* {!!suffix && <span className="ml-2">{suffix}</span>} */}
        </div>
      </>
    );
  },
);

AuthSelect.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["indigo_900_02_indigo_500", "white_A700_b2", "white_A700_33"]),
};

export { AuthSelect };
