import React from "react";
import Divider from "./TitleDivider";

const TitleWithDivider = ({ text }) => {
  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold traxking-tight mt-8 text-green-900">
        {text}
      </h3>
      <Divider />
    </div>
  );
};

export default TitleWithDivider;
