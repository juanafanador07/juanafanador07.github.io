let body = document.querySelector("body");

let loader = document.createElement("div");
loader.setAttribute("class", "loader");

let loaderDot = document.createElement("div");
loaderDot.setAttribute("class", "loader__dot");

body.appendChild(loader).appendChild(loaderDot);

window.addEventListener('load', function () {
    let loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    setTimeout(function () {
       loader.remove()
    }, 500)
});