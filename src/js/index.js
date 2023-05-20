const botaoAlterarTema = document.getElementById("button_themeAlt");
const body = document.querySelector("body");
const botaoImg = document.querySelector(".img_button")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modoEscuro");

    if (modoEscuroAtivo) {
        body.classList.remove("modoEscuro");
        botaoImg.setAttribute("src", "./src/img/sun.png")
    } else {
        body.classList.add("modoEscuro");
        botaoImg.setAttribute("src", "./src/img/moon.png");
    };


});