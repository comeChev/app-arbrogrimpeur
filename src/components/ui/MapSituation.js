import React from "react";

const MapSituation = () => {
  return (
    <iframe
      title="Carte Arbr'O Grimpeur"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9049.10785466639!2d3.7140694066212157!3d43.92971641825288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b405ec3b4f9cad%3A0xcf82bbdb9b0e2b59!2sArbr&#39;O%20Grimpeur!5e0!3m2!1sfr!2sfr!4v1681396214185!5m2!1sfr!2sfr"
      style={{ border: 0 }}
      className="w-full sm:w-3/4 h-60 mt-1 rounded-xl shadow-lg mx-auto"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapSituation;
