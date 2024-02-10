import React, { useEffect, useContext } from "react";
import "../../styles/newSpeech.css";
import { Context } from "../store/appContext";
import { ListCards } from "../component/cards";

export const NewSpeech = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Criar novo Discurso</h1>
      <h2> Página Não indexada</h2>
      <p>
        Criar login para acessar o painel de criar, editar e excluir discursos
      </p>
    </div>
  );
};
