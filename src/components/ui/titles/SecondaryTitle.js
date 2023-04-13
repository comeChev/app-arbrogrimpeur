import React from "react";

const SecondaryTitle = (props) => {
  return (
    <h2 className="mb-8 lg:mb-16 font-light text-gray-500 sm:text-xl">
      {props.children}
    </h2>
  );
};

export default SecondaryTitle;
