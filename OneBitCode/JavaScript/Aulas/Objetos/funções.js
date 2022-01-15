/* Adicionando funções aos objetos
    Estas funções são chamadas de metodos
    As que não esta nas funções saõ atributos - tipos de dados normais
*/

let spaceship = {
    name: "Demeter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
    }
}
spaceship.turnOn()

spaceship.velocity = 0
spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}
console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)

// this - metodo para cessar proprio objeto