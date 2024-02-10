import React, { useEffect, useContext } from "react";
import "../../styles/editSpeech.css";
import { Context } from "../store/appContext";

export const EditSpeech = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Editar Discurso</h1>
      <h2>Acessivel apenas pelo dashboard page depois do login</h2>
    </div>
  );
};
