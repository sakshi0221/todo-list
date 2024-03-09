import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-2xl font-normal",
  s: "text-lg font-normal leading-[22px]",
  md: "text-[22px] font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-lime-100 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
