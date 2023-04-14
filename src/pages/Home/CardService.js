import React from "react";
import { Link } from "react-router-dom";
import IconDots from "../../components/ui/icons/IconDots";

const CardService = ({ service, isMobile }) => {
  return (
    <li className="flex flex-col mb-12">
      <img
        src={service.img}
        height={isMobile ? 200 : 600}
        width={isMobile ? 200 : 300}
        className="object-cover rounded-md"
        alt={service.altImg}
      />
      <div className="flex flex-col mx-2 items-start justify-between">
        <p className="uppercase font-bold tracking-tight my-3">
          {service.title}
        </p>
        <div className="text-gray-500 text-sm">
          {service.description.map((sentence, index) => (
            <p key={index} className="mb-3">
              {sentence}
            </p>
          ))}
        </div>
        <div className="w-full">
          <Link
            to={service.link}
            className=" inline-flex items-center justify-start text-sm font-semibold text-blue-500 duration-200 hover:underline hover:underline-offset-4 hover:underline-green-800 mt-4"
          >
            <span className="hidden sm:block uppercase">lire la suite →</span>
            <span className="sm:hidden flex items-center">
              <IconDots /> <span className="ps-2">→</span>
            </span>
          </Link>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default CardService;
