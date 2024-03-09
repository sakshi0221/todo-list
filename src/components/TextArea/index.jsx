import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};
const variants = {
  tarOutlineOrange600: "border-orange-600 border border-solid bg-gray-900",
  tarOutlineCustomColor: "border-[#F0E3CAA3] border border-solid bg-gray-900",
};
const sizes = {
  xs: "h-[136px] p-[6px] text-sm",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape = "",
      size = "xs",
      variant = "tarOutlineOrange600",
      onChange,
      value,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    const isEmpty = !value || value.trim() === "";

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapes[shape] || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        style={{
          color: "#F0E3CAA3",
          minHeight: "32px",
          height: isEmpty ? "32px" : "136px",
          overflow: "hidden",
          padding:" 6px 38px",
          ...restProps.style,
        }}
        {...restProps}
      />
    );
  },
);



TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarOutlineOrange600"]),
};

export { TextArea };
