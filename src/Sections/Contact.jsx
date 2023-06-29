import { useState } from "react";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Contact() {
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

  function handleSubmit() {
    if (form.email.length === 0) {
      throw new Error("Email not valid");
    }
    if (form.subject.length === 0) {
      throw new Error("Subject not valid");
    }
    if (form.message.length === 0) {
      throw new Error("Message not valid");
    }

    alert("Mensaje enviado.");
  }

  return (
    <section className="container p-5 text-light-02" id="projects">
      <h2 className="text-center my-4 fw-bold text-light-01">
        Ponte en contacto
      </h2>
      <p className="text-center">Responderé tan pronto como sea posible.</p>

      <div className="row p-4 bg-dark-02 rounded-4">
        <div className="col">
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
        <div className="col">
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
