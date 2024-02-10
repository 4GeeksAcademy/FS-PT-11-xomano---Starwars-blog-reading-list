import React, { useEffect, useContext } from "react";
import "../../styles/speech.css";
import { Context } from "../store/appContext";

export const Speech = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Lista de discurso</h1>
      <h2> Fazer mecanisno de busca</h2>
    </div>
  );
};
