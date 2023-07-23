import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const information = store.favorites

	return (
		<nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="container-fluid collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								{information.length} Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
								{
									information.length == 0 ? <li className="text-center">No favorite have you <br/> <i class="fa-solid fa-book-journal-whills"></i></li> :
									information?.map(info =>
										<li className="d-flex flex-row justify-content-between p-2" key={info.name}>
											<p>{info.name}</p>
											<span onClick={() => actions.removeFavorite(info.name)}>
												<i className="fa-solid fa-xmark"></i>
											</span>
										</li> 
									)
								}
								
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


