import React from "react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="flex flex-col text-center sm:text-start sm:flex-row justify-between items-center p-4 bg-green-950  w-[80%] mx-auto my-4 rounded-lg shadow-md">
      <p className="px-4 text-emerald-50 w-2/3">
        Vous chercher un professionnel <b>passionné</b>, <b>sérieux</b> et{" "}
        <b>fiable</b> pour vos travaux d'espaces verts ?{" "}
      </p>
      <Link
        role="button"
        to="/contact"
        className="mt-4 sm:mt-0 px-6 py-2.5 me-4 text-center text-white bg-emerald-600 border-2 border-emerald-600 rounded-sm nline-flex hover:bg-emerald-700 lg:w-auto text-sm md:text-lg transition duration-500"
      >
        Contactez-nous
      </Link>
    </div>
  );
};

export default ContactButton;
