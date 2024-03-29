import Image from "../Components/Image";
import perfil from "../img/profile.png?preset=profile";

export default function AboutMe() {
  return (
    <section className="container text-light-02" id="aboutMe">
      <div className="row p-5 overflow-hidden">
        <div className="col d-flex align-items-center justify-content-center">
          <div style={{ width: "256px" }}>
            <Image
              className="w-100 h-100 rounded-4 animation animation-fade-right"
              src={perfil}
              width="256px"
              height="256px"
            />
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div className="animation animation-delayed animation-fade-left">
            <h2 className="text-light-01 my-4 fw-bold">
              Juan David Afanador Verjel
            </h2>
            <p>
              Me gusta crear sitios y aplicaciones web. Siempre estoy dispuesto
              a aprender nuevas tecnologías y dar lo mejor de mí.
            </p>
            <p>
              Actualmente, estoy estudiando Ingeniería de Sistemas en la
              Universidad Francisco de Paula Santander.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
