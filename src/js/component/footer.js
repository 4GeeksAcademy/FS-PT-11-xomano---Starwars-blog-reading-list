import React, { useEffect, useContext } from "react";
import "../../styles/footer.css";
import { Context } from "../store/appContext";
import { ListCards } from "../component/cards";

export const Footer = () => {
  const { store, actions } = useContext(Context);

  return (
    <footer className="footer">
      <h1>Footer</h1>
      <h2>Lembrar de dizer que o site não é oficial da Igreja</h2>
    </footer>
  );
};
