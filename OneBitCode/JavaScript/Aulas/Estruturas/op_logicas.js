let spaceship = "Elemental"
let velocity = 20

//Tabela Verdade E (AND) representada por &&

        console.log (spaceship.length == 9 && velocity > 15) // V e V = V

        console.log(velocity > 10 && velocity < 19) // V e F = F

        console.log(velocity < 17 && spaceship == "Elemental") // F e V = F

        console.log(spaceship == "Golias" && velocity > 21 ) // F e F = F

//Tabela Verdade do OU (OR) representada por ||

        console.log(spaceship.length == 9 || velocity > 15) // V ou V = V

        console.log(velocity > 10 || velocity < 19) // V ou F = V

        console.log(velocity < 17 || spaceship == "Elemental") // F ou V = V

        console.log(spaceship == "Golias" || velocity > 21 ) // F ou F = F

//Tabela Verdade do NÃO (NOT) representada por !

console.log (!(velocity > 19)) // Não V = F (inverte quando o resultado é verdadeiro inverte para Falso)

console.log (!(spaceship == "Golias")) // Não F = V (inverte o resultado falso para Verdadeiro)


// Expressao

console.log(! (velocity > 25 && spaceship == "Elemental")) || (velocity - 3 == 17 && spaceship.length + 1 > 15)
// (! (F && V)) || (V && F)
//(! (F)) || (F)
// V || F
// V