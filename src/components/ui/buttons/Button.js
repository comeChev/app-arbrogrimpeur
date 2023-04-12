import React from "react";

const Button = ({ text, onClick, css, bgColor, color }) => {
  return (
    <button
      onClick={onClick}
      class={`px-1 md:px-4 mx-2 py-2 bg-${bgColor} border-2 border-${bgColor} text-${color} text-xs md:text-sm font-medium rounded-md w-full shadow-md hover:text-${bgColor} hover:bg-${color} transition duration-300 ${css}`}
    >
      {text}
    </button>
  );
};

export default Button;
