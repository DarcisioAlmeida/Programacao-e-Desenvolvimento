// Criando classe 
class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0 // velocidade atual
    }
    // método
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            console.log("VELOCIDADE MÁXIMA ULTRAPASSADA!!\n Diminua ou poderá provocar danos á nave.")
        }
    }
}
// Atribuido um novo metodo para speedUp ao qual substituiu (sobrescreveu) o declarado na class mae Spaceship
class TransportSpaceship extends Spaceship {
    speedUp() {
        console.log("Naves de transporte so aumentam a velocidade de 1km/s")
        this.currentVelocity += 1
    }
}
let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transportSpaceship.speedUp(130) // mesmo adicionando parametro aqui ele vai chamar o da classe filho e nao deixa passar de 1
console.log(transportSpaceship)