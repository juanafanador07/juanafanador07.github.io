import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/styles.scss";

import Landing from "./Sections/Landing";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-dark-00">
      <Landing />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </React.StrictMode>
);
