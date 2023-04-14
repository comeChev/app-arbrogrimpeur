import React from "react";

const ElementContact = ({ children, title, content, css }) => {
  return (
    <div className={`flex w-full items-center ${css}`}>
      {children}
      <div className="py-4 ps-4 font-light text-gray-500 sm:text-xl text-start">
        {title ? <p className="text-xl font-bold">{title}</p> : null}
        {content ? <p className="text-base text-gray-400">{content}</p> : null}
      </div>
    </div>
  );
};

export default ElementContact;
