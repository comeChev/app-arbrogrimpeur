import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, text, css, onClick, mainColor }) => {
  return (
    <li>
      <Link
        to={to}
        className={`${css} text-teal-700 border-b-4 border-transparent hover:border-green-800 px-3 lg:px-8 py-2 text-xl font-medium lg:text-3xl transition duration-500 active:bg-teal-700 active:rounded-md active:text-white`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default LinkButton;
