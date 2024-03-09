import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    deep_orange_900: "bg-deep_orange-900",
    gray_900: "bg-gray-900 text-white-A700",
    gray_900_01: "bg-gray-900_01",
  },
};
const sizes = {
  lg: "h-[36px] px-[15px] text-base",
  xl: "h-[70px] px-2 text-sm",
  xs: "h-[24px] px-[23px] text-[10px]",
  "2xl": "h-[70px] px-[23px]",
  sm: "h-[32px] px-2",
  md: "h-[36px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "md",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["lg", "xl", "xs", "2xl", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_900", "gray_900", "gray_900_01"]),
};

export { Button };
