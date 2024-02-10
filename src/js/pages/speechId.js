import React, { useEffect, useContext } from "react";
import "../../styles/speechId.css";
import { Context } from "../store/appContext";

export const SpeechId = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Discurso ID</h1>
      <h2>Mostrar o discurso selecionado :id</h2>
    </div>
  );
};
