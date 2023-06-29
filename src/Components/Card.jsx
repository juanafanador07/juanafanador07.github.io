import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Card({ img, name, github, url }) {
  return (
    <div className="col my-3 d-flex align-items-center justify-content-center">
      <div className="card rounded-4 bg-dark-01" style={{ width: "16rem" }}>
        <img src={img} className="card-img-top rounded-4" alt=""></img>
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
            />
            <Button icon={faLink} href={url} bg="bg-dark-02" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
}
