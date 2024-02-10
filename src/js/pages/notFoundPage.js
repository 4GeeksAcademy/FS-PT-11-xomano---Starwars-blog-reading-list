import React, { useEffect, useContext } from "react";
import "../../styles/notFoundPage.css";
import { Context } from "../store/appContext";

export const NotFoundPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Página não encontrada</h1>
      <h2>**-**</h2>
    </div>
  );
};
