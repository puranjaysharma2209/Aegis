import React from "react";

const sizes = {
  xs: "text-[8px] font-light leading-[10px]",
  lg: "text-lg font-normal leading-[22px]",
  s: "text-sm font-normal leading-[18px]",
  "2xl": "text-2xl font-normal leading-[30px] md:text-[22px]",
  xl: "text-xl font-normal leading-[25px]",
  md: "text-[15px] font-normal leading-[19px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
