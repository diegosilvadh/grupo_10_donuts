/*
- Escuchar cada vez que el usuario escribe una tecla
- Habilitar/Deshabilitar el botón de enviar cuando hayan más de 3 caracteres
*/

const searchInput = document.querySelector("#input-search")
const button = document.querySelector("#button-search")

searchInput.addEventListener("keyup", function(e) {
    if (searchInput.value.length >= 3) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "")
    }
})