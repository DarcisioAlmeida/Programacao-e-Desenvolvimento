/*
    Praticando Arrays

    - Temos abaixo, um array bidimensional de naves que estão engatadas numa estação espacial;
    - Para cada sub-array, a primeira posição é o nome da nave, a segunda é quantidade de tripulantes, e a terceira informa se o processo de engate já foi concluido ou não;
    - Nesta lista, a plataforma de engate que a nave está parada é o [ indice da nave array + 1]

            const hitchedSpaceships = [
                ["Fenix", 8, true],
                ["Golias", 10, true],
                ["Helmet", 5, false],
                ["Elemental", 3, true],
                ["Darwin", 15, false]
            ]
    - Com base neste array, nós queremos:
        1. Filtrar o nome das naves que tem mais de 9 tripulantes
        2. Informar o numero da plataforma em que esta a primeira nave que ainda está com engate pendente
            - use a funçãp findindex que é bem parecida com o find, mas retorna o indice de um filtro em vez do elemento Array
        3. Destacar o nome de todas as naves colocandos em caixa alta e exibindo
        4. Exibir um alerta com todas estas informações.
*/

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

/* 
    Filtrando nave com mais de 9 tripulantes. Resultado
    ["Golias", 10, true]
    ["Darwin", 15, false]
*/
    let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
        return spaceship[1] > 9 // pega 1 posição e ver ue é maior que 9
        // map vai pegar entre os dois resultados a posição 0, ou seja, apenas o nome da nave "Golias" e "Darwin"
    }).map(spaceship => {
        return spaceship[0] 
    })
/* 
    Encontrar numero da primeira platadorma que a nave esta em processo de engate. Resultado
    ["Helmet", 5, false], portanto indice 2 do array + 1 sendo a plataforma 3
*/
    let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
        return spaceship[2] == false
    })
 
// Destacar o nome de todas as naves colocandos em caixa alta e exibindo
    let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
        return spaceship[0].toUpperCase()
    })
// Exibir um alerta com todas estas informações. troquei pelo console.log
    let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
    message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
    message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

    console.log(message)