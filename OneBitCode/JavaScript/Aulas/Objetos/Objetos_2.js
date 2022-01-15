/*
    Recomendações
        Podemos colocar na propriedade qualquer valor - String, Boleano, Inteiro, Real - 
        Mas não é recomendado, pois pode haver muitos erros com codigo os declarações
        Evite criar propriedades dos tipos booleano, strings, inteiros.
        Crie somente conforme indicado
*/

/* 
    Evite criar propriedades dos tipos booleano, strings, inteiros.

    let spacialStantion = {
        name: "Fox",
        platformsQuantity: 10,
        "new name": "Estrelar",
        true: false,
        2: "Descoberta"
    }
*/

// Crie somente conforme indicado
    let spacialStantion = {
        name: "Fox",
        platformsQuantity: 10
    }
    console.log(spacialStantion.name)
    console.log(spacialStantion["name"])

    // acessa melhor as propriedades
    // padroniza o codigo e deixa mais limpo
    // codigo melhor compreendido

let spaceship = { }

spaceship.name = "Ártemis"

spaceship.type = "Descoberta"

spaceship["crew quantity"] = 6

spaceship["isHitched"] = false

console.log(spaceship)