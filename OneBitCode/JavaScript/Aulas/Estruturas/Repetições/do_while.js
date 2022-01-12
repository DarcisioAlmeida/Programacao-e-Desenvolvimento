// do while - avalia expressao no final 
    /*
        sempre vai executar o codigo ao menos uma vez. mesmo se for falso
        exemplo se o let velocity = 110
    */
let velocity = 50
let aceleration = 5

do {
    console.log ("Acelerando: Estamos a " + velocity + "km/s.")
    velocity += aceleration
} while(velocity <=100)