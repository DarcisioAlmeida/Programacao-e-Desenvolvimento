
/*
    # Metodos 
        * São funções que acrescentam dentro de objetos

*/

class Spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }
// metodo dentro constutor
    speedUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Artemis")
console.log(artemis)
    artemis.speedUp(10)
    artemis.speedUp(25)
console.log(artemis)