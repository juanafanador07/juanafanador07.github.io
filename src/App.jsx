import { useEffect } from "react";

import loadAnimations from "./Scripts/loadAnimations";

import Landing from "./Sections/Landing";
import Header from "./Sections/Header";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

export default function App() {
  useEffect(loadAnimations, []);

  return (
    <main className="bg-dark-00">
      <Landing />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
