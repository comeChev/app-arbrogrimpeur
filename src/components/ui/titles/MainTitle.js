import React from "react";
import TitleDivider from "./TitleDivider";

const MainTitle = (props) => {
  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-green-900">
        {props.children}
      </h1>
      <TitleDivider />
    </>
  );
};

export default MainTitle;
