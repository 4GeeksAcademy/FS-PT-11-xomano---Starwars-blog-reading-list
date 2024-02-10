import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer";
import { Home } from "./pages/home";
import { SpeechId } from "./pages/speechId";
import { Events } from "./pages/events";
import { NewSpeech } from "./pages/newSpeech";
import { Speech } from "./pages/speech";
import { NotFoundPage } from "./pages/notFoundPage";
import { EventId } from "./pages/eventId";
import { Login } from "./pages/login.js";
import { Dashboard } from "./pages/dashboard.js";
import { EditSpeech } from "./pages/editSpeech.js";
import { CreateEvent } from "./pages/createEvent.js";

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
            <Route path="/lista-de-discursos" element={<Speech />} />
            <Route path="/discurso/:id" element={<SpeechId />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/eventos/:id" element={<EventId />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/novo-discurso" element={<NewSpeech />} />
            <Route path="/editar-discurso" element={<EditSpeech />} />
            <Route path="/criar-evento" element={<CreateEvent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
