import React from "react";
import ElementContact from "./ElementContact";
import IconPhone from "../../components/ui/icons/IconPhone";
import IconPlace from "../../components/ui/icons/IconPlace";
import IconMail from "../../components/ui/icons/IconMail";

const ContactDetails = ({ css }) => {
  return (
    <>
      <ElementContact
        title="Appelez-nous"
        content="+33 (0)6 23 74 70 77"
        css={css}
      >
        <IconPhone css="w-10 h-10 text-green-800" />
      </ElementContact>

      <ElementContact
        title="Adresse"
        content="Jérémie PRADES | 3, lotissement le Vigné, 34190 LAROQUE"
        css={css}
      >
        <IconPlace css="w-10 h-10 text-green-800" />
      </ElementContact>

      <ElementContact
        title="Envoyez-nous un mail"
        content="arbro.grimpeur@gmail.com"
        css={css}
      >
        <IconMail css="w-10 h-10 text-green-800" />
      </ElementContact>
    </>
  );
};

export default ContactDetails;
