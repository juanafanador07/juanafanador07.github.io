import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ text, icon, href, target, bg, handleAction }) {
  const content = (
    <>
      {icon ? <FontAwesomeIcon icon={icon} className="m-1" /> : ""}
      {text ? <span className="fw-bold m-1">{text}</span> : ""}
    </>
  );

  const className = `${
    bg ? bg : "bg-dark-01"
  } btn m-2 d-flex align-items-center justify-content-center text-light-02 rounded-4`;

  return href ? (
    <a href={href} className={className} target={target ? target : "_self"}>
      {content}
    </a>
  ) : (
    <button className={className} onClick={handleAction}>
      {content}
    </button>
  );
}
