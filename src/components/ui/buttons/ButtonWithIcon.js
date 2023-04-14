import React from "react";
import { Link } from "react-router-dom";

const ButtonWithIcon = ({ icon, text, to, children, css }) => {
  return (
    <div className={`flex flex-col w-full ${css}`}>
      <button className="" type="button">
        <Link
          to={to}
          className={`flex items-center justify-start p-2 xl:px-4 mx-2 my-1 rounded-lg font-semibold bg-teal-800 text-white hover:text-teal-600 hover:bg-white  border-2 border-teal-800`}
        >
          {icon}
          <span>{text}</span>
        </Link>
      </button>
      {children}
    </div>
  );
};

export default ButtonWithIcon;
