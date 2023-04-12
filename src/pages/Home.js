import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//images
import mainImage from "../assets/images/static/main-image.jpg";
import elagage from "../assets/images/static/elagage.jpg";
import debroussaillage from "../assets/images//static/debroussaillage.jpeg";
import abattage from "../assets/images/static/abattage.jpeg";
import profile from "../assets/images/static/Démontage_de_cèdre.jpeg";
import security from "../assets/images/static/Demontage-de-charpentiere-avec-retention-1536x1020.jpg";
import ecoResponsability from "../assets/images/static/eco_responsability.jpg";
import satisfaction from "../assets/images/static/Satisfaction-client-002-1024x676.jpg";
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

const CardService = ({ service }) => (
  <li className="flex flex-col mb-4">
    <img
      src={service.img}
      className="w-full max-h-48 lg:max-h-96 object-cover rounded-md"
      alt={service.altImg}
    />
    <div className="flex flex-col mx-2 items-start justify-between">
      <p className="text-md font-medium leading-6 text-black uppercase py-2">
        {service.title}
      </p>
      <div className="text-gray-400 text-sm">
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
      <Helmet>
        <title>
          Arbr'O Grimpeur - Elagage, débroussaillage et abattage en Hérault et
          dans le Gard
        </title>
      </Helmet>

      <div className="w-full bg-gradient-to-r from-green-100 via-emerald-600 to-teal-800 pb-4">
        {/* MAIN IMAGE */}
        <div className="relative">
          <img
            className="max-h-[400px] lg:max-h-[800px] w-full object-cover object-center saturate-150 drop-shadow"
            src={mainImage}
            alt="Arbr'O Grimpeur taille et élagage"
          />
          <div className="absolute top-0 w-full h-full text-teal-50">
            <div className="absolute bottom-4 w-full">
              <div className="opacity-0 w-full sm:opacity-100 sm:w-2/3 mx-auto flex items-end justify-between p-4 bg-neutral-950/80 sm:bg-neutral-950/80 hover:opacity-100 rounded-lg shadow-md">
                <div className="flex flex-col items-start justify-center sm:w-2/3">
                  <h1 className="text-lg lg:text-4xl uppercase font-bold p-1">
                    Elageur, grimpeur, cordiste
                  </h1>
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
        <section className="bg-teal-50 w-4/5 mx-auto rounded-lg my-16 py-4">
          <div className="mx-auto max-w-7xl lg:flex px-8">
            <div className="relative lg:w-1/2">
              <div className="top-0 pt-16 pb-16 lg:sticky">
                <div>
                  <div className="lg:pr-24 md:pr-12">
                    <div>
                      <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                        Arbr'0 Grimpeur est à votre disposition que vous soyez
                        un particulier, une entreprise ou bien encore une
                        collectivité
                      </p>
                      <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                        Interventions sur zones : Montpellier, Montpellier Nord,
                        Communauté de communes du Grand Pic St Loup, Communauté
                        de communes des Cévennes Gangeoises et Suménoises,
                        Hérault et Gard.
                      </p>
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
        </section>

        <ContactButton />

        <section className="bg-teal-50 w-4/5 mx-auto rounded-lg p-4 flex my-16 flex-col sm:flex-row">
          <div className="h-full  w-full mr-10">
            <div className="flex flex-col md:flex-row py-4 px-2">
              <div className="flex flex-col justify-between py-4">
                <h3 className="px-4 text-lg tracking-tight text-gray-600 py-4">
                  Fondée en 2019, à l'initiative de Jérémie Prades, l'entreprise
                  Arbr'O Grimpeur a commencé son activité de <em>taille</em>,
                  <em> abattage</em> et <em>élagage</em> sur le secteur
                  Cazevieille, le Pic Saint Loup et Montpellier.
                </h3>
                <h3 className="px-4 text-lg tracking-tight text-gray-600 py-4 ">
                  Arbr'O Grimpeur est désormais domicilié à Laroque sur la
                  Communauté de communes des Cévennes Gangeoise et Sumènoise et
                  continue son activité sur de nombreux secteurs dans l'Hérault
                  et le Gard.
                </h3>
                <div className="flex justify-end mt-4">
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
        </section>

        <section className="bg-teal-50 w-4/5 mx-auto rounded-lg p-4 mt-16 mb-32">
          <h2 className="text-4xl py-6 px-4">
            Pourquoi choisir Arbr'O Grimpeur pour vos travaux ?
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="bg-green-800 text-white md:w-76 py-5 px-8 flex flex-col items-start rounded-md justify-center md:justify-around">
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
                  className="bg-white text-green-800 font-semibold px-4 py-2 rounded-md"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row py-4">
              <div className="flex flex-col items-start justify-start w-full lg:w-1/3 h-full px-4 md:px-2 py-2 lg:py-0 mx-2 md:my-0">
                <div className="h-full mb-2">
                  <img
                    src={security}
                    alt="Sécurité pendant le démontage"
                    className="h-48 w-full object-cover object-center rounded-md"
                  />
                  <div className="px-2">
                    <div className="flex items-center py-2 pb-4">
                      <IconSafe css="h-10 w-10 me-2 text-green-700" />
                      <span className="uppercase">Sécurité</span>
                    </div>
                    <p>
                      Nous appliquons dans nos interventions toutes les
                      techniques de sécurité, d’hygiène et de propreté adaptées
                      au milieu naturel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full lg:w-1/3 h-full px-4 md:px-2 py-2 lg:py-0 mx-2">
                <img
                  src={ecoResponsability}
                  alt="Démarche éco-responsable"
                  className="h-48 w-full object-cover object-center rounded-md"
                />
                <div className="flex items-center py-2">
                  <IconEcology css="h-10 w-10 me-2 text-green-700" />
                  <span className="uppercase">Démarche eco-responsable</span>
                </div>
                <p>
                  Nous appliquons dans nos interventions toutes les techniques
                  de sécurité, d’hygiène et de propreté adaptées au milieu
                  naturel
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full lg:w-1/3 h-full px-4 md:px-2 py-2 lg:py-0 mx-2">
                <img
                  src={satisfaction}
                  alt="Satisfaction client"
                  className="h-48 w-full object-cover object-center rounded-md"
                />
                <div className="flex items-center py-2">
                  <IconThumbUp css="h-10 w-10 me-2 text-green-700" />
                  <span className="uppercase">Satisfaction client</span>
                </div>
                <p>
                  Le respect des engagements pris auprès de nos clients,
                  notamment en terme de délais et de qualité, est une priorité.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
