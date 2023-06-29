import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Progress({ icon, name, percent, color }) {
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <div className="row m-2" style={{ width: "200px" }}>
        <div className="col-2 my-1">
          <FontAwesomeIcon icon={icon} style={{ color }} />
        </div>
        <div className="col fw-bold w-100 my-1">{name}</div>
        <div className="col-12 my-1">
          <div className="progress" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-accent"
              role="progressbar"
              aria-label={name}
              style={{ width: percent + "%" }}
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
