import { Modal } from "bootstrap";
import Button from "./Button";
import { useEffect } from "react";

export default function ModalMsg({ message, type }) {
  useEffect(() => {
    if (message !== null) {
      const modal = new Modal("#modal");
      modal.show();
    }
  }, [message]);
  return (
    <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content bg-dark-02">
          <div className="modal-header">
            <h2 className="modal-title fs-2 fw-bold">
              {type === "error" ? "Error" : "Información"}
            </h2>
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
