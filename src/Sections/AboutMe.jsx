export default function AboutMe() {
  return (
    <section className="container text-light-02" id="aboutMe">
      <div className="row p-5">
        <div className="col d-flex align-items-center justify-content-center">
          <img
            className="rounded-4"
            style={{
              width: "256px",
            }}
            src="https://placeholder.com/512/512"
          ></img>
        </div>
        <div className="col">
          <h2 className="text-light-01 my-4 fw-bold">
            Juan David Afanador Verjel
          </h2>
          <p>
            Me gusta crear sitios y aplicaciones web. Siempre estoy dispuesto a
            aprender nuevas tecnologías y dar lo mejor de mí.
          </p>
          <p>
            Actualmente, estoy estudiando Ingeniería de Sistemas en la
            Universidad Francisco de Paula Santander.
          </p>
        </div>
      </div>
    </section>
  );
}
