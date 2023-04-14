import React from "react";

const CardPrincipes = ({ img, altImg, icon, title, children, isMobile }) => {
  return (
    <div className="group flex flex-col items-start justify-start w-full sm:w-4/5 sm:mx-auto lg:w-1/3 h-full py-2 md:px-2 lg:py-0 md:my-0 hover:scale-105 transition duration-500">
      <div className="h-full mb-2">
        <img
          src={img}
          alt={altImg}
          height={isMobile ? 200 : 600}
          width={isMobile ? 300 : 300}
          className="object-cover object-center w-full h-40 rounded-md"
        />
        <div className="px-2">
          <div className="flex items-center py-2 pb-4">
            {icon}
            <span className="uppercase font-bold tracking-tight">{title}</span>
          </div>
          <p className="text-gray-500 text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPrincipes;
