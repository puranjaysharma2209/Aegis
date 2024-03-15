import React from "react";

const sizes = {
  s: "text-xl font-semibold leading-[25px]",
  md: "text-2xl font-semibold leading-[30px] md:text-[22px]",
  xs: "text-sm font-extrabold leading-[18px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-500_03 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
