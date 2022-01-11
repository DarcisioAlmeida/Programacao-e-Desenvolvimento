/*
    FUNÇÕES BASICAS DOS ARRAYS
        push - adiciona array no final
        pop - apaga ultimo elemento do array
        shift - remove elemento primeira posição do array
        unshift -  adiciona elemento (s) no começo do array
        length - mostra o comprimento do array, qtos elementos tem
        indexOF - mostra a posição do array escolhido - quando não encontrado ele mostra -1
*/

// push
    let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]
    console.log(hitchedSpaceships)

    hitchedSpaceships.push("Supernova") // adiciona novo array ao final
    console.log(hitchedSpaceships)

// pop
    hitchedSpaceships.pop() // remove ultimo elemento do array
    console.log(hitchedSpaceships)

    let removedSpaceship = hitchedSpaceships.pop() // mostra o elemento removido
    console.log(removedSpaceship)

// shift
    console.log(hitchedSpaceships)
    hitchedSpaceships.shift() // remove primeiro elemento do array
    console.log(hitchedSpaceships)

    let removedSpaceship2 = hitchedSpaceships.shift() // mostra o elemento removido
    console.log(removedSpaceship2)

// unshift
    hitchedSpaceships.unshift("Fenix", "Estrelar", "Elemental", "Star") // insire elemento inicio do array
    console.log(hitchedSpaceships)

// length
    console.log(hitchedSpaceships.length) //mostra qtos elementos tem o array

// IndexOF
    let elementalPos = hitchedSpaceships.indexOf("Elemental") // mostra  aposição que esta o array escolhido
    console.log(elementalPos)