import React, { useState } from "react";
import IconPhone from "../ui/icons/IconPhone";
import IconMail from "../ui/icons/IconMail";
import IconPlace from "../ui/icons/IconPlace";
import ModalHours from "../ui/modals/ModalHours";
import ModalPlace from "../ui/modals/ModalPlace";
import IconHour from "../ui/icons/IconHour";
import IconFacebook from "../ui/icons/IconFacebook";

const StickyNavbar = () => {
  const [isOpenModalPlace, setIsOpenModalPlace] = useState(false);
  const [isOpenModalHours, setIsOpenModalHours] = useState(false);

  return (
    // BUTTONS CONTACT NAVBAR
    <div className="sticky top-0 z-50 bg-gradient-to-r from-green-100 via-emerald-600 to-teal-800 py-2 flex justify-between items-center">
      {/* CONTACT ICONS */}
      <div className="flex items-center">
        <a
          href="tel:+33623747077"
          className="mx-2 text-green-800 flex text-sm items-center"
        >
          <IconPhone />
          <span className="hidden lg:block mx-1"> +33 (0)6 23 74 70 77 </span>
        </a>
        <a
          href="mailto:arbro.grimpeur@gmail.com"
          className="mx-2 flex text-sm text-green-800 items-center"
        >
          <IconMail />
          <span className="hidden lg:block mx-1">
            {" "}
            arbro.grimpeur@gmail.com{" "}
          </span>
        </a>
      </div>

      {/* INFO ICONS */}
      <div className="flex items-center mx-2">
        {/* ICON PLACE */}
        <button
          type="button"
          className="flex text-sm items-center text-white px-2"
          onClick={() => {
            setIsOpenModalPlace(true);
          }}
        >
          <IconPlace />
          <span className="hidden mx-2 lg:block"> 34190 Laroque, Hérault </span>
        </button>
        {/* ICON OPENING HOURS */}
        <button
          type="button"
          onClick={() => {
            setIsOpenModalHours(true);
          }}
          className="flex text-sm items-center text-white px-2"
          id="btnOpeningHours"
          data-te-toggle="openingHoursModal"
        >
          <IconHour />
          <span className="hidden mx-2 lg:block">
            Lundi au Vendredi : 08h00-19h30
          </span>
        </button>
        {/* ICON FACEBOOK */}
        <a
          href="https://www.facebook.com/ArbroGrimpeur.elagage"
          target="_blank"
          rel="noreferrer"
          className="text-white px-2"
        >
          <IconFacebook />
        </a>
      </div>

      {/* MODALS */}
      {isOpenModalHours && <ModalHours setIsOpen={setIsOpenModalHours} />}
      {isOpenModalPlace && <ModalPlace setIsOpen={setIsOpenModalPlace} />}
    </div>
  );
};

export default StickyNavbar;
