import React, { useEffect, useContext } from "react";
import "../../styles/eventId.css";
import { Context } from "../store/appContext";

export const EventId = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Atividade selecionada :id</h1>
    </div>
  );
};
