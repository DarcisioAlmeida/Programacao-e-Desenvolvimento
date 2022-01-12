let spaceship = "Elemental"

switch(spaceship) {
    case "Golias":
        console.log("Nave mais resistente")
    case "Elemental":
        console.log("Nave com melhor armamento")
    case "Helmet":
        console.log("Ráida ativação de escudo")
    case "Frontier":
        console.log("Nave de infantaria")
        break
    case "Enterprise":
        console.log("Nave a frota estelar")
        break
    default:
        console.log("Nenhuma nave encontrada")
}

    // A partir do momento que encontra um case ela vai executar todos ate encontrar um break
    // Desta forma ele pegou encontro a palavra "Elemental",porém, 
    // Ele imprimiu todas as palavras até parar no break da palavra "Frontier"
    // isso aconteceu pois ele somente encontrou o break e parou o codigo na palavra "Frontier"