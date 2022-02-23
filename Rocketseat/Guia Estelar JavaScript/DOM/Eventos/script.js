/*
    # EVENTOS DOM
        * onmouseover - passando o mouse
        * onclick - clicando com mouse
        * onkeydown - para teclado
        * onkeyup - para teclado
        * event - descobre qual foi o evento acionado 
*/
// Evento no HTML
    function print(){
        console.log("print")
    }

// Adicionando eventod e teclado 
    const input = document.querySelector('input')
    input.onkeydown = function(){
        console.log('rodei')
    }

// Adicionando evento via JS
    const h1 = document.querySelector('h1')
    h1.addEventListener('click', print)

// Outra forma de adicionar evento via JS
    h1.addEventListener('click', function(){
        console.log("outro momento")
    })

// Argumento event
    const input = document.querySelector('input')
    input.onkeydown = function(event){
        console.log(event.key) // qual tecla foi digitada
        console.log(event.code) // qual é o codigo da letra digitada
    }