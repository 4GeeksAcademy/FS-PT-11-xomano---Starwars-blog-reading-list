import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetId } from "./component/planetId";
import { Planets } from "./component/planets";
import { People } from "./component/people";
import { PeopleId } from "./component/peopleId";
import { Vehicles } from "./component/vehicles";
import { VehicleId } from "./component/vehicleId";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container-fluid fullpage">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:elements" element={<Planets />} />
						<Route path="/:elements/:id" element={<PlanetId />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planetId" element={<PlanetId />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:peopleId" element={<PeopleId />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:vehicleId" element={<VehicleId />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
