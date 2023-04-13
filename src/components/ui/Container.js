import React from "react";

const Container = (props) => {
  return (
    <section
      className={`bg-emerald-100/80 lg:w-4/5 lg:mx-auto pt-10 pb-4 px-4 lg:px-8 sm:shadow-lg my-8 ${props.css}`}
    >
      {props.children}
    </section>
  );
};

export default Container;