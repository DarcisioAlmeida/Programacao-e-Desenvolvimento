/*
    Operator precedence (Precedencia de operadores)

    * grouping                          ()
    * negação e incremento              ! ++ --
    * multiplicação e divisão           * /
    * adição e subtração                + -
    * relacional                        <<= > >=
    * igualdade                         == != === !==
    * AND                               &&
    * OR                                ||
    * condicional                       ?:
    * assignment(atribuição)            = += -= *=


*/
console.log((2 + 5) * 10) // primeiro o ()
console.log( 2 + 5 * 10) //primeiro * depois a +
console.log(3 > 2 > 1)
console.log(3 > 2 && 2 > 1)