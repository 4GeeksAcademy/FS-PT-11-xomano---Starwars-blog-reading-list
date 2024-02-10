import React, { useEffect, useContext } from "react";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { ListCards } from "../component/cards";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Página de login</h1>
      <h2>Página Não indexada</h2>
      <p>
        Fazer login para criar, editar ou excluir discurso <br /> Redirecionar
        automaticamente para /novo-discurso
      </p>
    </div>
  );
};
