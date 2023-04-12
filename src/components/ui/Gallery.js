import React, { useState } from "react";
import ModalImage from "./modals/ModalImage";
import IconMagnifyingGlass from "./icons/IconMagnifyingGlass";

const ImageGallery = ({
  onClick,
  image,
  css = "w-1/2",
  text = "image test",
}) => {
  return (
    <div className={`${css} h-1/2 rounded-lg p-1`}>
      <div onClick={onClick} className="relative w-full h-full">
        <img
          alt="gallery"
          className="h-full w-full rounded-lg object-cover object-center shadow-md saturate-150"
          src={image}
          name={text}
        />
        <div
          className="absolute h-full w-full flex flex-col items-center justify-center  top-0 rounded-lg hover:opacity-100 opacity-0 bg-green-800/60 text-white hover:cursor-pointer transition duration-700 p-4"
          src={image}
        >
          <IconMagnifyingGlass css="w-12 h-12 mb-4" />
          <p className="font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ images }) => {
  const [showImage, setShowImage] = useState(false);
  const [imgToShow, setImgToShow] = useState("");
  const [textImg, setTextImg] = useState("");

  const handleClickImage = (e) => {
    setImgToShow(e.currentTarget.firstChild.src);
    setTextImg(e.currentTarget.firstChild.name);
    setShowImage(true);
  };

  return (
    images[0] && (
      <section className="overflow-hidden text-neutral-700 w-[80%] mx-auto sm=w-full">
        <div className="container my-28 py-2">
          <div className="m-1 flex flex-col flex-wrap sm:flex-row md:-m-2 px-4">
            <div className="flex w-full sm:w-1/2 flex-wrap">
              <ImageGallery
                onClick={handleClickImage}
                image={images[0].uri}
                text={images[0].name.replace(".jpg", "").replaceAll("_", " ")}
              />
              {images[1] ? (
                <ImageGallery
                  onClick={handleClickImage}
                  image={images[1].uri}
                  text={images[1].name}
                />
              ) : null}
              {images[2] ? (
                <ImageGallery
                  onClick={handleClickImage}
                  image={images[2].uri}
                  text={images[2].name}
                  css="w-full"
                />
              ) : null}
            </div>
            <div className="flex w-full sm:w-1/2 flex-wrap">
              {images[3] ? (
                <ImageGallery
                  onClick={handleClickImage}
                  image={images[3].uri}
                  text={images[3].name}
                  css="w-full"
                />
              ) : null}
              {images[4] ? (
                <ImageGallery
                  onClick={handleClickImage}
                  image={images[4].uri}
                  text={images[4].name}
                />
              ) : null}
              {images[5] ? (
                <ImageGallery
                  onClick={handleClickImage}
                  image={images[5].uri}
                  text={images[5].name}
                />
              ) : null}
            </div>
          </div>
        </div>

        {showImage && (
          <ModalImage setIsOpen={setShowImage} img={imgToShow} text={textImg} />
        )}
      </section>
    )
  );
};

export default Gallery;
