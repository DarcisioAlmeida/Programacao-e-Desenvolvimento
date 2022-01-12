/*
    Expressão FOR

    for(<varivel>; <expressao>; <ação de controle>){
        <bloco de codigo>
    }
*/
let spaceship = "Helmet"
let newSpaceship = ""

/*
    for(let i = 0; i < spaceship.length; i++) {
        //console.log(spaceship[i])
    } 
*/

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e"){
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)
//comparando 
console.log(spaceship)