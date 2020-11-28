let navButtons = document.querySelectorAll(".header__nav__a");
navButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.href.replace(/.+(?=#.+)/, "");
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        });
    })
})