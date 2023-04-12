import React from "react";
import IconHour from "../icons/IconHour";
import { Link } from "react-router-dom";

const ModalHours = ({ setIsOpen }) => {
  return (
    <div
      class="fixed bg-gray-600 bg-opacity-50 top-0 left-0 z-[1055] h-full w-full overflow-y-auto outline-none transition duration-700"
      id="openingHoursModal"
    >
      <div class="relative top-20 mx-auto p-5 border w-[80%] sm:w-96 shadow-lg rounded-md bg-gradient-to-r from-emerald-50 to-teal-100">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-800 text-white">
            <IconHour />
          </div>
          <div class="mt-2 px-7 py-3">
            <p class="text-sm text-gray-500">
              Arbr'O Grimpeur est ouvert <br />
              du Lundi au Vendredi <br />
              de 08h00 à 19h30
            </p>
          </div>
          <div class="items-center px-2 py-3 flex flex-col w-[50%] mx-auto">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to="/contact"
              class="my-3 px-1 md:px-4 mx-2 py-2 bg-teal-800 text-white  border-2 border-teal-800 text-xs md:text-sm font-medium rounded-full w-full shadow-sm hover:bg-transparent hover:text-teal-800 transition duration-300"
            >
              Contactez-nous
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              class="my-3 px-1 md:px-4 mx-2 py-2 bg-red-600 text-white  border-2 border-red-600 text-xs md:text-sm font-medium rounded-full w-full shadow-sm hover:bg-transparent hover:text-red-600 transition duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHours;
