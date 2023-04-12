import React, { useState } from "react";
import "./slider-before-after.css";
import ModalImage from "../modals/ModalImage";

const SliderBeforeAfter = ({
  image1,
  image2,
  text,
  description,
  imgModal,
  textModal,
  altModal,
}) => {
  const [valueInput, setValueInput] = useState(50);
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div className="w-[80%] mx-auto my-8">
        <h3 className="text-center pt-4 text-lg sm:text-2xl">{text}</h3>
        <p
          className="text-center mb-4 cursor-pointer hover:underline underline-offset-4"
          onClick={() => setShowImage(true)}
        >
          {description}
        </p>
        <div className="hidden m-auto lg:flex lg:items-center lg:justify-center text-center lg:p-2 lg:mb-4">
          <button
            type="button"
            onClick={() => setValueInput(100)}
            className="bg-teal-800 text-white border-2 border-teal-800 rounded-full py-2 px-6 mx-8 hover:bg-white hover:text-teal-700 transition duration-200"
          >
            Avant notre intervention
          </button>
          <button
            type="button"
            onClick={() => setValueInput(1)}
            className="bg-teal-800 text-white border-2 border-teal-800 rounded-full py-2 px-6 mx-8 hover:bg-white hover:text-teal-700 transition duration-200"
          >
            Après notre intervention
          </button>
        </div>
        <div className="relative w-[full] h-72 lg:w-[1024px] lg:h-[400px] mb-10 mx-auto shadow-lg">
          <img
            alt={image1.alt}
            src={image1.img}
            className="absolute top-0 left-0 h-full w-full object-cover object-left rounded saturate-150"
          />
          <span className="text-white absolute bottom-2 right-2">
            {image1.text}
          </span>
          <div
            className={`absolute top-0 left-0  h-full foreground-img truncate`}
            style={{ width: `calc(${valueInput}% - 0.5%)` }}
          >
            <img
              alt={image2.alt}
              src={image2.img}
              className="w-[100%] h-full object-cover object-left rounded saturate-150"
            />
            <span className="text-white absolute bottom-2 left-2">
              {image1.text}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={valueInput}
            onChange={(e) => {
              setValueInput(e.currentTarget.value);
            }}
            className="absolute w-[100%] h-[100%] top-0 bg-transparent flex justify-center items-center input-slider appearance-none "
            name="slider"
            id="slider"
          />
          <div
            className="slider-button"
            style={{
              left: `calc(${valueInput}% - 18px)`,
            }}
          ></div>
        </div>
        {showImage && (
          <ModalImage
            img={imgModal}
            text={textModal}
            alt={altModal}
            setIsOpen={setShowImage}
          />
        )}
      </div>
    </>
  );
};

export default SliderBeforeAfter;
