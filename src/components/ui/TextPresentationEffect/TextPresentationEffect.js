import React from "react";
import "./TextPresentationEffect.css";

const TextPresentationEffect = () => {
  return (
    <div className="absolute bottom-2 container w-[70] h-[200px] mb-48 mx-auto text-yellow-600 ">
      <div className="upper">Arbr'O Grimpeur</div>
      <div className="lower">Arbr'O Grimpeur</div>
      <div id="inside" className="inside text-lg lg:text-2xl">
        <h1>Elageur, Grimpeur, Cordiste</h1>
        <h2>Certification d'état - expérience +15ans</h2>
      </div>
    </div>
  );
};

export default TextPresentationEffect;
