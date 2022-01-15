/*
    Comparando Objetos e Arrays
        Relembrando: 
            * Objetos:
                Os objetos são uma estrutura chave-valor;
                utilizamos objetos quando precisamos mapear propriedades ou atributos;
                Objetos conseguimos enxergar uma representação do mundo real;
                organização dos dados;
            *
            * Arrays:
                São uma estrutura de lista sequencial;
                utilizamos arrays quando precisamos aramazenar uma seuqencia de elementos;
                acesso por meio de indices
            *
*/

// Objeto
let spacialStation = {
    name: "Receptora",
    platformsQuantity: 15,
    shape: "Esferica"
}

console.log(spacialStation.name.toUpperCase(), spacialStation.shape.toLowerCase())

//Array
let spaceshipNames = ["Fenix", "Puller", "Golias"]

console.log(spaceshipNames[0].toUpperCase(), spaceshipNames[2].toLowerCase())