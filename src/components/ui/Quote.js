import React from "react";

const Quote = ({ css = "hidden lg:block" }) => {
  return (
    <blockquote
      className={`${css} italic text-base md:text-lg text-teal-800 text-center py-3`}
    >
      "L'arbre est un être vivant, respectons-le !"
    </blockquote>
  );
};

export default Quote;
