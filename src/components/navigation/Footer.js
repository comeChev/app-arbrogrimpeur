import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//images
import logo from "../../assets/images/static/AOG-logo.png";
//components
import IconFacebook from "../ui/icons/IconFacebook";
import IconInstagram from "../ui/icons/IconInstagram";
import IconTwitter from "../ui/icons/IconTwitter";
import IconMagnifyingGlass from "../ui/icons/IconMagnifyingGlass";
import ModalImage from "../ui/modals/ModalImage";

const ImageGallery = ({
  onClick,
  image,
  css = "w-1/2",
  text = "image test",
}) => {
  return (
    <div className={`${css} md:h-20 md:w-20 lg:h-32 lg:w-32 rounded-lg p-1`}>
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

function importAll(imagesFolder) {
  let images = [];
  imagesFolder.keys().map((item) =>
    images.push({
      name: item
        .substring(item.lastIndexOf("/") + 1)
        .replace(/.jpg|.jpeg|.png/g, "")
        .replaceAll("_", " ")
        .replaceAll("-", " "),
      uri: imagesFolder(item),
    })
  );
  return images;
}

const footerImages = importAll(
  require.context("../../assets/images/footer", false, /\.(png|jpe?g|svg)$/)
);

const Footer = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const services = [
    {
      name: "Elagage et taille",
      link: "/services/elagage",
    },
    {
      name: "Abattage et démontage",
      link: "/services/abattage",
    },
    {
      name: "Débroussaillage et entretien",
      link: "/services/debroussaillage",
    },
    {
      name: "Travaux d'accès difficile - Cordiste",
      link: "/services/cordiste",
    },
  ];
  const company = [
    { name: "A propos de nous", link: "/about" },
    { name: "Demande de devis", link: "/contact" },
    { name: "Notre partenaire", link: "http://sequoyah-paysage.fr/" },
  ];
  const [showImage, setShowImage] = useState(false);
  const [imgToShow, setImgToShow] = useState("");
  const [textImg, setTextImg] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleWindowSizeChange = () => {
    setIsDesktop(window.innerWidth >= 768);
  };
  const handleClickImage = (e) => {
    setImgToShow(e.currentTarget.firstChild.src);
    setTextImg(e.currentTarget.firstChild.name);
    setShowImage(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <footer
      aria-label="Pied de page Arbr'O Grimpeur"
      className="bg-emerald-50 w-full"
    >
      <div className="px-4 pt-16 pb-5 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center">
          {/* COMPANY PRESENTATION */}
          <div>
            {/* LOGO */}
            <img src={logo} alt="Logo Arbr'O Grimpeur" className="w-60" />
            {/* PRESENTATION */}
            <p className="max-w-xs mt-4 text-gray-500">
              Arbr'O Grimpeur est à votre disposition pour tous type de travaux
              : abattage, élagage, entretien, travaux d'accès difficile dans
              l'Hérault et le Gard.
            </p>
            {/* SOCIALS */}
            <ul className="flex gap-6 mt-8">
              {/* FACEBOOK */}
              <li>
                <a
                  href="https://www.facebook.com/ArbroGrimpeur.elagage"
                  rel="noreferrer"
                  target="_blank"
                  className="text-green-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <IconFacebook css="w-6 h-6" />
                </a>
              </li>

              {/* INSTAGRAM */}
              <li>
                <a
                  href="https://www.instagram.com"
                  rel="noreferrer"
                  target="_blank"
                  className="text-green-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <IconInstagram css="w-6 h-6" />
                </a>
              </li>

              {/* TWITTER */}
              <li>
                <a
                  href="https://www.twitter.com"
                  rel="noreferrer"
                  target="_blank"
                  className="text-green-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <IconTwitter css="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* GALLERY */}
          {isDesktop ? (
            <>
              <div className="flex flex-col mt-10">
                <p className="font-medium text-gray-900">Nos réalisations</p>
                <hr className="w-12 h-1 my-1 bg-green-800 border-0 rounded" />
                <div className="flex flex-wrap p-4">
                  {footerImages.map((image) => (
                    <ImageGallery
                      image={image.uri}
                      alt={image.name}
                      text={image.name}
                      onClick={handleClickImage}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {/* LINKS */}
          <div className="mt-10 flex flex-col sm:flex-row">
            {/* SERVICES */}
            <div className="mb-8 sm:me-8">
              <p className="font-medium text-gray-900">Nos services</p>
              <hr className="w-12 h-1 my-1 bg-green-800 border-0 rounded" />
              <nav
                aria-label="Pied de page Navigation - Services"
                className="mt-6"
              >
                <ul className="space-y-4 text-sm">
                  {services.map((service, id) => (
                    <li key={id}>
                      <Link
                        to={service.link}
                        onClick={toTop}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* COMPANY */}
            <div>
              <p className="font-medium text-gray-900">Arbr'O Grimpeur</p>
              <hr className="w-12 h-1 my-1 bg-green-800 border-0 rounded" />{" "}
              <nav
                aria-label="Pied de page Navigation - Arbr'O Grimpeur"
                className="mt-6"
              >
                <ul className="space-y-4 text-sm">
                  {company.map((service, id) => (
                    <li key={id}>
                      <Link
                        to={service.link}
                        onClick={toTop}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* LEGAL MENTIONS */}
        <div>
          <p className="text-xs text-gray-500">
            &copy; 2023 | Arbr'O Grimpeur | Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500">
            <Link
              to="/legal-mentions"
              onClick={toTop}
              className="transition hover:opacity-75"
            >
              Mentions légales
            </Link>
            <span>{` | `}</span>
            <Link
              to="/confidentiality"
              onClick={toTop}
              className="transition hover:opacity-75"
            >
              Charte de confidentialité
            </Link>
          </p>
        </div>
        {showImage ? (
          <ModalImage
            img={imgToShow}
            setIsOpen={setShowImage}
            text={textImg}
            alt={textImg}
          />
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
