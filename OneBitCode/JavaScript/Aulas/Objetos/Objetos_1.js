/*
    Introdução a Objetos
        - Também são estrutura de dados capaz de armazenar e organizar outros dados
        - Dados são organizados através de propriedades
        - Associação de Chave-Valor
            chave - é o nome da prorpiedade
            valor - é o valor que esta propriedade vai receber
        - Também podem armazenar internamente qualquer outro tipo
            inclusive array e outros objetos
*/
// caracterizado com abertura e fechado de {}

let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship)
console.log(spaceship.type) // 
console.log(spaceship["name"]) // 

spaceship.isHitched = false // adicionei nova propriedade com uso de . ------------- (.isHitched)
spaceship["shieldLevel"] = 100 // adicionei nova propriedade com uso de [] -------- ["shieldLevel"]

console.log(spaceship["isHitched"]) // posso chamar a propriedade usando []
console.log(spaceship.shieldLevel) // posso chamar a propriedade usando . 

/*
    let spaceship = {} //cria um objeto vazio
    let spaceship = new Object() //cria um objeto vazio
*/