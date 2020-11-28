const form = document.querySelector(".fifth-section__form");
const messageContainer = document.querySelector(".fifth-section__form__message");
form.script.value = "true";

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

    if (res.error == true) {
        messageContainer.classList.add("error");
    } else {
        messageContainer.classList.remove("error");
    }
    messageContainer.classList.remove("hidden");
    messageContainer.innerText = res.status
}

async function awakeServer() {
    form.name.removeEventListener("keyup", awakeServer);
    let data = await fetch(`${form.action}revive`, {
        method: "post",
    });
    let res = await data.json();
    console.log(res);
}

form.addEventListener("submit", submit);
form.name.addEventListener("keyup", awakeServer)