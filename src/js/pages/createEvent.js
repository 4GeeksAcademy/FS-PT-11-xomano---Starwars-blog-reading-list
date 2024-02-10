import React, { useEffect, useContext } from "react";
import "../../styles/createEvent.css";
import { Context } from "../store/appContext";

export const CreateEvent = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Criar novo Evento</h1>
      <h2>acessivel apenas pelo dashboard depois do login</h2>
    </div>
  );
};
