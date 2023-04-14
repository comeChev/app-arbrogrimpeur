import React from "react";
import { Link } from "react-router-dom";
//images
import mainImage from "../assets/images/static/Escalade.webp";
import elagage from "../assets/images/static/elagage.webp";
import debroussaillage from "../assets/images/static/Démontage_de_cèdre.webp";
import abattage from "../assets/images/static/abattage.webp";
import profile from "../assets/images/static/profile.webp";
import security from "../assets/images/static/Demontage-de-charpentiere-avec-retention.webp";
import ecoResponsability from "../assets/images/static/EcoResponsability.jpg";
import satisfaction from "../assets/images/static/SatisfactionClient.jpg";
//components
import ContactButton from "../components/ui/buttons/ContactButton";
import IconTree from "../components/ui/icons/IconTree";
import IconChainsaw from "../components/ui/icons/IconChainsaw";
import IconScissors from "../components/ui/icons/IconScissors";
import IconDots from "../components/ui/icons/IconDots";
import IconCheck from "../components/ui/icons/IconCheck";
import IconSafe from "../components/ui/icons/IconSafe";
import IconEcology from "../components/ui/icons/IconEcology";
import IconThumbUp from "../components/ui/icons/IconThumbUp";
import IconArrowDown from "../components/ui/icons/IconArrowDown";
import MainTitle from "../components/ui/titles/MainTitle";
import SecondaryTitle from "../components/ui/titles/SecondaryTitle";
import Container from "../components/ui/Container";

const CardService = ({ service }) => (
  <li className="flex flex-col mb-12">
    <img
      src={service.img}
      className="w-full max-h-48 lg:max-h-96 object-cover rounded-md"
      alt={service.altImg}
    />
    <div className="flex flex-col mx-2 items-start justify-between">
      <p className="uppercase font-bold tracking-tight my-3">{service.title}</p>
      <div className="text-gray-500 text-sm">
        {service.description.map((sentence, index) => (
          <p key={index} className="mb-3">
            {sentence}
          </p>
        ))}
      </div>
      <div className="w-full">
        <Link
          to={service.link}
          className=" inline-flex items-center justify-start text-sm font-semibold text-blue-500 duration-200 hover:underline hover:underline-offset-4 hover:underline-green-800 mt-4"
        >
          <span className="hidden sm:block uppercase">lire la suite →</span>
          <span className="sm:hidden flex items-center">
            <IconDots /> <span className="ps-2">→</span>
          </span>
        </Link>
      </div>
    </div>
    <div></div>
  </li>
);
const CardPrincipes = ({ img, altImg, title, children, icon }) => (
  <div className="group flex flex-col items-start justify-start w-full sm:w-4/5 sm:mx-auto lg:w-1/3 h-full  md:px-2 py-2 lg:py-0 mx-2 md:my-0 hover:scale-105 transition duration-500">
    <div className="h-full mb-2">
      <img
        src={img}
        alt={altImg}
        className="h-48 w-full object-cover object-center rounded-md"
      />
      <div className="px-2">
        <div className="flex items-center py-2 pb-4">
          {icon}
          <span className="uppercase font-bold tracking-tight">{title}</span>
        </div>
        <p className="text-gray-500 text-sm">{children}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  const services = [
    {
      title: "Elagage et taille d'arbres de grandes hauteurs",
      description: [
        "La taille d'un arbre nécessite le savoir-faire de professionnels et de matériels adaptés à la grimpe",
      ],
      link: "/services/elagage",
      altImg: "Arbr'O Grimpeur - Elagage",
      icon: <IconTree />,
      img: elagage,
    },
    {
      title: "Abattage et démontage en toute sécurité",
      description: [
        "Abattage de l'arbre en direct quand l'environnement le permet ou sur des sols sans fragilités.",
        "Abattage par démontage, tronçon par tronçon lorsque l'espace au sol est restreint.",
      ],
      link: "/services/abattage",
      altImg: "Arbr'O Grimpeur - Abattage",
      icon: <IconChainsaw />,
      img: abattage,
    },
    {
      title: "Débroussaillage et entretien",
      description: [
        "Débroussailage manuel avec Rotofil pour les herbes hautes et petites broussailles.",
        "Débroussaillage au couteau pour détruire et nettoyer vos ronciers ou broussailles importantes et résistantes.",
      ],
      link: "/services/debroussaillage",
      altImg: "Arbr'O Grimpeur - Débroussaillage",
      icon: <IconScissors />,
      img: debroussaillage,
    },
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-100 via-emerald-600 to-teal-800 pb-4">
        {/* MAIN IMAGE */}
        <div className="relative">
          <img
            className="max-h-[400px] lg:max-h-[800px] w-full object-cover object-center saturate-150 drop-shadow"
            src={mainImage}
            alt="Arbr'O Grimpeur taille et élagage"
          />
          <div className="absolute top-0 w-full h-full text-teal-50">
            <div className="absolute bottom-0 w-full">
              <div className="w-full sm:w-2/3 mx-auto">
                <IconArrowDown css="w-12 h-12 animate-bounce mx-auto text-green-800" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full h-full text-teal-50">
            <div className="absolute bottom-16 w-full">
              <div className="opacity-0 w-full sm:opacity-100 sm:w-2/3 mx-auto flex items-end justify-between p-4 bg-neutral-950/80 sm:bg-neutral-950/80 hover:opacity-100 rounded-lg shadow-md">
                <div className="flex flex-col items-start justify-center sm:w-2/3">
                  <h2 className="text-lg lg:text-4xl uppercase font-bold p-1">
                    Elageur, grimpeur, cordiste
                  </h2>
                  <h2 className="text-md lg:text-3xl p-1">
                    Certifié et qualifié
                  </h2>
                  <h2 className="text-sm lg:text-xl p-1">
                    15 années d'expérience
                  </h2>
                </div>
                <div className="flex justify-end text-end">
                  <Link
                    className="hidden sm:block px-4 py-2 bg-green-800 rounded-md hover:bg-green-900 border-green-800 border-2 shadow-lg"
                    to="/about"
                  >
                    Plus d'infos →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PRESENTATION */}

        <Container css="bg-white">
          <div className="mx-auto max-w-7xl lg:flex px-8">
            <div className="relative lg:w-1/2">
              <div className="top-0 pt-16 pb-16 lg:sticky">
                <div>
                  <div className="lg:pr-24 md:pr-12">
                    <div>
                      <MainTitle>
                        Arbr'0 Grimpeur est à votre disposition que vous soyez
                        un particulier, une entreprise ou bien encore une
                        collectivité
                      </MainTitle>
                      <SecondaryTitle>
                        Interventions sur zones : Montpellier, Montpellier Nord,
                        Communauté de communes du Grand Pic St Loup, Communauté
                        de communes des Cévennes Gangeoises et Suménoises,
                        Hérault et Gard.
                      </SecondaryTitle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="pb-16 lg:pt-16">
                <ul className="flex flex-col lg:mt-0">
                  {services.map((service, index) => (
                    <CardService service={service} key={index} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <ContactButton />

        <Container css="bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-900">
                Arbr'O Grimpeur ? Quésaco ?
              </h2>
              <hr className="w-48 h-1 my-4 bg-green-800 border-0 rounded" />
            </div>

            <div className="flex flex-col md:flex-row py-4 px-2">
              <div className="flex flex-col justify-between py-4">
                <div>
                  <h3 className="px-4 text-lg tracking-tight text-gray-600 py-4">
                    Fondée en 2019, à l'initiative de Jérémie Prades,
                    l'entreprise Arbr'O Grimpeur a commencé son activité de{" "}
                    <em>taille</em>,<em> abattage</em> et <em>élagage</em> sur
                    le secteur Cazevieille, le Pic Saint Loup et Montpellier.
                  </h3>
                  <h3 className="px-4 text-lg tracking-tight text-gray-600 py-4 ">
                    Arbr'O Grimpeur est désormais domicilié à Laroque sur la
                    Communauté de communes des Cévennes Gangeoise et Sumènoise
                    et continue son activité sur de nombreux secteurs dans
                    l'Hérault et le Gard.
                  </h3>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/about"
                    className="uppercase inline-flex items-center justify-start text-sm font-semibold text-blue-500 duration-200 hover:underline hover:underline-offset-4 hover:underline-green-800 mt-4"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    en savoir plus →
                  </Link>
                </div>
              </div>
              <img
                src={profile}
                className="mb-4 mx-auto md:mb-0 md:w-1/3 rounded-lg shadow-lg ms-4"
                alt="A propos d'Arbr'O Grimpeur"
              />
            </div>
          </div>
        </Container>

        <Container css="bg-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-900">
            Pourquoi choisir Arbr'O Grimpeur pour vos travaux ?
          </h2>
          <hr className="w-48 h-1 my-4 bg-green-800 border-0 rounded" />

          <div className="flex flex-col mt-10">
            <div className="bg-green-800 text-white md:w-76 py-5 px-8 flex flex-col items-start lg:rounded-md justify-center mb-5 max-w-3xl mx-auto lg:shadow-xl shadow-neutral-300">
              <div>
                <h3 className="text-2xl font-medium py-3">
                  Un professionel engagé
                </h3>
                <p className="text-xl mb-6">
                  Arbr'O Grimpeur vous propose des solutions adaptées à votre
                  besoin et votre budget.
                </p>
              </div>
              <div>
                <p className="font-bold pb-1">
                  Les engagement de notre entreprise :
                </p>
                <ul className="mt-2 mb-4">
                  <li className="flex items-center py-2">
                    <IconCheck css="w-6 h-6" />
                    <span>Taille adaptée de vos arbres et arbustes</span>
                  </li>
                  <li className="flex items-center py-2">
                    <IconCheck css="w-6 h-6" />
                    <span>Esthétisme et propreté</span>
                  </li>
                  <li className="flex items-center py-2">
                    <IconCheck css="w-6 h-6" />
                    <span>Respect du végétal et du vivant</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row w-full items-center justify-end">
                <Link
                  to="/about"
                  className="bg-white text-green-800 font-semibold px-4 py-2 rounded-md hover:scale-105 transition duration-300"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row py-4">
              <CardPrincipes
                img={security}
                altImg="Sécurité pendant le démontage"
                title="Sécurité"
                icon={<IconSafe css="h-10 w-10 me-2 text-green-700" />}
              >
                Nous respectons strictement toutes les mesures de sécurité à la
                fois pour nos équipiers mais également pour protéger les tierces
                personnes et les alentours. La sécurité fait partie intégrante
                de savoir-faire.
              </CardPrincipes>

              <CardPrincipes
                img={ecoResponsability}
                altImg="Démarche éco-responsable"
                title="Démarche éco-responsable"
                icon={<IconEcology css="h-10 w-10 me-2 text-green-700" />}
              >
                Nous appliquons dans nos interventions toutes les techniques de
                sécurité, d’hygiène et de propreté adaptées au milieu naturel.
              </CardPrincipes>

              <CardPrincipes
                img={satisfaction}
                altImg="Satisfaction client"
                title="Satisfaction client"
                icon={<IconThumbUp css="h-10 w-10 me-2 text-green-700" />}
              >
                Le respect des engagements pris auprès de nos clients, notamment
                en terme de délais et de qualité, est une priorité.
              </CardPrincipes>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
