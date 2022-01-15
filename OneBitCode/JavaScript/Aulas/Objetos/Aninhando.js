/*
    Aninhando Objetos
        objetos dentro de array
        array dentro de objetos
        objetos dentro de objetos
*/

    let spaceship = {
        name: "Supernova",
        type: "Batalha",
        crew: ["Cap. Silva", "Ana Julia", " Thiago"] // array dentro de objeto
    }

    spaceship.crew.push("Ten Fernanda") // adicionando array dentro do objeto

    console.log(spaceship)


// Array de Objetos

    let spaceships = [
        {name: "Elemental", crewQuantity: 10 },
        {name: "Colossus", crewQuantity: 8 },
        {name: "Helmet", crewQuantity: 15 }
    ]
        
    console.log(spaceships[0].name) // acessando nome da primeira nave
    console.log(spaceships[1].crewQuantity) // acessando quantidade de tripulante da segunda nave

// Objeto dentro de outro Objeto

    let spaceshipOne = {
        name: "Golias",
        maxCrew: 20,
        captain: {
            name:"Hugo Trent",
            age: 37
        }
    }
    console.log(spaceshipOne.captain.name) // pegando objeto dentro de outro