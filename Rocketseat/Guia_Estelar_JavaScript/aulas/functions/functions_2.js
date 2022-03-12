
// Retornando valores dentro da função

    const sum = function(number1, number2){
        let total = (number1 + number2)
        return total // uso do return - quando não houver o return volta como undefided
    }
    let number1 = 34
    let number2 = 25

    console.log(`o numéro 1 é ${number1}`)
    console.log(`o numéro 2 é ${number2}`)
    console.log(`a soma é ${sum(number1, number2)}`)

    //Neste caso o sum recebe toda a funçao e retorna o valor final em total

// Outra forma de entender
    // Função é um liquidificador (recebe, faz, coloca pra fora, mostra)

    function fazerSuco(fruta1, fruta2){
        return fruta1 + fruta2
    }
    const copo = fazerSuco('banana', 'maça')

    console.log(copo)