import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Container = (props) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        className={`bg-emerald-100/80 lg:w-4/5 lg:mx-auto pt-10 pb-4 px-4 lg:px-8 sm:shadow-lg my-8 `}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring" }}
      >
        <div className={`mx-auto max-w-7xl md:px-8 ${props.css}`}>
          {props.children}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Container;
