import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
//images
import corde from "../../assets/images/static/corde.jpg";
import debroussaillage from "../../assets/images/static/debroussaillage.jpeg";
import abattage from "../../assets/images/static/abattage.jpeg";
import elagage from "../../assets/images/static/Nettoyage_de_palmier.jpg";
import debroussaillageAvant from "../../assets/images/debroussaillage/Avant_débroussaillage.jpeg";
import debroussaillageApres from "../../assets/images/debroussaillage/Après_débroussaillage.jpeg";
import debroussaillageTool from "../../assets/images/debroussaillage/Débroussaillage_avec_machine_thermique_autotractée.jpeg";
//components
import QuestionFAQ from "./QuestionFAQ";
import IconScissors from "../../components/ui/icons/IconScissors";
import IconChainsaw from "../../components/ui/icons/IconChainsaw";
import IconTree from "../../components/ui/icons/IconTree";
import IconRope from "../../components/ui/icons/IconRope";
import Gallery from "../../components/ui/Gallery";
import SliderBeforeAfter from "../../components/ui/SliderBeforeAfter/SliderBeforeAfter";
//data
import services from "./DataServices.json";

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

const abattageImages = importAll(
  require.context("../../assets/images/abattage", false, /\.(png|jpe?g|svg)$/)
);
console.log(abattageImages);
const elagageImages = importAll(
  require.context("../../assets/images/elagage", false, /\.(png|jpe?g|svg)$/)
);
const debroussaillageImages = importAll(
  require.context(
    "../../assets/images/debroussaillage",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const cordisteImages = importAll(
  require.context("../../assets/images/cordiste", false, /\.(png|jpe?g|svg)$/)
);

const DynamicImages = ({ id }) => {
  if (id === "elagage") return <Gallery images={elagageImages} />;
  if (id === "debroussaillage")
    return <Gallery images={debroussaillageImages} />;
  if (id === "abattage") return <Gallery images={abattageImages} />;
  if (id === "cordiste") return <Gallery images={cordisteImages} />;
};

const DynamicMainImage = ({ id }) => {
  if (id === "elagage")
    return (
      <img
        src={elagage}
        className="w-full max-h-64 object-cover object-center shadow-lg rounded-md mb-8"
        alt="Elagage - illustration"
      />
    );
  if (id === "debroussaillage")
    return (
      <img
        src={debroussaillage}
        className="w-full max-h-64 object-cover object-center shadow-lg rounded-md mb-8"
        alt="Débroussaillage - illustration"
      />
    );
  if (id === "abattage")
    return (
      <img
        src={abattage}
        className="w-full max-h-64 object-cover shadow-lg rounded-md mb-8"
        alt="Abattage - illustration"
      />
    );
  if (id === "cordiste")
    return (
      <img
        src={corde}
        className="w-full max-h-64 object-cover shadow-lg rounded-md mb-8"
        alt="Cordiste - illustration"
      />
    );
};

const DynamicIcon = ({ id }) => {
  if (id === "elagage") return <IconTree css="h-12 w-12 md:hidden" />;
  if (id === "debroussaillage")
    return <IconScissors css="h-12 w-12 md:hidden" />;
  if (id === "abattage") return <IconChainsaw css="h-12 w-12 md:hidden" />;
  if (id === "cordiste") return <IconRope css="h-12 w-12 md:hidden" />;
};

const Services = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const { nameService } = useParams();

  const searchService = (name) => {
    return services.find((service) => service.id === name);
  };

  const [service, setService] = useState(searchService(nameService));

  const debroussaillageBefore = {
    img: debroussaillageAvant,
    alt: "debroussaillage avant",
    text: "Avant débroussaillage",
  };
  const debroussaillageAfter = {
    img: debroussaillageApres,
    alt: "debroussaillage après",
    text: "Après débroussaillage",
  };

  useEffect(() => {
    setService(searchService(nameService));
  }, [nameService]);
  // HELMET FOR UPDATING META TAGS & TITLE
  return (
    <>
      <Helmet>
        <title>Arbr'O Grimpeur - Nos Services</title>
        <meta
          name="description"
          content="Arbr'O Grimpeur - Découvrez nos services : de l'élagage à l'abattage d'arbre en passant par l'entretien de vos espaces verts ou encore des travaux à accès diffile dans l'Hérault et le Gard, secteurs Ganges, Montpellier, Pic Saint Loup."
        />
      </Helmet>

      {/* <Quote css="block lg:hidden text-white bg-gradient-to-r  from-green-100 via-emerald-600 to-teal-800" /> */}

      <div className="lg:w-4/5 lg:mx-auto py-4 px-4 lg:px-8 text-center sm:shadow-lg bg-emerald-100/80 pt-20 pb-10 mb-20 rounded-lg">
        <h1 className="my-8 font-medium tracking-tight text-black text-3xl sm:text-4xl text-start">
          Arbr'O Grimpeur vous propose une multitude de services allant du plus
          spécifique aux travaux les plus généraux.{" "}
        </h1>
        <div className="mx-auto w-full">
          <ul className="flex justify-around text-sm sm:justify-center items-center sm:text-lg">
            {services.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/services/${item.id}`}
                  className={`${
                    nameService === item.id
                      ? "bg-white text-teal-600"
                      : "bg-teal-800 text-white hover:text-teal-600 hover:bg-white"
                  } p-2 mx-2 border-2 border-teal-800 me-1 rounded-lg flex items-center justify-start`}
                >
                  <DynamicIcon id={item.id} />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {service && (
        <div className="lg:w-4/5 lg:mx-auto py-4 px-4 lg:px-8 text-center sm:shadow-lg bg-emerald-100/80">
          <>
            <h1 className="text-3xl p-4 my-2 rounded-lg uppercase font-semibold mt-8">
              {service.name}
              <hr className="w-48 h-1 mx-auto my-4 bg-green-800 border-0 rounded" />
            </h1>
            <DynamicMainImage id={nameService} />
            <section>
              <div className="items-center w-full lg:w-[70%] lg:px-5 py-4 mx-auto">
                <ul className="grid grid-cols-1 gap-4 list-none">
                  {service.faq.map((question, index) => (
                    <QuestionFAQ item={question} key={index} />
                  ))}
                </ul>
              </div>
            </section>
          </>
        </div>
      )}
      <DynamicImages id={nameService} />

      {nameService === "debroussaillage" && (
        <SliderBeforeAfter
          image2={debroussaillageBefore}
          image1={debroussaillageAfter}
          text="Débroussaillage à Assas(34)"
          description="Utilisation d'une machine thermique autotractée"
          imgModal={debroussaillageTool}
          textModal="Machine thermique autotractée"
          altModal="Machine thermique autotractée"
        />
      )}
    </>
  );
};

export default Services;
