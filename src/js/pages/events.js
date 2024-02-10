import React, { useEffect, useContext } from "react";
import "../../styles/events.css";
import { Context } from "../store/appContext";

export const Events = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Pagina de Calendários</h1>
    </div>
  );
};
