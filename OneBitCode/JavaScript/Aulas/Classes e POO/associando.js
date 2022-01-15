/*
    # Associando Classes
*/

class Captain {
    constructor(name, age, flighHours) {
        this.name = name
        this.age = age
        this.flighHours = flighHours
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlighHours){
        this.name =  name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlighHours)
    }
}

let spaceship =  new Spaceship("Artemis", 13, "Will Grey", 45, 15000)
console.log(spaceship)