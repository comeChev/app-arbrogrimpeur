import React from "react";
import { Link } from "react-router-dom";
//images
import abattage1 from "../assets/images/static/abattage.jpeg";
import abattage2 from "../assets/images/static/Demontage-de-charpentiere-avec-retention-1536x1020.jpg";
import cordiste from "../assets/images/static/Nettoyage-eolienne.jpg";
import debroussaillage from "../assets/images/static/debroussaillage.jpeg";
import profile from "../assets/images/static/profile.jpg";

//components
import ContactButton from "../components/ui/buttons/ContactButton";
import IconChainsaw from "../components/ui/icons/IconChainsaw";
import IconScissors from "../components/ui/icons/IconScissors";
import IconTree from "../components/ui/icons/IconTree";
import IconRope from "../components/ui/icons/IconRope";
import Quote from "../components/ui/Quote";

const ImageAbout = ({ img, text, alt }) => (
  <>
    <img src={img} className="rounded-lg shadow-md h-full" alt={alt} />
    <span className="absolute left-2 bottom-2 text-white px-3 py-2 bg-green-800/80 rounded-md m-2">
      {text}
    </span>
  </>
);

const ButtonWithIcon = ({ icon, text, to }) => (
  <Link
    to={to}
    className="w-3/4 my-1 sm:w-1/3 md:w-auto bg-teal-800 text-white hover:text-teal-600 hover:bg-white p-2 mx-2 border-2 border-teal-800 me-1 rounded-lg flex items-center justify-start xl:px-4"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const About = () => {
  return (
    <>
      <Quote css="block lg:hidden text-white bg-gradient-to-r  from-green-100 via-emerald-600 to-teal-800" />

      <div className="bg-emerald-100/80 lg:w-4/5 lg:mx-auto pt-10 pb-4 px-4 lg:px-8 sm:shadow-lg my-8">
        <h1 className="text-4xl py-5">
          A propos de l'entreprise Arbr'O Grimpeur
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center py-4">
          <img
            src={profile}
            className="rounded-full shadow-md border-2 border-green-600 w-48 h-48 my-4"
            alt="Jérémie Prades - Arbr'O Grimpeur"
          />
          <h2 className="p-4 text-xl">
            L’entreprise Arbr’O Grimpeur est née en 2019 et implantée sur la
            commune de Laroque, à coté de Ganges, dans l’Hérault. Elle est
            dirigée par Jérémie Prades, <b>élagueur-grimpeur</b> depuis 2011 et
            <b>cordiste</b> depuis 2018. (CS Elagage; CQP1 Cordiste)
          </h2>
        </div>
        <h3 className="p-4 text-xl">
          Au service des particuliers, des entreprises et des collectivités,
          Arbr'O Grimpeur est spécialisée dans <b>l’élagage et l’abattage</b>{" "}
          d‘arbres de grande hauteur.
        </h3>
        <h3 className="p-4 text-xl">
          Arbr'O Grimpeur intervient essentiellement en région de Montpellier,
          Montpellier Nord, Communauté de communes du Grand Pic saint loup,
          Communauté de communes des Cévennes Gangeoises et Suménoises,
          l’Hérault et le Gard.
        </h3>
      </div>
      <ContactButton />

      <div className="bg-emerald-100/80 lg:w-4/5 lg:mx-auto py-4 px-4 lg:px-8 sm:shadow-lg my-8">
        {/* SERVICES  */}
        <div>
          <h2 className="text-3xl mt-8">Les services que nous proposons :</h2>
          <div className="flex flex-col flex-wrap sm:flex-row items-center justify-start xl:justify-center my-4">
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
        {/* IMAGES */}
        <div className="flex flex-col sm:flex-row flex-wrap my-8">
          <div className="relative flex flex-col sm:w-1/3 p-2">
            <ImageAbout img={abattage1} text="Abattage d'un arbre super gros" />
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
      {/* CALL TO ACTION */}

      <section>
        <ul>
          <li></li>
        </ul>
      </section>
    </>
  );
};

export default About;
