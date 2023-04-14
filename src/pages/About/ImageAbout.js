import React from "react";

const ImageAbout = ({ img, text, alt }) => {
  return (
    <>
      <img
        src={img}
        className="rounded-lg shadow-md h-full object-cover"
        alt={alt}
      />
      <span className="absolute left-2 bottom-2 text-white px-3 py-2 bg-green-800/80 rounded-md m-2">
        {text}
      </span>
    </>
  );
};

export default ImageAbout;
