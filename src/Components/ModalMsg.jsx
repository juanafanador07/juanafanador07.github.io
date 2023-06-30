import { Modal } from "bootstrap";
import Button from "./Button";
import { useEffect } from "react";

export default function ModalMsg({ message }) {
  useEffect(() => {
    if (message !== "") {
      const modal = new Modal("#modalError");
      modal.show();
    }
  }, [message]);
  return (
    <div
      className="modal fade"
      id="modalError"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content bg-dark-02">
          <div className="modal-header">
            <h2 className="modal-title fs-2 fw-bold">Error</h2>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer">
            <Button
              text="Ok"
              adittionalAttrs={{
                "data-bs-dismiss": "modal",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
