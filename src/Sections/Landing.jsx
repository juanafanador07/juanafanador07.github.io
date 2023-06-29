import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button";
import Header from "./Header";

export default function Landing() {
  const code = [
    "async function easter() {",
    '    const req = await fetch("./egg.txt");',
    "    const text = await req.text();",
    "    const arr = text.split(`#`);",
    '    let output = "";',
    "    let colors = [];",
    "    let lineLength = 0;",
    "    for (let element of arr) {",
    "        if (element.length > 0) {",
    '             output += "%c0";',
    "             colors.push(`color: #${element}`);",
    "             lineLength++;",
    "            if (lineLength >= 50) {",
    '                output += "\\n";',
    "                lineLength = 0;",
    "            }",
    "        }",
    "    }",
    "    console.log(output, ...colors);",
    "}",
    "easter();",
  ];

  async function easter() {
    alert("Presiona F12");

    const req = await fetch("./egg.txt");
    const text = await req.text();
    const arr = text.split(`#`);
    let output = "";
    let colors = [];
    let lineLength = 0;
    for (let element of arr) {
      if (element.length > 0) {
        output += "%c0";
        colors.push(`color: #${element}`);
        lineLength++;
        if (lineLength >= 50) {
          output += "\n";
          lineLength = 0;
        }
      }
    }
    console.log(output, ...colors);
  }

  return (
    <section
      className="p-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(0,30,12,1) 0%, rgba(0,14,10,1) 100%)",
      }}
    >
      <div
        className="position-relative rounded-5 px-5 py-4 bg-dark-01 d-flex align-items-center justify-content-evenly"
        style={{
          minHeight: "90vh",
        }}
      >
        <div className="row container-fluid">
          <div className="col desktop-only">
            <pre>
              {code.map((element, i) => {
                return (
                  <code
                    className="text-light-02 d-block"
                    key={i}
                    onClick={i === code.length - 1 ? easter : null}
                  >
                    {element}
                  </code>
                );
              })}
            </pre>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center text-light-02 text-center p-5">
            <p>Hola, yo soy</p>
            <h1 className="fw-bold text-light-01">Juan Afanador</h1>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle">
          <Button icon={faAnglesDown} href="#aboutMe" />
        </div>
      </div>

      <Header />
    </section>
  );
}
