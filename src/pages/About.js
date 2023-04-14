import React from "react";
import { Link } from "react-router-dom";
//images
import abattage1 from "../assets/images/static/Abattage.jpeg";
import abattage2 from "../assets/images/static/Démontage-de-charpentiere-avec-rétention.jpg";
import cordiste from "../assets/images/static/Nettoyage-eolienne.jpg";
import debroussaillage from "../assets/images/static/Debroussaillage.jpeg";
import profile from "../assets/images/static/Profile.jpg";
//components
import ContactButton from "../components/ui/buttons/ContactButton";
import IconChainsaw from "../components/ui/icons/IconChainsaw";
import IconScissors from "../components/ui/icons/IconScissors";
import IconTree from "../components/ui/icons/IconTree";
import IconRope from "../components/ui/icons/IconRope";
import Container from "../components/ui/Container";
import MainTitle from "../components/ui/titles/MainTitle";
import SecondaryTitle from "../components/ui/titles/SecondaryTitle";

const ImageAbout = ({ img, text, alt }) => (
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

const ButtonWithIcon = ({ icon, text, to }) => (
  <button className="w-3/4 md:w-auto">
    <Link
      to={to}
      className="flex items-center justify-start p-2 xl:px-4 mx-2 my-1 rounded-lg font-semibold bg-teal-800 text-white hover:text-teal-600 hover:bg-white  border-2 border-teal-800"
    >
      {icon}
      <span>{text}</span>
    </Link>
  </button>
);

const About = () => {
  return (
    <>
      <Container>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <MainTitle>A propos de l'entreprise Arbr'O Grimpeur</MainTitle>

          <div className="flex flex-col py-4">
            <img
              src={profile}
              className="rounded-3xl shadow-md border-2 border-green-600 w-48 h-48 mt-4 mb-8"
              alt="Jérémie Prades - Arbr'O Grimpeur"
            />
            <SecondaryTitle>
              L’entreprise Arbr’O Grimpeur est née en 2019 et implantée sur la
              commune de Laroque, à coté de Ganges, dans l’Hérault. Elle est
              dirigée par Jérémie Prades, <b>élagueur-grimpeur</b> depuis 2011
              et <b>cordiste</b> depuis 2018. (CS Elagage; CQP1 Cordiste)
            </SecondaryTitle>
          </div>
          <SecondaryTitle>
            Au service des particuliers, des entreprises et des collectivités,
            Arbr'O Grimpeur est spécialisée dans <b>l’élagage et l’abattage</b>{" "}
            d‘arbres de grande hauteur.
          </SecondaryTitle>
          <SecondaryTitle>
            Arbr'O Grimpeur intervient essentiellement en région de Montpellier,
            Montpellier Nord, Communauté de communes du Grand Pic saint loup,
            Communauté de communes des Cévennes Gangeoises et Suménoises,
            l’Hérault et le Gard.
          </SecondaryTitle>
        </div>
      </Container>
      <ContactButton />

      <Container>
        {/* SERVICES  */}
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h3 className="text-3xl font-semibold mt-8">
            Les services que nous proposons
          </h3>
          <hr className="w-24 h-1 my-1 bg-green-800 border-0 rounded" />
          <div className="flex flex-col md:flex-row flex-wrap">
            <ButtonWithIcon
              text="Abattage"
              icon={<IconChainsaw css="w-10 h-10 mx-2" />}
              to="abattage"
            />
            <ButtonWithIcon
              text="Elagage et taille"
              icon={<IconTree css="w-10 h-10 mx-2" />}
              to="/services/elagage"
            />
            <ButtonWithIcon
              text="Débroussaillage et entretien"
              icon={<IconScissors css="w-10 h-10 mx-2" />}
              to="/services/debroussaillage"
            />
            <ButtonWithIcon
              text="Travaux d'accès difficile"
              icon={<IconRope css="w-10 h-10 mx-2" />}
              to="/services/cordiste"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h3 className="text-3xl font-semibold mt-8">
            Arbr'O Grimpeur en action
          </h3>
          <hr className="w-24 h-1 my-1 bg-green-800 border-0 rounded" />

          {/* IMAGES */}
          <div className="flex flex-col sm:flex-row flex-wrap my-8">
            <div className="relative flex flex-col sm:w-1/3 p-2">
              <ImageAbout
                img={abattage1}
                text="Abattage d'un arbre super gros"
              />
            </div>
            <div className="flex flex-col sm:w-1/3 px-2">
              <div className="relative flex flex-col h-1/2 py-2">
                <ImageAbout img={abattage2} text="Demontage de charpentière" />
              </div>
              <div className="relative flex flex-col h-1/2 py-2">
                <ImageAbout img={cordiste} text="Nettoyage d'éolienne" />
              </div>
            </div>
            <div className="relative flex flex-col sm:w-1/3 p-2">
              <ImageAbout
                img={debroussaillage}
                text="Débroussaillage de bas-côté"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
