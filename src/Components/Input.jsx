export default function Input({ placeholder, name, type, handleChange }) {
  return type !== "textarea" ? (
    <input
      className="form-control my-3 bg-dark-03 border-0 text-light-02"
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    ></input>
  ) : (
    <textarea
      className="form-control my-3 bg-dark-03 border-0 text-light-02"
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    ></textarea>
  );
}
