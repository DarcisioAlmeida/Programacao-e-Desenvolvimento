let velocity = 80

switch(velocity){
    case 80:
        //console.log("Nenhuma velocidade")
    case 90:
    case 100:
        console.log("Velocidade Aceitável")
        break
    case 110:
        console.log("Velocidade alta mais aceitável")
        break
    default:
        console.log("Velocidade não identificada")

}   

    // A partir do momento que encontra um case ela vai executar todos ate encontrar um break
    // Desta forma ele pegou a informação do case 100 que foi o primeiro break que ele encontrou.
    // note ele achou o case 80, mas como não tinha informação ele pulo até encontrar o break