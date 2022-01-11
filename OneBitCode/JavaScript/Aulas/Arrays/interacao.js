/*
    Interação em Arrays

        * As funções de interação que veremos são HOF
            Enviamos callbacks (funções que enviamos como parametro)
        * o Callback é chamado para cada elemento Array
        * Segue o seguinte formato:
            array.funcaoDeInterar(function(elementoAtual, indice, array){
                <corpo da função>
            })

            # Espera um callback que receba como parametro o elemento atual, o indice e o array completo
*/

    // ForEach - Exemplo mostra nome da nave e seu respectivo indice
        let hitchedSpaceships = ["Demeter", "Darvin", "Supernova", "Fenix", "Puller"]

        hitchedSpaceships.forEach(function(currentSpaceship, index){
            console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
        })

    // map - Exemplo mostrando a troca por letras maiusculas
        let hitchedSpaceships2 = ["Demeter", "Darvin", "Supernova", "Fenix", "Puller"]

        let upcasedSpaceship = hitchedSpaceships2.map(function(currentSpaceship){
            let upcased = currentSpaceship.toUpperCase()
            return upcased
        })

        console.log(upcasedSpaceship)
    
    // filter - exemplo pega os elementos conforme a condição estabelecida
        let hitchedSpaceships3 = ["Demeter", "Darvin", "Supernova", "Fenix", "Puller"]

        let with7Chars = hitchedSpaceships3.filter(element => {return element.length >= 7 })

        console.log(with7Chars)
    
    // find - exemplo pega primeiro elemento conforme a condição estabelecida
        let hitchedSpaceships4 = ["Demeter", "Darvin", "Supernova", "Fenix", "Puller"]

        let with7Chars1 = hitchedSpaceships4.find(element => {return element.length >= 8 })

        console.log(with7Chars1)