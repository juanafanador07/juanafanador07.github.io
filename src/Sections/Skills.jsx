import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Progress from "../Components/Progress";

export default function Skills() {
  return (
    <section className="container p-5 text-light-02">
      <h2 className="text-center my-4 fw-bold text-light-01">
        ¿Qué tecnologías uso?
      </h2>
      <p className="text-center">Me especializo en HTML, CSS y Javascript.</p>

      <div className="row animation animation-delayed animation-fade-in">
        <Progress icon={faHtml5} name="HTML" percent={80} color="#E86229" />
        <Progress icon={faCss3Alt} name="CSS" percent={80} color="#0091D5" />
        <Progress
          icon={faJsSquare}
          name="JavaScript"
          percent={80}
          color="#E9D44D"
        />
        <Progress icon={faReact} name="React" percent={50} color="#00D1F7" />
        <Progress icon={faNodeJs} name="NodeJS" percent={70} color="#6EB351" />
        <Progress icon={faGitAlt} name="Git" percent={60} color="#E94E31" />
      </div>
    </section>
  );
}
