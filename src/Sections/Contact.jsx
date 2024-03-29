import { useState } from "react";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Components/Button";
import Input from "../Components/Input";
import ModalMsg from "../Components/ModalMsg";

export default function Contact() {
  const [alert, setAlert] = useState({
    type: null,
    message: null,
  });

  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const copy = { ...form };
    copy[e.target.name] = e.target.value;

    setForm(copy);
  }

  async function handleSubmit() {
    try {
      setAlert({
        type: null,
        message: null,
      });
      const req = await fetch("https://sendemails-wl65bpvafq-uc.a.run.app", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          ...form,
        }),
      });

      const res = await req.json();

      if (res.status === "sucess") {
        setAlert({
          type: "info",
          message: "Mensaje enviado.",
        });
      }

      if (res.status === "error-invalid-email") {
        setAlert({
          type: "error",
          message: "El email no es válido.",
        });
      }

      if (res.status === "error-missing-body") {
        setAlert({
          type: "error",
          message: "Hay campos sin rellenar.",
        });
      }
    } catch (err) {
      setAlert({
        type: "error",
        message: "Ha ocurrido un error. Inténtalo más tarde.",
      });
      console.error(err);
    }
  }

  return (
    <section className="container p-5 text-light-02" id="contact">
      <ModalMsg message={alert.message} type={alert.type} />
      <h2 className="text-center my-4 fw-bold text-light-01">
        Ponte en contacto
      </h2>
      <p className="text-center">Responderé tan pronto como sea posible.</p>

      <div className="row p-4 bg-dark-02 rounded-4 overflow-hidden">
        <div className="col animation animation-delayed animation-fade-right">
          <h3 className="fw-bold text-center fs-2 my-4">¿Quieres Hablar?</h3>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            handleChange={handleChange}
          />
          <Input
            placeholder="Asunto"
            name="subject"
            handleChange={handleChange}
          />
          <Input
            placeholder="Mensaje"
            name="message"
            type="textarea"
            handleChange={handleChange}
          />
          <div className="d-flex align-items-center justify-content-end my-3">
            <Button
              icon={faPaperPlane}
              text="Enviar"
              handleAction={handleSubmit}
            />
          </div>
        </div>
        <div className="col animation animation-fade-left">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="m-2" />
            <span className="m-2">Correo</span>
          </div>
          <a
            className="m-2 text-decoration-none text-light-02"
            href="mailto:juanafanador07@gmail.com"
          >
            juanafanador07@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
