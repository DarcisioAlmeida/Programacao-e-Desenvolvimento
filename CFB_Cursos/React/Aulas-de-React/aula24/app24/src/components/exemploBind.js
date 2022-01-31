
// Exemplo de como funciona o Bind //

function carro(){
    let velmax = 200;
    console.log(this.cor);
    console.log(this.modelo);
}
let detalhes = {
    cor:"Branco",
    marca:"VW",
    modelo:"Golf"
}
 let carroLigarDetalhes = carro.bind(detalhes)
    carroLigarDetalhes()
    carro()

// Atribuiu a função carro a variavel detalhes por meio do bind que muda o this 