import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container navbar navbar-light bg-light p-4">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src="https://static.wikia.nocookie.net/logopedia/images/2/25/Star_Wars.svg" />
        </span>
      </Link>
      <div className="ml-auto">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
