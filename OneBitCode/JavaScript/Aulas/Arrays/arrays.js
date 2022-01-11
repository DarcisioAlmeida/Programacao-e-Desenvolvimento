/*
    Introdução aos Arrays

        - Array é uma estrutura de dados capaz de armazenar e organizar outros dados
        - Dados são organizados em forma de lista onde cada valor fica em determinada posição
        - Pode armazenar internamente qualquer outro tipo:
            Number, String, Boolean etc.
            Pode armazenar outro Array
*/

// Array
    let hitchedSpaceships = ["Supernova", "Elemental", "Helmet"]

    console.log(hitchedSpaceships[0]) // monstra o elemento na posição 0 - Supernova
    console.log(hitchedSpaceships) // monstra todos elementos

//Arrays com tipos diferentes
    let spaceshipInfo = ["Colossus", 7, true]

    console.log(spaceshipInfo[1]) // mostra a posição 1 - 7
    console.log(spaceshipInfo[3]) // quando informado posição que não existe dentro do array ele informa undefined - não definido

// Uso new Array 
    //exemplo 1
        let hyspaceships = new Array("Estrelar", "Supernova", "Elemental", "Colossus", "Helmet")
        console.log(hyspaceships[4]) // mostra array da posição 4
        console.log(hyspaceships) // mostra todos arrays
    
    //exemplo 2
        let getNumbers = new Array(1,2,3,4)
        console.log(getNumbers)
    
    //exemplo 3
        let getNumber = new Array(5) // cuidado com new array númerico de apenas 1 posição - EVITE
        console.log(getNumber) // cuidado pois neste caso ele criou 5 posições undefined para o array