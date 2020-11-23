const form = document.querySelector(".fifth-section__form");
const script = document.querySelector('[name="script"]');
script.value = "true";

form.addEventListener("submit", submit);

async function submit(e) {
    e.preventDefault();

    let name = form.name.value;
    let email = form.email.value;
    let message = form.message.value;
    let script = form.script.value;
    let honey = form.honey.value;

    let data = await fetch(form.action, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message,
            script,
            honey
        })
    });

    let res = await data.json();

    console.log(res)

}