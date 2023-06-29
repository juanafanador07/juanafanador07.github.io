import Card from "../Components/Card";

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
          name="Proyecto 1"
          img="https://cdn.wallpapersafari.com/93/57/15OE63.jpg"
          github="https://github.com"
          url="https://test.com"
        />
        <Card
          name="Nombre del Proyecto"
          img="https://cdn.wallpapersafari.com/93/57/15OE63.jpg"
          github="https://github.com"
          url="https://test.com"
        />
        <Card
          name="Nombre del Proyecto"
          img="https://cdn.wallpapersafari.com/93/57/15OE63.jpg"
          github="https://github.com"
          url="https://test.com"
        />
        <Card
          name="Nombre del Proyecto"
          img="https://cdn.wallpapersafari.com/93/57/15OE63.jpg"
          github="https://github.com"
          url="https://test.com"
        />
      </div>
    </section>
  );
}
