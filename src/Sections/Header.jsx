import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Button from "../Components/Button";
import { useEffect } from "react";

export default function Header() {
  let header = null;
  let sectionElement = null;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    header = document.querySelector("header");
    sectionElement = document.querySelector("section");
  });

  function handleScroll() {
    const pos = sectionElement.getBoundingClientRect();
    const buttons = header.querySelectorAll(".btn");

    if (pos.bottom < 0) {
      sectionElement.classList.add("my-5");
      header.classList.add("header-sticky");
      buttons.forEach((button) => {
        button.classList.remove("bg-dark-01");
      });
    } else {
      sectionElement.classList.remove("my-5");
      header.classList.remove("header-sticky");
      buttons.forEach((button) => {
        button.classList.add("bg-dark-01");
      });
    }
  }

  return (
    <header className="my-4">
      <div className="row">
        <div className="header-col-1 col d-flex align-items-center ">
          <Button icon={faUser} text="Sobre Mí" href="#aboutMe" />
          <Button icon={faCode} text="Proyectos" href="#projects" />
        </div>
        <div className="header-col-2 col d-flex align-items-center ">
          <Button icon={faEnvelope} text="Contacto" href="#contact" />
          <Button
            icon={faGithub}
            text="GitHub"
            href="https://github.com/juanafanador07"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
}
