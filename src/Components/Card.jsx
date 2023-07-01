import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";
import Button from "./Button";

export default function Card({ src, name, github, url }) {
  return (
    <div className="col my-3 d-flex align-items-center justify-content-center">
      <div className="card rounded-4 bg-dark-01" style={{ width: "16rem" }}>
        <Image
          className="card-img-top rounded-4 w-100 h-100"
          src={src}
          alt={"Imagen de " + name}
          width="1920px"
          height="1080px"
        />
        <div className="card-body">
          <h3 className="card-title text-center fw-bold text-light-01 fs-5">
            {name}
          </h3>
          <div className="d-flex align-items-center justify-content-end">
            <Button
              icon={faGithub}
              href={github}
              bg="bg-dark-02"
              target="_blank"
              adittionalAttrs={{
                "aria-label": "Ver repositorio.",
              }}
            />
            <Button
              icon={faLink}
              href={url}
              bg="bg-dark-02"
              target="_blank"
              adittionalAttrs={{
                "aria-label": "Ver proyecto en vivo.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
