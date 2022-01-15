// Criando classe 
class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    // método
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            console.log("VELOCIDADE MÁXIMA ULTRAPASSADA!!\n Diminua ou poderá provocar danos á nave.")
        }
    }
}
// metodo super - usado em sobrescrita de metodo - apenas para imprementar algo sobre o metodo
// criando class vai herdar Spaceship/
// super: sobrescrever (constutor e speedUp) e incretementar com super
class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }
    
    speedUp(acceleration) {
        acceleration /= 2
        console.log("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportador", 4, 100, 400)
console.log(transportSpaceship)
transportSpaceship.speedUp(210)