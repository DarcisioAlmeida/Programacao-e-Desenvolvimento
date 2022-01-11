/*
    Slice
        * significa fatiar ou dividir
        * Extrai uma parte do array sem alterar o array original
        * Sintaxe deste modelo é:
            arr.slice([begin[, end]])

                # Possui um primeiro parametro
                # o segundo parametro é o indice final
                # Retorna todos os elementos entre o elemento de indice "begin" e o elemento anterior "end"
*/

let spaceshipNames = ["Elemental", "Darvin"," Artemis", "Supernova"]

let extractedNames = spaceshipNames.slice(1,3) // pega apenas o array posição 1 e 2 (Darvin e Artemis) nao pega array 3 pois pega apenas o anterior

console.log(spaceshipNames)

console.log(extractedNames) 