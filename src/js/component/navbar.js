import React, { useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const information = store.favorites;

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>
          {/* {logo} */}
          <img src="src/img/logo.jpg" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i class="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="btn-navbar" to={"/lista-de-discursos"}>
              Discursos
            </Link>
            <p className="separador">|</p>
            <Link className="btn-navbar" to={"/atividades"}>
              Atividades
            </Link>
            <p className="separador">|</p>
            <Link className="btn-navbar" to={"/historia"}>
              História
            </Link>
            <p className="separador">|</p>
            <Link className="btn-navbar" to={"/contato"}>
              Contatos
            </Link>
            <p className="separador">|</p>
            <Link className="btn-navbar" to={"/login"}>
              <i className="bi bi-building-lock"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
