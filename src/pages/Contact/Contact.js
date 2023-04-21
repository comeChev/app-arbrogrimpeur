import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
//images

//components
import Container from "../../components/ui/Container";
import MainTitle from "../../components/ui/titles/MainTitle";
import SecondaryTitle from "../../components/ui/titles/SecondaryTitle";
import FormContact from "./FormContact";
import MessagePostContact from "./MessagePostContact";
import ContactDetails from "./ContactDetails";
import MapSituation from "../../components/ui/MapSituation";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  const navigate = useNavigate();

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 1280);
  });

  const handleInput = (e) => {
    setFormContact({
      ...formContact,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const sendMail = (body) => {
    emailjs
      .send(
        "service_l8f7a9s", //service_ID
        "template_lmzhwui", //template_ID
        body,
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsPendingMail(true);
    if (formContact.phone === "")
      setFormContact({ ...formContact, phone: "Non communiqué" });
    sendMail(formContact);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Container css="md:flex">
        {!isMobile ? (
          <div className="flex flex-col items-center justify-center py-8 lg:py-16">
            <ContactDetails css="py-4" />
          </div>
        ) : null}

        {isSentMail === null ? (
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <MainTitle>Contactez-nous</MainTitle>
            <SecondaryTitle>
              Vous avez besoin de faire appel à nos services ? Vous souhaitez
              faire un commentaire concernant une prestation effectuée ? Vous
              avez des questions particulières ? N'hésitez pas et envoyer nous
              un message !
            </SecondaryTitle>

            <FormContact
              handleSubmitForm={handleSubmitForm}
              handleInput={handleInput}
              isPendingMail={isPendingMail}
              formContact={formContact}
            />
          </div>
        ) : null}
        {isSentMail === true ? (
          <MessagePostContact
            type="success"
            messageTitle="Votre message nous a bien été envoyé !"
            message="Nous tâchons de répondre dans les plus brefs délais à l'ensemble
          des demandes qui nous sont faites. Toutefois, nous vous invitons à
          nous contacter soit par mail (contact@arbrogrimpeur.fr) ou par
          téléphone (06 77 88 99 00) si jamais vous n'avez pas reçu de
          réponse sous quinzaine."
            textButton="Retour à l'accueil"
            onClick={() => navigate("/")}
          />
        ) : isSentMail === false ? (
          <MessagePostContact
            type="error"
            messageTitle="Votre message n'a pas pu être envoyé et nous sommes désolés !"
            message="Il est possible que votre message ne correspondait pas aux
            exigences de sécurité ou encore qu'il y ait eu une erreur liée au
            serveur de distribution. Nous vous invitons à réitérer votre
            demande en cliquant sur le lien ci-dessous."
            textButton="Réessayer d'envoyer votre message"
            onClick={() => setIsSentMail(null)}
          />
        ) : null}
      </Container>

      {isMobile ? (
        <Container>
          <ContactDetails />
        </Container>
      ) : null}

      <Container>
        <MapSituation />
      </Container>
    </>
  );
};

export default Contact;
