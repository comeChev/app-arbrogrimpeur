import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import IconError from "../components/ui/icons/IconError";
import IconRetry from "../components/ui/icons/IconRetry";
import IconCheckCircle from "../components/ui/icons/IconCheckCircle";
import IconHome from "../components/ui/icons/IconHome";
import Container from "../components/ui/Container";
import MainTitle from "../components/ui/titles/MainTitle";
import SecondaryTitle from "../components/ui/titles/SecondaryTitle";
import IconPhone from "../components/ui/icons/IconPhone";
import IconPlace from "../components/ui/icons/IconPlace";
import IconMail from "../components/ui/icons/IconMail";

const Contact = () => {
  const formDefault = {
    email: "",
    toName: "Jérémie PRADES",
    website: "Arbr'O Grimpeur",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  };
  const [formContact, setFormContact] = useState(formDefault);
  const [isSentMail, setIsSentMail] = useState(null);
  const [isPendingMail, setIsPendingMail] = useState(false);

  const handleInput = (e) => {
    setFormContact({
      ...formContact,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formContact.phone === "")
      setFormContact({ ...formContact, phone: "Non communiqué" });
    setIsPendingMail(true);

    emailjs
      .send(
        "service_l8f7a9s", //service_ID
        "template_lmzhwui", //template_ID
        formContact,
        "0IzbmdTpA0wAxNuMi" //public_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsPendingMail(false);
          setIsSentMail(true);
          setFormContact(formDefault);
        },
        (error) => {
          console.log(error.text);
          setIsPendingMail(false);
          setIsSentMail(false);
        }
      );
  };

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet></Helmet>
      <Container>
        {isSentMail === null ? (
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <MainTitle>Contactez-nous</MainTitle>
            <SecondaryTitle>
              Vous avez besoin de faire appel à nos services ? Vous souhaitez
              faire un commentaire concernant une prestation effectuée ? Vous
              avez des questions particulières ? N'hésitez pas et envoyer nous
              un message !
            </SecondaryTitle>

            <form onSubmit={handleSubmitForm} className={`space-y-8 relative`}>
              <div className={`${isPendingMail ? "opacity-20" : ""}`}>
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Votre email
                  </label>
                  <input
                    onChange={handleInput}
                    value={formContact.email}
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="votre_mail@exemple.com"
                    required
                    disabled={isPendingMail}
                  />
                </div>
                {/* LASTNAME */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Votre nom
                  </label>
                  <input
                    onChange={handleInput}
                    value={formContact.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Votre nom"
                    required
                    disabled={isPendingMail}
                  />
                </div>
                {/* FIRSTNAME */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Votre prénom
                  </label>
                  <input
                    onChange={handleInput}
                    value={formContact.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Votre prénom"
                    required
                    disabled={isPendingMail}
                  />
                </div>
                {/* PHONE */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
                  >
                    Votre téléphone
                    <span className="text-neutral-400 ps-2">- Optionnel</span>
                  </label>
                  <input
                    onChange={handleInput}
                    value={formContact.phone}
                    type="tel"
                    name="phone"
                    id="phone"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="06 77 88 99 00"
                    disabled={isPendingMail}
                  />
                </div>
                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex justify-between mb-2 text-sm font-medium text-gray-900"
                  >
                    Votre message
                  </label>
                  <textarea
                    onChange={handleInput}
                    value={formContact.message}
                    rows="5"
                    autoCorrect="on"
                    name="message"
                    id="message"
                    className="resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Inscrivez votre message ici"
                    required
                    disabled={isPendingMail}
                  />
                </div>
                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-800 hover:bg-green-900"
                  disabled={isPendingMail}
                >
                  Envoyer votre message
                </button>
              </div>
              {isPendingMail ? (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                  <IconRetry css="w-20 h-20 mr-2 animate-spin text-green-800" />
                </div>
              ) : null}
            </form>
          </div>
        ) : null}
        {isSentMail === true ? (
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <IconCheckCircle css="h-16 w-16 md:h-20 md:w-20 text-green-600 mb-10" />
            <MainTitle>Votre message nous a bien été envoyé !</MainTitle>
            <SecondaryTitle>
              Nous tâchons de répondre dans les plus brefs délais à l'ensemble
              des demandes qui nous sont faites. Toutefois, nous vous invitons à
              nous contacter soit par mail (contact@arbrogrimpeur.fr) ou par
              téléphone (06 77 88 99 00) si jamais vous n'avez pas reçu de
              réponse sous quinzaine.
            </SecondaryTitle>
            <button className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-900 ">
              <Link className="flex items-center" to="/">
                <IconHome css="h-8 w-8 mr-2" />
                <span>Retour à l'accueil</span>
              </Link>
            </button>
          </div>
        ) : isSentMail === false ? (
          <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
            <IconError css="h-16 w-16 md:h-20 md:w-20 text-red-600 mb-10" />
            <MainTitle>
              Votre message n'a pas pu être envoyé et nous sommes désolés !
            </MainTitle>
            <SecondaryTitle>
              Il est possible que votre message ne correspondait pas aux
              exigences de sécurité ou encore qu'il y ait eu une erreur liée au
              serveur de distribution. Nous vous invitons à réitérer votre
              demande en cliquant sur le lien ci-dessous:
            </SecondaryTitle>

            <button
              className="group bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-900 flex items-center"
              onClick={() => setIsSentMail(null)}
            >
              <IconRetry css="h-8 w-8 mr-2 group-hover:-rotate-180 transition duration-700" />
              <span>Réessayer d'envoyer votre message</span>
            </button>
          </div>
        ) : null}
      </Container>
      <Container>
        <div className="flex flex-col sm:flex-row items-start">
          <div className="flex flex-col w-full md:w-1/3 items-start md:items-center">
            <div className="py-4 font-light text-gray-500 sm:text-xl text-start">
              <IconPlace css="w-16 h-16 text-green-800 mb-3" />
              <p className="uppercase">Arbr'O Grimpeur</p>
              <p>Jérémie PRADES</p>
              <p>3, lotissement Le Vigné</p>
              <p>34190 LAROQUE</p>
              <p>Hérault, France</p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 items-start md:items-center">
            <div className="py-4 font-light text-gray-500 sm:text-xl text-start">
              <IconPhone css="w-16 h-16 text-green-800 mb-3" />
              <p className="">+33 (0)6 23 74 70 77</p>
              <p>+33 (0)9 75 43 05 29</p>
            </div>
          </div>
          <div className="flex flex-colw-full md:w-1/3 items-start md:items-center">
            <div className="py-4 font-light text-gray-500 sm:text-xl text-start">
              <IconMail css="w-16 h-16 text-green-800 mb-3" />
              <p>arbro.grimpeur@gmail.com</p>
            </div>
          </div>
        </div>
        <iframe
          title="Carte Arbr'O Grimpeur"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9049.10785466639!2d3.7140694066212157!3d43.92971641825288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b405ec3b4f9cad%3A0xcf82bbdb9b0e2b59!2sArbr&#39;O%20Grimpeur!5e0!3m2!1sfr!2sfr!4v1681396214185!5m2!1sfr!2sfr"
          style={{ border: 0 }}
          className="w-full sm:w-3/4 h-60 mt-1 rounded-xl shadow-lg mx-auto"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </>
  );
};

export default Contact;
