import React, { useState } from "react";
import IconCaretDown from "../../components/ui/icons/IconCaretDown";
import IconCaretUp from "../../components/ui/icons/IconCaretUp";
import { motion } from "framer-motion";

const QuestionFAQ = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-teal-50 bg-green-800 p-2 rounded ps-2 hover:cursor-pointer"
      >
        <p className="text-start text-md md:text-lg font-medium leading-6">
          {item.question}
        </p>
        <span>{isOpen ? <IconCaretUp /> : <IconCaretDown />}</span>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -20 }}
          transition={{ type: "tween" }}
          className="px-4 pt-2 text-base text-left text-gray-500 rounded pb-4 bg-neutral-200 shadow-sm"
        >
          {item.answer.map((i, index) => (
            <p className="py-1" key={index}>
              {i}
            </p>
          ))}
        </motion.div>
      )}
    </li>
  );
};

export default QuestionFAQ;
