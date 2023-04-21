import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModalImage = ({ img, text, alt, setIsOpen }) => {
  return (
    <AnimatePresence mode="popLayout">
      <div class="fixed bg-gray-600 bg-opacity-50 top-0 left-0 z-[1055] h-full w-full overflow-y-auto outline-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring" }}
          class="relative top-2 h-[90%] mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-gradient-to-r from-emerald-50 to-teal-100 "
        >
          <div class="mt-3 text-center h-full w-full flex flex-col">
            <div class="flex flex-col h-3/4">
              <img
                src={img}
                alt={alt}
                className="h-full rounded-lg mx-auto shadow-md object-cover"
              />
              <p class="text-sm text-gray-500 sm:text-2xl">{text}</p>
            </div>
            <div class="items-center px-2 py-3 mt-4 flex flex-col w-1/2 mx-auto flex-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                class="my-3 px-1 md:px-4 mx-2 py-2 bg-red-600 text-white border-2 border-red-600 text-xs md:text-sm font-medium rounded-full w-full shadow-sm hover:bg-transparent hover:text-red-600 transition duration-300"
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

export default ModalImage;
