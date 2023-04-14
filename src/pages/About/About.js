import React, { useRef, useState } from "react";
//images
import abattage1 from "../../assets/images/static/Abattage.jpeg";
import abattage2 from "../../assets/images/static/Démontage-de-charpentiere-avec-rétention.jpg";
import cordiste from "../../assets/images/static/Nettoyage-eolienne.jpg";
import debroussaillage from "../../assets/images/static/Debroussaillage.jpeg";
import profile from "../../assets/images/static/Profile.jpg";
//components
import ContactButton from "../../components/ui/buttons/ContactButton";
import IconChainsaw from "../../components/ui/icons/IconChainsaw";
import IconScissors from "../../components/ui/icons/IconScissors";
import IconTree from "../../components/ui/icons/IconTree";
import IconRope from "../../components/ui/icons/IconRope";
import Container from "../../components/ui/Container";
import MainTitle from "../../components/ui/titles/MainTitle";
import SecondaryTitle from "../../components/ui/titles/SecondaryTitle";
import ImageAbout from "./ImageAbout";
import TitleWithDivider from "../../components/ui/titles/TitleWithDivider";
import CardWithHover from "./CardWithHover";

const About = () => {
  const [textService, setTextService] = useState(null);
  const textIconRef = useRef();

  const handleOnMouseOver = (e) => {
    let text = e.currentTarget.firstChild.children[1].firstChild.innerText;
    if (text !== null) setTextService(text);
    textIconRef.current.classList.add("opacity-100");
  };
  const handleOnMouseOut = () => {
    textIconRef.current.classList.remove("opacity-100");
    setTextService(null);
  };

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
          <TitleWithDivider text="Les services que nous proposons" />
          <div className="flex flex-col md:flex-row flex-wrap">
            <CardWithHover
              text="Abattage"
              icon={<IconChainsaw css="w-10 h-10 mx-2" />}
              to="abattage"
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              content="Abattage par démontage ou abattage en direct lorsque nécessaire. Le tout en toute sécurité."
            />
            <CardWithHover
              text="Elagage et taille"
              icon={<IconTree css="w-10 h-10 mx-2" />}
              to="/services/elagage"
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              content="La taille d’un arbre nécessite le savoir faire de professionnels et de matériels adaptés à la grimpe."
            />
            <CardWithHover
              text="Débroussaillage et entretien"
              icon={<IconScissors css="w-10 h-10 mx-2" />}
              to="/services/debroussaillage"
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              content="Débroussaillage manuel ou avec Rotofil pour vos espaces verts et une prévention incendie assurée."
            />
            <CardWithHover
              text="Travaux d'accès difficile"
              icon={<IconRope css="w-10 h-10 mx-2" />}
              to="/services/cordiste"
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              content="Faire appel un à professionnel pour tous vos travaux d'accès difficile
              est un gage de sécurité dans l'exécution de vos chantiers."
            />
          </div>
          <div
            ref={textIconRef}
            className="shadow-md shadow-slate-300 sm:w-2/5 mx-2 opacity-0 rounded-lg bg-teal-800/80 mt-5 duration-300 transition text-white"
          >
            <p className="px-4 py-2 ">{textService}</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <TitleWithDivider text="Arbr'O Grimpeur en action" />
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
