import React from "react";
import IconRetry from "../../components/ui/icons/IconRetry";
import InputForm from "./InputForm";

const FormContact = ({
  handleSubmitForm,
  handleInput,
  isPendingMail,
  formContact,
}) => {
  return (
    <form onSubmit={handleSubmitForm} className={`space-y-8 relative`}>
      <div className={`${isPendingMail ? "opacity-20" : ""}`}>
        {/* EMAIL */}
        <InputForm
          name="email"
          label="Votre email"
          type="email"
          value={formContact.email}
          onChange={handleInput}
          placeholder="votre_mail@example.com"
          disabledValue={isPendingMail}
        />
        {/* LASTNAME */}
        <InputForm
          name="lastName"
          label="Votre nom de famille"
          type="text"
          value={formContact.lastName}
          onChange={handleInput}
          placeholder="VOTRE NOM"
          disabledValue={isPendingMail}
          css="uppercase"
        />
        {/* FIRSTNAME */}
        <InputForm
          name="firstName"
          label="Votre prénom"
          type="text"
          value={formContact.firstName}
          onChange={handleInput}
          placeholder="Votre prénom"
          disabledValue={isPendingMail}
          css="capitalize"
        />
        {/* PHONE */}
        <InputForm
          name="phone"
          label="Votre téléphone de contact"
          type="tel"
          value={formContact.phone}
          onChange={handleInput}
          placeholder="06 77 88 99 00 | +33 6 77 88 99 00"
          disabledValue={isPendingMail}
          isOptionnal={true}
        />
        {/* MESSAGE */}
        <div className="my-3 py-4">
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
  );
};

export default FormContact;
