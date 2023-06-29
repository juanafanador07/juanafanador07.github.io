import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Button from "../Components/Button";

export default function Header() {
  return (
    <header className="mx-auto container-md row sticky-top">
      <div className="header-col-1 my-2 col d-flex align-items-center ">
        <Button icon={faUser} text="Sobre Mí" href="#aboutMe" bg="btn-glass" />
        <Button
          icon={faCode}
          text="Proyectos"
          href="#projects"
          bg="btn-glass"
        />
      </div>
      <div className="header-col-2 my-2 col d-flex align-items-center ">
        <Button
          icon={faEnvelope}
          text="Contacto"
          href="#contact"
          bg="btn-glass"
        />
        <Button
          icon={faGithub}
          text="GitHub"
          href="https://github.com/juanafanador07"
          target="_blank"
          bg="btn-glass"
        />
      </div>
    </header>
  );
}
