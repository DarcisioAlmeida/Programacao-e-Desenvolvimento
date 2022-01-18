// Recurso permite expandir os elementos de um objeto interavel ou seja percorrer elemento a elemento (Arrays e Objetos)

// Exemplo 1 - Com Array
  let spaceships = ["colossus", " Artemis", " Puller", " Fenix"]
  console.log(spaceships) 
  console.log(...spaceships) // com spread - define cada elemento como único

  let newSpaceships = [spaceships, " Estrelar"] // sem spread
  console.log(newSpaceships) // trata como um array dentro de outro array

  let newSpaceships1 = [...spaceships, " Estrelar"] // com spread
  console.log(newSpaceships1) // separa e torna unico array com varios elementos

// Exemplo 2 - com Função
  function speedUp(velocity, acceleration) {
    return velocity + acceleration
  }

  let spaceshipAcceleration = [60, 10]
  let newVelocity = speedUp(...spaceshipAcceleration)
  console.log(newVelocity)