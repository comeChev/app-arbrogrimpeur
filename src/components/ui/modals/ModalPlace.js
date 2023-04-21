import React from "react";
import IconPlace from "../icons/IconPlace";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const ModalPlace = ({ setIsOpen }) => {
  return (
    <AnimatePresence mode="popLayout">
      <div class="fixed bg-gray-600 bg-opacity-50 top-0 left-0 z-[1055] h-full w-full overflow-y-auto outline-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring" }}
          class="relative top-20 mx-auto p-5 border w-[80%] shadow-lg rounded-md bg-gradient-to-r from-emerald-50 to-teal-100"
        >
          <div class="mt-3 text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-800 text-white">
              <IconPlace />
            </div>
            <div class="mt-2 px-7 py-3">
              <p class="text-sm text-gray-500">
                Arbr'O Grimpeur
                <br />
                Jérémie Prades <br />
                3, Lotissement le Vigné <br />
                34190 Laroque, Hérault
              </p>
              <iframe
                title="Carte Arbr'O Grimpeur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.4311572033603!2d3.711718012483649!3d43.929749834378846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b405ec3b4f9cad%3A0xcf82bbdb9b0e2b59!2sArbr&#39;O%20Grimpeur!5e0!3m2!1sfr!2sfr!4v1680718110749!5m2!1sfr!2sfr"
                style={{ border: 0 }}
                class="w-full h-48 mt-2 py-3 rounded-lg shadow-lg border border-teal-800"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="items-center px-2 py-3 flex flex-col w-[50%] mx-auto">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                to="/contact"
                class="my-3 px-1 md:px-4 mx-2 py-2 bg-teal-800 text-white border border-2 border-teal-800 text-xs md:text-sm font-medium rounded-full w-full shadow-sm hover:bg-transparent hover:text-teal-800 transition duration-300"
              >
                Contactez-nous
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                class="my-3 px-1 md:px-4 mx-2 py-2 bg-red-600 text-white border border-2 border-red-600 text-xs md:text-sm font-medium rounded-full w-full shadow-sm hover:bg-transparent hover:text-red-600 transition duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ModalPlace;
