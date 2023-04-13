import React from "react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="flex flex-col items-start sm:text-start sm:flex-row justify-between sm:items-center p-4 bg-green-950  w-[80%] mx-auto my-4 rounded-lg shadow-md">
      <p className="sm:px-4 text-emerald-50 w-full sm:w-2/3">
        Vous chercher un professionnel <b>passionné</b>, <b>sérieux</b> et{" "}
        <b>fiable</b> pour vos travaux d'espaces verts ?{" "}
      </p>
      <button className="my-5 sm:my-0 hover:scale-105 transition duration-300 bg-white text-green-800 font-semibold px-4 py-3 rounded-md">
        <Link role="button" to="/contact" className="">
          Contactez-nous →
        </Link>
      </button>
    </div>
  );
};

export default ContactButton;
