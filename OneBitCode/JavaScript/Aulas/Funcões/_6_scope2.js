/* 
    var e let - comportamento dentro da função
*/
function setSpaceshipDetails() {
    let velocity = 50 // scopo declarado fora do if portanto ele entra e sai do if - scopo local função
    if(velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental" // mesmo declarando dentro if ele entende e pega o scopo local que é a função 
        let spaceshipType = "Discovery" // este é scopo local do if portanto nao é chamado na função - apena dentro do if
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}
setSpaceshipDetails()

/* 
    Outro Exemplo 

    function setSpaceshipDetails() {
        console.log(spaceshipName)
        console.log(spaceshipType)
        var spaceshipName = "Elemental"
        let spaceshipType = "Discovery"
        console.log(spaceshipName)
        console.log(spaceshipType)
    }

    setSpaceshipDetails()

*/