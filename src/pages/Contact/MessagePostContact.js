import React from "react";
import IconError from "../../components/ui/icons/IconError";
import IconCheckCircle from "../../components/ui/icons/IconCheckCircle";
import MainTitle from "../../components/ui/titles/MainTitle";
import SecondaryTitle from "../../components/ui/titles/SecondaryTitle";
import IconHome from "../../components/ui/icons/IconHome";
import IconRetry from "../../components/ui/icons/IconRetry";

const MessagePostContact = ({
  type,
  messageTitle,
  message,
  textButton,
  onClick,
}) => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      {type === "success" ? (
        <IconCheckCircle css="h-16 w-16 md:h-20 md:w-20 text-green-600 mb-10" />
      ) : type === "error" ? (
        <IconError css="h-16 w-16 md:h-20 md:w-20 text-red-600 mb-10" />
      ) : null}
      <MainTitle>{messageTitle}</MainTitle>
      <SecondaryTitle>{message}</SecondaryTitle>
      <button
        className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-900 flex items-center group"
        onClick={onClick}
      >
        {type === "success" ? (
          <IconHome css="h-8 w-8 mr-2" />
        ) : type === "error" ? (
          <IconRetry css="h-8 w-8 mr-2 group-hover:rotate-180 transition duration-700" />
        ) : null}
        <span>{textButton}</span>
      </button>
    </div>
  );
};

export default MessagePostContact;
