const form = document.querySelector(".fifth-section__form");
form.script.value = "true";

async function submit(e) {
    e.preventDefault();
    const submit = document.querySelector(".fifth-section__form__submit");
    const messageElem = document.querySelector(".fifth-section__form__message");

    messageElem.classList.remove("hidden");
    messageElem.innerText = "Enviando...";

    submit.disabled = true;

    let data = await fetch(form.action, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            script: form.script.value,
            honey: form.honey.value
        })
    });

    let res = await data.json();

    if (res.error == true) {
        messageElem.classList.add("error");
    } else {
        messageElem.classList.remove("error");
    }

    messageElem.innerText = res.status;
    submit.disabled = false;
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