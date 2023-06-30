import Card from "../Components/Card";

import climmap from "../img/climapp.png?preset=project";

export default function Projects() {
  return (
    <section className="container p-5 text-light-02" id="projects">
      <h2 className="text-center my-4 fw-bold text-light-01">¿Qué he hecho?</h2>
      <p className="text-center">
        Estos son algunos{" "}
        <span className="text-decoration-line-through">bugs</span> proyectos que
        he creado.
      </p>

      <div className="row">
        <Card
          name="Climapp"
          src={climmap}
          github="https://github.com/juanafanador07/climapp/"
          url="https://climmap.onrender.com/"
        />
      </div>
    </section>
  );
}
