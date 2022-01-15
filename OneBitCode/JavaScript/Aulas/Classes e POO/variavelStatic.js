/*
    Variavel Static
        * precisa usar o metodo get para gerar variavel static
        * São iguais ao metodos estaticos diretamente ligado a classe
        * valor variavel static é o mesmo independente do valor instanciado
*/

class Spaceship {
    static get decelerationRate() {
        return 0.15 // 15%
    }
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }
    // metodo
    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}
let spaceship =  new Spaceship("Apolo")
spaceship.speedUp(100)
console.log(spaceship)