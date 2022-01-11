/*
    Splice 
        * Significa emendar ou costurar
        * Substitui o array original
        * Sintaxe deste modelo é:
            array.splice(index[, deleteCount[, elemnto1[, ...[,elementoN]]]])
            # espera um primeiro parametro que é indice array
            # o segundo é quantidade de elementos que queremos remover a partir deste indice
            # os proximos sao os elementos que queremos adicionar no lugar
            # apenas o primeiro parametro é obrigatorio
    */

// Splice
    let spaceshipNames = ["Elemental", "Darvin"," Artemis", "Supernova"]
    console.log(spaceshipNames)

    let removedspaceships = spaceshipNames.splice(1, 2, "Demeter", "Puller", "Golias") // vai remover os arrays posição 1 e 2 (Darvin, Artemis) vai incluir 3 arrays (Demeter, Puller, Golias)

    console.log(spaceshipNames)

    console.log(removedspaceships) // mostra os elementos removidos 