/*
    Manipulando Estilos CSS pelo Dom
        - 2 tipos mais usados
*/

function setBlueBackground() {
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

function setTransparentBackground() {
    document.getElementById("style-text").style.backgroundColor = "pink"
}
// adicionando classe CSS - classList.add    
function setRedColor() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
    element.style.backgroundColor = "yellow"
}
// removendo class Css - classList.remove
function removeRedColor() {
    document.getElementById("style-text").classList.remove("red-color")
}