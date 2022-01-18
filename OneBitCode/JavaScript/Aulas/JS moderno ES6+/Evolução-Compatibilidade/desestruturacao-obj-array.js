// Desestruturação de Objetos e Arrays

// Objeto
  let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
  }
  // let spaceshipName = spaceship.name
  // let crewQuantity = spaceship.crewQuantity
  // console.log(spaceshipName, crewQuantity)


  let {name: spaceshipName, crewQuantity: crewQuantity, isHitched:banana} = spaceship // desestruturação
  console.log(spaceshipName, crewQuantity, banana)

// Array
  let spaceship2 = ["Colossus", " Artemis", "Fenix"]
  
  // let colossus = spaceship2[0]
  // let artemis = spaceship2[1]
  // console.log(colossus, artemis)

  let [colossus, artemis, fenix, puller] = spaceship2 // desestruturação cada item vai buscar array pela posição
  console.log(colossus, artemis, fenix, puller) // puller fica com undefined pois na spaceship2 não tem array posição 3

// função 
  let spaceship3 = ["Colossus", " Artemis", "Fenix"]
  
  function printSpaceships([colossus, artemis, fenix, puller, estrelar]) {
    console.log(colossus, artemis, fenix, puller, estrelar) // puller e estrelar ficam com0 undefined pois na spaceship3 não tem array posição 3 e 4
  }
  printSpaceships(spaceship3)

  
  